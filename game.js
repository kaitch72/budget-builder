// ============================================
// BUDGET BUILDER — LIFE-STAGE REDESIGN
// TEENAGER -> COLLEGE -> CAREER
// ============================================


// ============================================
// BRAND ICONS
//
// Securityplus brand SVGs (Font Awesome Sharp
// Light style, single-color paths with no fill
// set — color comes from the page's `svg { fill:
// ... }` rule, per the brand guide). Expense and
// bucket data below reference these by key, not
// by raw markup.
//
// "dollar" is a neutral placeholder for anything
// without its own dedicated icon yet (shopping,
// utilities, trips, hobby gear) — swap these out
// once Kayla exports dedicated icons for them.
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


// Shared label for a bucket's type-tag pill, used by both the
// setup screen and the payment screen so the four bucket types
// (need/want/bill/savings) always read the same way.
function bucketTypeLabel(type) {

    if (type === "need") {
        return "Needs";
    }

    if (type === "want") {
        return "Wants";
    }

    if (type === "bill") {
        return "Bills";
    }

    return "Savings";

}


// Sizes a jar row's grid to however many buckets actually belong
// in it this stage (a stage may not have every category -- e.g.
// no Gas jar until Career), and hides the row entirely when this
// stage has none for it, instead of leaving an empty gap.
function setRowColumns(rowEl, count) {

    rowEl.style.gridTemplateColumns =
        `repeat(${Math.max(count, 1)}, minmax(0, 250px))`;

    rowEl.classList.toggle(
        "hidden",
        count === 0
    );

}


// An empty jar (Kayla's jar.svg) switches to the funded/coin
// artwork (coin-jar.svg) the moment it's holding any money --
// used on both the setup screen (as a bucket is funded via the
// keypad) and the payment screen (jars already show their current
// balance, so a funded one should already look funded).
function jarImageSrc(amount) {

    return amount > 0
        ? "images/coin-jar.svg"
        : "images/jar.svg";

}



// ============================================
// GAME DATA — THREE LIFE STAGES
//
// Buckets are typed, and each stage can have
// several of them: any number of Needs jars (top
// row -- groceries, gas, personal care, whatever
// applies this stage), any number of Wants jars
// (middle row -- takeout, shopping, entertainment),
// and always exactly one Bills jar plus one Savings
// jar (bottom row). Every expense's "bucket" field
// points at the specific jar id that funds it --
// never "savings", which can never pay anything.
//
// Needs are known amounts, always shown upfront
// in the sidebar preview before the player
// allocates. Wants are NOT previewed — realistic,
// since you don't know exactly what you'll want
// to spend on fun this stage.
//
// "optional: true" marks a Want — the player is
// offered "want to do this?" before it costs
// anything, and can always skip for free. Needs
// (optional left unset) are obligations: the only
// choice is how to cover them, and "Miss This
// Bill" only appears once nothing on screen can.
//
// There's no savings goal of any kind, hidden or
// otherwise -- the player puts whatever they can
// into Savings, and the end-of-stage recap simply
// reports what that amount was. More saved is
// called out positively (and always feeds Financial
// Wellness in proportion to income); saving little
// or nothing carries no penalty at all.
//
// Draft dollar amounts confirmed by Kayla 2026-09-14.
// ============================================

