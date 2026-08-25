// ============================================
// BUDGET BUILDER
// MONTH 1 + MONTH 2
// ============================================


// ============================================
// BRAND ICONS
//
// Securityplus brand SVGs (Font Awesome Sharp
// Light style, single-color paths with no fill
// set — color comes from the page's `svg { fill:
// ... }` rule, per the brand guide). Bucket and
// expense data below reference these by key, not
// by raw markup, since a couple of small spots
// (the bill-preview bucket tag) show the bucket
// NAME only and never render an icon at all.
//
// "dollar" is a neutral placeholder for New
// Clothes / Concert Ticket — Kayla doesn't have a
// dedicated shopping/ticket icon yet. Swap those
// two out once she exports one.
// ============================================

const ICON_SVGS = {

    car: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.97 140"> <g id="Layer_3" data-name="Layer 3"> <rect x="115" y="77.51" width="24.97" height="10"/> <rect x="20" y="75.01" width="24.97" height="10"/> <path d="M140,120.01H19.99s-.03,19.99-.03,19.99h-9.96s0-19.99,0-19.99L0,119.98V50.03s14.72-.05,14.72-.05L31.34,0h97.17s16.7,49.97,16.7,49.97l14.76.05v69.95s-10,.04-10,.04v19.98s-9.97,0-9.97,0v-19.99ZM134.64,50.01l-13.15-40.01H38.59s-13.3,40-13.3,40h109.35ZM104.97,85.01v24.99s45.03,0,45.03,0v-50s-140.03,0-140.03,0v50s45.03,0,45.03,0v-25.01s49.98.01,49.98.01ZM95,95.01h-30.03v15h30.03v-15Z"/> </g> </svg>`,

    dollar: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.84 138.36"> <g id="Layer_3" data-name="Layer 3"> <path d="M57.87,136.07c-20.64,4.62-38.84,2.03-57.87-5.74V8.06s10.98,4.22,10.98,4.22c16.62,6.39,34.41,6.4,51.59,1.77l18.7-5.79c7.47-2.31,14.6-4.54,22.23-6.3,19.83-4.1,37.78-1.61,56.33,6.01v122.38c-20.16-9.11-39.02-11.73-60.24-6.79l-21.49,6.55-20.24,5.97ZM63.19,124.37l24.79-7.93c10.53-3.17,21.05-5.07,31.89-5.46,1.74-15.42,14.69-26.9,30.01-26.8l-.02-45.03c-16.49-.23-29.59-13.04-30.01-29.2-8.11.12-15.45,1.78-23.02,3.87l-26.86,8.61c-9.91,3.04-19.76,4.54-30.4,4.85-1.46,15.26-14.32,26.86-29.62,26.83v45.01c16.51.28,29.55,13.24,29.91,29.36,7.9-.44,15.4-1.82,23.32-4.1ZM149.87,14.69c-6.81-2.21-13.15-3.52-20.07-4.4.93,10.61,9.17,18.64,20.06,18.82v-14.42ZM29.81,26.62c-7.16-.8-13.16-2.05-19.84-4.02v21.51c10.33-.06,18.76-7.54,19.84-17.48ZM149.87,115.72v-21.55c-10.41,0-18.51,7.51-19.7,17.46,6.7.77,12.9,2.06,19.7,4.09ZM29.91,127.82c-1.16-11.06-9.43-18.43-19.93-18.68l.03,14.45c6.77,2.18,13.11,3.6,19.9,4.23Z"/> <path d="M103.24,87.67c-5.21,11.34-17.12,19.1-29.16,15.61-7.57-2.2-13.53-7.43-17.07-14.51-7.85-15.73-5.78-36.67,7.3-48.46,8.15-7.34,19.64-8.27,28.62-1.91,14.96,10.59,17.95,32.64,10.31,49.27ZM88.8,90.43c10.79-9.91,11.26-29.48,1.87-40.72-2.79-3.33-6.31-5.4-10.28-5.53-4.19-.13-7.86,1.72-10.78,4.91-9.63,10.55-9.57,29.32-.05,40.02,5.18,5.82,13.26,6.8,19.24,1.31Z"/> </g> </svg>`,

    emergency: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.97 141.86"> <g id="Layer_3" data-name="Layer 3"> <g> <rect y="51.86" width="29.97" height="10"/> <rect x="170" y="51.86" width="29.97" height="10"/> <rect x="158.64" y="6.78" width="32.73" height="10.22" transform="translate(13.16 79.52) rotate(-26.57)"/> <rect x="19.85" y="-4.34" width="10.29" height="32.42" transform="translate(3.2 28.92) rotate(-63.43)"/> <path d="M169.97,141.86H30.01s-.01-50-.01-50h20s.11-41.52.11-41.52c.05-17.65,10.25-33.48,25.57-42.11C91.51-.69,110.7-.18,126.35,9.54c14.46,8.98,23.62,25,23.62,42.89v39.42s20.01.02,20.01.02v49.99ZM140.01,91.85l-.08-40.08c-.05-24.5-21.57-43.02-45.83-39.46-18.96,2.78-33.99,18.68-34.04,38.12l-.1,41.43h80.05ZM160,101.86H39.97v30h120.03v-30Z"/> <path d="M104.97,31.81c-14.13.31-24.82,11.16-25.05,25.03h-9.97c.12-19.26,15.4-34.91,34.99-34.96l.02,9.93Z"/> </g> </g> </svg>`,

    food: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.03 174.98"> <g id="Layer_3" data-name="Layer 3"> <g> <path d="M14.09,85.72l14.6,59.22,26.31.06v9.97s-34.09.03-34.09.03L0,71.35l8.98-4.22c4.06,5.43,8.85,9.48,14.69,13.01,11.27,6.47,23.94,9.84,37.22,9.84l-4.87,9.92c-14.95-.95-29.07-5.63-41.93-14.19Z"/> <g> <path d="M45.02,72.54c-3.59-.76-6.69-1.99-9.97-3.57V0s9.98,0,9.98,0v72.54Z"/> <path d="M85.03,67.89l-6.19,3.75c-.83.5-2.41.81-3.78.89V5s9.97,0,9.97,0v62.88Z"/> <rect x="55.05" y="14.98" width="9.97" height="60"/> <rect x="15.05" y="14.98" width="9.97" height="40"/> <rect x="95.05" y="14.98" width="9.97" height="40"/> </g> <g> <circle cx="119.97" cy="95" r="4.94"/> <path d="M132.58,86.28c-20.43-4.14-43.14,1.43-52.58,20.88l.03,12.81h-9.97s-.03-15.11-.03-15.11c11.58-27.61,44.9-35.39,71.54-26.3,12.97,4.43,23.06,13.94,28.45,26.32v15.09s-9.97,0-9.97,0v-12.81c-5.41-10.85-15.5-18.46-27.47-20.89Z"/> <circle cx="99.97" cy="105" r="4.94"/> <polygon points="160.04 150 170.03 149.98 170.02 174.98 70.06 174.98 70.05 149.99 80.02 149.98 80.02 164.98 160.05 164.98 160.04 150"/> <circle cx="139.97" cy="105" r="4.94"/> <rect x="70.05" y="129.98" width="99.97" height="10"/> </g> </g> </g> </svg>`,

    movie: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.82 164.58"> <g id="Layer_3" data-name="Layer 3"> <g> <path d="M119.92,105.45l9.97-3.41v52.63s-109.87,0-109.87,0v-52.54c3.46,1.4,6.28,2.37,9.95,3.26l.02,39.3h89.94s0-39.24,0-39.24Z"/> <polygon points="145.03 129.55 169.86 146.02 169.87 83.59 144.97 99.9 144.91 88.21 179.82 64.89 179.82 164.58 144.9 141.36 145.03 129.55"/> <path d="M105.96,89.67l-61.68.05c-14.41.01-27.58-7.46-35.44-18.13C-.3,59.19-2.32,43.92,2.62,29.99,7.56,16.04,19.01,5.82,31.95,1.95c15.46-4.62,31.21-.88,42.98,9.6,16.1-14.51,40.09-15.4,57.19-2.33,17.07,13.05,22.68,36.33,12.84,55.92-7.32,14.58-22.08,24.52-39,24.53ZM81.93,18.58l-7.07,6.35-6.14-5.63c-11.68-10.7-28.82-12.51-42.51-3.92-12.87,8.07-19.29,23.98-14.83,39.35,4.09,14.09,17.24,25.02,32.91,25.04l60.32.06c15.67.02,29.2-10.16,33.6-24.35,4.73-15.25-1.27-31.27-13.97-39.68-13.26-8.78-30.62-7.71-42.3,2.78Z"/> <path d="M62.35,44.87c0,9.61-7.8,17.41-17.42,17.41s-17.42-7.79-17.42-17.41,7.8-17.41,17.42-17.41,17.42,7.79,17.42,17.41ZM52.38,44.88c0-4.11-3.34-7.45-7.46-7.45s-7.46,3.33-7.46,7.45,3.34,7.45,7.46,7.45,7.46-3.33,7.46-7.45Z"/> <path d="M122.29,44.87c0,9.61-7.8,17.41-17.42,17.41s-17.42-7.79-17.42-17.41,7.8-17.41,17.42-17.41,17.42,7.79,17.42,17.41ZM112.32,44.88c0-4.11-3.34-7.45-7.46-7.45s-7.46,3.33-7.46,7.45,3.34,7.45,7.46,7.45,7.46-3.33,7.46-7.45Z"/> </g> </g> </svg>`,

    phone: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 109.88 159.71"> <g id="Layer_3" data-name="Layer 3"> <path d="M109.88,0v159.71H0V0h109.88ZM99.91,9.98H9.96v139.75h89.95V9.98Z"/> <rect x="39.96" y="124.77" width="29.95" height="9.98"/> </g> </svg>`,

    savings: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.97 160"> <g id="Layer_3" data-name="Layer 3"> <path d="M149.97,160H.01s-.01-29.53-.01-29.53c1.05-26.81,12.71-51.72,32.24-69.94l19.2-17.64L29.99,0h89.86s-21.44,42.85-21.44,42.85l20.82,19.14c19.64,19.16,30.73,44.97,30.72,72.48l.02,25.53ZM88.67,39.97l14.94-29.96h-57.38s15.01,30.01,15.01,30.01l27.43-.05ZM140.01,150l-.06-15.81c-.03-23.65-9.12-45.86-25.45-62.99l-22.9-21.2h-33.27s-17.76,16.35-17.76,16.35c-18.32,16.16-29.39,38.83-30.48,63.34l-.12,20.3h130.05Z"/> <path d="M79.97,132.49h-9.96s-.02-7.5-.02-7.5h-12.49s.02-9.97.02-9.97l23.71-.06c2.05,0,3.5-2.21,3.64-3.7.17-1.85-.81-4.41-3-4.82l-14.72-2.73c-7.63-1.42-12.79-7.9-12.11-15.44.66-7.33,6.87-13.37,14.94-13.24l.04-7.53h9.95s0,7.5,0,7.5h10.01s-.01,10.01-.01,10.01h-20.25c-2.46-.01-4.45,1.55-4.73,3.84-.29,2.42,1.28,4.47,3.89,4.95l14.39,2.64c7.48,1.37,12.42,8.43,11.53,15.74s-6.89,12.92-14.79,12.8l-.02,7.52Z"/> </g> </svg>`,

    tools: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.56 176.45"> <g id="Layer_3" data-name="Layer 3"> <path d="M141.6,174.72l-49.84-49.8-.02-32.8-26.84-27.19h-28.08S6.78,19.94,6.78,19.94L26.71,0l45,29.97.04,27.74,27.18,27.15,32.73.05,49.9,49.87-39.96,39.93ZM61.78,54.93v-19.66S28.06,12.82,28.06,12.82l-8.21,8.45,22.21,33.66h19.73ZM167.57,134.77l-39.98-39.93-25.88.02v25.84s39.99,39.95,39.99,39.95l25.87-25.89Z"/> <path d="M152.27,84.22c9.04-11.2,11.5-25.68,7.47-40.09l-25.84,25.77h-27.17s.02-26.92.02-26.92l25.87-25.8c-16.29-5.45-33.91-.42-45.74,12.45l-.18-13.34c18.11-13.94,42.98-15.3,62.61-1.74l-32.59,32.61v12.79s13.13-.06,13.13-.06l32.43-32.41c13.48,19.48,12.21,45.25-2.87,63.62l-7.13-6.87Z"/> <polygon points="76.87 131.38 31.77 176.45 24 168.73 0 144.65 3.37 141.5 46.97 97.87 61.69 83.03 68.77 90.27 14.22 144.76 31.77 162.54 76.54 117.85 76.87 131.38"/> </g> </svg>`,

    tv: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.81 149.72"> <g id="Layer_3" data-name="Layer 3"> <rect x="39.96" y="139.74" width="99.88" height="9.98"/> <path d="M179.81,0v119.78H0V0h179.81ZM169.85,9.98H9.96v99.82h159.89V9.98Z"/> </g> </svg>`,

    wallet: `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.81 129.77"> <g id="Layer_1-2" data-name="Layer 1"> <ellipse cx="119.81" cy="74.87" rx="7.43" ry="7.42"/> <polygon points="149.85 29.95 30.02 29.95 30.02 19.97 159.81 19.97 159.8 129.77 0 129.77 0 0 149.75 0 149.75 9.98 9.94 9.99 9.96 119.79 149.85 119.79 149.85 29.95"/> </g> </svg>`,

};


