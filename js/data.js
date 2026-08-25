// ============================================================
// Project data — edit this file to add/update dashboard projects.
// `bars` is an array of relative heights (0-100) used to draw a
// lightweight CSS bar-chart on the card, so every project reads
// as data even before you swap in a real screenshot.
// ============================================================

const PROJECTS = [
  {
    id: "sales-kpi",
    title: "Anwar Cement — Sales Analytics Dashboard",
    tag: "Power BI",
    category: "power-bi",
     image: "assets/images/anwer-project.png",
    summary: "Built a Power BI dashboard to turn sales data into actionable insights across regions, products, sales reps, targets, and seasonal trends.",
    points: [
      "Analyzed regional, product, and sales-rep performance in Power BI to uncover revenue drivers, performance gaps, seasonal trends, and opportunities for action.",
      "Cut manual report preparation time by 40% by automating the Excel-to-Power BI refresh pipeline.",
      "Used by leadership to track daily sales operations and flag underperforming regions early."
    ],
    tools: ["Power BI", "DAX","Power Query","Data Storytelling","Excel"]
  },
   {
    id: "sales-kpi-medical",
    title: "Dynamic Hospital Management System Dashboard! ",
    tag: "Power BI",
    category: "power-bi",
     image: "assets/images/medical.png",
    summary: "I created this dashboard to provide a quick, comprehensive view of a hospital's performance, enabling administrators to make data-driven decisions that enhance both operational efficiency and patient care.",
    points: [

  "Analyzed 1,995 patient records with 992 admissions, identifying seasonal admission peaks to support staffing, bed capacity, and resource planning.",

  "Identified an average wait time of 39.98 minutes and satisfaction score of 6.49/10, highlighting opportunities to improve patient experience and operational efficiency.",

  "Analyzed department demand and patient demographics to identify high-demand services and support targeted resource allocation and healthcare planning."

],

tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Data Visualization"]
  },
  {
    id: "product-analysis",
    title: "Maven Movies — SQL Business Analytics",
    tag: "SQL",
    category: "SQL",
    image: "assets/images/sql.jpg",
    summary: "Analyzed rental, customer, inventory, staff, and revenue data using SQL to uncover key business insights, including top customers, seasonal demand, revenue by market, and unrented inventory.",
    points: [
      "Queried and cleaned raw transactional data with SQL joins and window functions.",
      "Built pivot-table driven summaries segmented by product line, region, and month.",
      "Findings presented to stakeholders to support product-mix decisions."
    ],
    tools: ["MySQL", "JOINs", "GROUP BY","Aggregations","CASE"]
  },
  
  {
    id: "hms-analysis",
    title: "Shawpno — Monthly Sales Analytics Dashboard",
    tag: "Power BI",
    category: "power-bi",
     image: "assets/images/Shawpno_daseboard.png",
    summary: "Built a Power BI dashboard analyzing sales, profit, margins, product categories, divisions, and outlet performance to identify high-margin growth opportunities and profitability risks.",
    points: [
      "Analyzed 436.78M in sales and 76.74M profit to uncover winning categories, margin drivers, and profitability leaks across products and divisions.",
      "Turned sales data into actionable insights by identifying high-performing categories, profitable divisions, outlet contributions, and margin risks, helping decision-makers focus on sustainable growth.",
      "analyzing sales, profit, margins, product categories, divisions, and outlet performance to identify high-margin growth opportunities and profitability risks."
    ],
    tools: ["Power BI", "DAX","Power Query","Data Storytelling","Excel"]
  },
  {
    id: "capex-tracker",
    title: "Website Analytics Dashboard – Power BI",
    tag: "Power BI",
    category: "power-bi",
     image: "assets/images/Website Analytics Dashboard.png",
    summary: "Built a Power BI dashboard analyzing website traffic, user behavior, acquisition channels, engagement, and conversion performance to uncover opportunities for improving customer journeys and increasing conversions.",

points: [

  "Tracked daily, weekly, and monthly traffic trends while analyzing acquisition sources such as organic, social, paid, and referral channels.",

  "Built a conversion funnel from visits to engagement and purchases, identifying drop-off points, high-performing customer segments, and underperforming marketing channels.",

  "Analyzed engagement, landing and exit pages, geography, demographics, and device usage to support targeted campaigns, UX improvements, and conversion optimization."

],

tools: ["Power BI", "DAX", "Power Query", "Google Analytics", "Excel", "Data Storytelling"]
  },
  
  {
    id: "looker-overview",
    title: "Cargo Shipments Excel Dashboard – Logistics Analytics",
    tag: "Excel/Google Sheets",
    category: "sheets",
    image: "assets/images/large_cargo_shipments_dashboard.png",
    summary: "Built an interactive Excel dashboard for cargo and shipping analytics, providing clear insights into shipment volume, cargo materials, charterers, importing countries, vessel status, and operational efficiency.",

points: [

  "Tracked monthly shipments and total tonnage while analyzing annual cargo trends and material-level performance.",

  "Identified the top 5 charterers and importing countries, helping evaluate key partners and market distribution.",

  "Analyzed vessel status and average waiting hours with interactive slicers to support route optimization, scheduling efficiency, and data-driven logistics decisions."

],

tools: ["Excel", "Pivot Tables", "Slicers", "Data Analysis", "Dashboard Design"]
  },
  {
    id: "looker",
    title: "Logistics Transportation Management dashboard",
    tag: "Excel/Google Sheets",
    category: "sheets",
    image: "assets/images/Logistics Transportation Management dashboard.png",
    summary: "Built a logistics dashboard analyzing driver costs, trip volumes, expenses, and fleet efficiency to identify cost risks and operational improvement opportunities",

points: [

  "Tracked monthly shipments and total tonnage while analyzing annual cargo trends and material-level performance.",

  "Identified the top 5 charterers and importing countries, helping evaluate key partners and market distribution.",

  "Analyzed vessel status and average waiting hours with interactive slicers to support route optimization, scheduling efficiency, and data-driven logistics decisions."

],

tools: ["Excel", "Pivot Tables", "Slicers", "Data Analysis", "Dashboard Design"]
  },
 {
    id: "looker-dash",
    title: "Super shop sales_Dashboard",
    tag: "Excel/Google Sheets",
    category: "sheets",
    image: "assets/images/Super shop sales_Dashboard.png",
    summary: "Designed this Excel-based interactive dashboard to provide a comprehensive view of business performance across multiple dimensions — including revenue, profitability, customer behaviour, and regional insights.",

points: [

  "Identified Shortbread as the most profitable brand and San Antonio as the top-performing location, highlighting key revenue and profit drivers.",

  "Analyzed customer demographics and found the 30–44 and 60–74 age groups as major contributors to overall revenue.",

  "Compared payment methods, weekday vs. weekend sales, gender, and price categories to uncover customer behavior patterns and support targeted sales strategies."

],

tools: ["Excel", "Pivot Tables", "Slicers", "Data Visualization", "Dashboard Design"]
  },
  {
    id: "pnl-tracker",
    title: "P&L Tracker",
  tag: "Excel/Google Sheets",
    category: "sheets",
    bars: [30, 44, 38, 62, 52, 70, 45],
    summary: "One of three finance trackers built for the leadership team at Boardwalk Wealth.",
    points: [
      "Designed a centralized profit & loss tracker used directly by the finance team and COO.",
      "Structured formulas and named ranges to keep the sheet stable as new months were added.",
      "Reduced back-and-forth by giving finance a single source of truth for reporting.",
    "Handled confidential financial records and ensured all data was organized, accessible, and up-to-date for leadership."
    ],
    tools: ["Google Sheets", "Financial Reporting"]
  }
];

const TESTIMONIAL = {
  quote: "Akib turned a pile of spreadsheets into a dashboard our whole team actually checks every morning. That shift alone changed how we make decisions.",
  name: "Reporting Lead",
  context: "Charg, cross-functional stakeholder"
};
