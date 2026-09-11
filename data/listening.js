// The listening post entries, grouped into four threads by k, newest first within a thread.
// To add an entry, copy one block and edit it; the island tile and thread pick it up automatically.
// The page renders four tiles (one per thread); a tile opens its thread as a horizontal slider.
// place: the tag on the card · k: thread key (all, jm, to, km) · when: the "Logged ..." date stamp
// title, teaser (the short card text), body (the full note): plain text, no HTML
// art: one spot illustration per note, a single inline SVG scene floated left of the text
// fig (optional): one full-width inline SVG figure shown under the note text · figcap: its one-line caption
// sources: public, linkable sources only. House rules: paraphrase themes, never quote or
// reproduce posts by private individuals, link only to public sources, no scraping.
window.FARSIDS = window.FARSIDS || {};
FARSIDS.LISTENING = [
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged September 2026",
    "title": "Losing both at once",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='12' y1='94' x2='98' y2='94' stroke='#3D5560' stroke-width='2'/><path d='M38,62 L55,46 L72,62' fill='none' stroke='#0E4D5C' stroke-width='2.6' stroke-linejoin='round'/><rect x='42' y='62' width='26' height='32' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><rect x='51' y='78' width='8' height='16' fill='#1C8C9B'/><path d='M8,30 C18,18 28,26 36,44' fill='none' stroke='#1C8C9B' stroke-width='3' stroke-linecap='round' stroke-dasharray='7 5'/><polygon points='30,38 38,48 28,48' fill='#1C8C9B'/><path d='M102,30 C92,18 82,26 74,44' fill='none' stroke='#E2664A' stroke-width='3' stroke-linecap='round' stroke-dasharray='7 5'/><polygon points='80,38 72,48 82,48' fill='#E2664A'/><line x1='16' y1='14' x2='30' y2='28' stroke='#993C1D' stroke-width='2.4' stroke-linecap='round'/><line x1='30' y1='14' x2='16' y2='28' stroke='#993C1D' stroke-width='2.4' stroke-linecap='round'/><line x1='80' y1='14' x2='94' y2='28' stroke='#993C1D' stroke-width='2.4' stroke-linecap='round'/><line x1='94' y1='14' x2='80' y2='28' stroke='#993C1D' stroke-width='2.4' stroke-linecap='round'/></svg>",
    "fig": "<svg viewBox='0 0 760 380' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='The two supports of a Haitian household in 2026, and the cut to each'><rect x='280' y='140' width='200' height='110' rx='10' fill='#E4D6B8' stroke='#993C1D' stroke-width='1.6'/><path d='M354,173.4 L380.0,150 L406,173.4' fill='none' stroke='#993C1D' stroke-width='2.4' stroke-linejoin='round'/><rect x='360.24' y='173.4' width='39.52' height='28.6' fill='#fff' stroke='#993C1D' stroke-width='2.2'/><rect x='374.8' y='183.8' width='10.4' height='18.2' fill='#993C1D'/><text x='380' y='232.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='middle' font-weight='600'>A home in Port-au-Prince</text><text x='20' y='22.0' font-family='Space Mono,monospace' font-size='11' fill='#1C8C9B' text-anchor='start'>FOOD AID</text><rect x='20' y='34' width='240' height='290' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><circle cx='140' cy='84' r='34' fill='#fff' stroke='#0E4D5C' stroke-width='2.4'/><path d='M140,50 A34,34 0 0 1 140,118 Z' fill='#1C8C9B'/><line x1='140' y1='50' x2='140' y2='118' stroke='#0E4D5C' stroke-width='2'/><text x='32' y='142.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>Rations cut in half</text><text x='32' y='160.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>In October 2025 the World Food</text><text x='32' y='174.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>Programme halved the food it gives</text><text x='32' y='187.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>out in Haiti because donors had not</text><text x='32' y='201.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>sent enough money. 5.7 million people</text><text x='32' y='214.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>do not have enough to eat. The</text><text x='32' y='228.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>programme needs US$139 million for</text><text x='32' y='241.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>the year.</text><text x='32' y='263.4' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Donor countries expect aid to the</text><text x='32' y='275.9' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Caribbean islands to fall 36.6%</text><text x='32' y='288.4' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>between 2024 and 2026.</text><line x1='260' y1='195' x2='274.6' y2='195.0' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='271.0,190.0 271.0,200.0 280,195' fill='#1C8C9B'/><text x='500' y='22.0' font-family='Space Mono,monospace' font-size='11' fill='#E2664A' text-anchor='start'>MONEY FROM RELATIVES</text><rect x='500' y='34' width='240' height='290' rx='10' fill='#F6FBFB' stroke='#993C1D' stroke-width='1.6'/><rect x='596' y='56' width='48' height='34' rx='3' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><path d='M596,56 L620.0,76.4 L644,56' fill='none' stroke='#993C1D' stroke-width='2'/><line x1='584' y1='100' x2='656' y2='48' stroke='#E2664A' stroke-width='3'/><text x='512' y='142.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>The senders may be deported</text><text x='512' y='160.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>Haitians abroad send home about</text><text x='512' y='174.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>US$3.9 billion a year, a third of</text><text x='512' y='187.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>everything Haiti\u2019s economy produces.</text><text x='512' y='201.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>Seven of every ten dollars come from</text><text x='512' y='214.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>the United States.</text><text x='512' y='236.4' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>About 350,000 of the senders were in</text><text x='512' y='248.9' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>the United States on a permit that</text><text x='512' y='261.4' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>ended at the start of August 2026. All</text><text x='512' y='273.9' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>of them can now be deported.</text><line x1='500' y1='195' x2='485.4' y2='195.0' stroke='#E2664A' stroke-width='2.2'/><polygon points='489.0,200.0 489.0,190.0 480,195' fill='#E2664A'/><rect x='20' y='338' width='720' height='32' rx='10' fill='#FBEDE8' stroke='#993C1D' stroke-width='1.6'/><text x='380' y='359.0' font-family='Spline Sans,Arial,sans-serif' font-size='12' fill='#0B2530' text-anchor='middle' font-weight='500'>One family can lose the ration and the transfer in the same twelve months.</text></svg>",
    "figcap": "The two supports of a Haitian household in 2026 and what happened to each. Remittance figures from the Boston Globe, 19 August 2026, and PBS, 27 May 2026; food aid from the World Food Programme, 2 October 2025.",
    "teaser": "Families in Haiti eat on food aid and on money from relatives in the United States. In 2026 the food rations were cut in half and the relatives lost their permission to stay.",
    "body": "Haiti is an island state in the Caribbean whose families live on two kinds of help from outside: food aid and money from relatives abroad. In 2026 both are being cut at the same time. The first cut is to the family money. About 350,000 Haitians were living in the United States under Temporary Protected Status, a permit that lets people stay and work while their own country is unsafe. That permit ended at the start of August, so all of them can now be deported. Haitians abroad send home about 3.9 billion US dollars a year, equal to a third of everything Haiti's economy produces. Seven of every ten dollars come from the United States. In May the editor of Documented, a news site covering immigrants in New York, told PBS that money sent from the United States to Haiti rose 20 per cent in 2025. The Boston Globe wrote on 19 August that deporting these families would cut off the money their relatives in Haiti live on. The second cut is to food aid. In October 2025 the World Food Programme cut its food rations in Haiti in half because donors had not given enough money. It counted 5.7 million people without enough to eat and said it needed 139 million US dollars for the year. The OECD, the club of rich donor countries, expects aid to the Caribbean islands to fall 36.6 per cent between 2024 and 2026. A family in Port-au-Prince that ate last year on a food ration and a transfer from a cousin in Boston could lose both in the same twelve months: the ration to the donors' cuts, and the transfer to the cousin's deportation.",
    "sources": [
      {
        "t": "Boston Globe, 19 August 2026, will Trump show mercy to Haitian TPS holders?",
        "u": "https://www.bostonglobe.com/2026/08/19/opinion/tps-haitian-immigrants-temporary-protected-status/"
      },
      {
        "t": "Christian Science Monitor, 1 August 2026, end of temporary status for Haitians in US sets off scramble for options",
        "u": "https://www.csmonitor.com/USA/2026/0801/haiti-tps-immigration-trump"
      },
      {
        "t": "PBS Amanpour and Company, 27 May 2026, the cost of sending help: how remittance taxes could destabilize Haiti",
        "u": "https://www.pbs.org/wnet/amanpour-and-company/video/the-cost-of-sending-help-how-remittance-taxes-could-destabilize-haiti-ppnycs/"
      },
      {
        "t": "World Food Programme, 2 October 2025, Haiti on the brink",
        "u": "https://www.wfp.org/news/haiti-brink-violence-cuts-capital-pushing-families-towards-starvation-amidst-cuts-humanitarian"
      },
      {
        "t": "Asia Pacific Report, 2 July 2026, Pacific nations among hardest hit as global aid drops, says OECD",
        "u": "https://asiapacificreport.nz/2026/07/02/pacific-nations-among-hardest-hit-as-global-aid-drops-says-oecd/"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged September 2026",
    "title": "Who pays for the rebuild, and when",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='12' y1='94' x2='98' y2='94' stroke='#3D5560' stroke-width='2'/><path d='M22,58 L46,36 L70,58' fill='none' stroke='#0E4D5C' stroke-width='2.6' stroke-linejoin='round'/><rect x='28' y='58' width='36' height='36' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M22,58 L46,36 L70,58' fill='#1C8C9B' opacity='.35'/><rect x='41' y='74' width='10' height='20' fill='#1C8C9B'/><rect x='74' y='30' width='24' height='32' rx='3' fill='#F6FBFB' stroke='#993C1D' stroke-width='2'/><line x1='79' y1='40' x2='93' y2='40' stroke='#993C1D' stroke-width='1.6'/><line x1='79' y1='47' x2='93' y2='47' stroke='#993C1D' stroke-width='1.6'/><line x1='79' y1='54' x2='88' y2='54' stroke='#993C1D' stroke-width='1.6'/><circle cx='92' cy='58' r='6' fill='#E2664A'/><path d='M10,22 C22,10 36,10 46,22' fill='none' stroke='#E2664A' stroke-width='3' stroke-linecap='round'/><polygon points='42,16 50,24 40,27' fill='#E2664A'/></svg>",
    "fig": "<svg viewBox='0 0 760 500' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Two ways money reaches a Jamaican home after Hurricane Melissa: through the state, and from relatives abroad'><text x='20' y='22.0' font-family='Space Mono,monospace' font-size='11' fill='#1C8C9B' text-anchor='start'>MONEY THROUGH THE STATE</text><text x='410' y='22.0' font-family='Space Mono,monospace' font-size='11' fill='#E2664A' text-anchor='start'>MONEY FROM FAMILY</text><rect x='20' y='34' width='340' height='160' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='32' y='56.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>Promised after the storm: US$6.7 billion over</text><text x='32' y='72.9' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>three years</text><rect x='32.0' y='95.80000000000001' width='187.8' height='16' fill='#1C8C9B'/><rect x='219.8' y='95.80000000000001' width='114.4' height='16' fill='#BFE3E2'/><rect x='334.2' y='95.80000000000001' width='11.5' height='16' fill='#E2664A'/><rect x='345.7' y='95.80000000000001' width='2.3' height='16' fill='#993C1D'/><rect x='32' y='119.80000000000001' width='11' height='11' fill='#1C8C9B'/><text x='49' y='129.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Loans Jamaica must repay: US$3.9 billion</text><rect x='32' y='136.8' width='11' height='11' fill='#BFE3E2'/><text x='49' y='146.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Private investment the banks hope to attract: US$2.4 billion</text><rect x='32' y='153.8' width='11' height='11' fill='#E2664A'/><text x='49' y='163.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Insurance payouts: US$241 million</text><rect x='32' y='170.8' width='11' height='11' fill='#993C1D'/><text x='49' y='180.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Jamaica\u2019s own reserves and small grants: US$49 million</text><line x1='190' y1='184' x2='190.0' y2='200.6' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='195.0,197.0 185.0,197.0 190,206' fill='#1C8C9B'/><rect x='20' y='208' width='340' height='40' rx='10' fill='#BFE3E2' stroke='#0E4D5C' stroke-width='1.6'/><text x='190' y='233.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0E4D5C' text-anchor='middle' font-weight='600'>The Government of Jamaica</text><line x1='110' y1='248' x2='110.0' y2='264.6' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='115.0,261.0 105.0,261.0 110,270' fill='#1C8C9B'/><line x1='270' y1='248' x2='270.0' y2='264.6' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='275.0,261.0 265.0,261.0 270,270' fill='#1C8C9B'/><rect x='20' y='272' width='170' height='140' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='30' y='292.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>NaRRA</text><text x='30' y='310.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Big rebuilding projects.</text><text x='30' y='325.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>Created by law on 27 May</text><text x='30' y='340.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>2026. Building contracts</text><text x='30' y='355.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>only now being signed,</text><text x='30' y='370.7' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>the Prime Minister said</text><text x='30' y='385.6' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>on 8 September.</text><rect x='200' y='272' width='160' height='140' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='210' y='292.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>Home repair grants</text><text x='210' y='310.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>J$75,000 for minor</text><text x='210' y='325.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>damage, J$200,000 for</text><text x='210' y='340.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>major, up to J$500,000</text><text x='210' y='355.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>for severe. First 1,234</text><text x='210' y='370.7' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>families paid in</text><text x='210' y='385.6' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>February 2026.</text><rect x='20' y='420' width='340' height='60' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6' stroke-dasharray='4 3'/><text x='30' y='437.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>JAMRROC, seven people appointed on 8 September 2026,</text><text x='30' y='449.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>watches NaRRA and advises which projects go ahead. The</text><text x='30' y='462.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>public list of projects promised by the law was not</text><text x='30' y='474.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>online on 11 September.</text><rect x='410' y='34' width='330' height='82' rx='10' fill='#FBEDE8' stroke='#993C1D' stroke-width='1.6'/><text x='422' y='56.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#993C1D' text-anchor='start' font-weight='600'>Relatives abroad sent US$1.85 billion</text><text x='422' y='74.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>November 2025 to May 2026, the seven months after</text><text x='422' y='89.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>the storm. That is 7.7 per cent more than a year</text><text x='422' y='104.8' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#3D5560' text-anchor='start'>earlier.</text><line x1='575' y1='116' x2='575.0' y2='132.6' stroke='#E2664A' stroke-width='2.2'/><polygon points='580.0,129.0 570.0,129.0 575,138' fill='#E2664A'/><rect x='410' y='140' width='330' height='236' rx='10' fill='#F6FBFB' stroke='#993C1D' stroke-width='1.6'/><text x='422' y='162.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>Where the extra US$132 million went</text><text x='422' y='192.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#0B2530' text-anchor='start' font-weight='500'>Kingston and St Andrew</text><rect x='422' y='198.9' width='300.0' height='12' rx='2' fill='#E2664A'/><text x='422' y='224.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>US$79.6 million: 60 cents of every extra dollar</text><text x='422' y='244.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#0B2530' text-anchor='start' font-weight='500'>Four western parishes, the worst hit</text><rect x='422' y='250.9' width='33.9' height='12' rx='2' fill='#E2664A'/><text x='422' y='276.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>US$9.0 million between them</text><text x='422' y='296.9' font-family='Spline Sans,Arial,sans-serif' font-size='11.5' fill='#0B2530' text-anchor='start' font-weight='500'>St James</text><rect x='422' y='302.9' width='3.0' height='12' rx='2' fill='#993C1D'/><text x='422' y='328.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>no increase at all</text><text x='422' y='346.9' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>The other parishes shared the rest.</text><line x1='575' y1='376' x2='575.0' y2='392.6' stroke='#E2664A' stroke-width='2.2'/><polygon points='580.0,389.0 570.0,389.0 575,398' fill='#E2664A'/><rect x='410' y='400' width='330' height='78' rx='10' fill='#E4D6B8' stroke='#993C1D' stroke-width='1.6'/><path d='M424,433.8 L446.0,414 L468,433.8' fill='none' stroke='#993C1D' stroke-width='2.4' stroke-linejoin='round'/><rect x='429.28' y='433.8' width='33.44' height='24.200000000000003' fill='#fff' stroke='#993C1D' stroke-width='2.2'/><rect x='441.6' y='442.6' width='8.8' height='15.399999999999999' fill='#993C1D'/><text x='482' y='424.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>A home in a storm-hit parish</text><text x='482' y='440.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>has been rebuilding on family money since</text><text x='482' y='453.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>November, and waits for the state route to</text><text x='482' y='466.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>reach it.</text></svg>",
    "figcap": "Two ways money reaches a Jamaican home after Melissa. Left: the World Bank package of 1 December 2025, NaRRA and the shelter grants announced by the Office of the Prime Minister. Right: Bank of Jamaica figures by parish, reported in the Gleaner on 6 September 2026.",
    "teaser": "After Hurricane Melissa, banks promised Jamaica billions and a new law was passed to spend it. Ten months on, the money that has actually reached families came mostly from relatives abroad.",
    "body": "Hurricane Melissa hit Jamaica on 28 October 2025 and caused 8.8 billion US dollars of damage, by the World Bank's count. Within weeks, development banks and the IMF put together a package worth 6.7 billion US dollars over three years. More than half of it is loans that Jamaica will have to pay back, and 2.4 billion of it is private investment the banks hope to attract rather than money in hand. To spend the money, the government passed a new law on 27 May 2026 creating NaRRA, the National Reconstruction and Resilience Authority. NaRRA runs the big rebuilding projects and its head is chosen by the Prime Minister. A separate group of seven people, called JAMRROC, was set up on 8 September to watch over NaRRA and advise on which projects go ahead. The law also promises a public list on the internet of every approved project. On 11 September 2026 that list did not yet exist; NaRRA's head has said it will be ready by the end of the year. The Prime Minister admitted on 8 September that building contracts were only now being signed, almost a year after the storm. Families did not wait for the state. In the seven months after the storm, Jamaicans living abroad sent home 1.85 billion US dollars, 7.7 per cent more than in the same months a year before. That extra money did not go where the storm hit hardest. Sixty cents of every extra dollar went to Kingston and St Andrew. The four western parishes with the worst damage received only 4.2 per cent more than the year before, and St James received exactly the same amount as before. The state's own help to households, grants of 75,000 to 500,000 Jamaican dollars to repair homes, reached a first group of 1,234 families in February.",
    "sources": [
      {
        "t": "Office of the Prime Minister, 27 May 2026, NaRRA Bill now law as government advances national reconstruction programme",
        "u": "https://opm.gov.jm/narra-bill-now-law-as-government-advances-national-reconstruction-programme/"
      },
      {
        "t": "Jamaica Observer, 9 September 2026, Fear factor: the JAMRROC launch and its seven members",
        "u": "https://www.jamaicaobserver.com/2026/09/09/fear-factor/"
      },
      {
        "t": "Jamaica Gleaner, 6 September 2026, Kingston takes bulk of remittance growth since Melissa",
        "u": "https://jamaica-gleaner.com/article/business/20260906/kingston-takes-bulk-remittance-growth-melissa"
      },
      {
        "t": "Jamaica Gleaner, 9 September 2026, Holness: I am not satisfied with the pace of Hurricane Melissa relief efforts",
        "u": "https://jamaica-gleaner.com/article/news/20260909/holness-i-am-not-satisfied-pace-hurricane-melissa-relief-efforts"
      },
      {
        "t": "World Bank, 1 December 2025, Jamaica secures a package of US$6.7 billion over three years",
        "u": "https://www.worldbank.org/en/news/press-release/2025/12/01/jamaica-secures-a-package-of-us-6-7-billion-over-three-years-in-international-support-for-recovery-and-reconstruction-af"
      },
      {
        "t": "Office of the Prime Minister, 10 February 2026, government begins disbursement of shelter recovery funds",
        "u": "https://opm.gov.jm/government-begins-disbursement-of-shelter-recovery-funds-to-jamaicans-impacted-by-hurricane-melissa/"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged September 2026",
    "title": "Why the power bill did not go up",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='12' y1='94' x2='98' y2='94' stroke='#3D5560' stroke-width='2'/><rect x='18' y='34' width='34' height='60' rx='4' fill='#BFE3E2' stroke='#0E4D5C' stroke-width='2.4'/><rect x='24' y='40' width='22' height='16' rx='2' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='1.6'/><path d='M52,44 L62,44 L62,74 C62,80 70,80 70,74 L70,52' fill='none' stroke='#0E4D5C' stroke-width='2.4'/><rect x='60' y='16' width='40' height='24' rx='3' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><text x='80' y='33' text-anchor='middle' font-family='Georgia,serif' font-size='12' fill='#993C1D'>100</text><path d='M74,62 C82,52 92,52 100,62' fill='none' stroke='#E2664A' stroke-width='3' stroke-linecap='round'/><polygon points='96,56 104,64 94,67' fill='#E2664A'/></svg>",
    "fig": "<svg viewBox='0 0 760 470' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='How a home in Tonga was shielded from the 2026 fuel price shock'><text x='20' y='22.0' font-family='Space Mono,monospace' font-size='11' fill='#1C8C9B' text-anchor='start'>WHAT HAPPENED, STEP BY STEP</text><rect x='20' y='34' width='172' height='182' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><rect x='93.0' y='44' width='26' height='32' rx='4' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><line x1='93.0' y1='54' x2='119.0' y2='54' stroke='#993C1D' stroke-width='2'/><line x1='93.0' y1='66' x2='119.0' y2='66' stroke='#993C1D' stroke-width='2'/><text x='30' y='98.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>1. Diesel got dearer</text><text x='30' y='116.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>A war in the Middle East</text><text x='30' y='128.8' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>pushed up the world price.</text><text x='30' y='141.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Tonga\u2019s diesel cost 59%</text><text x='30' y='153.8' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>more from 1 April and 16%</text><text x='30' y='166.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>more again from 1 May.</text><line x1='193' y1='109' x2='195.6' y2='109.0' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='192.0,104.0 192.0,114.0 201,109' fill='#1C8C9B'/><rect x='202' y='34' width='172' height='182' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><circle cx='288.0' cy='58' r='13' fill='#FFF3C4' stroke='#993C1D' stroke-width='2'/><rect x='283.0' y='70' width='10' height='7' fill='#993C1D'/><text x='212' y='98.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>2. Electricity got</text><text x='212' y='114.2' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>dearer</text><text x='212' y='132.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Tonga makes most of its</text><text x='212' y='145.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>power from diesel. On 1 May</text><text x='212' y='157.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>a unit went from about 90</text><text x='212' y='170.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>to about 122 seniti, a</text><text x='212' y='182.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>third more.</text><line x1='375' y1='109' x2='377.6' y2='109.0' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='374.0,104.0 374.0,114.0 383,109' fill='#1C8C9B'/><rect x='384' y='34' width='172' height='182' rx='10' fill='#BFE3E2' stroke='#0E4D5C' stroke-width='1.6'/><rect x='453.0' y='48' width='34' height='26' fill='#fff' stroke='#0E4D5C' stroke-width='2'/><path d='M451.0,48 L470.0,40 L489.0,48' fill='#fff' stroke='#0E4D5C' stroke-width='2'/><line x1='460.0' y1='52' x2='460.0' y2='72' stroke='#0E4D5C' stroke-width='2'/><line x1='470.0' y1='52' x2='470.0' y2='72' stroke='#0E4D5C' stroke-width='2'/><line x1='480.0' y1='52' x2='480.0' y2='72' stroke='#0E4D5C' stroke-width='2'/><text x='394' y='98.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>3. The state paid the</text><text x='394' y='114.2' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>rise</text><text x='394' y='132.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>On 11 May the Prime</text><text x='394' y='145.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Minister said the</text><text x='394' y='157.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>government would pay the</text><text x='394' y='170.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>increase for every home.</text><text x='394' y='182.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Cost: 18 million pa\u2019anga.</text><line x1='557' y1='109' x2='559.6' y2='109.0' stroke='#1C8C9B' stroke-width='2.2'/><polygon points='556.0,104.0 556.0,114.0 565,109' fill='#1C8C9B'/><rect x='566' y='34' width='172' height='182' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><path d='M634.0,58.2 L652.0,42 L670.0,58.2' fill='none' stroke='#0E4D5C' stroke-width='2.4' stroke-linejoin='round'/><rect x='638.32' y='58.2' width='27.36' height='19.8' fill='#fff' stroke='#0E4D5C' stroke-width='2.2'/><rect x='648.4' y='65.4' width='7.2' height='12.6' fill='#0E4D5C'/><text x='576' y='98.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>4. The home bill</text><text x='576' y='114.2' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>stayed put</text><text x='576' y='132.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Bills did not go up, but</text><text x='576' y='145.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>other prices did: in July</text><text x='576' y='157.5' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>things cost 9.3% more than</text><text x='576' y='170.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>a year before.</text><text x='20' y='244.0' font-family='Space Mono,monospace' font-size='11' fill='#E2664A' text-anchor='start'>THE OTHER HELP IN THE SAME MONTHS</text><rect x='20' y='256' width='355' height='96' rx='10' fill='#F6FBFB' stroke='#993C1D' stroke-width='1.6'/><circle cx='52' cy='292' r='20' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><text x='52' y='297.0' font-family='Spline Sans,Arial,sans-serif' font-size='12' fill='#993C1D' text-anchor='middle' font-weight='700'>100</text><text x='84' y='278.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>One extra 100 pa\u2019anga from the state</text><text x='84' y='296.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Paid in August to everyone on the elderly or</text><text x='84' y='308.8' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>disability allowance, on top of the usual 100 or</text><text x='84' y='321.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>120 pa\u2019anga a month.</text><rect x='385' y='256' width='355' height='96' rx='10' fill='#F6FBFB' stroke='#993C1D' stroke-width='1.6'/><rect x='400' y='276' width='38' height='26' rx='3' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><path d='M400,276 L419.0,291.6 L438,276' fill='none' stroke='#993C1D' stroke-width='2'/><text x='450' y='278.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>Money from relatives abroad</text><text x='450' y='296.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>The Reserve Bank counted 6.5 million pa\u2019anga more</text><text x='450' y='308.8' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>in May than in April, then 1.1 million less in</text><text x='450' y='321.2' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>June than in May. It rises and falls every month.</text><text x='20' y='382.0' font-family='Space Mono,monospace' font-size='11' fill='#1C8C9B' text-anchor='start'>WHERE THE STATE\u2019S MONEY COMES FROM</text><rect x='20' y='394' width='720' height='66' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='32' y='414.0' font-family='Spline Sans,Arial,sans-serif' font-size='12.5' fill='#0B2530' text-anchor='start' font-weight='600'>Government budget for the year: 949 million pa\u2019anga</text><rect x='32' y='424' width='696' height='14' rx='3' fill='#BFE3E2'/><rect x='32' y='424' width='157.0' height='14' rx='3' fill='#1C8C9B'/><text x='32' y='452.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>214 million, about one pa\u2019anga in five, is aid from other countries and development banks</text></svg>",
    "figcap": "How a home in Tonga was shielded from the 2026 fuel shock. Diesel and electricity prices from Islands Business, 12 May 2026; the government's promise from Kaniva Tonga, 11 May 2026; the budget from Talanoa 'o Tonga, 19 June 2026; family money from the Reserve Bank's monthly updates for May and June.",
    "teaser": "A war far away made diesel dear, and Tonga makes its electricity from diesel. The government paid the rise on every home's power bill, with a budget that is one fifth aid, while relatives abroad sent what they could.",
    "body": "In spring 2026 fighting in the Middle East pushed up the world price of diesel. The diesel Tonga imports cost 59 per cent more from 1 April and a further 16 per cent more from 1 May. Tonga makes most of its electricity by burning diesel, so on 1 May the price of a unit of electricity rose from about 90 seniti to about 122 seniti, a third more. On 11 May the Prime Minister said the government would pay that rise itself, so that no household's power bill would go up. The budget sets aside 18 million pa'anga for this. The government added other help at the same time. Every person on the elderly or disability allowance received one extra payment of 100 pa'anga in August, on top of their usual 100 or 120 pa'anga a month. Ferries and flights to the outer islands were subsidised so fares would not jump, and civil servants received a 3 per cent pay rise. All of this together costs about 32 million pa'anga. Prices still rose. In July, goods and services cost 9.3 per cent more than a year before, and transport cost 23 per cent more. Where does the government find the money? Its budget for the year is 949 million pa'anga, and 214 million of that comes from other countries and development banks as aid. So about one pa'anga in every five the government spends is aid. Families have a second source of help. The Reserve Bank reports that in May relatives abroad sent 6.5 million pa'anga more than in April, and in June they sent 1.1 million less than in May. Family money goes up and down from month to month. A Tongan home came through the fuel shock on both kinds of help at once: the state paid the rise in the power bill, partly with aid, and relatives overseas sent what they could.",
    "sources": [
      {
        "t": "Islands Business, 12 May 2026, Tonga electricity tariff up 35.8 per cent amid diesel cost surges",
        "u": "https://islandsbusiness.com/news-break/tonga-electricity-tariff-up-35-8-per-cent-amid-diesel-cost-surges/"
      },
      {
        "t": "Kaniva Tonga, 11 May 2026, Tonga electricity costs rise, government steps in to pay",
        "u": "https://kanivatonga.co.nz/2026/05/tonga-electricity-costs-rise-govt-steps-in-to-pay/"
      },
      {
        "t": "Islands Business, 24 July 2026, energy crisis could cost Tonga budget up to TOP$50 million",
        "u": "https://islandsbusiness.com/news-break/energy-crisis-could-cost-tonga-budget-up-to-top50-million/"
      },
      {
        "t": "Talanoa 'o Tonga, 11 August 2026, senior citizens to receive one-off $100 payment amid fuel crisis",
        "u": "https://talanoaotonga.to/senior-citizens-to-receive-one-off-100-payment-amid-fuel-crisis/"
      },
      {
        "t": "Talanoa 'o Tonga, 18 August 2026, inflation reaches 9.3 per cent as transport, housing and restaurants drive price rises",
        "u": "https://talanoaotonga.to/inflation-reaches-9-3-as-transport-housing-and-restaurants-drive-price-rises/"
      },
      {
        "t": "Talanoa 'o Tonga, 19 June 2026, Parliament passes $949.4 million budget for 2026/27",
        "u": "https://talanoaotonga.to/parliament-passes-949-4-million-government-budget-for-2026-27/"
      },
      {
        "t": "National Reserve Bank of Tonga, monthly economic update, July 2026 (May figures)",
        "u": "https://www.reservebank.to/index.php/eco-reviews/meu/monthly-economic-update-july-2026"
      },
      {
        "t": "National Reserve Bank of Tonga, monthly economic update, August 2026 (June figures)",
        "u": "https://www.reservebank.to/index.php/eco-reviews/meu/monthly-economic-update-august-2026"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged September 2026",
    "title": "One Comorian in three",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='12' y1='94' x2='98' y2='94' stroke='#3D5560' stroke-width='2'/><circle cx='28' cy='44' r='9' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M14,94 L14,70 C14,60 42,60 42,70 L42,94' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><circle cx='56' cy='44' r='9' fill='#1C8C9B' stroke='#0E4D5C' stroke-width='2.4'/><path d='M42,94 L42,70 C42,60 70,60 70,70 L70,94' fill='#1C8C9B' stroke='#0E4D5C' stroke-width='2.4'/><circle cx='84' cy='44' r='9' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M70,94 L70,70 C70,60 98,60 98,70 L98,94' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><rect x='44' y='10' width='24' height='16' rx='2' fill='#E4D6B8' stroke='#993C1D' stroke-width='1.8'/><path d='M44,10 L56,20 L68,10' fill='none' stroke='#993C1D' stroke-width='1.8'/><path d='M56,26 L56,34' stroke='#E2664A' stroke-width='2.6' stroke-linecap='round'/></svg>",
    "fig": "<svg viewBox='0 0 760 432' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='What money sent from abroad does for families in the Comoros'><rect x='20' y='20' width='230' height='180' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='32' y='42.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>One home in three</text><text x='32' y='60.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>receives money from relatives</text><text x='32' y='75.2' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>abroad</text><path d='M40,115.4 L66.0,92 L92,115.4' fill='none' stroke='#0E4D5C' stroke-width='2.4' stroke-linejoin='round'/><rect x='46.24' y='115.4' width='39.52' height='28.6' fill='#1C8C9B' stroke='#0E4D5C' stroke-width='2.2'/><rect x='60.8' y='125.80000000000001' width='10.4' height='18.2' fill='#0E4D5C'/><path d='M108,115.4 L134.0,92 L160,115.4' fill='none' stroke='#0E4D5C' stroke-width='2.4' stroke-linejoin='round'/><rect x='114.24' y='115.4' width='39.52' height='28.6' fill='#fff' stroke='#0E4D5C' stroke-width='2.2'/><rect x='128.8' y='125.80000000000001' width='10.4' height='18.2' fill='#0E4D5C'/><path d='M176,115.4 L202.0,92 L228,115.4' fill='none' stroke='#0E4D5C' stroke-width='2.4' stroke-linejoin='round'/><rect x='182.24' y='115.4' width='39.52' height='28.6' fill='#fff' stroke='#0E4D5C' stroke-width='2.2'/><rect x='196.8' y='125.80000000000001' width='10.4' height='18.2' fill='#0E4D5C'/><text x='32' y='186.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>World Bank, June 2026</text><rect x='265' y='20' width='230' height='180' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='277' y='42.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>90 of every 100 francs</text><text x='277' y='60.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>go on daily life: food, rent,</text><text x='277' y='75.2' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>health, school</text><rect x='277.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='287.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='298.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='308.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='319.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='329.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='340.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='350.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='361.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='371.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='382.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='392.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='403.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='413.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='424.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='434.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='445.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='455.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='466.0' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='476.5' y='92' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='277.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='287.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='298.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='308.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='319.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='329.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='340.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='350.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='361.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='371.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='382.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='392.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='403.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='413.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='424.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='434.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='445.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='455.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='466.0' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='476.5' y='104' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='277.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='287.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='298.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='308.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='319.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='329.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='340.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='350.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='361.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='371.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='382.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='392.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='403.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='413.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='424.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='434.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='445.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='455.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='466.0' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='476.5' y='116' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='277.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='287.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='298.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='308.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='319.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='329.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='340.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='350.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='361.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='371.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='382.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='392.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='403.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='413.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='424.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='434.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='445.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='455.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='466.0' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='476.5' y='128' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='277.0' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='287.5' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='298.0' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='308.5' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='319.0' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='329.5' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='340.0' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='350.5' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='361.0' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='371.5' y='140' width='8' height='8' rx='1.5' fill='#1C8C9B'/><rect x='382.0' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='392.5' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='403.0' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='413.5' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='424.0' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='434.5' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='445.0' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='455.5' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='466.0' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><rect x='476.5' y='140' width='8' height='8' rx='1.5' fill='#d7e6e6'/><text x='277' y='166.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>teal: spent on daily needs</text><text x='277' y='178.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>grey: everything else</text><text x='277' y='190.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>World Bank, June 2026</text><rect x='510' y='20' width='230' height='180' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='522' y='42.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>The money buys less</text><text x='522' y='60.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>what one person\u2019s share covers of a</text><text x='522' y='73.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>month\u2019s basic needs (the poverty</text><text x='522' y='86.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>line)</text><text x='522' y='110.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#0B2530' text-anchor='start' font-weight='600'>2014</text><rect x='552' y='100' width='166.6' height='14' rx='3' fill='#d7e6e6'/><rect x='552' y='100' width='33.3' height='14' rx='3' fill='#E2664A'/><text x='591.32' y='111.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>a fifth</text><text x='522' y='140.0' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#0B2530' text-anchor='start' font-weight='600'>2024</text><rect x='552' y='130' width='166.6' height='14' rx='3' fill='#d7e6e6'/><rect x='552' y='130' width='16.7' height='14' rx='3' fill='#E2664A'/><text x='574.66' y='141.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>a tenth</text><text x='522' y='166.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>grey bar: one month\u2019s basic needs</text><text x='522' y='186.0' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>World Bank, June 2026</text><rect x='20' y='216' width='720' height='110' rx='10' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><text x='32' y='238.0' font-family='Spline Sans,Arial,sans-serif' font-size='13' fill='#0B2530' text-anchor='start' font-weight='600'>Why the state cannot fill the gap</text><text x='32' y='258.9' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>Of every 100 francs the country earns in a year, the government collects 8 in taxes and fees. Few families receive</text><text x='32' y='272.4' font-family='Spline Sans,Arial,sans-serif' font-size='11' fill='#3D5560' text-anchor='start'>money from any state programme.</text><rect x='32' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='39' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='46' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='53' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='60' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='67' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='74' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='81' y='293.9' width='5' height='9' rx='1' fill='#993C1D'/><rect x='88' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='95' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='102' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='109' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='116' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='123' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='130' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='137' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='144' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='151' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='158' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='165' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='172' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='179' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='186' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='193' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='200' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='207' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='214' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='221' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='228' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='235' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='242' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='249' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='256' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='263' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='270' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='277' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='284' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='291' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='298' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='305' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='312' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='319' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='326' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='333' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='340' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='347' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='354' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='361' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='368' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='375' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='382' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='389' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='396' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='403' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='410' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='417' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='424' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='431' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='438' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='445' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='452' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='459' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='466' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='473' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='480' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='487' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='494' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='501' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='508' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='515' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='522' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='529' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='536' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='543' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='550' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='557' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='564' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='571' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='578' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='585' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='592' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='599' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='606' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='613' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='620' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='627' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='634' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='641' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='648' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='655' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='662' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='669' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='676' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='683' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='690' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='697' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='704' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='711' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='718' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><rect x='725' y='293.9' width='5' height='9' rx='1' fill='#d7e6e6'/><text x='32' y='319.9' font-family='Spline Sans,Arial,sans-serif' font-size='10' fill='#3D5560' text-anchor='start'>brown: what the state collects   grey: the rest of what the country earns</text><rect x='20' y='342' width='720' height='74' rx='10' fill='#E4D6B8' stroke='#993C1D' stroke-width='1.6'/><rect x='34' y='356' width='36' height='26' rx='3' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><path d='M34,356 L52.0,371.6 L70,356' fill='none' stroke='#993C1D' stroke-width='2'/><text x='84' y='366.0' font-family='Spline Sans,Arial,sans-serif' font-size='12' fill='#0B2530' text-anchor='start' font-weight='500'>So for most families, money from a relative abroad is what pays for food, rent, medicine and school.</text><text x='84' y='392.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>Diaspora money now equals more than a fifth of everything the economy produces in a year; in 2000 it was under a</text><text x='84' y='405.0' font-family='Spline Sans,Arial,sans-serif' font-size='10.5' fill='#3D5560' text-anchor='start'>twentieth (Comores Infos, 31 August 2026).</text></svg>",
    "figcap": "What money from abroad does in the Comoros, from the World Bank note of June 2026 and Comores Infos, 31 August 2026.",
    "teaser": "The central bank called 2025 the best year since Covid. The Comorian press read the same report and saw an economy that produces little, with families living on money sent from abroad.",
    "body": "The Central Bank of the Comoros published its report on 2025 at the end of August. The economy grew 3.8 per cent, the best year since Covid, and prices rose only 3 per cent. Comores Infos read the same report on 31 August and drew a harder conclusion. The country produces little, the paper wrote, and money sent home by Comorians abroad now equals more than a fifth of everything the economy produces in a year. In 2000 it was less than a twentieth. Thousands of families use that money for food, rent, health care, school fees and building a house. The paper also quoted the IMF, which says the Comoros depends on three things from outside at once: imports, money from the diaspora, and foreign aid. A World Bank note from June counts the families. More than one Comorian in three lives in a home that receives money from abroad. Of every 100 francs that arrive, more than 90 are spent on daily life. Without that money, between 15 and 24 more people in every thousand would be living in poverty. The money is not going as far as it did. In 2014 the amount a person received from abroad covered about a fifth of what one person needs each month for basic food and living, which is what the World Bank calls the poverty line. By 2024 it covered only a tenth, because prices rose faster than the money sent. The government cannot fill the gap. For every 100 francs the country earns in a year, the state collects only 8 in taxes and fees, and few families receive money from any state programme. So for most Comorian families, the World Bank writes, money from relatives abroad is what pays for food, rent, medicine and school.",
    "sources": [
      {
        "t": "Comores Infos, 31 August 2026, de moins de 5 % \u00e0 plus de 20 % du PIB : la diaspora prend une place \u00e9norme dans une \u00e9conomie qui produit peu",
        "u": "https://www.comoresinfos.net/de-moins-de-5-a-plus-de-20-du-pib-la-diaspora-prend-une-place-enorme-dans-une-economie-qui-produit-peu/"
      },
      {
        "t": "Al-Watwan, 31 August 2026, \u00e9conomie nationale : un l\u00e9ger mieux en 2025, selon la Banque centrale",
        "u": "https://alwatwan.net/economie/\u00e9conomie-nationale-i-un-l\u00e9ger-mieux-en-2025,-selon-la-banque-centrale.html"
      },
      {
        "t": "World Bank, June 2026, note de conjoncture \u00e9conomique, Union des Comores : pour un bon emploi des transferts de fonds",
        "u": "https://documents1.worldbank.org/curated/en/099061826122010879/pdf/P509150-26758418-36c4-4f12-a091-a7f06c1d3a09.pdf"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged August 2026",
    "title": "Routing around the one per cent",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='14' y='40' width='46' height='28' rx='4' fill='#BFE3E2' stroke='#0E4D5C' stroke-width='2'/><circle cx='37' cy='54' r='8' fill='none' stroke='#0E4D5C' stroke-width='2'/><rect x='66' y='30' width='6' height='50' rx='2' fill='#E2664A'/><path d='M60,26 C74,10 88,10 98,24' fill='none' stroke='#1C8C9B' stroke-width='3' stroke-linecap='round'/><polygon points='94,18 102,26 92,29' fill='#1C8C9B'/><path d='M60,84 C74,98 88,98 98,86' fill='none' stroke='#1C8C9B' stroke-width='3' stroke-linecap='round' stroke-dasharray='6 4'/><polygon points='94,92 102,84 92,81' fill='#1C8C9B'/><text x='69' y='24' font-family='Georgia,serif' font-size='11' fill='#993C1D'>1%</text></svg>",
    "teaser": "A 1 per cent tax on cash sent from the United States has applied since January. The people it touches spent the year before it arrived pricing the workarounds out loud.",
    "body": "The budget act signed in Washington in July 2025 put a 1 per cent tax on cash remittances sent from the United States, and it has applied since 1 January. The public conversation started long before the first dollar was collected. On Blind, the forum where migrant tech workers post anonymously, threads priced each draft as the rate moved from 5 per cent to 3.5 and finally to 1, and traded the ways around it: send everything before January, switch to transfers funded from a bank account or card, which the final act does not tax, hold the money in crypto, or carry cash across, which other posters warned is illegal above a threshold. African tech newsletters ran the same arithmetic for their readers. The tax reaches Kingston, Nuku'alofa and Moroni through the same corridors, and people began working out ways around it the day it was announced.",
    "sources": [
      {
        "t": "Techlabari, an African tech newsletter, on the 1 per cent remittance tax in the budget act",
        "u": "https://techlabari.substack.com/p/donald-trumps-big-beautiful-bill"
      },
      {
        "t": "Blind, the tech workers' forum, a public thread pricing the tax and the ways around it",
        "u": "https://www.teamblind.com/post/35-tax-on-remittances-sent-outside-us-from-2026-twfvo0c4"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged August 2026",
    "title": "Both lines soften in the same year",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='16' y1='92' x2='96' y2='92' stroke='#3D5560' stroke-width='2'/><line x1='16' y1='92' x2='16' y2='16' stroke='#3D5560' stroke-width='2'/><path d='M20,64 C36,50 52,42 66,42 C78,42 86,48 92,58' fill='none' stroke='#1C8C9B' stroke-width='3' stroke-linecap='round'/><path d='M20,80 C36,72 52,64 66,62 C78,60 86,66 92,76' fill='none' stroke='#E2664A' stroke-width='3' stroke-linecap='round' stroke-dasharray='6 4'/><circle cx='66' cy='42' r='3.4' fill='#1C8C9B'/><circle cx='66' cy='62' r='3.4' fill='#E2664A'/><rect x='60' y='20' width='34' height='12' rx='6' fill='#BFE3E2'/></svg>",
    "teaser": "For two years the public argument was that family money would hold the line as donors pulled back. The 2026 figures are the first to suggest both flows are easing at once, and island commentary has started to say so.",
    "body": "The Inter-American Development Bank's first quarter reading, carried in the Jamaican business pages in August, put Caribbean remittance growth at 5.9 per cent against 10.8 per cent for the previous year, and attributed the slowdown to the exhaustion of the two things that drove the post-pandemic surge: savings that migrants had built up, and the extra hours they were working. Jamaica's own growth came in at 4.1 per cent. The OECD's June projections point the same way on the other side, with development assistance falling again into 2026 and the near term. The commentary that ran through 2025 assumed one flow could compensate for the other. The 2026 numbers are the first test of that assumption, and the early answer is that the two are not moving in opposite directions.",
    "sources": [
      {
        "t": "Jamaica Gleaner, 5 August 2026, Caribbean remittance growth cools as uncertainty rises",
        "u": "https://jamaica-gleaner.com/article/business/20260805/caribbean-remittance-growth-cools-uncertainty-rises-and-pandemic-momentum"
      },
      {
        "t": "OECD, ODA projections for 2026 and the near term, 19 June 2026",
        "u": "https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/oda-projections-for-2026-and-the-near-term_10979bc6/d7c74fa2-en.pdf"
      },
      {
        "t": "Devpolicy, remittances and aid in small states, the stability trap, 28 July 2026",
        "u": "https://devpolicy.org/remittances-and-aid-in-small-states-the-stability-trap-20260729/"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged August 2026",
    "title": "The barrels go back to school",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><path d='M26,44 L38,32 L62,32 L74,44 L74,88 L26,88 Z' fill='#1C8C9B' stroke='#0E4D5C' stroke-width='2.4' stroke-linejoin='round'/><rect x='40' y='50' width='20' height='14' rx='3' fill='#F6FBFB' stroke='#0E4D5C' stroke-width='1.6'/><path d='M38,32 C38,22 62,22 62,32' fill='none' stroke='#0E4D5C' stroke-width='2.4'/><rect x='80' y='52' width='16' height='34' rx='3' fill='#E4D6B8' stroke='#993C1D' stroke-width='2'/><line x1='80' y1='62' x2='96' y2='62' stroke='#993C1D' stroke-width='1.6'/><line x1='80' y1='76' x2='96' y2='76' stroke='#993C1D' stroke-width='1.6'/><line x1='16' y1='96' x2='96' y2='96' stroke='#3D5560' stroke-width='2'/><rect x='14' y='36' width='8' height='44' rx='2' fill='#FFCC00' stroke='#993C1D' stroke-width='1.4'/><polygon points='18,28 14,36 22,36' fill='#993C1D'/></svg>",
    "teaser": "August is when the diaspora's help turns physical. Supply drives pack backpacks for twenty schools across five parishes, and the public back to school pages fill with lists and barrels timed for the new term.",
    "body": "Every August part of the remittance turns into exercise books. The Jamaica Awareness Association of California and the Jamaica Diaspora Taskforce Action Network run a back to school supplies drive with partner organisations across the United States and Canada, packing backpacks with notebooks, pens, geometry sets and hygiene items for infant and primary students at twenty schools across Clarendon, St James, Kingston, St Andrew and Westmoreland, at about 25 US dollars a child, timed from mid August to the start of term. The public back to school topic pages carry the same season from the family side, packing lists and barrels aimed at the first day of school. A drive like this is a remittance in kind, organised so the help arrives as supplies in a child's hands rather than as cash in an account, and August is the month that kind of sending has a date.",
    "sources": [
      {
        "t": "Jamaica Awareness Association of California, the back to school supplies drive",
        "u": "https://jamaicaawareness.org/back-to-school-supplies-drive/"
      },
      {
        "t": "TikTok, Jamaican back to school lists (public topic page)",
        "u": "https://www.tiktok.com/discover/jamaican-back-to-school-list"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged August 2026",
    "title": "Send less, own more",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><path d='M18,54 L48,30 L78,54' fill='none' stroke='#0E4D5C' stroke-width='2.6' stroke-linejoin='round'/><rect x='26' y='54' width='44' height='36' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><rect x='42' y='68' width='13' height='22' fill='#1C8C9B'/><circle cx='84' cy='40' r='11' fill='none' stroke='#E2664A' stroke-width='2.6'/><line x1='84' y1='51' x2='84' y2='72' stroke='#E2664A' stroke-width='2.6'/><line x1='84' y1='60' x2='93' y2='60' stroke='#E2664A' stroke-width='2.6'/><line x1='84' y1='67' x2='91' y2='67' stroke='#E2664A' stroke-width='2.6'/><rect x='14' y='18' width='26' height='17' rx='2' fill='#FFCC00' stroke='#993C1D' stroke-width='1.8'/><path d='M15,19 L27,28 L39,19' fill='none' stroke='#993C1D' stroke-width='1.6'/></svg>",
    "teaser": "At the diaspora conference in Montego Bay the message from government was that remittances alone do not build generational wealth and ownership does. In the same months, households were still using transfers to put roofs back on after Melissa.",
    "body": "The eleventh biennial Jamaica Diaspora Conference met in Montego Bay in June, and the line from the Ministry of Industry, Investment and Commerce was that the diaspora should move from sending money to owning things: property, agriculture, agro-processing, logistics, technology. The pitch was made on the strength of net international reserves of about 6.5 billion US dollars and an economy described as resilient after Hurricane Melissa. The same economy contracted by 5.9 per cent in the first quarter while remittances grew by 4.1 per cent, which is the sequence that gives the appeal its edge. Remittances are roughly 15 per cent of GDP and about two thirds of them come from the United States. Whether a household rebuilding a roof can also become an investor is the question the conversation keeps arriving at.",
    "sources": [
      {
        "t": "Jamaica Gleaner, 15 June 2026, Seiveright urges diaspora to move beyond remittances",
        "u": "https://jamaica-gleaner.com/article/news/20260615/diaspora-conference-seiveright-urges-diaspora-move-beyond-remittances"
      },
      {
        "t": "Jamaica Gleaner, 5 August 2026, Caribbean remittance growth cools",
        "u": "https://jamaica-gleaner.com/article/business/20260805/caribbean-remittance-growth-cools-uncertainty-rises-and-pandemic-momentum"
      },
      {
        "t": "Caribbean National Weekly, diaspora urged to move from remittances to strategic investment",
        "u": "https://www.caribbeannationalweekly.com/community-news/diaspora-urged-to-move-from-remittances-to-strategic-investment-in-jamaica/"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged August 2026",
    "title": "What a farewell asks for",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='18' y='46' width='58' height='40' rx='4' fill='#E4D6B8' stroke='#9A7442' stroke-width='2'/><path d='M18,54 L76,54 M18,62 L76,62 M18,70 L76,70 M18,78 L76,78' stroke='#9A7442' stroke-width='1.2'/><path d='M26,46 L26,86 M36,46 L36,86 M46,46 L46,86 M56,46 L56,86 M66,46 L66,86' stroke='#C9A46A' stroke-width='1.2'/><rect x='62' y='24' width='30' height='20' rx='3' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2'/><path d='M62,26 L77,38 L92,26' fill='none' stroke='#0E4D5C' stroke-width='1.8'/><path d='M14,30 C24,16 40,16 48,26' fill='none' stroke='#1C8C9B' stroke-width='3' stroke-linecap='round'/><polygon points='44,20 52,27 42,31' fill='#1C8C9B'/></svg>",
    "teaser": "When someone dies, the diaspora moves first. Public fundraisers ask for fares, for bringing the person home, and for the putu itself, and the funeral topic pages carry the ceremonies in public view.",
    "body": "A funeral is the obligation that mobilises a Tongan family fastest, and the public record of that is now online. A search of GoFundMe for Tongan funerals returns page after page of campaigns asking for the same things: the cost of bringing a family member home, fares for relatives flying in, and the putu itself. The public funeral topic pages carry the ceremonies in open view, the processions and the fine mats. A community explainer sets out what the mats say: the ta'ovala a mourner wears tells how they stand to the person who died, the father's eldest sister outranks everyone present, and the oldest, most worn mats mark the closest grief. The kavenga, the obligations, are often described as a weight, and in the fundraisers families decide in public, and in numbers, that this one is worth carrying.",
    "sources": [
      {
        "t": "GoFundMe, public fundraisers for Tongan funerals",
        "u": "https://www.gofundme.com/s?q=tongan%20funeral"
      },
      {
        "t": "TikTok, Tongan funerals (public topic page)",
        "u": "https://www.tiktok.com/discover/tongan-funeral-2026"
      },
      {
        "t": "Polynesian Cultural Center blog, Tongan wedding and funeral ceremonies",
        "u": "https://www.polynesia.com/blog/tongan-wedding-and-funeral-ceremonies"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged August 2026",
    "title": "When the aid is a loan",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='22' y='20' width='56' height='68' rx='4' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><line x1='32' y1='34' x2='68' y2='34' stroke='#D7E2E6' stroke-width='3'/><line x1='32' y1='44' x2='60' y2='44' stroke='#D7E2E6' stroke-width='3'/><circle cx='42' cy='64' r='5' fill='none' stroke='#E2664A' stroke-width='2.4'/><circle cx='60' cy='76' r='5' fill='none' stroke='#E2664A' stroke-width='2.4'/><line x1='63' y1='60' x2='39' y2='80' stroke='#E2664A' stroke-width='2.6' stroke-linecap='round'/><path d='M86,30 C98,44 98,64 86,78' fill='none' stroke='#1C8C9B' stroke-width='2.6'/><polygon points='86,78 92,70 80,71' fill='#1C8C9B'/></svg>",
    "teaser": "Tonga's own news site led in late July with the finding that aid to the Pacific is rebounding but increasingly debt driven. In a country where development assistance funds about half the national budget, that distinction is not technical.",
    "body": "The Lowy Institute's 2026 Pacific Aid Map, which tracks 60 billion US dollars across 50,000 projects since 2008, found aid to the region recovering while the growth in it comes increasingly through lending rather than grants, with Australia and the multilateral banks now dominating that lending and China shifting toward frequent small grants. Matangi Tonga carried the finding at the end of July under the headline that the aid is increasingly debt driven. The reason it matters here is arithmetic. Development assistance has run at around 35 per cent of GDP for Tonga and accounted for roughly 51 per cent of the national budget in 2023 and 2024, against remittances of about 43 per cent of GDP. Money that arrives as a loan and money that arrives from a relative sit on opposite sides of a household's future.",
    "sources": [
      {
        "t": "Matangi Tonga, 29 July 2026, aid to the Pacific region is increasingly debt-driven",
        "u": "https://matangitonga.to/2026/07/29/aid-pacific-region-increasingly-debt-driven"
      },
      {
        "t": "Lowy Institute, 2026 Pacific Aid Map Report",
        "u": "https://www.lowyinstitute.org/publications/2026-pacific-aid-map-report"
      },
      {
        "t": "Devpolicy, remittances and aid in small states, the stability trap, 28 July 2026",
        "u": "https://devpolicy.org/remittances-and-aid-in-small-states-the-stability-trap-20260729/"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged August 2026",
    "title": "The price of the anda",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><circle cx='44' cy='52' r='18' fill='none' stroke='#C9A46A' stroke-width='5'/><circle cx='44' cy='30' r='6' fill='#FFCC00' stroke='#9A7442' stroke-width='1.6'/><rect x='68' y='58' width='28' height='8' rx='2' fill='#1C8C9B'/><rect x='70' y='48' width='24' height='8' rx='2' fill='#1C8C9B' fill-opacity='0.75'/><rect x='72' y='38' width='20' height='8' rx='2' fill='#1C8C9B' fill-opacity='0.5'/><line x1='14' y1='84' x2='96' y2='84' stroke='#3D5560' stroke-width='2'/><path d='M20,84 C26,72 38,72 44,84' fill='#3C9A5F'/><path d='M52,84 C58,74 68,74 74,84' fill='#3C9A5F'/></svg>",
    "teaser": "Community press prices a grand mariage at anywhere from 6,000 to 235,000 euros, and in July the interior minister said out loud that nobody intends to ban it.",
    "body": "After the circular that moved ceremonies off weekday working hours, the interior minister told the press in July that the government has no intention of banning the grand mariage. What the custom costs is public conversation. HabarizaComores, citing a range the anthropologist Damir Ben Ali priced at 6,000 to 235,000 euros, describes the savings of a working lifetime going into one celebration, gold for the bride and hand embroidered draguila worth up to 2,000 euros apiece, and names the je viens, the diaspora members home for the season, as the ones who keep the ceremonies at that scale. The same press reminds its readers that remittances stand near 30 per cent of GDP while 45 per cent of the population lives under a poverty line of about 100 euros a month, and the same households and the same diaspora stand behind both figures.",
    "sources": [
      {
        "t": "HabarizaComores, le grand mariage, jusqu'à 235,000 euros",
        "u": "https://www.habarizacomores.com/2025/08/grand-mariage-jusqua-235000-euros.html"
      },
      {
        "t": "HabarizaComores, le gouvernement n'a pas l'intention d'interdire le grand mariage",
        "u": "https://www.habarizacomores.com/2026/07/le-gouvernement-na-pas-lintention.html"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged August 2026",
    "title": "The circular and the season",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='14' y='16' width='50' height='62' rx='3' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><line x1='23' y1='30' x2='55' y2='30' stroke='#D7E2E6' stroke-width='3'/><line x1='23' y1='40' x2='55' y2='40' stroke='#D7E2E6' stroke-width='3'/><line x1='23' y1='50' x2='45' y2='50' stroke='#D7E2E6' stroke-width='3'/><circle cx='46' cy='64' r='11' fill='none' stroke='#E2664A' stroke-width='2.4'/><path d='M40,64 L45,69 L53,59' fill='none' stroke='#E2664A' stroke-width='2.4' stroke-linecap='round'/><rect x='66' y='44' width='34' height='34' rx='3' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.2'/><line x1='66' y1='53' x2='100' y2='53' stroke='#0E4D5C' stroke-width='2.2'/><rect x='70' y='58' width='7' height='7' fill='#BFE3E2'/><rect x='80' y='58' width='7' height='7' fill='#BFE3E2'/><rect x='89' y='58' width='7' height='7' fill='#FFCC00'/><rect x='70' y='68' width='7' height='7' fill='#D7E2E6'/><rect x='80' y='68' width='7' height='7' fill='#FFCC00'/><rect x='89' y='68' width='7' height='7' fill='#FFCC00'/></svg>",
    "teaser": "In July the interior ministry banned customary ceremonies on weekday afternoons, because offices empty when a grand mariage is on. The measure lands in the middle of the July and August season, and the public argument it started is not really about opening hours.",
    "body": "A circular from the Minister of the Interior, dated mid July, prohibits customary events on the afternoons of working days. The reasoning given is administrative: public servants leave their posts or do not turn up at all when a family or village ceremony is running, people come back to an office two and three times to finish a piece of paperwork, and July and August are the worst months for it because that is the grand mariage season. Prefects and mayors are told to work with customary authorities to move events to non working days, public holidays or the evening. What the circular puts in writing is a claim about priority between customary obligation and the state, in a country where the ceremonies it names are financed substantially from Marseille. Youth debating competitions in the same weeks took the grand mariage, governance and citizenship as their set topic.",
    "sources": [
      {
        "t": "Comores Infos, 18 July 2026, mariages en pleine semaine, une mesure du ministre pour la continuite du service public",
        "u": "https://www.comoresinfos.net/mariages-en-pleine-semaine-une-mesure-courageuse-du-ministre-pour-garantir-la-continuite-du-service-public/"
      },
      {
        "t": "Comores Infos, la jeunesse debat du grand mariage, de la gouvernance et de la citoyennete",
        "u": "https://www.comoresinfos.net/la-jeunesse-debat-sans-violence-et-defend-ses-convictions-sur-le-grand-mariage-la-gouvernance-et-la-citoyennete-au-coeur-du-concours/"
      },
      {
        "t": "Al-Watwan, 44.8 pour cent de la population sous le seuil de pauvrete",
        "u": "https://alwatwan.net/societe/pauvret%C3%A9-aux-comores-%C2%AB44.8-de-la-population%C2%BB-vivent-en-dessous-du-seuil-de-pauvret%C3%A9.html"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged July 2026",
    "title": "The obligation debate goes viral",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><line x1='55' y1='0' x2='55' y2='26' stroke='#3D5560' stroke-width='2'/><rect x='17' y='26' width='76' height='52' rx='5' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M19,30 L55,58 L91,30' fill='none' stroke='#0E4D5C' stroke-width='2'/><path d='M55,72 C46,64 43,58 46,53 C49,49 55,52 55,55 C55,52 61,49 64,53 C67,58 64,64 55,72 Z' fill='#E2664A'/><line x1='30' y1='92' x2='80' y2='92' stroke='#BFE3E2' stroke-width='3'/></svg>",
    "teaser": "Black tax, remittance guilt, the family ATM: TikTok and X carry an enormous cross diaspora conversation about the duty to send money home, and island diasporas recognise themselves in every line of it.",
    "body": "A term coined in South Africa now frames a worldwide conversation. On TikTok, black tax videos gather millions of views: young professionals abroad talking through the monthly transfer, the guilt of saying no, the pride of building a parent's roof, the fear of never building their own. Island diasporas join under their own hashtags, and the themes rhyme from Kingston to Nuku'alofa to Moroni: love expressed as money, boundaries negotiated in comment sections, and the question of when support becomes dependence. Researchers have begun studying the discourse itself, which makes this one of the rare remittance conversations happening in public, in the senders' own voices.",
    "sources": [
      {
        "t": "TikTok, the public black tax topic page",
        "u": "https://www.tiktok.com/discover/black-tax"
      },
      {
        "t": "The Star (Kenya), the curse of black tax in diaspora",
        "u": "https://www.the-star.co.ke/sasa/2025-09-06-society-talk-the-curse-of-black-tax-in-diaspora"
      },
      {
        "t": "Journal of Youth Studies (2025), navigating black tax and financial interdependence",
        "u": "https://www.tandfonline.com/doi/full/10.1080/13676261.2025.2518953"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged July 2026",
    "title": "Crowdfunding the disaster",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='12' y='14' width='86' height='82' rx='8' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><circle cx='55' cy='42' r='16' fill='#1C8C9B'/><path d='M55,50 C48,44 46,40 48,37 C50,34 55,36 55,38 C55,36 60,34 62,37 C64,40 62,44 55,50 Z' fill='#FFFFFF'/><rect x='24' y='68' width='62' height='10' rx='5' fill='#BFE3E2'/><rect x='24' y='68' width='40' height='10' rx='5' fill='#E2664A'/><rect x='24' y='84' width='30' height='5' rx='2.5' fill='#D7E2E6'/></svg>",
    "teaser": "When storms and eruptions hit, diasporas now open GoFundMe and GlobalGiving pages within hours. Platform giving has become the newest channel beside barrels and wire transfers, moving millions after Maria and Melissa.",
    "body": "The past decade added a new channel to the disaster playbook. Within hours of a hurricane or eruption, fundraising pages appear, opened by cousins abroad, church groups, and school alumni associations, and shared through the same feeds that carry the first photos of the damage. Millions moved through such pages after Hurricane Maria, and GoFundMe now runs a dedicated relief hub whenever a storm like Melissa strikes, routing donations to verified fundraisers. It is remittance behaviour wearing new clothes, fast, personal, and trust based, moving house to house while institutional pledges are still being drafted. The open question in the commentary is coverage, since platform giving follows networks and visibility rather than need.",
    "sources": [
      {
        "t": "GoFundMe, Hurricane Melissa relief hub",
        "u": "https://www.gofundme.com/c/act/hurricane-melissa"
      },
      {
        "t": "GlobalGiving, Caribbean hurricane relief fund",
        "u": "https://www.globalgiving.org/projects/hurricane-maria-caribbean-relief-fund/"
      },
      {
        "t": "Giving Compass, how crowdfunding is redefining disaster relief",
        "u": "https://givingcompass.org/article/how-gofundme-is-redefining-the-business-of-disaster-relief"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged July 2026",
    "title": "The price of sending money home",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><circle cx='52' cy='58' r='34' fill='#FFCC00' stroke='#993C1D' stroke-width='2.6'/><circle cx='80' cy='32' r='17' fill='#F6FBFB'/><text x='50' y='70' text-anchor='middle' font-family='Space Mono, monospace' font-size='32' fill='#993C1D'>$</text><text x='86' y='26' text-anchor='middle' font-family='Space Mono, monospace' font-size='13' fill='#993C1D'>%</text></svg>",
    "teaser": "Which app, whose promotional rate, who still queues at the agent on Saturday: diaspora group chats trade fee advice constantly, because sending 200 dollars home still costs about 6 percent, and a new US tax on cash transfers is pushing the talk toward phones.",
    "body": "Ask any diaspora group chat and the fee talk starts immediately: which app is cheapest this month, whose promotional rate is about to expire, who still queues at an agent on a Saturday because grandma trusts the counter. Public comparison sites built for exactly this conversation, like SendMoneyPacific, exist because the stakes are real. Sending 200 US dollars home still costs about 6 percent on average, double the global target, with cash and bank channels the dearest of all, and a new 1 percent US excise on cash based remittances from January 2026 is nudging even the loyal toward their phones.",
    "sources": [
      {
        "t": "SendMoneyPacific, the public fee comparison site diaspora communities use",
        "u": "https://sendmoneypacific.org/"
      },
      {
        "t": "World Bank, Remittance Prices Worldwide, the numbers behind the talk",
        "u": "https://remittanceprices.worldbank.org/"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged July 2026",
    "title": "The voice note economy",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='30' y='8' width='50' height='94' rx='9' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.6'/><line x1='46' y1='16' x2='64' y2='16' stroke='#0E4D5C' stroke-width='2'/><rect x='38' y='34' width='34' height='20' rx='9' fill='#BFE3E2'/><line x1='44' y1='41' x2='44' y2='47' stroke='#0E4D5C' stroke-width='2'/><line x1='49' y1='38' x2='49' y2='50' stroke='#0E4D5C' stroke-width='2'/><line x1='54' y1='40' x2='54' y2='48' stroke='#0E4D5C' stroke-width='2'/><line x1='59' y1='37' x2='59' y2='51' stroke='#0E4D5C' stroke-width='2'/><line x1='64' y1='41' x2='64' y2='47' stroke='#0E4D5C' stroke-width='2'/><rect x='46' y='62' width='26' height='16' rx='8' fill='#E2664A'/><polygon points='54,66 63,70 54,74' fill='#FFFFFF'/></svg>",
    "teaser": "WhatsApp voice notes asking for a money transfer are a TikTok genre of their own, a viral clip scolding the diaspora for sending only 100 US dollars ignited the entitlement debate, and Gleaner columnists now map the digital crossing of money home.",
    "body": "The request arrives as a voice note, and the voice note has become content. Jamaican TikTok runs thick with skits about the relatives who call only when Western Union closes, about the aunty reading a shopping list into WhatsApp, about the sender abroad juggling two jobs and a barrel. The debate turned serious after a viral clip of a woman berating the diaspora for sending small amounts, prompting Observer and Gleaner columns on entitlement, expectation, and what the diaspora owes. Under the comedy sits the real infrastructure of Jamaican remittances: phones, voice notes, and apps carrying both the money and the emotional negotiation around it.",
    "sources": [
      {
        "t": "Jamaica Observer, a voice from the diaspora: a culture of entitlement",
        "u": "https://www.jamaicaobserver.com/2022/10/09/a-voice-from-the-diaspora-a-culture-of-entitlement/"
      },
      {
        "t": "Jamaica Gleaner, sending home part II: the digital crossing",
        "u": "https://jamaica-gleaner.com/article/commentary/20260527/janiel-mcewan-sending-home-part-ii-digital-crossing"
      },
      {
        "t": "TikTok, Jamaican voice notes asking for money (public topic page)",
        "u": "https://www.tiktok.com/discover/jamaican-voice-notes-girl-asking-for-money"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged July 2026",
    "title": "The barrel, filmed",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><path d='M12,26 C28,16 56,16 72,26 L72,88 C56,98 28,98 12,88 Z' fill='#E2664A' fill-opacity='0.88' stroke='#993C1D' stroke-width='2.4'/><line x1='10' y1='44' x2='74' y2='44' stroke='#993C1D' stroke-width='2.4'/><line x1='10' y1='70' x2='74' y2='70' stroke='#993C1D' stroke-width='2.4'/><g transform='rotate(8 88 74)'><rect x='78' y='48' width='24' height='46' rx='5' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><circle cx='90' cy='64' r='6' fill='#E2664A'/></g></svg>",
    "teaser": "Packing a barrel for Jamaica is now a TikTok and YouTube genre: the multi-day ritual of tinned food, school shoes, and toothpaste filmed for millions, with comment sections debating whether the tradition is fading as cash apps take over.",
    "body": "The barrel is the remittance you can hold. For decades Jamaicans abroad have packed drums with groceries, clothes, and school supplies for Easter, back to school, and Christmas, and in the last decade the ritual went public: packing videos are a genre of their own on TikTok and YouTube, complete with reveal shots, cost breakdowns, and grandmothers inspecting the contents on camera. The comment sections carry the real debate, whether barrels still make sense as shipping costs climb and money apps deliver in minutes, and what is lost if the answer is no, because a barrel carries care in a way a transfer notification does not. Remittances in kind, long invisible in the statistics, now play to an audience of millions.",
    "sources": [
      {
        "t": "Jamaicans.com, the barrel from foreign",
        "u": "https://jamaicans.com/the-barrel-from-farin-foreign/"
      },
      {
        "t": "34th Street Magazine, packing barrels with care",
        "u": "https://www.34st.com/article/2024/11/love-sent-across-seas-caribbean-african-immigrants-penn-museum-center-for-experimental-ethnography"
      },
      {
        "t": "TikTok, packing a barrel to send to Jamaica (public topic page)",
        "u": "https://www.tiktok.com/discover/packing-a-barrel-to-send-to-jamaica"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged July 2026",
    "title": "After Melissa, who rebuilds and how",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><path d='M78,26 C78,12 62,6 50,11 C38,16 35,30 44,38 C51,44 63,42 66,34 C69,27 62,20 55,23' fill='none' stroke='#E2664A' stroke-width='4' stroke-linecap='round'/><polygon points='20,72 50,48 80,72' fill='#1C8C9B'/><rect x='27' y='72' width='46' height='30' fill='#1C8C9B'/><line x1='84' y1='84' x2='98' y2='74' stroke='#993C1D' stroke-width='3.4' stroke-linecap='round'/><rect x='94' y='68' width='12' height='8' rx='2' fill='#3D5560' transform='rotate(-35 100 72)'/></svg>",
    "teaser": "Months after Hurricane Melissa, the public conversation has moved from relief to reckoning: diaspora voices ask whether storms like this are the new planning baseline, and the generosity that moved faster than official channels comes with a demand for transparent recovery.",
    "body": "The storm has passed and the argument has started, much of it led by the diaspora itself. A Gleaner commentary by an Atlanta based diaspora attorney frames Melissa as a moment of reckoning rather than a routine recovery, asking whether storms of this force should be treated as exceptions or as the conditions Jamaica must now plan for, and diaspora community papers document the barrel drives, delegations, and rebuilding funds that moved faster than official channels. The generosity comes with a caveat the commentators state plainly: relief must be transparently and equitably managed or it risks becoming a source of division. Remittances themselves dipped when channels went down in October, then recovered as families abroad stepped in.",
    "sources": [
      {
        "t": "Jamaica Gleaner, a diaspora voice on Melissa and Jamaica's moment of reckoning",
        "u": "https://jamaica-gleaner.com/article/commentary/20260110/allan-alberga-hurricane-melissa-and-jamaicas-moment-reckoning"
      },
      {
        "t": "Nashville PRIDE, Jamaicans on island and in diaspora join hands to rebuild",
        "u": "https://pridepublishinggroup.com/2025/12/23/post-hurricane-melissa-jamaicans-on-island-and-in-diaspora-join-hands-to-rebuild/"
      },
      {
        "t": "Jamaica Gleaner, remittances slide as Melissa disrupts flows",
        "u": "https://jamaica-gleaner.com/article/news/20251231/jamaicas-remittances-slide-hurricane-melissa-disrupts-flows"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged July 2026",
    "title": "Misinale, filmed and posted",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='10' y='20' width='90' height='70' rx='8' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><rect x='24' y='56' width='44' height='26' fill='#1C8C9B'/><polygon points='18,56 46,36 74,56' fill='#0E4D5C'/><line x1='46' y1='24' x2='46' y2='36' stroke='#0E4D5C' stroke-width='2.6'/><line x1='40' y1='29' x2='52' y2='29' stroke='#0E4D5C' stroke-width='2.6'/><circle cx='84' cy='74' r='11' fill='#E2664A'/><polygon points='81,68 90,74 81,80' fill='#FFFFFF'/></svg>",
    "teaser": "Tongan church giving now lives online: misinale celebrations streamed and posted, United States congregations announcing six figure totals, worship teams and kato teu gift presentations turned into TikTok genres.",
    "body": "Misinale, the annual gift to the church, has always been public, announced aloud, celebrated with song. What the last decade added is the camera. Diaspora congregations from Oakland to Sydney stream their misinale services, post the worship sets, and share the totals: United Methodist news pages record single Tongan congregations raising more than 100,000 US dollars in a year. On TikTok, kato teu gift presentations and misinale hiva have become genres of their own, giving performed for the village at home as much as for the room. For a project asking how remittances and obligation interweave, the feeds are a running public record of the most organised giving system in the Pacific.",
    "sources": [
      {
        "t": "Pacific Northwest UMC, Tongan misinale celebrates financial giving",
        "u": "https://www.pnwumc.org/news/tongan-misinale-celebrates-financial-giving/"
      },
      {
        "t": "California-Nevada UMC, Tongan congregation gives 100,000 dollars",
        "u": "https://www.cnumc.org/newsdetails/bay-district-tongan-churches-120k-13997996"
      },
      {
        "t": "TikTok, Tongan church song and kato teu (public topic pages)",
        "u": "https://www.tiktok.com/discover/tongan-kato-teu"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged July 2026",
    "title": "Sending pa'anga, the island way",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><g transform='rotate(-6 55 55)'><path d='M14,34 h82 v14 a8,8 0 0 0 0,16 v14 h-82 v-14 a8,8 0 0 0 0,-16 Z' fill='#BFE3E2' stroke='#0E4D5C' stroke-width='2.4'/><line x1='72' y1='36' x2='72' y2='76' stroke='#0E4D5C' stroke-width='1.8' stroke-dasharray='4 4'/><circle cx='42' cy='56' r='12' fill='#FFCC00' stroke='#993C1D' stroke-width='2'/><text x='42' y='61' text-anchor='middle' font-family='Space Mono, monospace' font-size='12' fill='#993C1D'>$</text><text x='84' y='60' text-anchor='middle' font-family='Space Mono, monospace' font-size='9' fill='#0E4D5C' transform='rotate(90 84 56)'>TDB</text></g></svg>",
    "teaser": "Since 2017 Tonga Development Bank's 'Ave Pa'anga Pau voucher has moved tens of thousands of transfers from New Zealand and Australia at well below the usual cost. An island institution building its own remittance rails.",
    "body": "'Ave Pa'anga Pau means send money securely, and it is Tonga's own answer to the cost of remitting. Developed by the Tonga Development Bank with the World Bank Group and launched in 2017, the digital voucher lets Tongans in New Zealand and Australia pay local dollars into the bank and have family redeem pa'anga at home, cutting out the chain of cash agents whose fees eat into every pay packet. Tens of thousands of transfers have moved this way at costs well below the traditional operators. In a country where remittances run above 40 percent of GDP, a few percentage points of fees are national income, and the wider story is the trend: island institutions building their own rails rather than renting someone else's.",
    "sources": [
      {
        "t": "IFC, a new financial lifeline for Tongans",
        "u": "https://www.ifc.org/en/stories/2020/tonga-remittances-2020"
      },
      {
        "t": "EUDiF, the 'Ave Pa'anga Pau remittance voucher",
        "u": "https://diasporafordevelopment.eu/cpt_practices/ave-paanga-pau-remittance-voucher/"
      },
      {
        "t": "'Ave Pa'anga Pau, the service itself",
        "u": "https://www.avepaanga.co.nz/"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged July 2026",
    "title": "The seasonal work bargain",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><polygon points='96,14 62,26 78,32' fill='#3D5560'/><polygon points='78,32 82,42 88,26' fill='#8FA6AD'/><circle cx='48' cy='56' r='26' fill='#1C8C9B'/><circle cx='36' cy='50' r='5' fill='#E2664A'/><circle cx='58' cy='46' r='5' fill='#E2664A'/><circle cx='50' cy='66' r='5' fill='#E2664A'/><rect x='43' y='78' width='10' height='24' fill='#993C1D'/><line x1='16' y1='102' x2='92' y2='102' stroke='#EFE6D2' stroke-width='4'/></svg>",
    "teaser": "About 1,800 Tongans a year pick fruit in New Zealand and more head to Australia, and the money they send keeps the economy afloat. On Pacific radio and in island commentary the question has sharpened: who really benefits, and what happens to the villages managing without them.",
    "body": "Seasonal work schemes are the loudest remittance machine in the Pacific, and the loudest argument. On RNZ Pacific, labour voices argue Australia and New Zealand are the clear beneficiaries of their own schemes; in regional commentary, Pacific writers say their countries no longer want to be outposts that grow workers for someone else's orchards; and in the villages the conversation is about absent parents, split families, and farms with nobody left to work them. Around 1,800 Tongans a year travel under New Zealand's scheme alone, with more under Australia's, and with remittance dependence among the highest in the world, the pay packets they send home are national infrastructure.",
    "sources": [
      {
        "t": "RNZ Pacific, Pacific nations too dependent on seasonal worker schemes",
        "u": "https://www.rnz.co.nz/international/pacific-news/587380/pacific-nations-too-dependent-on-seasonal-worker-schemes-labour-expert-warns"
      },
      {
        "t": "The Conversation, Pacific nations no longer want to be the outposts that grow workers",
        "u": "https://theconversation.com/nz-wants-more-seasonal-workers-but-pacific-nations-no-longer-want-to-be-the-outposts-that-grow-them-217790"
      },
      {
        "t": "RNZ, government reviews the RSE visa scheme",
        "u": "https://www.rnz.co.nz/news/political/592721/government-reviews-rse-visa-scheme-report-calls-for-reform"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged July 2026",
    "title": "The anda in the feed",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='24' y='8' width='56' height='94' rx='9' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.6'/><rect x='34' y='48' width='36' height='26' rx='5' fill='#EFE6D2' stroke='#993C1D' stroke-width='2'/><ellipse cx='52' cy='48' rx='18' ry='6' fill='#FFFFFF' stroke='#993C1D' stroke-width='2'/><path d='M86,44 C82,40 81,37 83,35 C85,33 87,35 87,36 C87,35 90,33 91,35 C93,37 91,40 86,44 Z' fill='#E2664A'/><path d='M92,26 C89,23 88,21 90,19 C91,18 93,19 93,20 C93,19 95,18 96,19 C97,21 96,23 92,26 Z' fill='#E2664A' fill-opacity='0.7'/><line x1='40' y1='86' x2='64' y2='86' stroke='#BFE3E2' stroke-width='3'/></svg>",
    "teaser": "The grand mariage is now a TikTok genre: explainer videos under grandmariagecomorien and comorestiktok, ceremonies posted from Moroni and Marseille, and the press notes how the feeds fill every July and August.",
    "body": "The anda always had an audience; now it has a feed. TikTok explainers walk hundreds of thousands of viewers through the grand mariage, its codified gifts, its gold, its week of ceremonies, under hashtags that stitch Moroni to Marseille. Wedding season clips post from both shores, the taarab orchestras, the processions, the je viens home for the summer, and the comment sections carry the same generational debate the diaspora has in person: prestige and belonging on one side, the cost of it all on the other. Francophone press describes the season the same way, as a custom that fills July and August and an economy that visibly moves with it.",
    "sources": [
      {
        "t": "TikTok, a widely shared grand mariage explainer",
        "u": "https://www.tiktok.com/@media_dactualites/video/7280872008664108294"
      },
      {
        "t": "TikTok, mariage Comores (public topic page)",
        "u": "https://www.tiktok.com/discover/mariage-comores"
      },
      {
        "t": "Le Soleil, le grand mariage, rite d'une vie qui rythme juillet et aout",
        "u": "https://lesoleil.sn/actualites/societe-fait-divers/comores-le-grand-mariage-rite-dune-vie-qui-rythme-juillet-et-aout/"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged July 2026",
    "title": "The Sunday madjilissi goes online",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='18' y='18' width='74' height='52' rx='4' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.6'/><ellipse cx='55' cy='44' rx='24' ry='10' fill='#EFE6D2' stroke='#0E4D5C' stroke-width='1.6'/><circle cx='26.809221376422748' cy='38.527677706789305' r='3.4' fill='#3D5560'/><circle cx='47.23542864692438' cy='28.54518677937491' r='3.4' fill='#3D5560'/><circle cx='62.76457135307561' cy='28.545186779374905' r='3.4' fill='#3D5560'/><circle cx='83.19077862357724' cy='38.527677706789305' r='3.4' fill='#3D5560'/><circle cx='83.19077862357724' cy='49.4723222932107' r='3.4' fill='#3D5560'/><circle cx='40.00000000000001' cy='57.85640646055102' r='3.4' fill='#3D5560'/><circle cx='26.80922137642275' cy='49.4723222932107' r='3.4' fill='#3D5560'/><path d='M10,84 L18,70 h74 l8,14 Z' fill='#8FA6AD'/></svg>",
    "teaser": "More than 350 Comorian village associations in France run tontines and Sunday gatherings that finance mosques, schools, and water back home, and the decade's twist is the move onto public crowdfunding pages.",
    "body": "Beside the family transfer sits a second, collective economy. France counts more than 350 Comorian associations, most organised around a single village, and their Sunday madjilissi, tontine circles, and toirab evenings raise the sums that build what the state does not: mosques, classrooms, water systems, health posts. A toirab evening can gather thousands of euros, the larger madjlis ceremonies considerably more. The newest chapter is digital, with association fundraisers now running on public platforms like HelloAsso alongside the hall collections, making a very old solidarity visible to anyone with the link. It is development finance from below, village by village, and it rarely appears in any aid statistic.",
    "sources": [
      {
        "t": "Cairn, institutions et acteurs religieux chez les Comoriens de Marseille",
        "u": "https://www.cairn.info/revue-migrations-societe-2007-3-page-17.htm"
      },
      {
        "t": "HelloAsso, a Comorian association's public fundraising page",
        "u": "https://www.helloasso.com/associations/association-comorienne-culturelle-et-musulmane-de-marseille"
      },
      {
        "t": "Marseille, directory of Comorian village associations",
        "u": "https://maisondesassociations.marseille.fr/services/annuaire/association-de-la-diaspora-comorienne-de-foumbouni"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged July 2026",
    "title": "The Je viens season",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='18' y='34' width='74' height='56' rx='9' fill='#E2664A' stroke='#993C1D' stroke-width='2.6'/><path d='M42,34 v-12 h26 v12' fill='none' stroke='#993C1D' stroke-width='3.4'/><line x1='18' y1='52' x2='92' y2='52' stroke='#993C1D' stroke-width='2'/><circle cx='68' cy='70' r='10' fill='#FFCC00'/><line x1='81.0' y1='70.0' x2='85.0' y2='70.0' stroke='#FFCC00' stroke-width='2.6'/><line x1='77.1960474991736' y1='79.18872735436976' x2='80.02560057584239' y2='82.01602807879122' stroke='#FFCC00' stroke-width='2.6'/><line x1='68.01035224723954' y1='82.99999587811385' x2='68.01353755408246' y2='86.9999946098412' stroke='#FFCC00' stroke-width='2.6'/><line x1='58.81859861733993' y1='79.20336181242962' x2='55.99355203805991' y2='82.03516544702335' stroke='#FFCC00' stroke-width='2.6'/><line x1='55.000016487541984' y1='70.02070448791433' x2='51.00002156063183' y2='70.02707509958027' stroke='#FFCC00' stroke-width='2.6'/><line x1='58.78932971050045' y1='60.8259304113098' x2='55.955277313731365' y2='58.0031397686359' stroke='#FFCC00' stroke-width='2.6'/><line x1='67.96894328454034' y1='57.000037096959666' x2='67.95938737209121' y2='53.00004851140879' stroke='#FFCC00' stroke-width='2.6'/><line x1='77.16673197710949' y1='60.78202707425118' x2='79.98726489314319' y2='57.94572771248232' stroke='#FFCC00' stroke-width='2.6'/><rect x='30' y='62' width='18' height='12' rx='2' fill='#FFFFFF' opacity='0.85'/></svg>",
    "teaser": "Every French school summer the diaspora comes home. The Je viens arrive from Marseille with suitcases and savings, the islands fill with taarab orchestras and ceremonies, and for a few months the economy visibly runs on the season.",
    "body": "In Comoros the summer has its own name for people: the Je viens, the diaspora members who arrive from Marseille and Paris when French schools close. Their return is an economic season in itself, and Comorian media write about it that way. Flights fill, prices rise, houses get their long awaited roofs, and the calendar packs with weddings and celebrations animated by taarab orchestras, the very ceremonies a year of transfers has been saving toward. Community news sites reckon the diaspora's transfers near a fifth of the economy, supporting consumption all year round, but it is in July and August that the relationship between the two shores becomes something you can see on the street.",
    "sources": [
      {
        "t": "HabarizaComores, je viens de Marseille et je vais a Ouellah",
        "u": "https://www.habarizacomores.com/2018/11/comores-je-viens-de-marseille-et-je.html"
      },
      {
        "t": "Comores Infos, les transferts de la diaspora, un appui de developpement",
        "u": "https://www.comoresinfos.net/les-transferts-dargent-de-la-diaspora-un-appui-de-developpement-pour-les-comores/"
      }
    ]
  },
  {
    "place": "Across the islands",
    "k": "all",
    "when": "Logged July 2026",
    "title": "Aid retreats, remittances hold",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='30' y='26' width='56' height='38' rx='4' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M32,29 L58,50 L84,29' fill='none' stroke='#0E4D5C' stroke-width='2'/><line x1='14' y1='72' x2='96' y2='72' stroke='#EFE6D2' stroke-width='5'/><path d='M6,88 C22,80 38,88 54,84' fill='none' stroke='#BFE3E2' stroke-width='4' stroke-linecap='round'/><polygon points='16,94 4,90 14,84' fill='#BFE3E2'/></svg>",
    "teaser": "From island opinion pages to diaspora feeds, the talk of 2025 and 2026 is aid pulling back and family money holding the line. The commentary asks out loud how much weight remittances can carry as donors retreat.",
    "body": "The retreat of aid is not just a statistic, it is a running public argument. Development media and diaspora commentary spent 2025 and 2026 asking the same question in different accents: with donor budgets falling by the sharpest margin on record, how much weight can family money carry? Bloggers and columnists point out that remittances now dwarf aid several times over, diaspora writers answer with a mix of pride and fatigue, and island commentators debate what it means when households, not donors, are the steadiest financiers of island life. SIDS lean on both flows more than any other group of developing countries, which is exactly the interaction this project studies.",
    "sources": [
      {
        "t": "Devex, remittances outstrip aid three times over",
        "u": "https://www.devex.com/news/remittances-outstrip-aid-3-times-over-can-they-transform-development-107952"
      },
      {
        "t": "Center for Global Development blog, after aid cuts, make the most of remittances",
        "u": "https://www.cgdev.org/blog/after-aid-cuts-heres-how-make-most-out-remittances"
      },
      {
        "t": "ISS African Futures blog, rethinking remittances",
        "u": "https://futures.issafrica.org/blog/2025/Rethinking-remittances-the-overlooked-billions-sustaining-African-households"
      }
    ]
  },
  {
    "place": "Jamaica",
    "k": "jm",
    "when": "Logged July 2026",
    "title": "Taxing the lifeline",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='12' y='30' width='70' height='48' rx='4' fill='#FFFFFF' stroke='#0E4D5C' stroke-width='2.4'/><path d='M14,34 L47,60 L80,34' fill='none' stroke='#0E4D5C' stroke-width='2'/><path d='M78,72 L98,64 L102,74 L84,84 Z' fill='#FFCC00' stroke='#993C1D' stroke-width='1.8'/><circle cx='84' cy='75' r='2' fill='#993C1D'/><line x1='78' y1='72' x2='70' y2='66' stroke='#993C1D' stroke-width='1.6'/><text x='94' y='78' text-anchor='middle' font-family='Space Mono, monospace' font-size='10' fill='#993C1D' transform='rotate(-18 94 74)'>%</text></svg>",
    "teaser": "A new US law puts a one percent excise on money sent home from the United States, and the diaspora is pushing back hard, in columns, call-ins, and comment sections. Alongside the tax runs an older, franker conversation about trust and expectation.",
    "body": "The loudest remittance conversation in the Jamaican diaspora right now is a tax. Under a new US law, money sent home from the United States carries a one percent excise from the end of 2025, and diaspora voices, in newspaper columns, radio call-ins, and long comment threads, have called it devastating for the poorest receiving households. Alongside the tax debate runs an older, franker conversation that diaspora writers keep returning to: trust, barrels, whether money sent for school fees is spent on school fees, and what the sender is owed in return.",
    "sources": [
      {
        "t": "Jamaica Gleaner on the US remittance tax",
        "u": "https://jamaica-gleaner.com/article/news/20250704/impending-us-tax-remittances-expected-impact-jamaican-households-and"
      },
      {
        "t": "A diaspora commentary on remittances and expectation",
        "u": "https://leogilling.substack.com/p/the-jamaican-diaspora-remittances"
      }
    ]
  },
  {
    "place": "Tonga",
    "k": "to",
    "when": "Logged July 2026",
    "title": "The misinale question",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><rect x='22' y='58' width='56' height='36' fill='#1C8C9B'/><polygon points='14,58 50,30 86,58' fill='#0E4D5C'/><line x1='50' y1='14' x2='50' y2='30' stroke='#0E4D5C' stroke-width='3'/><line x1='42' y1='21' x2='58' y2='21' stroke='#0E4D5C' stroke-width='3'/><text x='88' y='40' text-anchor='middle' font-family='Fraunces, Georgia, serif' font-size='34' fill='#993C1D'>?</text></svg>",
    "teaser": "Tonga is the most remittance dependent country in the world, and community conversations keep circling the tension between kavenga, the web of family and church obligations, and saving for children's futures.",
    "body": "Tongan families in Auckland, Sydney, and Salt Lake City send home not only household remittances but misinale, the annual church donation given publicly and often competitively. The tension between kavenga, the web of family and church obligations, and saving for children's futures is argued out in the community's own spaces: Tongan community news sites in New Zealand cover church finance controversies at length, expatriate bloggers describe the collection season with affection and alarm in equal measure, and the debate resurfaces every giving season. Tonga is the most remittance dependent country in the world, so how these obligations are negotiated is not a private matter, it is the national economy.",
    "sources": [
      {
        "t": "Devpolicy blog, three questions on Tongan remittances",
        "u": "https://devpolicy.org/three-questions-on-tongan-remittances-20220720/"
      },
      {
        "t": "Kaniva Tonga, community news where church finance debates play out",
        "u": "https://www.kanivatonga.co.nz/2020/11/obituary-tokaikolo-church-leader-dogged-by-questions-over-finances-miracle-pills-and-departures-from-doctrine-will-be-buried-in-auckland/"
      },
      {
        "t": "A community blog on misinale season in Tonga",
        "u": "http://harrisonintonga.blogspot.com/2013/09/its-that-time-of-year-again.html"
      }
    ]
  },
  {
    "place": "Comoros",
    "k": "km",
    "when": "Logged July 2026",
    "title": "The price of the grand mariage",
    "art": "<svg viewBox='0 0 110 110' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'><circle cx='40' cy='66' r='16' fill='#FFCC00' stroke='#993C1D' stroke-width='2.2'/><circle cx='62' cy='74' r='16' fill='#FFCC00' stroke='#993C1D' stroke-width='2.2'/><circle cx='52' cy='52' r='16' fill='#FFCC00' stroke='#993C1D' stroke-width='2.2'/><text x='52' y='57' text-anchor='middle' font-family='Space Mono, monospace' font-size='13' fill='#993C1D'>$</text><path d='M12,22 C34,40 76,40 98,22' fill='none' stroke='#1C8C9B' stroke-width='2.4'/><polygon points='20,34.5 26,46.5 14,46.5' fill='#E2664A'/><polygon points='34,31.1 40,43.1 28,43.1' fill='#FFCC00'/><polygon points='48,27.7 54,39.7 42,39.7' fill='#1C8C9B'/><polygon points='62,27.7 68,39.7 56,39.7' fill='#E2664A'/><polygon points='76,31.1 82,43.1 70,43.1' fill='#FFCC00'/><polygon points='90,34.5 96,46.5 84,46.5' fill='#1C8C9B'/></svg>",
    "teaser": "From Marseille, money flows back to Grande Comore at a scale beyond what any donor sends, much of it toward the grand mariage, and a generational debate in the Comorian press and diaspora asks whether that wealth should build something else.",
    "body": "From Marseille, home to the largest Comorian community outside the islands, money flows back to Grande Comore on a scale beyond what any donor sends, and much of it funds the grand mariage, the customary marriage that secures full social standing and can cost the equivalent of tens of thousands of euros. The debate is fully public and fully Comorian: community news sites run reportage on weddings that sell for auction level sums in France, Comorian magazines weigh tradition and prestige against contemporary costs, and younger voices in the diaspora ask openly whether that wealth should go into productive investment instead, while others defend the anda as the social infrastructure that binds the diaspora to home.",
    "sources": [
      {
        "t": "HabarizaComores, reportage on the grand mariage among Comorians in France",
        "u": "https://www.habarizacomores.com/2013/03/le-mariage-ou-la-vente-aux-encheres.html"
      },
      {
        "t": "Masiwa Comores, le grand mariage entre tradition, prestige et defis contemporains",
        "u": "https://masiwa-comores.com/societe/le-grand-mariage-comorien-entre-tradition-prestige-et-defis-contemporains/"
      },
      {
        "t": "ritimo on the Comorian diaspora's contribution",
        "u": "https://www.ritimo.org/La-contribution-de-la-diaspora-a-la-vie-economique-et-sociale-du-pays-est"
      }
    ]
  }
];