function iconMarkup(key) {

    return ICON_SVGS[key] || "";

}



// ============================================
// GAME DATA
//
// Every expense has a "bucket" — the ONLY
// bucket that can pay for it normally. If that
// bucket is short, money can be borrowed from
// another bucket, but that costs the player
// something later (see handleExpense).
//
// "optional: true" marks a discretionary
// expense — the player is asked "want to do
// this?" before it costs anything. Declining
// has no penalty. Everything else is an
// obligation: it happens whether the player
// likes it or not, and the only choice is how
// to cover it.
// ============================================

const months = {

    // ==========================================
    // MONTH 1
    // ==========================================

    1: {

        income: 600,

        title: "Your First Paycheck",

        description:
            "You've got your first paycheck. Decide what expenses matter and build a budget.",

        buckets: [

            {
                id: "bills",
                name: "Bills",
                icon: "wallet",
                description: "Bills & payments"
            },

            {
                id: "transportation",
                name: "Transportation",
                icon: "car",
                description: "Gas & car costs"
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                description: "Food & drinks"
            },

            {
                id: "fun",
                name: "Fun",
                icon: "movie",
                description: "Entertainment"
            },

            {
                id: "subscriptions",
                name: "Subscriptions",
                icon: "tv",
                description: "Streaming & memberships"
            },

            {
                id: "savings",
                name: "Savings",
                icon: "savings",
                description: "Money for your future"
            },

            {
                id: "emergency",
                name: "Emergency",
                icon: "emergency",
                description: "Unexpected expenses"
            }

        ],

        expenses: [

            {
                icon: "phone",
                title: "Phone Bill",
                description:
                    "Your monthly phone bill is due.",
                amount: 40,
                bucket: "bills",
                fixed: true
            },

            {
                icon: "tv",
                title: "Streaming Subscription",
                description:
                    "Your streaming subscription renews automatically.",
                amount: 10,
                bucket: "subscriptions",
                fixed: true
            },

            {
                icon: "car",
                title: "Gas",
                description:
                    "You need gas to get around.",
                amount: 40,
                bucket: "transportation"
            },

            {
                icon: "food",
                title: "Groceries",
                description:
                    "You need to restock the fridge.",
                amount: 30,
                bucket: "food"
            },

            {
                icon: "food",
                title: "Fast Food",
                description:
                    "Your friends want to grab fast food together.",
                amount: 15,
                bucket: "food",
                optional: true
            },

            {
                icon: "movie",
                title: "Movie Night",
                description:
                    "There's a new movie out — friends want to go.",
                amount: 20,
                bucket: "fun",
                optional: true
            },

            {
                icon: "car",
                title: "More Gas",
                description:
                    "Your tank's running low again.",
                amount: 35,
                bucket: "transportation"
            },

            {
                icon: "food",
                title: "Dinner Out",
                description:
                    "A friend invites you to dinner out.",
                amount: 25,
                bucket: "food",
                optional: true
            },

            {
                icon: "tools",
                title: "Car Maintenance",
                description:
                    "Your car needs routine maintenance.",
                amount: 75,
                bucket: "transportation"
            },

            {
                icon: "emergency",
                title: "Unexpected Expense",
                description:
                    "Something unexpected came up.",
                amount: 50,
                bucket: "emergency",
                surprise: true
            }

        ]

    },


    // ==========================================
    // MONTH 2
    // ==========================================

    2: {

        income: 2000,

        title: "More Responsibility",

        description:
            "You're earning more money now, but you've also got more responsibilities.",

        buckets: [

            {
                id: "bills",
                name: "Bills",
                icon: "wallet",
                description: "Rent, utilities & phone"
            },

            {
                id: "transportation",
                name: "Transportation",
                icon: "car",
                description: "Gas, insurance & car costs"
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                description: "Groceries & eating out"
            },

            {
                id: "subscriptions",
                name: "Subscriptions",
                icon: "tv",
                description: "Streaming & memberships"
            },

            {
                id: "fun",
                name: "Fun",
                icon: "movie",
                description: "Entertainment & shopping"
            },

            {
                id: "savings",
                name: "Savings",
                icon: "savings",
                description: "Money for your future"
            },

            {
                id: "emergency",
                name: "Emergency",
                icon: "emergency",
                description: "Unexpected expenses"
            }

        ],

        expenses: [

            {
                icon: "wallet",
                title: "Rent",
                description:
                    "Your monthly rent payment is due.",
                amount: 400,
                bucket: "bills",
                fixed: true
            },

            {
                icon: "car",
                title: "Car Insurance",
                description:
                    "Your monthly car insurance payment is due.",
                amount: 120,
                bucket: "transportation",
                fixed: true
            },

            {
                icon: "phone",
                title: "Phone Bill",
                description:
                    "Your phone bill is due.",
                amount: 60,
                bucket: "bills",
                fixed: true
            },

            {
                icon: "tv",
                title: "Streaming Subscription",
                description:
                    "Your streaming subscription renewed.",
                amount: 15,
                bucket: "subscriptions",
                fixed: true
            },

            {
                icon: "wallet",
                title: "Internet",
                description:
                    "Your monthly internet bill is due.",
                amount: 50,
                bucket: "bills",
                fixed: true
            },

            {
                icon: "car",
                title: "Gas",
                description:
                    "You need gas to get around.",
                amount: 50,
                bucket: "transportation"
            },

            {
                icon: "food",
                title: "Groceries",
                description:
                    "You need to restock the fridge.",
                amount: 100,
                bucket: "food"
            },

            {
                icon: "food",
                title: "Fast Food",
                description:
                    "Friends want to grab dinner together.",
                amount: 20,
                bucket: "food",
                optional: true
            },

            {
                icon: "dollar",
                title: "Concert Ticket",
                description:
                    "Your friend invited you to a concert!",
                amount: 75,
                bucket: "fun",
                optional: true
            },

            {
                icon: "dollar",
                title: "New Clothes",
                description:
                    "You found an outfit you really like.",
                amount: 80,
                bucket: "fun",
                optional: true
            },

            {
                icon: "car",
                title: "More Gas",
                description:
                    "Your tank's running low again.",
                amount: 45,
                bucket: "transportation"
            },

            {
                icon: "emergency",
                title: "Unexpected Expense",
                description:
                    "You had an unexpected $100 expense.",
                amount: 100,
                bucket: "emergency",
                surprise: true
            },

            {
                icon: "tools",
                title: "Car Repair",
                description:
                    "Uh oh! Your car needs a repair.",
                amount: 150,
                bucket: "transportation"
            }

        ]

    }

};