const stages = {

    // ==========================================
    // STAGE 1 — TEENAGER
    // ==========================================

    1: {

        name: "Teenager",

        income: 400,

        title: "Your First Paycheck",

        description:
            "Sort your pay into various spending buckets. Set aside enough for your expenses, save some money and delegate to fun spending.",

        buckets: [

            {
                id: "food",
                type: "need",
                name: "Food",
                icon: "food",
                description: "Snacks & lunch money"
            },

            {
                id: "takeout",
                type: "want",
                name: "Takeout",
                icon: "food",
                description: "Fast food & treats"
            },

            {
                id: "shopping",
                type: "want",
                name: "Shopping",
                icon: "dollar",
                description: "Clothes & extras"
            },

            {
                id: "entertainment",
                type: "want",
                name: "Entertainment",
                icon: "movie",
                description: "Movies & hanging out"
            },

            {
                id: "bills",
                type: "bill",
                name: "Bills",
                icon: "wallet",
                description: "Bills you can't skip"
            },

            {
                id: "savings",
                type: "savings",
                name: "Savings",
                icon: "savings",
                description: "Locked in — can't pay bills"
            }

        ],

        expenses: [

            {
                icon: "phone",
                title: "Phone Bill",
                description:
                    "Your monthly phone bill is due.",
                amount: 30,
                bucket: "bills",
                fixed: true,
                missNarrative: "Your phone got shut off — you'll owe this again next stage."
            },

            {
                icon: "food",
                title: "Snacks & Lunch Money",
                description:
                    "You need to eat during the day — snacks and lunch add up.",
                amount: 20,
                bucket: "food",
                fixed: true,
                missNarrative: "You went without lunch money — that gap is still there."
            },

            {
                icon: "food",
                title: "Fast Food",
                description:
                    "Your friends want to grab fast food together.",
                amount: 12,
                bucket: "takeout",
                optional: true
            },

            {
                icon: "movie",
                title: "Movie Night",
                description:
                    "There's a new movie out — friends want to go.",
                amount: 15,
                bucket: "entertainment",
                optional: true
            },

            {
                icon: "dollar",
                title: "New Shoes",
                description:
                    "You found a pair of shoes you really want.",
                amount: 35,
                bucket: "shopping",
                optional: true
            },

            {
                icon: "movie",
                title: "Hanging Out",
                description:
                    "Your friends invite you to the arcade.",
                amount: 10,
                bucket: "entertainment",
                optional: true
            }

        ]

    },


    // ==========================================
    // STAGE 2 — COLLEGE
    // ==========================================

    2: {

        name: "College",

        income: 700,

        title: "More Responsibility",

        description:
            "Your paycheck grew, but so did your bills. Cover your Bills and Needs, save toward your first apartment, and decide what's worth spending on.",

        buckets: [

            {
                id: "food",
                type: "need",
                name: "Food",
                icon: "food",
                description: "Groceries & meal plan gaps"
            },

            {
                id: "personalCare",
                type: "need",
                name: "Basics",
                icon: "dollar",
                description: "Toiletries & basics"
            },

            {
                id: "takeout",
                type: "want",
                name: "Takeout",
                icon: "food",
                description: "Coffee & eating out"
            },

            {
                id: "shopping",
                type: "want",
                name: "Shopping",
                icon: "dollar",
                description: "Clothes & extras"
            },

            {
                id: "entertainment",
                type: "want",
                name: "Entertainment",
                icon: "movie",
                description: "Going out & trips"
            },

            {
                id: "bills",
                type: "bill",
                name: "Bills",
                icon: "wallet",
                description: "Bills you can't skip"
            },

            {
                id: "savings",
                type: "savings",
                name: "Savings",
                icon: "savings",
                description: "Locked in — can't pay bills"
            }

        ],

        expenses: [

            {
                icon: "wallet",
                title: "Rent",
                description:
                    "Your share of the rent is due.",
                amount: 250,
                bucket: "bills",
                fixed: true,
                missNarrative: "You're behind on rent — this follows you into next stage."
            },

            {
                icon: "phone",
                title: "Phone Bill",
                description:
                    "Your phone bill is due.",
                amount: 30,
                bucket: "bills",
                fixed: true,
                missNarrative: "Your phone got shut off — you'll owe this again next stage."
            },

            {
                icon: "food",
                title: "Meal Plan",
                description:
                    "Your meal plan doesn't cover everything — there's a gap to fill.",
                amount: 60,
                bucket: "food",
                fixed: true,
                missNarrative: "You went without groceries this stage — that gap is still there."
            },

            {
                icon: "dollar",
                title: "Toiletries & Essentials",
                description:
                    "You're out of the everyday basics again.",
                amount: 15,
                bucket: "personalCare",
                fixed: true,
                missNarrative: "You went without some basics this stage — that gap is still there."
            },

            {
                icon: "movie",
                title: "Going Out",
                description:
                    "Friends want to go out this weekend.",
                amount: 25,
                bucket: "entertainment",
                optional: true
            },

            {
                icon: "tv",
                title: "Streaming Subscription",
                description:
                    "Your streaming subscription renewed.",
                amount: 12,
                bucket: "entertainment",
                optional: true
            },

            {
                icon: "food",
                title: "Coffee Runs",
                description:
                    "You've been grabbing coffee between classes.",
                amount: 18,
                bucket: "takeout",
                optional: true
            },

            {
                icon: "dollar",
                title: "Weekend Trip",
                description:
                    "Your roommates are planning a weekend trip.",
                amount: 40,
                bucket: "entertainment",
                optional: true
            },

            {
                icon: "dollar",
                title: "New Clothes",
                description:
                    "You found an outfit you really like.",
                amount: 30,
                bucket: "shopping",
                optional: true
            }

        ]

    },


    // ==========================================
    // STAGE 3 — CAREER (capstone — no target)
    // ==========================================

    3: {

        name: "Career",

        income: 2000,

        title: "Your First Real Job",

        description:
            "This is it — a real paycheck. See how much of it is already claimed by your responsibilities before you spend a dollar on anything else.",

        buckets: [

            {
                id: "food",
                type: "need",
                name: "Food",
                icon: "food",
                description: "Groceries & eating in"
            },

            {
                id: "gas",
                type: "need",
                name: "Gas",
                icon: "car",
                description: "Fuel for your car"
            },

            {
                id: "personalCare",
                type: "need",
                name: "Basics",
                icon: "dollar",
                description: "Toiletries & basics"
            },

            {
                id: "takeout",
                type: "want",
                name: "Takeout",
                icon: "food",
                description: "Eating out"
            },

            {
                id: "shopping",
                type: "want",
                name: "Shopping",
                icon: "dollar",
                description: "Hobbies & extras"
            },

            {
                id: "entertainment",
                type: "want",
                name: "Entertainment",
                icon: "movie",
                description: "Trips & fun"
            },

            {
                id: "bills",
                type: "bill",
                name: "Bills",
                icon: "wallet",
                description: "Bills you can't skip"
            },

            {
                id: "savings",
                type: "savings",
                name: "Savings",
                icon: "savings",
                description: "Locked in — can't pay bills"
            }

        ],

        expenses: [

            {
                icon: "wallet",
                title: "Rent",
                description:
                    "Your monthly rent payment is due.",
                amount: 700,
                bucket: "bills",
                fixed: true,
                missNarrative: "You're behind on rent."
            },

            {
                icon: "car",
                title: "Car Payment & Insurance",
                description:
                    "Your car payment and insurance are due.",
                amount: 250,
                bucket: "bills",
                fixed: true,
                missNarrative: "Your car insurance lapsed — this still needs to be paid."
            },

            {
                icon: "dollar",
                title: "Utilities",
                description:
                    "Your monthly utilities bill is due.",
                amount: 100,
                bucket: "bills",
                fixed: true,
                missNarrative: "Your utilities got shut off."
            },

            {
                icon: "phone",
                title: "Phone Bill",
                description:
                    "Your phone bill is due.",
                amount: 40,
                bucket: "bills",
                fixed: true,
                missNarrative: "Your phone got shut off."
            },

            {
                icon: "food",
                title: "Groceries",
                description:
                    "Time to restock the fridge and pantry.",
                amount: 150,
                bucket: "food",
                fixed: true,
                missNarrative: "You went without groceries this stage — that gap is still there."
            },

            {
                icon: "car",
                title: "Gas",
                description:
                    "Your tank's on empty and you need to get to work.",
                amount: 80,
                bucket: "gas",
                fixed: true,
                missNarrative: "You couldn't fill up — that gap is still there."
            },

            {
                icon: "dollar",
                title: "Toiletries & Essentials",
                description:
                    "You're out of the everyday basics again.",
                amount: 40,
                bucket: "personalCare",
                fixed: true,
                missNarrative: "You went without some basics this stage — that gap is still there."
            },

            {
                icon: "dollar",
                title: "Weekend Trip",
                description:
                    "A friend invites you on a weekend trip.",
                amount: 180,
                bucket: "entertainment",
                optional: true
            },

            {
                icon: "dollar",
                title: "New Hobby Gear",
                description:
                    "You've been wanting to get into a new hobby.",
                amount: 120,
                bucket: "shopping",
                optional: true
            },

            {
                icon: "food",
                title: "Nice Dinner Out",
                description:
                    "You want to treat yourself to a nice dinner.",
                amount: 70,
                bucket: "takeout",
                optional: true
            }

        ]

    }

};



