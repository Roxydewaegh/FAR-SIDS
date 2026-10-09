// GoatCounter visitor counter for every FAR-SIDS page (dashboard: https://farsids.goatcounter.com).
// Every page loads this file with one line in its <head>:
//   <script src="assets/analytics.js"></script>
// Keep that line when editing or replacing a page, or the page stops being counted.
//
// On index.html the sections are switched with # links, so show() reports the section
// it actually opened by calling window.__gcView('room/sub'). Old links and stray
// anchors are therefore counted as the section shown, never as the raw address.
//
// Visits from our own browsers are not counted. Opening any page with #toggle-goatcounter
// at the end of the address switches counting off for that browser, and opening it a
// second time switches it back on. The browser remembers the choice, so it is done once
// per browser on each device.
(function(){
  var base = location.pathname.replace(/index\.html$/, '');
  var last = null;      // last path sent or queued
  var queue = [];       // paths waiting for count.js
  var ready = false;    // count.js loaded

  function skipped(){ try{ return localStorage.getItem('skipgc') === 't'; }catch(e){ return false; } }

  function note(msg){
    function put(){
      var d = document.createElement('div');
      d.textContent = msg;
      d.style.cssText = 'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:#0E4D5C;color:#fff;padding:10px 16px;border-radius:8px;font:14px sans-serif;z-index:9999';
      document.body.appendChild(d);
      setTimeout(function(){ d.remove(); }, 6000);
    }
    if(document.body) put(); else document.addEventListener('DOMContentLoaded', put);
  }

  function toggle(){
    if(location.hash !== '#toggle-goatcounter') return;
    var off = !skipped();
    try{ if(off) localStorage.setItem('skipgc', 't'); else localStorage.removeItem('skipgc'); }catch(e){}
    history.replaceState(null, '', location.pathname + location.search);
    note(off ? 'Visits from this browser are no longer counted.' : 'Visits from this browser are counted again.');
  }
  toggle();
  window.addEventListener('hashchange', toggle);   // registered before the page's own router

  function pathFor(view){ return view ? base + '#' + view : base; }

  function send(p){
    if(skipped()) return;
    if(ready && window.goatcounter && window.goatcounter.count){ window.goatcounter.count({path: p}); }
    else { queue.push(p); }
  }

  // Called by index.html at the end of show(). Skips repeats of the same section.
  window.__gcView = function(view){
    var p = pathFor(view);
    if(p === last) return;
    last = p;
    send(p);
  };

  // count.js does not count on its own; the first view is sent once from the queue below,
  // so a page load is never counted twice.
  window.goatcounter = { no_onload: true };

  function load(){
    // Pages without sections (every page except index.html) count their own address once.
    if(!queue.length && last === null){ last = base; send(base); }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', 'https://farsids.goatcounter.com/count');
    s.onload = function(){
      ready = true;
      var q = queue; queue = [];
      if(skipped()) return;
      q.forEach(function(p){ window.goatcounter.count({path: p}); });
    };
    document.head.appendChild(s);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load);
  else load();
})();