// ============================================
// GAME STATE
// ============================================

let currentMonth = 1;

let currentExpense = 0;

let totalSpent = 0;

let missedBills = 0;

let borrowedPayments = 0;

let buckets = {};

let selectedBuckets = [];

let carriedSavings = 0;



// ============================================
// GET ELEMENTS
// ============================================

const setupScreen =
    document.getElementById("setup-screen");

const monthScreen =
    document.getElementById("month-screen");

const endScreen =
    document.getElementById("end-screen");


const headerMonthNumber =
    document.getElementById("header-month-number");

const remainingMoney =
    document.getElementById("remaining-money");

const startMonthLabel =
    document.getElementById("start-month-label");


const startButton =
    document.getElementById(
        "start-month-btn"
    );


const nextMonthButton =
    document.getElementById(
        "next-month-btn"
    );



// ============================================
// LOAD MONTH
// ============================================

function loadMonth(monthNumber) {

    currentMonth = monthNumber;

    const month =
        months[currentMonth];


    currentExpense = 0;

    totalSpent = 0;

    missedBills = 0;

    borrowedPayments = 0;


    // ------------------------------------------
    // ALL BUCKETS ARE ALWAYS AVAILABLE —
    // NO SELECTION STEP
    // ------------------------------------------

    selectedBuckets =
        month.buckets.map(
            bucket => bucket.id
        );

    buckets = {};


    // ------------------------------------------
    // CREATE EMPTY BUCKET STATE
    // ------------------------------------------

    month.buckets.forEach(bucket => {

        buckets[bucket.id] = 0;

    });


    // ------------------------------------------
    // CARRY SAVINGS FORWARD
    // ------------------------------------------

    if (currentMonth > 1) {

        buckets.savings =
            carriedSavings;

    }


    // ------------------------------------------
    // HEADER
    // ------------------------------------------

    document.getElementById(
        "game-month-number"
    ).textContent =
        currentMonth;


    document.getElementById(
        "month-title"
    ).textContent =
        month.title;


    document.getElementById(
        "month-description"
    ).textContent =
        month.description;


    document.getElementById(
        "paycheck-amount"
    ).textContent =
        `$${month.income.toLocaleString()}`;


    headerMonthNumber.textContent =
        currentMonth;


    startMonthLabel.textContent =
        `Start Month ${currentMonth}`;


    // ------------------------------------------
    // BUILD UI
    // ------------------------------------------

    createBillsPreview();

    updateSavingsCarryover();

    createSetupBuckets();


    // ------------------------------------------
    // RESET ALLOCATION
    // ------------------------------------------

    document.getElementById(
        "budget-message"
    ).textContent =
        "";


    updateBudgetDisplay();

}