// ============================================
// GAME STATE
// ============================================

let currentStage = 1;

let currentExpense = 0;

let totalSpent = 0;

let missedNeeds = 0;

// Borrowing between buckets of the SAME category (e.g. Shopping
// covering Takeout -- both Wants) is a minor, milder ding.
// Borrowing across DIFFERENT categories (e.g. Bills covering
// Takeout) is the real violation and costs more. See
// handleExpense and the wellness weights in finishMonth.
let borrowedSameCategory = 0;

let borrowedCrossCategory = 0;

let buckets = {};

let selectedBuckets = [];

let carriedSavings = 0;

// Savings this stage started with (carried in) --
// used to work out how much of the ending balance
// is genuinely NEW savings from this stage alone.
let savingsAtStageStart = 0;

// Expenses actually in play this stage: the stage's
// own list, plus anything carried forward (a missed
// Need bill, or a Loan Payment) from finishStage().
let currentStageExpenses = [];

// Built by finishStage(), consumed once by the next
// loadStage() call.
let pendingExtraNeeds = [];

// Whether the stage currently in play started with a
// carried loan bill -- costs a flat wellness penalty
// for that stage, on top of missing/borrowing on it.
let stageHadLoanCarriedIn = false;

// Per-stage wellness scores, in order -- the
// cumulative score is their average, and it's what
// the Stage 3 recap leads with.
let stageScores = [];



// ============================================
// GET ELEMENTS
// ============================================

const setupScreen =
    document.getElementById("setup-screen");

const monthScreen =
    document.getElementById("month-screen");

const endScreen =
    document.getElementById("end-screen");


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


const restartButton =
    document.getElementById(
        "restart-button"
    );


// Welcome popup shown on load, before the
// player builds their first budget. Distinct
// from `startButton` above (the in-screen
// "Start Stage" control) -- this one just
// dismisses the popup itself.
const welcomeStartScreen =
    document.getElementById(
        "start-screen"
    );

const welcomeStartButton =
    document.getElementById(
        "start-button"
    );

if (welcomeStartButton) {

    welcomeStartButton.addEventListener(
        "click",
        () => {

            if (welcomeStartScreen) {
                welcomeStartScreen.style.display = "none";
            }

        }
    );

}



// ============================================
// LOAD STAGE
// ============================================

