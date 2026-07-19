const COMPANIES = {
  visotsky: {
    name: "Visotsky Inc — Business Booster Platform",
    role: "Product Manager (Head of Product function)",
    dates: "05/2023 – now"
  },
  appcake: {
    name: "AppCake",
    role: "Backend Project Manager (Delivery & Platform Lead)",
    dates: "09/2022 – 04/2023"
  },
  heartcore: {
    name: "HeartCore.app",
    role: "Fractional Head of Product",
    dates: "04/2022 – 06/2022"
  },
  rosneft: {
    name: "Rosneft & BP Loyalty Programs",
    role: "Senior Product Manager (Head of Product function, P&L Owner)",
    dates: "06/2019 – 08/2022"
  }
};

// Order controls display order within each company group.
const CASES = [
  {
    id: "visotsky-ai-support", company: "visotsky", tag: "AI Product Development",
    title: "AI-Powered Customer Support System",
    hook: "Built a knowledge base and vector-store AI assistant that resolves 85% of support requests autonomously — without growing the support team.",
    context: "Rapid user growth was pushing support load past what the existing manual team could sustain, with no headcount to spare.",
    role: "Owned the initiative end-to-end: structured knowledge from documentation, the codebase, and historical support conversations; designed the assistant's persona, tone, multilingual behavior (incl. Chinese), and safety guardrails.",
    impact: "85% of requests resolved autonomously. Support team size held flat through continued user growth.",
    scale: "Multilingual · vector store · 3-month human-verified rollout",
    images: [
      { src: "images/ai-support-assistant-widget.jpg", caption: "AI Assistant answering a product question" },
      { src: "images/ai-support-flow.jpg", caption: "Support routing & AI assistant flow" }
    ]
  },
  {
    id: "visotsky-ai-pipeline", company: "visotsky", tag: "AI Product Development",
    title: "AI-Assisted Development Pipeline",
    hook: "Co-designed a multi-agent development pipeline that let a 2-person engineering team out-ship what 5 engineers built the year before.",
    context: "Engineering capacity was a hard ceiling on roadmap speed, with no budget to grow the team.",
    role: "Co-designed and continuously calibrated the pipeline (research → business spec → technical spec → implementation → testing → code review → merge). Personally used it to ship a full Project Management module, an LMS MVP, a management reporting module, and dozens of smaller features.",
    impact: "4× task throughput vs. the prior comparable period. Core engineering team reduced from 5 to 2 without a drop in release stability.",
    scale: "Verified 4× throughput · 5→2 engineers · dozens of shipped features",
    images: [
      { src: "images/ai-pipeline-ci-cd.jpg", caption: "CI/CD pipeline: build, gates, and deploy" },
      { src: "images/ai-pipeline-dev-workflow.jpg", caption: "Dev workflow: Jira to production" }
    ]
  },
  {
    id: "visotsky-web", company: "visotsky", tag: "Business Booster Platform",
    title: "Business Booster Platform (Web)",
    hook: "Took over an unstable, unmonetized SaaS platform under a monetize-or-shut-down mandate and rebuilt it into a growing product.",
    context: "The platform — task, team, and business-process management for company leaders — had failed to find monetization or delivery stability across several prior teams.",
    role: "Rebuilt delivery process and product strategy from scratch; redesigned pricing into a tenure-based tiered model; ran full-cycle discovery-to-release using RICE/MoSCoW and JTBD research.",
    impact: "~20× ARR growth over 2 years without increasing churn; 2× MAU growth; monetization now covers ~60% of team operating costs.",
    scale: "B2B SaaS · task management, org chart, knowledge base, reporting",
    images: [
      { src: "images/web-login.jpg", caption: "Authorization screen" },
      { src: "images/web-dashboards.jpg", caption: "Dashboards & metrics" },
      { src: "images/web-myplan.jpg", caption: "Weekly task plan" },
      { src: "images/web-schedule.jpg", caption: "Team schedule" },
      { src: "images/web-tasks-calendar.jpg", caption: "Task calendar & reporting week" },
      { src: "images/web-orgchart.jpg", caption: "Org chart" }
    ]
  },
  {
    id: "visotsky-mobile", company: "visotsky", tag: "Business Booster Platform",
    title: "Business Booster Platform (Mobile)",
    hook: "Extended the platform to mobile for 24/7 task and team management, including market and unit-economics analysis for expansion.",
    context: "Leaders needed to manage tasks, teams, and reporting outside the desktop app.",
    role: "Owned the mobile product line: scoped the feature set, analyzed the US/Europe/CIS market opportunity, and modeled unit economics for the expansion case.",
    impact: "Shipped as part of the broader Business Booster growth behind the platform's ~20× ARR increase.",
    scale: "iOS & Android · task list, chat, calendar, company profile",
    images: [
      { src: "images/mobile-app-store-screens.jpg", caption: "App Store screens: tasks, metrics, and approvals" }
    ]
  },
  {
    id: "appcake-ios", company: "appcake", tag: "Fast MVP Launches",
    title: "10 iOS Utility Apps",
    hook: "Ran full-cycle delivery for 10 iOS utility apps — from a math solver to a mushroom identifier — with a 12-person dev + 4-PM team.",
    context: "A portfolio strategy of many small, fast-shipping utility apps needed a delivery lead who could keep quality and pace consistent across very different products.",
    role: "Promoted from iOS Project Manager to Backend Project Manager for delivery performance; managed 5 Project/Product Managers across iOS, Android, and Backend; owned the shared backend platform and APIs.",
    impact: "40+ mobile apps and 4 internal CRM systems launched in under 5 months.",
    scale: "Hidden-camera detector · math solver · resume builder · plant/mushroom ID · remote mouse · digital ruler",
    images: [
      { src: "images/appcake-digital-ruler.jpg", caption: "AR digital ruler & floor plan tool" },
      { src: "images/appcake-math-solver.jpg", caption: "Math solver: learn & quiz" },
      { src: "images/appcake-temp-mail.jpg", caption: "Temp Mail: disposable inbox" },
      { src: "images/appcake-remote-mouse.jpg", caption: "Remote mouse & keyboard for Mac" },
      { src: "images/appcake-resume-builder.jpg", caption: "Resume builder" },
      { src: "images/appcake-mushroom-id.jpg", caption: "Mushroom identifier" },
      { src: "images/appcake-plant-id.jpg", caption: "Plant identifier" }
    ]
  },
  {
    id: "heartcore", company: "heartcore", tag: "0→1 Launch",
    title: "HeartCore — Web3 Fitness App",
    hook: "Took a web3 health app from idea to MVP in a tight fractional engagement, building product operations from zero.",
    context: "An early-stage web3 (move-to-earn) app needed a product lead to set up process and ship a first version fast, part-time.",
    role: "Acting Head of Product on a fractional basis: roadmap, execution oversight, and management of 10 internal managers across design, marketing, and tech; owned early-stage budget and cost controls pre-revenue.",
    impact: "MVP delivered on a tight timeline, establishing the product and team processes the company built on afterward.",
    scale: "Gamified habit-building · blockchain rewards & NFTs",
    images: [
      { src: "images/heartcore-intro.jpg", caption: "Landing page: Get Healthier and Earn" },
      { src: "images/heartcore-app-progress.jpg", caption: "App: seasonal progress & rewards" },
      { src: "images/heartcore-nft-utilities.jpg", caption: "NFT tracksuits and their utilities" }
    ]
  },
  {
    id: "rosneft-virtual-card", company: "rosneft", tag: "National Loyalty Program",
    title: "Virtual Loyalty Cards — First in Russia",
    hook: "Launched Russia's first fully virtual loyalty card, replacing the physical card with a digital wallet pass.",
    context: "The loyalty program needed a mobile-first path to reduce reliance on physical cards at the pump and till.",
    role: "Owned the product end-to-end, including a high-stakes launch-week call that averted a holiday-season delay when an app store review put the go-live date at risk.",
    impact: "Delivered on time as Russia's first virtual loyalty card, ahead of a hard holiday-season deadline.",
    scale: "Apple Wallet & Google Pay integration · BP Club",
    images: [
      { src: "images/rosneft-virtual-card-wallet.jpg", caption: "Virtual loyalty card in Apple Wallet — Rosneft & BP Club" }
    ]
  },
  {
    id: "rosneft-mobile-fuel", company: "rosneft", tag: "Payments Infrastructure",
    title: "Mobile Fuel Payment — In-Car Contactless Checkout",
    hook: "Shipped one of the first in-car mobile fuel payment experiences in the world — pay from the driver's seat, no app-store queue, no walk to the till.",
    context: "Fuel payment still required a walk to the cashier; the goal was a genuinely contactless, in-car flow integrated directly with pump and till hardware.",
    role: "Led the product and a 25-person delivery team, integrating the mobile app with pump and point-of-sale systems and loyalty points.",
    impact: "Delivered as one of the first in-car contactless fuel payment experiences on the market — ahead of most competitors globally at the time.",
    scale: "25-person team · pump & POS integration · loyalty points",
    images: [
      { src: "images/rosneft-mobile-fuel-payment-apps.jpg", caption: "In-car fuel payment: Яндекс.Заправки & Мир Привилегий" }
    ]
  },
  {
    id: "rosneft-strategy", company: "rosneft", tag: "National Loyalty Program",
    title: "National Loyalty Program: Strategy & Growth",
    hook: "Set marketing and growth strategy for a national fuel-retail loyalty program run by a 20+ person team.",
    context: "The program needed a coherent strategy across acquisition, engagement campaigns, and partner promotions at national scale.",
    role: "Directed strategy and campaign planning across a 20+ person marketing function.",
    impact: "Grew active loyalty membership 15% month-over-month and sustained engagement through the COVID-19 period.",
    scale: "National fuel retail network",
    images: [
      { src: "images/rosneft-strategy-campaigns.jpg", caption: "Marketing campaigns & engagement promotions" }
    ]
  },
  {
    id: "rosneft-mobile-apps", company: "rosneft", tag: "Consumer Apps",
    title: "Rosneft & BP — Mobile Apps for Loyalty Users",
    hook: "Owned the consumer-facing mobile apps for both the Rosneft and BP loyalty programs — card, balance, rewards, and gamified engagement.",
    context: "Members needed a single mobile home for their card, balance, Apple Wallet pass, transaction history, and rewards.",
    role: "Product owner across both apps, aligning feature parity and brand-specific differences.",
    impact: "Delivered the primary mobile channel for the program's 20M+ customer base.",
    scale: "Rosneft (yellow) & BP Club (green) apps",
    images: [
      { src: "images/rosneft-bp-mobile-apps.jpg", caption: "App Store: АЗС Роснефть & BP Club" }
    ]
  },
  {
    id: "rosneft-websites", company: "rosneft", tag: "Consumer Web",
    title: "Loyalty Program Websites with User Accounts",
    hook: "Built the web hub for both loyalty programs — account management, station finder, and points exchange.",
    context: "Members needed a full-featured web alternative to the mobile apps, including a station-locator map for BP.",
    role: "Owned requirements, vendor/stakeholder alignment, competitive analysis, and QA across both sites.",
    impact: "Delivered as the primary web channel supporting the national loyalty program.",
    scale: "Rosneft & BP branded sites"
  },
  {
    id: "rosneft-game", company: "rosneft", tag: "Marketing / Web Game",
    title: "“Penalty Shootout” — World Cup 2018 Campaign",
    hook: "Shipped a full 3D web game with sound and PvP for Rosneft's FIFA World Cup 2018 campaign.",
    context: "The World Cup campaign needed an engaging, shareable activation beyond standard promotions.",
    role: "Owned the game from concept through full-cycle development, including 3D animation and audio.",
    impact: "Delivered as a flagship engagement piece of the national World Cup campaign.",
    scale: "PvP & vs-computer modes · full 3D + sound"
  },
  {
    id: "rosneft-crm", company: "rosneft", tag: "Enterprise Infrastructure",
    title: "Enterprise CRM: SAP, Terrasoft, Polymatica",
    hook: "Led the CRM and analytics stack migration underpinning the entire loyalty program, with a 60-person delivery team.",
    context: "The program's data and campaign infrastructure needed to move onto an enterprise-grade CRM/analytics stack capable of predictive personalization.",
    role: "Led the migration from Oracle to SAP Hybris Marketing, plus Terrasoft bpm'online and Polymatica analytics, across a 60-person team; separately secured $1M in VP-level budget approval for the related processing-center replacement.",
    impact: "Enabled predictive, card-linked personalization at national program scale.",
    scale: "60-person team · SAP Hybris · Terrasoft · Polymatica"
  },
  {
    id: "rosneft-cobrand", company: "rosneft", tag: "Partnerships",
    title: "Co-branded Bank & Loyalty Cards",
    hook: "Launched co-branded loyalty cards with multiple partner banks, extending rewards beyond the fuel network.",
    context: "The program needed a cashback/privilege product built jointly with banking partners to extend its reach.",
    role: "Owned the partnership product from launch through growth, coordinating with bank partners on card design and terms.",
    impact: "Extended the loyalty ecosystem into co-branded banking products with several partner banks.",
    scale: "Partner banks incl. MKB, RSHB, VBRR"
  },
  {
    id: "rosneft-partner-network", company: "rosneft", tag: "Partnerships",
    title: "Loyalty Partner Network — Integration & Growth",
    hook: "Built the affiliate network letting members earn points at partner businesses beyond the fuel network.",
    context: "Growth required earning occasions beyond the pump — everyday retail, auto services, and lifestyle brands.",
    role: "Owned partner integration and growth strategy across the affiliate network.",
    impact: "Expanded the program's earning surface across a multi-category partner network.",
    scale: "Retail, auto service & lifestyle partners"
  },
  {
    id: "rosneft-aeroflot", company: "rosneft", tag: "Partnerships",
    title: "Loyalty Points Exchange — Aeroflot Bonus",
    hook: "Built the API integration letting members convert Aeroflot Bonus miles into fuel loyalty points.",
    context: "Two large, separate loyalty ecosystems — airline miles and fuel points — needed a reliable two-way exchange mechanism.",
    role: "Owned the partnership integration between the Rosneft/BP and Aeroflot Bonus programs.",
    impact: "Delivered a live points-exchange product connecting two national-scale loyalty ecosystems.",
    scale: "API integration · Aeroflot Bonus"
  }
];