// ============================================
// CREATE SETUP BUCKETS
// ============================================

function createSetupBuckets() {

    const container =
        document.getElementById(
            "setup-buckets"
        );

    const savingsSlot =
        document.getElementById(
            "savings-bucket-slot"
        );


    container.innerHTML = "";

    savingsSlot.innerHTML = "";


    const month =
        months[currentMonth];


    selectedBuckets.forEach(
        bucketId => {


            const bucket =
                month.buckets.find(
                    item =>
                        item.id === bucketId
                );


            if (!bucket) {

                return;

            }


            const isSavings =
                bucket.id === "savings";


            const div =
                document.createElement(
                    "div"
                );


            // Savings sits apart from the rest of the
            // buckets (see index.html) and gets its own
            // "featured" look so it stands out rather
            // than blending into the regular grid.

            div.className =
                isSavings
                    ? "bucket bucket-savings"
                    : "bucket";


            const startingSavings =
                isSavings
                    ? carriedSavings
                    : 0;


            div.innerHTML = `

                <div class="bucket-icon">
                    ${iconMarkup(bucket.icon)}
                </div>

                <h3>
                    ${bucket.name}
                </h3>

                <div
                    class="bucket-amount"
                    id="amount-${bucket.id}"
                >
                    $${startingSavings}
                </div>

                <button
                    class="amount-entry-button"
                    type="button"
                >
                    Enter Amount
                </button>

                ${
                    isSavings
                        ? `
                            <div class="savings-note">
                                Savings from last month stays here.
                            </div>
                        `
                        : ""
                }

            `;


            (
                isSavings
                    ? savingsSlot
                    : container
            ).appendChild(div);


            const enterButton =
                div.querySelector(
                    ".amount-entry-button"
                );


            enterButton.addEventListener(
                "click",
                () => {

                    openKeypad(
                        bucket.id
                    );

                }
            );

        }
    );

}