function loadStage(stageNumber) {

    currentStage = stageNumber;

    const stage =
        stages[currentStage];


    currentExpense = 0;

    totalSpent = 0;

    missedNeeds = 0;

    borrowedSameCategory = 0;

    borrowedCrossCategory = 0;


    // ------------------------------------------
    // ALL BUCKETS ARE ALWAYS AVAILABLE —
    // NO SELECTION STEP
    // ------------------------------------------

    selectedBuckets =
        stage.buckets.map(
            bucket => bucket.id
        );

    buckets = {};


    // ------------------------------------------
    // CREATE EMPTY BUCKET STATE
    // ------------------------------------------

    stage.buckets.forEach(bucket => {

        buckets[bucket.id] = 0;

    });


    // ------------------------------------------
    // CARRY SAVINGS FORWARD
    // ------------------------------------------

    savingsAtStageStart = 0;

    if (currentStage > 1) {

        buckets.savings =
            carriedSavings;

        savingsAtStageStart =
            carriedSavings;

    }


    // ------------------------------------------
    // BUILD THIS STAGE'S EXPENSE LIST —
    // the stage's own expenses, plus anything
    // carried forward from finishStage() (a
    // missed Need bill, or a Loan Payment).
    // Cloned so repeat playthroughs never mutate
    // the shared `stages` data.
    // ------------------------------------------

    currentStageExpenses = [
        ...pendingExtraNeeds,
        ...stage.expenses.map(
            expense => ({ ...expense })
        )
    ];

    stageHadLoanCarriedIn =
        pendingExtraNeeds.some(
            expense => expense.loan
        );

    pendingExtraNeeds = [];


    // ------------------------------------------
    // HEADER
    // ------------------------------------------

    document.getElementById(
        "month-title"
    ).textContent =
        stage.title;


    document.getElementById(
        "month-description"
    ).textContent =
        stage.description;


    document.getElementById(
        "paycheck-amount"
    ).textContent =
        `$${stage.income.toLocaleString()}`;


    document.getElementById(
        "paycheck-label"
    ).textContent =
        `${stage.name} Paycheck`;


    startMonthLabel.textContent =
        `Start ${stage.name}`;


    // ------------------------------------------
    // BUILD UI
    // ------------------------------------------

    createNeedsPreview();

    updateSavingsCarryover();

    createSetupBuckets();


    // Stage 1's sidebar (paycheck card + a short 1-bill preview,
    // no carryover/target cards yet) was deliberately sized
    // generously to visually match the bucket grid's height --
    // leave that alone. From Stage 2 on there's more in the same
    // column (more fixed Needs, the readiness target, plus the
    // savings-carryover card), so it switches to a tighter layout
    // to actually fit the fixed stage instead of running past the
    // bottom edge.
    document.querySelector(
        ".setup-sidebar"
    ).classList.toggle(
        "compact",
        currentStage > 1
    );


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

    const needsRow =
        document.getElementById(
            "setup-needs-row"
        );

    const wantsRow =
        document.getElementById(
            "setup-wants-row"
        );

    const savingsSlot =
        document.getElementById(
            "savings-bucket-slot"
        );


    needsRow.innerHTML = "";

    wantsRow.innerHTML = "";

    savingsSlot.innerHTML = "";


    const stage =
        stages[currentStage];


    // ------------------------------------------
    // SORT THIS STAGE'S BUCKETS INTO THEIR ROW --
    // top row is Bills (pooled, always first) plus
    // every Need jar this stage has (groceries, gas,
    // personal care -- however many apply), middle
    // row is every Want jar, and the bottom row is
    // just Savings (locked) -- Bills used to share
    // that bottom row, but now sits up with the Needs
    // instead, leaving Savings on its own next to the
    // Start button.
    // ------------------------------------------

    const needBuckets = [];

    const wantBuckets = [];

    let billBucket = null;

    let savingsBucket = null;


    selectedBuckets.forEach(
        bucketId => {

            const bucket =
                stage.buckets.find(
                    item =>
                        item.id === bucketId
                );


            if (!bucket) {

                return;

            }


            if (bucket.type === "need") {

                needBuckets.push(bucket);

            }

            else if (bucket.type === "want") {

                wantBuckets.push(bucket);

            }

            else if (bucket.type === "bill") {

                billBucket = bucket;

            }

            else {

                savingsBucket = bucket;

            }

        }
    );


    if (billBucket) {

        needBuckets.unshift(billBucket);

    }


    setRowColumns(needsRow, needBuckets.length);

    setRowColumns(wantsRow, wantBuckets.length);


    needBuckets.forEach(
        bucket => {

            needsRow.appendChild(
                buildSetupBucketTile(bucket)
            );

        }
    );


    wantBuckets.forEach(
        bucket => {

            wantsRow.appendChild(
                buildSetupBucketTile(bucket)
            );

        }
    );


    if (savingsBucket) {

        savingsSlot.appendChild(
            buildSetupBucketTile(savingsBucket)
        );

    }

}


