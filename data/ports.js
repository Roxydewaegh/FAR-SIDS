// FAR-SIDS project timeline ports and milestones. Three years, each an array in chronological order.
// Each entry: t = title, d = date label, s = the story shown on the card.
// Optional: l = short label under the dot ("|" splits it onto two lines).
// Optional: m = true marks a proposal milestone, drawn as a pennant with its code above the line.
// Optional: r = true marks a recurring reporting deadline, drawn as a gold triangle; c = the short code shown above it.
// Edit here and upload this one file to update the timeline room.
window.FARSIDS = window.FARSIDS || {};
FARSIDS.PORTS = {
  "2026": [
    { l: "Literature", t: "The systematic review begins", d: "June 2026, running through the year",
      s: "The project's first paper starts with a systematic review of what has already been studied on aid, remittances, and wellbeing in Small Island Developing States, following the PRISMA method, a standard that makes every search and screening decision transparent and repeatable. It maps which methods and models earlier studies used, and which variables they drew on, feeding the econometric analysis to come." },
    { l: "Training", t: "A summer and autumn of training", d: "July to December 2026",
      s: "Statistics courses with the University's IT Services in July lay the base for four Doctoral School workshops between October and December, covering quantitative methods, policy writing, leadership and project management, and integrated methods. Online courses run alongside, from household survey design with the World Bank to the financial inclusion elective with the Inter-American Development Bank." },
    { l: "Ethics", t: "The ethics application goes in", d: "end of August 2026",
      s: "Before any interviews can happen, the University of Malta and the review bodies of Jamaica, Tonga, and Comoros examine how the research treats the people in it: the questions asked, the consent given, the way answers are protected. The whole summer builds toward this application." },
    { r: true, c: "D.1.3", t: "First progress report", d: "15 September 2026",
      s: "The first trimestral progress report to the supervisor, Professor Stefano Moncada. One to two pages summarising the opening three months: the project management set up, the training under way, the systematic review, and the fieldwork preparation. Deliverable D.1.3, the first of the progress reports that recur every three months across the fellowship." },
    { l: "Teaching", t: "Teaching in two universities", d: "October and November 2026",
      s: "A teaching seminar within the Islands and Small States Institute's Master's programme in October, where students map how aid and remittances touch different livelihood assets, and a virtual guest seminar at the University of Hildesheim in Germany on 27 November." },
    { m: true, t: "M.5.1", d: "November 2026",
      s: "Milestone M.5.1: the data review is complete. The systematic review's search across the four databases is done, and the quantitative series that will feed the models, World Bank and OECD data for Jamaica, Tonga, and Comoros reaching back to 1980, are assembled and quality checked. From here the review knows which variables earlier studies used, and the models know which data they can carry." },
    { l: "Conference #1|(DevNet)", t: "The first paper travels to Wellington", d: "2 to 4 December 2026",
      s: "The systematic review is presented at DevNet 2026, the development studies conference hosted by Te Herenga Waka Victoria University of Wellington in New Zealand, delivered remotely from Malta." },
    { l: "Milestone|(M.1.1)", t: "The first milestone", d: "December 2026",
      s: "Month six of the fellowship. The Career Development Plan, signed in June and formally submitted on the EU Funding and Tenders Portal, the Data Management Plan reviewed with the University's Open Science Department, and this digital platform, all complete. Each remains a living document that evolves with the project." }
  ],
  "2027": [
    { l: "Approvals", t: "Approvals and translations", d: "early 2027",
      s: "Ethics approvals arrive from Malta and the three countries, and the research instruments are translated into Tongan, Shikomori, and French, so that every conversation in the field can happen in the language people actually speak." },
    { l: "MOOC #1", t: "The first course travels", d: "early 2027",
      s: "The massive open online course Bridging Cultures with Reciprocity, built over the winter, is offered to the partner universities in Jamaica, Tonga, and Comoros, teaching before asking to learn." },
    { m: true, t: "M.2.1", d: "February 2027",
      s: "Milestone M.2.1: training and transfer of knowledge at the host institution complete. The four Doctoral School workshops, the statistics groundwork, and both teaching seminars, at the Islands and Small States Institute and at the University of Hildesheim, are delivered and assessed within the first semester." },
    { m: true, t: "M.3.1", d: "March 2027",
      s: "Milestone M.3.1: the project's social media presence launches formally. Island Voices, Global Impact goes live across the project's channels, built on the content bank assembled since the first summer, with this website as its anchor." },
    { m: true, t: "M.3.2", d: "April 2027",
      s: "Milestone M.3.2: fieldwork preparation complete. Language practice in Tongan and Shikomori, research partnerships with the three universities formalised, and the case study sites selected. Everything the fieldwork needs before the first flight." },
    { l: "Fieldwork: Jamaica", t: "Fieldwork: Jamaica", d: "from April 2027",
      s: "Roughly two months with island communities in Jamaica, where the study design is tested before it travels onward. Interviews and focus groups lead, household surveys follow, and the stay closes with a secondment at The University of the West Indies, where a research seminar shares the emerging findings with Caribbean colleagues (D.6.1 to D.6.4)." },
    { l: "Fieldwork: Tonga", t: "Fieldwork: Tonga", d: "mid 2027",
      s: "The second stay, built on long standing research relationships, in the country where remittances are among the highest in the world as a share of the economy. The visit closes with a secondment at the University of the South Pacific, including a research seminar on integrating ethnographic and econometric methods (D.6.1 to D.6.4)." },
    { l: "Fieldwork: Comoros", t: "Fieldwork: Comoros", d: "from August 2027",
      s: "The final and least studied site, where the fieldwork is conducted in French and Shikomori. The stay closes with a secondment at the University of Comoros and a research seminar on aid effectiveness and remittance interactions (D.6.1 to D.6.4), and with it the fieldwork phase is complete." },
    { m: true, t: "M.4.1", d: "October 2027",
      s: "Milestone M.4.1: fieldwork, data dissemination, and secondments complete. Three countries, roughly two months each, interviews, focus groups, and household surveys reaching 250 to 300 families per country, each stay closed with a secondment and research seminar at the partner university." },
    { l: "Conference #2|(Adaptation Futures)", t: "The methodology paper in Cancún", d: "around October 2027",
      s: "The project's second paper, on the methodology and preliminary findings, is presented at the Adaptation Futures Conference in Cancún, Mexico." }
  ],
  "2028": [
    { l: "Econometrics", t: "The models come together", d: "early 2028",
      s: "Time series models for each country trace how aid and remittance flows have moved with wellbeing indicators, drawing on World Bank and OECD data reaching back to 1980, read through the Sustainable Livelihoods Framework alongside what island communities themselves said." },
    { m: true, t: "M.5.2", d: "early 2028",
      s: "Milestone M.5.2: econometric modelling and comparative data analysis complete. One model per country, results read against each other across the Caribbean, the Pacific, and the Indian Ocean, and against what communities themselves value." },
    { l: "Dissemination", t: "Findings reach the people they are about", d: "through spring 2028",
      s: "Policy briefs for governments, donors, and regional bodies, validated through stakeholder workshops across the three countries, and a newspaper or magazine article in each country, in the language its readers actually read. The dissemination plan promised early sharing, and this is where it happens." },
    { m: true, t: "M.2.2", d: "spring 2028",
      s: "Milestone M.2.2: the final digital database in open access. The project's research data, prepared and documented through the Data Management Plan, is deposited on drUM, the University of Malta's research data repository, open for others to build on." },
    { l: "MOOC #2", t: "Waves of Wealth launches", d: "spring 2028",
      s: "The second massive open online course, Waves of Wealth: Foreign aid, remittances, and livelihoods in SIDS, launches with comparative case studies from all three regions, completing the teaching promised across the fellowship." },
    { m: true, t: "M.6.1", d: "May 2028",
      s: "Milestone M.6.1: two-way knowledge transfer complete. Four research seminars delivered, two international conference presentations behind the project with a third committed, and both massive open online courses live." },
    { l: "Final report", t: "The fellowship closes", d: "14 June 2028",
      s: "The fellowship ends with its final report, the three research papers submitted to peer reviewed journals, and the MSCA evaluation questionnaire completed. The papers continue into publication beyond the closing date." },
    { l: "Conference #3|(ISISA)", t: "The results paper in Gozo", d: "just after the close, 2028",
      s: "The third paper, the project's results, is presented at the ISISA Islands of the World Congress in Gozo, an island of the very archipelago that hosted the fellowship. It falls just after the fellowship's closing date, committed and prepared within it." }
  ]
};