// ============================================
// BUCKET AMOUNT KEYPAD
// ============================================

let activeKeypadBucket = null;

let keypadValue = "";


const keypadModal =
    document.getElementById(
        "keypad-modal"
    );

const keypadBucketIcon =
    document.getElementById(
        "keypad-bucket-icon"
    );

const keypadBucketName =
    document.getElementById(
        "keypad-bucket-name"
    );

const keypadDisplay =
    document.getElementById(
        "keypad-display"
    );

const keypadHint =
    document.getElementById(
        "keypad-hint"
    );

const keypadError =
    document.getElementById(
        "keypad-error"
    );

const keypadConfirmBtn =
    document.getElementById(
        "keypad-confirm-btn"
    );


// How much of a bucket's balance counts as
// "new" money out of THIS paycheck (savings
// carried over from last month doesn't count).

function newMoneyIn(
    bucketId,
    value
) {

    if (
        bucketId === "savings" &&
        currentMonth > 1
    ) {

        return Math.max(
            value - carriedSavings,
            0
        );

    }


    return value;

}


function openKeypad(bucketId) {

    const month =
        months[currentMonth];


    const bucket =
        month.buckets.find(
            item =>
                item.id === bucketId
        );


    if (!bucket) {

        return;

    }


    activeKeypadBucket =
        bucketId;


    // ------------------------------------------
    // START FROM WHATEVER'S ALREADY SET —
    // don't reset a bucket the player already
    // funded back to zero just for reopening it.
    // ------------------------------------------

    const currentValue =
        buckets[bucketId] || 0;

    keypadValue =
        currentValue > 0
            ? String(currentValue)
            : "";


    keypadBucketIcon.innerHTML =
        iconMarkup(bucket.icon);

    keypadBucketName.textContent =
        bucket.name;

    keypadError.textContent =
        "";


    updateKeypadDisplay();


    keypadModal.classList.remove(
        "hidden"
    );

}


function closeKeypad() {

    keypadModal.classList.add(
        "hidden"
    );

    activeKeypadBucket = null;

    keypadValue = "";

}


function updateKeypadDisplay() {

    const month =
        months[currentMonth];


    const typedAmount =
        keypadValue === ""
            ? 0
            : Number(keypadValue);


    keypadDisplay.textContent =
        `$${typedAmount.toLocaleString()}`;


    const currentValue =
        buckets[activeKeypadBucket] || 0;


    const currentContribution =
        newMoneyIn(
            activeKeypadBucket,
            currentValue
        );


    const newContribution =
        newMoneyIn(
            activeKeypadBucket,
            typedAmount
        );


    const previewAllocated =
        getAllocatedFromPaycheck() -
        currentContribution +
        newContribution;


    const previewRemaining =
        month.income -
        previewAllocated;


    if (previewRemaining >= 0) {

        keypadHint.textContent =
            `$${previewRemaining.toLocaleString()} left to allocate`;

        keypadHint.style.color =
            "#6b7280";

    }

    else {

        keypadHint.textContent =
            `$${Math.abs(previewRemaining).toLocaleString()} over your paycheck`;

        keypadHint.style.color =
            "#dc2626";

    }

}


function pressKeypadDigit(digit) {

    if (
        keypadValue.length >= 5
    ) {

        return;

    }


    if (
        keypadValue === "0"
    ) {

        keypadValue = digit;

    }

    else {

        keypadValue += digit;

    }


    keypadError.textContent =
        "";


    updateKeypadDisplay();

}


function pressKeypadBackspace() {

    keypadValue =
        keypadValue.slice(0, -1);


    keypadError.textContent =
        "";


    updateKeypadDisplay();

}


function pressKeypadClear() {

    keypadValue = "";


    keypadError.textContent =
        "";


    updateKeypadDisplay();

}


function confirmKeypad() {

    const month =
        months[currentMonth];

    const bucketId =
        activeKeypadBucket;

    const typedAmount =
        keypadValue === ""
            ? 0
            : Number(keypadValue);


    // ------------------------------------------
    // CAN'T GO BELOW CARRIED SAVINGS
    // ------------------------------------------

    const minimum =
        bucketId === "savings" &&
        currentMonth > 1
            ? carriedSavings
            : 0;


    if (
        typedAmount < minimum
    ) {

        keypadError.textContent =
            `Can't go below your carried savings of $${minimum}.`;

        return;

    }


    // ------------------------------------------
    // CAN'T GO OVER THE PAYCHECK
    // ------------------------------------------

    const currentValue =
        buckets[bucketId] || 0;


    const currentContribution =
        newMoneyIn(
            bucketId,
            currentValue
        );


    const newContribution =
        newMoneyIn(
            bucketId,
            typedAmount
        );


    const otherAllocated =
        getAllocatedFromPaycheck() -
        currentContribution;


    if (
        otherAllocated + newContribution >
        month.income
    ) {

        const maxAllowed =
            month.income -
            otherAllocated +
            minimum;


        keypadError.textContent =
            `That's more than your paycheck allows. Try $${maxAllowed} or less.`;

        return;

    }


    buckets[bucketId] =
        typedAmount;


    closeKeypad();

    updateBudgetDisplay();

}