// Builds one jar tile for the setup screen -- tapping it opens
// the keypad to fund that specific bucket. Same shared shape
// (icon, jar art, type tag, amount pill) that renderPaymentPanel's
// buildPaymentBucketTile() below uses, just with a clickable
// amount instead of a plain one.
function buildSetupBucketTile(bucket) {

    const isSavings =
        bucket.id === "savings";


    const div =
        document.createElement(
            "div"
        );


    // Savings sits apart from the rest of the buckets and gets
    // its own "featured" look so it stands out rather than
    // blending into the regular grid. Every other bucket type
    // (need/want/bill) gets a type tag + its own tag color (see
    // style.css) so which row/rule it belongs to reads at a
    // glance.

    div.className =
        isSavings
            ? "bucket bucket-savings"
            : `bucket bucket-${bucket.type}`;


    const startingSavings =
        isSavings
            ? carriedSavings
            : 0;


    div.innerHTML = `

        <div class="jar-visual">

            <img
                class="jar-img"
                id="jar-img-${bucket.id}"
                src="${jarImageSrc(startingSavings)}"
                alt=""
                aria-hidden="true"
            >

            <div class="jar-icon">
                ${iconMarkup(bucket.icon)}
            </div>

            <h3 class="jar-label">
                ${bucket.name}
            </h3>

            <button
                class="amount-entry-button"
                type="button"
            >
                <span
                    class="bucket-amount"
                    id="amount-${bucket.id}"
                >
                    $${startingSavings}
                </span>
            </button>

        </div>

            `;


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


    return div;

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

const keypadLockNote =
    document.getElementById(
        "keypad-lock-note"
    );

const keypadConfirmBtn =
    document.getElementById(
        "keypad-confirm-btn"
    );


// How much of a bucket's balance counts as
// "new" money out of THIS paycheck (savings
// carried over from last stage doesn't count).

function newMoneyIn(
    bucketId,
    value
) {

    if (
        bucketId === "savings" &&
        currentStage > 1
    ) {

        return Math.max(
            value - carriedSavings,
            0
        );

    }


    return value;

}


// A bucket can carry a hard floor: from Stage 2 on, Savings can't
// be dropped below whatever balance carried in from last stage --
// this is the one number in the keypad that's "locked in" rather
// than freely editable. Shared by openKeypad (badge), 
// updateKeypadDisplay (live feedback) and confirmKeypad (the
// actual guard) so all three always agree on the same value.
function getKeypadMinimum(bucketId) {

    return bucketId === "savings" &&
        currentStage > 1
            ? carriedSavings
            : 0;

}


function openKeypad(bucketId) {

    const stage =
        stages[currentStage];


    const bucket =
        stage.buckets.find(
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


    // ------------------------------------------
    // LOCKED-MINIMUM BADGE
    //
    // Shown up front (not just as an error after
    // the fact) so it's clear from the moment the
    // keypad opens that part of this number is
    // protected carryover, not freely erasable.
    // ------------------------------------------

    const minimum =
        getKeypadMinimum(bucketId);

    if (minimum > 0) {

        keypadLockNote.textContent =
            `🔒 $${minimum.toLocaleString()} of this is locked in from last stage`;

        keypadLockNote.classList.remove(
            "hidden"
        );

    }

    else {

        keypadLockNote.textContent =
            "";

        keypadLockNote.classList.add(
            "hidden"
        );

    }


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

    const stage =
        stages[currentStage];


    const typedAmount =
        keypadValue === ""
            ? 0
            : Number(keypadValue);


    keypadDisplay.textContent =
        `$${typedAmount.toLocaleString()}`;


    // ------------------------------------------
    // LIVE FLOOR FEEDBACK
    //
    // The moment a typed amount dips below the
    // locked-in minimum (see getKeypadMinimum),
    // say so immediately -- don't make the player
    // find out only after pressing Set Amount.
    // ------------------------------------------

    const minimum =
        getKeypadMinimum(activeKeypadBucket);

    const belowMinimum =
        minimum > 0 &&
        typedAmount < minimum;

    keypadDisplay.classList.toggle(
        "keypad-display-danger",
        belowMinimum
    );

    if (belowMinimum) {

        keypadError.textContent =
            `Can't go below $${minimum.toLocaleString()} — that's locked in from last stage.`;

    }


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
        stage.income -
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

    const stage =
        stages[currentStage];

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
        getKeypadMinimum(bucketId);


    if (
        typedAmount < minimum
    ) {

        keypadError.textContent =
            `Can't go below $${minimum.toLocaleString()} — that's locked in from last stage.`;

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
        stage.income
    ) {

        const maxAllowed =
            stage.income -
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

    const stage =
        stages[currentStage];


    const allocated =
        getAllocatedFromPaycheck();


    const remaining =
        stage.income -
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


            const jarImgElement =
                document.getElementById(
                    `jar-img-${bucketId}`
                );


            if (
                jarImgElement
            ) {

                jarImgElement.src =
                    jarImageSrc(
                        buckets[bucketId]
                    );

            }

        }
    );


    // ------------------------------------------
    // CAN START?
    //
    // Every dollar needs a bucket before the
    // stage can start — zero-based budgeting.
    // This is what makes "just put it all in
    // Savings" a losing move: Needs still has to
    // get funded from the same fixed paycheck.
    // ------------------------------------------

    if (
        allocated > stage.income
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
        allocated === stage.income
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


        // No message here on purpose -- the "Left to Allocate"
        // stat on the start button already shows this amount,
        // so a second line repeating it would just be noise.
        showBudgetMessage(
            "",
            "neutral"
        );

    }

}



// ============================================
// START BUTTON READY STATE
//
// One control does double duty: it's the "left
// to allocate" stat while budgeting, and flips
// into the actual Start Stage button the moment
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
// CREATE NEEDS PREVIEW
// ============================================
//
// Shows every Needs expense for the stage (known,
// fixed amounts — including anything carried
// forward: a Loan Payment, or a bill missed last
// stage) so the player can plan for those first,
// per the "Needs are always shown upfront" rule.
// Wants are deliberately left off — those amounts
// aren't known in advance, and that's the point.

function createNeedsPreview() {

    const section =
        document.getElementById(
            "bills-preview-section"
        );


    const list =
        document.getElementById(
            "bills-preview-list"
        );


    const visibleExpenses =
        currentStageExpenses.filter(
            expense =>
                expense.fixed
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
                    ${expense.title}${expense.loan || expense.carried ? " (carried over)" : ""}
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
        currentStage > 1 &&
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
// START STAGE
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

    const expense =
        currentStageExpenses[currentExpense];


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
        `Expense ${currentExpense + 1} of ${currentStageExpenses.length}`;


    const progress =
        (currentExpense /
        currentStageExpenses.length) * 100;


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
// tapping the OTHER spendable bucket counts as
// borrowing (see handleExpense) — the player sees
// the whole picture and decides. Savings is shown
// but never spendable. A bucket that can't cover
// the amount is disabled rather than hidden, so
// it's still visible as a consequence of how it
// was funded.
// ============================================

function renderPaymentPanel(expense) {

    const stage =
        stages[currentStage];


    document.getElementById(
        "payment-title"
    ).textContent =
        expense.optional
            ? "Pick a bucket to cover this -- it's the fun spending you planned for."
            : "Pick a bucket to pay this bill.";


    const needsRow =
        document.getElementById(
            "payment-needs-row"
        );

    const wantsRow =
        document.getElementById(
            "payment-wants-row"
        );

    const savingsSlot =
        document.getElementById(
            "payment-savings-slot"
        );


    needsRow.innerHTML = "";

    wantsRow.innerHTML = "";

    savingsSlot.innerHTML = "";


    let anyAffordable = false;


    // Same row split as createSetupBuckets(): Bills (pooled) plus
    // Needs on top, Wants in the middle, Savings alone on the
    // bottom row next to the secondary-action button -- so this
    // screen's bucket layout always matches the setup screen's.

    const needBuckets = [];

    const wantBuckets = [];

    let billBucket = null;

    let savingsBucket = null;


    selectedBuckets.forEach(
        bucketId => {

            const bucket =
                stage.buckets.find(
                    item =>
                        item.id === bucketId
                );


            if (!bucket) {

                return;

            }


            if (bucket.type === "need") {

                needBuckets.push(bucket);

            }

            else if (bucket.type === "want") {

                wantBuckets.push(bucket);

            }

            else if (bucket.type === "bill") {

                billBucket = bucket;

            }

            else {

                savingsBucket = bucket;

            }

        }
    );


    if (billBucket) {

        needBuckets.unshift(billBucket);

    }


    setRowColumns(needsRow, needBuckets.length);

    setRowColumns(wantsRow, wantBuckets.length);


    const placeTile =
        (row, bucket) => {

            const result =
                buildPaymentBucketTile(
                    bucket,
                    expense
                );


            if (result.affordable) {

                anyAffordable = true;

            }


            row.appendChild(
                result.tile
            );

        };


    needBuckets.forEach(
        bucket => placeTile(needsRow, bucket)
    );


    wantBuckets.forEach(
        bucket => placeTile(wantsRow, bucket)
    );


    if (savingsBucket) {

        placeTile(savingsSlot, savingsBucket);

    }


    // ------------------------------------------
    // SECONDARY ACTION
    //
    // Same gating for both now: the fallback button
    // only shows up once NOTHING on screen can
    // actually cover the amount -- spending on a
    // Want you funded is the expected outcome, not
    // something to opt out of. The two still read
    // differently once that happens: missing a Need
    // has real teeth (see missBill), while passing on
    // an unfunded Want costs nothing at all (see
    // passOnWant) -- it just means it wasn't planned
    // for.
    // ------------------------------------------

    const secondaryButton =
        document.getElementById(
            "secondary-action-btn"
        );


    if (expense.optional) {

        secondaryButton.textContent =
            "Not Enough Saved For This";

        secondaryButton.classList.toggle(
            "hidden",
            anyAffordable
        );

        secondaryButton.classList.remove(
            "miss-style"
        );

        secondaryButton.onclick =
            () => passOnWant(expense);

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


// Builds one jar tile for the payment screen -- tapping an
// affordable bucket pays the current expense from it (see
// handleExpense); an unaffordable one is disabled but still
// shown, same "this bucket funded a consequence" idea as before,
// just applied across however many jars a stage now has.
function buildPaymentBucketTile(bucket, expense) {

    const balance =
        buckets[bucket.id] || 0;

    const isSavings =
        bucket.id === "savings";

    const affordable =
        !isSavings &&
        balance >= expense.amount;


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

    // Reuses the exact same "bucket" card component as the setup
    // screen (type tag, icon, uppercase name, pale pill amount)
    // instead of a separately-styled tile, so the two screens'
    // buckets read as one shared shape. Savings gets the featured
    // bucket-savings look instead of the grey "disabled" treatment
    // -- it's permanently protected, not short on funds, so it
    // shouldn't look like the others.

    // No "correct bucket" hint here on purpose -- the player
    // figures out which bucket pays a bill on their own.
    tile.className =
        "bucket" +
        (isSavings
            ? " bucket-savings"
            : ` bucket-${bucket.type}` + (affordable ? "" : " disabled"));


    tile.innerHTML = `

        <div class="jar-visual">

            <img
                class="jar-img"
                src="${jarImageSrc(balance)}"
                alt=""
                aria-hidden="true"
            >

            <div class="jar-icon">
                ${iconMarkup(bucket.icon)}
            </div>

            <h3 class="jar-label">
                ${bucket.name}
            </h3>

            <div class="amount-entry-button">
                <strong class="bucket-amount">
                    $${balance}
                </strong>
            </div>

            ${noteHTML}

        </div>

    `;


    if (affordable) {

        tile.addEventListener(
            "click",
            () => {

                handleExpense(
                    bucket.id
                );

            }
        );

    }

    else {

        tile.disabled = true;

    }


    return {
        tile,
        affordable
    };

}



// ============================================
// PASS ON A WANT (ONLY WHEN NOTHING CAN COVER IT)
//
// Spending on a Want you planned for is a good
// thing, not a temptation to resist -- so there's
// no voluntary "skip" anymore. This only fires as
// a fallback when no bucket has enough to cover
// it, i.e. it genuinely wasn't funded. No penalty,
// no praise, no carryover -- it just didn't happen.
// ============================================

function passOnWant(expense) {

    showMessage(

        `You didn't set enough aside for ${expense.title.toLowerCase()} — moving on, no penalty.`,

        "neutral"

    );


    advanceToNextExpense();

}



// ============================================
// HANDLE EXPENSE (PAY, MAYBE BY BORROWING)
// ============================================

function handleExpense(
    selectedBucket
) {

    const expense =
        currentStageExpenses[currentExpense];


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

        // Same category (a Want covering another Want, a Need
        // covering another Need) is a minor shuffle -- still your
        // money doing its intended kind of job, just a different
        // jar. Crossing categories (Bills covering a Want, a Need
        // covering a Bill, etc.) is the real violation -- see the
        // wellness weights in finishMonth for how much each costs.
        const sameCategory =
            getBucketType(selectedBucket) ===
            getBucketType(expense.bucket);


        if (sameCategory) {

            borrowedSameCategory++;


            showMessage(

                `You covered $${expense.amount} from ${getBucketName(selectedBucket)} instead of ${getBucketName(expense.bucket)} -- same kind of money, just a different jar.`,

                "warning"

            );

        }

        else {

            borrowedCrossCategory++;


            showMessage(

                `You borrowed $${expense.amount} from ${getBucketName(selectedBucket)} to cover ${getBucketName(expense.bucket)}. That's less for its own plans later.`,

                "warning"

            );

        }

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
// only Needs ever show this button)
//
// Missing a Need has real teeth: it hurts the
// Financial Wellness score AND (unless it's a
// Loan Payment itself -- loans resolve fully
// within the stage they're introduced in) rolls
// into next stage as an added, carried-over bill.
// ============================================

function missBill() {

    const expense =
        currentStageExpenses[currentExpense];


    missedNeeds++;


    if (!expense.loan) {

        pendingExtraNeeds.push({
            icon: expense.icon,
            title: `Overdue: ${expense.title}`,
            description:
                "This didn't get paid last stage — it's due again now.",
            amount: expense.amount,
            bucket: "bills",
            fixed: true,
            carried: true
        });

    }


    showMessage(

        expense.missNarrative ||
            `You missed the ${expense.title} bill. That hurts your financial wellness.`,

        "error"

    );


    advanceToNextExpense();

}



// ============================================
// ADVANCE TO NEXT EXPENSE
// ============================================

function advanceToNextExpense() {

    setTimeout(
        () => {

            currentExpense++;


            if (
                currentExpense >=
                currentStageExpenses.length
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

    else if (
        type === "neutral"
    ) {

        // No penalty, no praise -- just stating what happened
        // (e.g. passing on a Want you didn't set money aside for).
        message.style.color =
            "#6b7280";

    }

    else {

        message.style.color =
            "#16a34a";

    }

}



// ============================================
// FINISH STAGE
// ============================================

function finishMonth() {

    // The stage screen stays visible (dimmed behind the popup's
    // scrim) rather than being hidden -- #end-screen is an
    // overlay on top of it, same convention as the #start-screen
    // welcome popup over the setup screen.
    endScreen.classList.remove(
        "hidden"
    );


    const stage =
        stages[currentStage];


    // ------------------------------------------
    // CALCULATE REMAINING + OVERFUNDING
    //
    // Needs/Wants reset to $0 every stage -- any
    // balance still sitting in either one wasn't
    // spent AND doesn't carry forward, so it's
    // called out explicitly rather than quietly
    // vanishing.
    // ------------------------------------------

    const remaining =
        Object.values(buckets)
            .reduce(
                (total, amount) =>
                    total + amount,
                0
            );


    const sumLeftoverByType =
        type =>
            stage.buckets
                .filter(
                    bucket =>
                        bucket.type === type
                )
                .reduce(
                    (total, bucket) =>
                        total + (buckets[bucket.id] || 0),
                    0
                );

    const leftoverNeeds =
        sumLeftoverByType("need");

    const leftoverBills =
        sumLeftoverByType("bill");

    const leftoverWants =
        sumLeftoverByType("want");


    const overfundingSection =
        document.getElementById(
            "overfunding-callout"
        );


    const overfundingLines = [];

    if (leftoverNeeds > 0) {

        overfundingLines.push(
            `You left <strong>$${leftoverNeeds}</strong> unused in Needs — it didn't carry over.`
        );

    }

    if (leftoverBills > 0) {

        overfundingLines.push(
            `You left <strong>$${leftoverBills}</strong> unused in Bills — it didn't carry over.`
        );

    }

    if (leftoverWants > 0) {

        overfundingLines.push(
            `You left <strong>$${leftoverWants}</strong> unused in Wants — it didn't carry over.`
        );

    }


    if (overfundingLines.length > 0) {

        overfundingSection.innerHTML =
            overfundingLines.join("<br>");

        overfundingSection.classList.remove(
            "hidden"
        );

    }

    else {

        overfundingSection.classList.add(
            "hidden"
        );

    }


    // ------------------------------------------
    // SAVE SAVINGS
    // ------------------------------------------

    const endingSavings =
        buckets.savings || 0;

    carriedSavings =
        endingSavings;


    // ------------------------------------------
    // SAVINGS RECAP
    //
    // No goal, hidden or otherwise -- just a plain
    // report of what ended up in Savings. Saved
    // something: called out positively, carries
    // forward as a head start. Saved nothing: no
    // penalty, no scolding, it just carries forward
    // as $0. Either way this never blocks progress
    // and never adds a bill -- Financial Wellness
    // (below) is the only place savings feeds into
    // a score, and only ever upward.
    // ------------------------------------------

    const readinessSection =
        document.getElementById(
            "readiness-outcome"
        );

    const isFinalStage =
        !stages[currentStage + 1];


    readinessSection.classList.remove(
        "hidden"
    );


    if (endingSavings > 0 && isFinalStage) {

        // The big moment: this is the whole "build your wealth"
        // payoff, so it leads with the full Teenager-to-Career arc
        // instead of just restating this stage's ending number.
        readinessSection.className =
            "readiness-outcome met";


        readinessSection.innerHTML = `

            <strong>🎉 You built $${endingSavings.toLocaleString()} from nothing!</strong>

            <p>
                You started with $0 back in Teenager and grew it all
                the way to $${endingSavings.toLocaleString()} by the end
                of Career. That's what saving a little each stage adds
                up to.
            </p>

        `;

    }

    else if (endingSavings > 0) {

        readinessSection.className =
            "readiness-outcome met";


        readinessSection.innerHTML = `

            <strong>💰 You saved $${endingSavings.toLocaleString()} this stage</strong>

            <p>
                It carries forward into next stage as a head start.
            </p>

        `;

    }

    else {

        readinessSection.className =
            "readiness-outcome";


        readinessSection.innerHTML = `

            <strong>${isFinalStage
                ? `You're finishing Career with $0 in Savings`
                : `You didn't save anything this stage`}</strong>

            <p>
                That's okay -- no penalty for it, it just carries
                forward as $0.
            </p>

        `;

    }


    // ------------------------------------------
    // RESULTS
    // ------------------------------------------

    document.getElementById(
        "end-title"
    ).textContent =
        `${stage.name} Complete!`;


    document.getElementById(
        "total-income"
    ).textContent =
        `$${stage.income.toLocaleString()}`;


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
        `$${endingSavings}`;


    // ------------------------------------------
    // WELLNESS — CUMULATIVE ACROSS ALL STAGES
    //
    // Savings ratio, -15/missed Need. Borrowing
    // between buckets is now two tiers instead of
    // one flat rate: -2 for staying within the same
    // category (Shopping covering Takeout -- still
    // Wants money, just a different jar), -5 for
    // crossing categories (Bills covering a Want,
    // a Need covering a Bill, etc.) -- that's the
    // real violation of "every dollar has a job."
    // Each stage's score is banked, and the running
    // average is the "overall" score -- Stage 3's
    // recap leads with that average instead of just
    // its own stage's number, so the final grade
    // reflects the whole financial life, not just
    // the last stage.
    // ------------------------------------------

    const newSavingsThisStage =
        newMoneyIn(
            "savings",
            endingSavings
        );


    let stageScore =
        Math.round(
            (newSavingsThisStage /
            stage.income) * 100
        );


    stageScore -=
        missedNeeds * 15;


    stageScore -=
        borrowedSameCategory * 2;


    stageScore -=
        borrowedCrossCategory * 5;


    if (stageHadLoanCarriedIn) {

        stageScore -= 10;

    }


    if (stageScore > 100) {

        stageScore = 100;

    }

    if (stageScore < 0) {

        stageScore = 0;

    }


    stageScores.push(stageScore);


    const cumulativeScore =
        Math.round(
            stageScores.reduce(
                (total, score) =>
                    total + score,
                0
            ) / stageScores.length
        );


    const isCapstone =
        !stages[currentStage + 1];


    const displayScore =
        isCapstone
            ? cumulativeScore
            : stageScore;


    document.getElementById(
        "wellness-scope-label"
    ).textContent =
        isCapstone
            ? "(Overall)"
            : "(This Stage)";


    document.getElementById(
        "wellness-score"
    ).textContent =
        `${displayScore}%`;


    document.getElementById(
        "wellness-fill"
    ).style.width =
        `${displayScore}%`;


    const cumulativeLine =
        document.getElementById(
            "cumulative-wellness-line"
        );


    if (!isCapstone) {

        cumulativeLine.classList.remove(
            "hidden"
        );

        document.getElementById(
            "cumulative-wellness-score"
        ).textContent =
            `${cumulativeScore}%`;

    }

    else {

        cumulativeLine.classList.add(
            "hidden"
        );

    }


    // ------------------------------------------
    // NEXT STAGE
    // ------------------------------------------

    let message =
        currentStage === 1
            ? "Nice work! Your savings will come with you into next stage."
            : "You handled another stage. Ready for what's next?";


    if (
        missedNeeds > 0
    ) {

        message +=
            ` You missed ${missedNeeds} Need${missedNeeds === 1 ? "" : "s"} bill${missedNeeds === 1 ? "" : "s"} this stage — that hurt your financial wellness.`;

    }


    if (
        borrowedCrossCategory > 0
    ) {

        message +=
            ` You crossed categories to cover something ${borrowedCrossCategory} time${borrowedCrossCategory === 1 ? "" : "s"} — that cost more.`;

    }


    if (
        borrowedSameCategory > 0
    ) {

        message +=
            ` You shifted money within a category ${borrowedSameCategory} time${borrowedSameCategory === 1 ? "" : "s"} — a smaller ding.`;

    }


    document.getElementById(
        "end-message"
    ).textContent =
        message;


    if (
        stages[currentStage + 1]
    ) {

        nextMonthButton.classList.remove(
            "hidden"
        );


        nextMonthButton.textContent =
            `Start ${stages[currentStage + 1].name}`;

    }

    else {

        nextMonthButton.classList.add(
            "hidden"
        );

    }

}



// ============================================
// NEXT STAGE
// ============================================

nextMonthButton.addEventListener(
    "click",
    () => {

        endScreen.classList.add(
            "hidden"
        );


        monthScreen.classList.add(
            "hidden"
        );


        setupScreen.classList.remove(
            "hidden"
        );


        loadStage(
            currentStage + 1
        );

    }
);



// ============================================
// RESTART BUTTON
// Same "start over" job as the other finlit
// games' header restart control -- simplest
// safe reset for a kiosk with this much state
// is just reloading the page fresh.
// ============================================

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

}



// ============================================
// HELPER
// ============================================

function getBucketName(
    bucketId
) {

    const stage =
        stages[currentStage];


    const bucket =
        stage.buckets.find(
            bucket =>
                bucket.id === bucketId
        );


    return bucket
        ? bucket.name
        : bucketId;

}


// Used to tell a same-category borrow (Shopping covering
// Takeout -- both Wants) from a cross-category one (Bills
// covering Takeout) -- see handleExpense.
function getBucketType(
    bucketId
) {

    const stage =
        stages[currentStage];


    const bucket =
        stage.buckets.find(
            bucket =>
                bucket.id === bucketId
        );


    return bucket
        ? bucket.type
        : null;

}



// ============================================
// START GAME
// ============================================

loadStage(1);