// ------------------------------------------
// KEYPAD EVENT LISTENERS
// ------------------------------------------

document.querySelectorAll(
    ".keypad-key[data-digit]"
).forEach(key => {

    key.addEventListener(
        "click",
        () => {

            pressKeypadDigit(
                key.dataset.digit
            );

        }
    );

});


document.getElementById(
    "keypad-backspace-btn"
).addEventListener(
    "click",
    pressKeypadBackspace
);


document.getElementById(
    "keypad-clear-btn"
).addEventListener(
    "click",
    pressKeypadClear
);


keypadConfirmBtn.addEventListener(
    "click",
    confirmKeypad
);


document.getElementById(
    "keypad-close-btn"
).addEventListener(
    "click",
    closeKeypad
);


keypadModal.addEventListener(
    "click",
    event => {

        if (
            event.target === keypadModal
        ) {

            closeKeypad();

        }

    }
);



// ============================================
// GET ALLOCATED FROM PAYCHECK
// ============================================

function getAllocatedFromPaycheck() {

    let total = 0;


    selectedBuckets.forEach(
        bucketId => {

            total +=
                newMoneyIn(
                    bucketId,
                    buckets[bucketId] || 0
                );

        }
    );


    return Math.max(
        total,
        0
    );

}



// ============================================
// UPDATE BUDGET DISPLAY
// ============================================

function updateBudgetDisplay() {

    const month =
        months[currentMonth];


    const allocated =
        getAllocatedFromPaycheck();


    const remaining =
        month.income -
        allocated;


    remainingMoney.textContent =
        `$${Math.max(
            remaining,
            0
        ).toLocaleString()}`;


    selectedBuckets.forEach(
        bucketId => {

            const amountElement =
                document.getElementById(
                    `amount-${bucketId}`
                );


            if (
                amountElement
            ) {

                amountElement.textContent =
                    `$${buckets[bucketId]}`;

            }

        }
    );


    // ------------------------------------------
    // CAN START?
    //
    // Every dollar needs a bucket before the
    // month can start — zero-based budgeting.
    // This is what makes the allocation
    // decision matter: there's no leftover
    // pot to fall back on once the month begins.
    // ------------------------------------------

    if (
        allocated > month.income
    ) {

        setStartButtonReady(
            false
        );


        showBudgetMessage(
            "You've allocated more than your paycheck allows.",
            "error"
        );

    }

    else if (
        allocated === month.income
    ) {

        setStartButtonReady(
            true
        );


        showBudgetMessage(
            "✓ Every dollar has a job. Ready to go!",
            "success"
        );

    }

    else {

        setStartButtonReady(
            false
        );


        showBudgetMessage(
            `$${remaining.toLocaleString()} still needs a bucket before you can start.`,
            "neutral"
        );

    }

}



// ============================================
// START BUTTON READY STATE
//
// One control does double duty: it's the "left
// to allocate" stat while budgeting, and flips
// into the actual Start Month button the moment
// every dollar has a bucket — rather than a
// separate stat box plus a separate button.
// ============================================

function setStartButtonReady(
    isReady
) {

    startButton.disabled =
        !isReady;

    startButton.classList.toggle(
        "ready",
        isReady
    );


    document.getElementById(
        "allocate-stat-label"
    ).classList.toggle(
        "hidden",
        isReady
    );

    remainingMoney.classList.toggle(
        "hidden",
        isReady
    );

    startMonthLabel.classList.toggle(
        "hidden",
        !isReady
    );

}



// ============================================
// BUDGET MESSAGE
// ============================================

function showBudgetMessage(
    text,
    type
) {

    const message =
        document.getElementById(
            "budget-message"
        );


    message.textContent =
        text;


    if (
        type === "error"
    ) {

        message.style.color =
            "#dc2626";

    }

    else if (
        type === "success"
    ) {

        message.style.color =
            "#16a34a";

    }

    else {

        message.style.color =
            "#6b7280";

    }

}



// ============================================
// SAVINGS CARRYOVER
// ============================================

function updateSavingsCarryover() {

    const section =
        document.getElementById(
            "savings-carryover"
        );


    const amount =
        document.getElementById(
            "carried-savings-amount"
        );


    if (
        currentMonth > 1 &&
        carriedSavings > 0
    ) {

        section.classList.remove(
            "hidden"
        );


        amount.textContent =
            `$${carriedSavings}`;

    }

    else {

        section.classList.add(
            "hidden"
        );

    }

}



// ============================================
// CREATE BILLS PREVIEW
// ============================================
//
// Shows only the FIXED, consistent-every-month
// bills (rent, insurance, subscriptions, etc.)
// so the player can plan for those first — and
// which bucket each one will need to come from,
// since that bucket is the ONLY thing that can
// pay it once the month starts.
// Discretionary spending (food, gas, fun) is
// deliberately left off — that's the player's
// own call to plan for, not a known bill.
// Expenses flagged "surprise" are also left out
// on purpose — that's the point of a surprise.

function createBillsPreview() {

    const section =
        document.getElementById(
            "bills-preview-section"
        );


    const list =
        document.getElementById(
            "bills-preview-list"
        );


    const note =
        document.getElementById(
            "bills-preview-note"
        );


    const month =
        months[currentMonth];


    const visibleExpenses =
        month.expenses.filter(
            expense =>
                expense.fixed &&
                !expense.surprise
        );


    if (visibleExpenses.length === 0) {

        section.classList.add(
            "hidden"
        );

        return;

    }


    section.classList.remove(
        "hidden"
    );


    list.innerHTML = "";


    visibleExpenses.forEach(
        expense => {

            const bucket =
                month.buckets.find(
                    item =>
                        item.id === expense.bucket
                );


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "bill-preview-item";


            item.innerHTML = `

                <span class="bill-preview-icon">
                    ${iconMarkup(expense.icon)}
                </span>

                <span class="bill-preview-name">
                    ${expense.title}
                    <span class="bill-preview-bucket">
                        ${bucket ? bucket.name : ""}
                    </span>
                </span>

                <span class="bill-preview-amount">
                    $${expense.amount}
                </span>

            `;


            list.appendChild(
                item
            );

        }
    );


    note.textContent =
        "Food, gas, and fun aren't listed — that's your call.";

}



// ============================================
// START MONTH
// ============================================

startButton.addEventListener(
    "click",
    startMonth
);


function startMonth() {

    setupScreen.classList.add(
        "hidden"
    );


    monthScreen.classList.remove(
        "hidden"
    );


    showExpense();

}



// ============================================
// SHOW EXPENSE
// ============================================

function showExpense() {

    const month =
        months[currentMonth];


    const expense =
        month.expenses[currentExpense];


    document.getElementById(
        "expense-icon"
    ).innerHTML =
        iconMarkup(expense.icon);


    document.getElementById(
        "expense-title"
    ).textContent =
        expense.title;


    document.getElementById(
        "expense-description"
    ).textContent =
        expense.description;


    document.getElementById(
        "expense-amount"
    ).textContent =
        `-$${expense.amount}`;


    document.getElementById(
        "expense-progress"
    ).textContent =
        `Expense ${currentExpense + 1} of ${month.expenses.length}`;


    const progress =
        (currentExpense /
        month.expenses.length) * 100;


    document.getElementById(
        "progress-fill"
    ).style.width =
        `${progress}%`;


    document.getElementById(
        "expense-message"
    ).textContent =
        "";


    renderPaymentPanel(expense);

}



// ============================================
// RENDER PAYMENT PANEL
//
// Every bucket is always on screen. Tapping the
// expense's own bucket is a normal payment;
// tapping any OTHER bucket that can afford it
// counts as borrowing (see handleExpense) — the
// player sees the whole picture and decides.
// Savings is shown but never spendable. A bucket
// that can't cover the amount is disabled rather
// than hidden, so it's still visible as a
// consequence of how it was funded.
// ============================================

function renderPaymentPanel(expense) {

    const month =
        months[currentMonth];


    document.getElementById(
        "payment-title"
    ).textContent =
        expense.optional
            ? "Want to spend on this? Pick a bucket, or skip it."
            : "Pick a bucket to pay this bill.";


    const grid =
        document.getElementById(
            "payment-buckets"
        );


    grid.innerHTML = "";


    let anyAffordable = false;


    selectedBuckets.forEach(
        bucketId => {

            const bucket =
                month.buckets.find(
                    item =>
                        item.id === bucketId
                );


            if (!bucket) {

                return;

            }


            const balance =
                buckets[bucketId] || 0;

            const isSavings =
                bucketId === "savings";

            const isCorrect =
                bucketId === expense.bucket;

            const affordable =
                !isSavings &&
                balance >= expense.amount;


            if (affordable) {

                anyAffordable = true;

            }


            let noteHTML = "";

            if (isSavings) {

                noteHTML =
                    `<span class="lock-tag">🔒 Protected</span>`;

            }

            else if (!affordable) {

                noteHTML =
                    `<span class="lock-tag">Not enough</span>`;

            }


            const tile =
                document.createElement(
                    "button"
                );


            tile.type =
                "button";

            tile.className =
                "payment-bucket-tile" +
                (affordable ? "" : " disabled") +
                (isCorrect ? " correct-bucket" : "");


            tile.innerHTML = `

                <span class="bucket-icon">
                    ${iconMarkup(bucket.icon)}
                </span>

                <span class="bucket-name">
                    ${bucket.name}
                </span>

                <strong class="bucket-balance">
                    $${balance}
                </strong>

                ${
                    isCorrect
                        ? `<span class="usual-tag">Usual bucket</span>`
                        : ""
                }

                ${noteHTML}

            `;


            if (affordable) {

                tile.addEventListener(
                    "click",
                    () => {

                        handleExpense(
                            bucketId
                        );

                    }
                );

            }

            else {

                tile.disabled = true;

            }


            grid.appendChild(
                tile
            );

        }
    );


    // ------------------------------------------
    // SECONDARY ACTION
    //
    // Optional expenses always offer a free skip.
    // Obligations only offer "miss" once NOTHING
    // on screen can actually cover the amount.
    // ------------------------------------------

    const secondaryButton =
        document.getElementById(
            "secondary-action-btn"
        );


    if (expense.optional) {

        secondaryButton.textContent =
            "Skip This";

        secondaryButton.classList.remove(
            "hidden"
        );

        secondaryButton.classList.remove(
            "miss-style"
        );

        secondaryButton.onclick =
            () => skipExpense(expense);

    }

    else {

        secondaryButton.textContent =
            "Miss This Bill";

        secondaryButton.classList.toggle(
            "hidden",
            anyAffordable
        );

        secondaryButton.classList.add(
            "miss-style"
        );

        secondaryButton.onclick =
            missBill;

    }

}



// ============================================
// SKIP AN OPTIONAL EXPENSE (NO PENALTY)
// ============================================

function skipExpense(expense) {

    showMessage(

        `Good call — you kept $${expense.amount} for something else.`,

        "success"

    );


    advanceToNextExpense();

}



// ============================================
// HANDLE EXPENSE (PAY, MAYBE BY BORROWING)
// ============================================

function handleExpense(
    selectedBucket
) {

    const month =
        months[currentMonth];


    const expense =
        month.expenses[currentExpense];


    // ------------------------------------------
    // NOT ENOUGH MONEY
    // ------------------------------------------

    if (
        (buckets[selectedBucket] || 0) <
        expense.amount
    ) {

        showMessage(

            `Not enough money in your ${getBucketName(selectedBucket)} bucket.`,

            "error"

        );

        return;

    }


    // ------------------------------------------
    // PAY EXPENSE
    // ------------------------------------------

    buckets[selectedBucket] -=
        expense.amount;


    totalSpent +=
        expense.amount;


    const isBorrow =
        selectedBucket !== expense.bucket;


    if (isBorrow) {

        borrowedPayments++;


        showMessage(

            `You borrowed $${expense.amount} from ${getBucketName(selectedBucket)} to cover ${getBucketName(expense.bucket)}. That's less for its own plans later.`,

            "warning"

        );

    }

    else {

        showMessage(

            `✓ $${expense.amount} taken from ${getBucketName(selectedBucket)}.`,

            "success"

        );

    }


    advanceToNextExpense();

}



// ============================================
// MISS THIS BILL
// (fallback when NOTHING can cover it — wired
// up per-render in renderPaymentPanel, since
// only obligations ever show this button)
// ============================================

function missBill() {

    const month =
        months[currentMonth];


    const expense =
        month.expenses[currentExpense];


    missedBills++;


    showMessage(

        `You missed the ${expense.title} bill. That hurts your financial wellness.`,

        "error"

    );


    advanceToNextExpense();

}



// ============================================
// ADVANCE TO NEXT EXPENSE
// ============================================

function advanceToNextExpense() {

    const month =
        months[currentMonth];


    setTimeout(
        () => {

            currentExpense++;


            if (
                currentExpense >=
                month.expenses.length
            ) {

                finishMonth();

            }

            else {

                showExpense();

            }

        },
        700
    );

}



// ============================================
// EXPENSE MESSAGE
// ============================================

function showMessage(
    text,
    type
) {

    const message =
        document.getElementById(
            "expense-message"
        );


    message.textContent =
        text;


    if (
        type === "error"
    ) {

        message.style.color =
            "#dc2626";

    }

    else if (
        type === "warning"
    ) {

        message.style.color =
            "#b45309";

    }

    else {

        message.style.color =
            "#16a34a";

    }

}



// ============================================
// FINISH MONTH
// ============================================

function finishMonth() {

    monthScreen.classList.add(
        "hidden"
    );


    endScreen.classList.remove(
        "hidden"
    );


    const month =
        months[currentMonth];


    // ------------------------------------------
    // CALCULATE REMAINING
    // ------------------------------------------

    const remaining =
        Object.values(buckets)
            .reduce(
                (total, amount) =>
                    total + amount,
                0
            );


    // ------------------------------------------
    // SAVE SAVINGS
    // ------------------------------------------

    carriedSavings =
        buckets.savings || 0;


    const savings =
        carriedSavings;


    // ------------------------------------------
    // RESULTS
    // ------------------------------------------

    document.getElementById(
        "completed-month"
    ).textContent =
        currentMonth;


    document.getElementById(
        "total-income"
    ).textContent =
        `$${month.income.toLocaleString()}`;


    document.getElementById(
        "total-spent"
    ).textContent =
        `$${totalSpent}`;


    document.getElementById(
        "money-remaining"
    ).textContent =
        `$${remaining}`;


    document.getElementById(
        "final-savings"
    ).textContent =
        `$${savings}`;


    // ------------------------------------------
    // WELLNESS
    //
    // Missed bills cost the most — an unpaid
    // bill is worse than a borrowed payment.
    // Borrowing costs something too — it means
    // the plan had to bend, even if nothing
    // technically went unpaid.
    // ------------------------------------------

    let score =
        Math.round(
            (savings /
            month.income) * 100
        );


    score -=
        missedBills * 15;


    score -=
        borrowedPayments * 5;


    if (
        score > 100
    ) {

        score = 100;

    }


    if (
        score < 0
    ) {

        score = 0;

    }


    document.getElementById(
        "wellness-score"
    ).textContent =
        `${score}%`;


    document.getElementById(
        "wellness-fill"
    ).style.width =
        `${score}%`;


    // ------------------------------------------
    // NEXT MONTH
    // ------------------------------------------

    let message =
        currentMonth === 1
            ? "Nice work! Your savings will come with you into next month."
            : "You handled another month. Ready for what's next?";


    if (
        missedBills > 0
    ) {

        message +=
            ` You missed ${missedBills} bill${missedBills === 1 ? "" : "s"} this month — that hurt your financial wellness.`;

    }


    if (
        borrowedPayments > 0
    ) {

        message +=
            ` You borrowed between buckets ${borrowedPayments} time${borrowedPayments === 1 ? "" : "s"} to make ends meet.`;

    }


    document.getElementById(
        "end-message"
    ).textContent =
        message;


    if (
        months[currentMonth + 1]
    ) {

        nextMonthButton.classList.remove(
            "hidden"
        );


        nextMonthButton.textContent =
            `Start Month ${currentMonth + 1}`;

    }

    else {

        nextMonthButton.classList.add(
            "hidden"
        );

    }

}



// ============================================
// NEXT MONTH
// ============================================

nextMonthButton.addEventListener(
    "click",
    () => {

        endScreen.classList.add(
            "hidden"
        );


        setupScreen.classList.remove(
            "hidden"
        );


        loadMonth(
            currentMonth + 1
        );

    }
);



// ============================================
// HELPER
// ============================================

function getBucketName(
    bucketId
) {

    const month =
        months[currentMonth];


    const bucket =
        month.buckets.find(
            bucket =>
                bucket.id === bucketId
        );


    return bucket
        ? bucket.name
        : bucketId;

}



// ============================================
// START GAME
// ============================================

loadMonth(1);
