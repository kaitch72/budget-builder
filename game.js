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
//
// jarSize defaults to the original fixed 250px -- the payment
// screen's calls (Stage 2/3's bill-paying phase) don't pass one,
// so their jars stay exactly the size they've always been. The
// setup screen passes its own size, computed per stage in
// createSetupBuckets() so a stage with fewer jars per row (Stage 1,
// now that Savings joined the grid instead of its own separate
// slot) gets noticeably bigger jars, while a stage with more
// (Career's 5-wide Needs row) still fits without overflowing.
function setRowColumns(rowEl, count, jarSize = 250) {

    rowEl.style.gridTemplateColumns =
        `repeat(${Math.max(count, 1)}, minmax(0, ${jarSize}px))`;

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

        // Shown in #stage-intro-screen before the sidebar/jars fly
        // in (see showStageIntro() below) -- a beat of story to
        // set up who the player is this stage and what they're
        // working with, before they're looking at a budget form.
        // "title" is the bold "Phase N: ..." header (see style.css's
        // #stage-intro-title). "{income}" in body is replaced with
        // the stage's formatted income at show time. All four stages
        // have one now (round 22 added Stages 2-4, matching this
        // stage's original pattern/voice) -- see #stage-intro-box in
        // style.css for the popup itself (no fixed height, grows
        // with the copy, so keep each stage's body roughly this
        // length rather than open-ended).
        storyIntro: {
            title: "Phase 1: Teenager",
            body:
                "This round, you're living at home and just started " +
                "getting an allowance — {income} to work with. Your " +
                "expenses are still pretty light at this age (a phone " +
                "bill, maybe some gas money), so most of this paycheck " +
                "is yours to figure out. Let's build your first budget."
        },

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
                id: "phone",
                type: "need",
                name: "Phone Plan",
                icon: "phone",
                description: "Pick your plan level"
            },

            {
                id: "transportation",
                type: "need",
                name: "Transportation",
                icon: "car",
                description: "Pick how you get around"
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
                bucket: "phone",
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

        ],


        // ==========================================
        // TIER-PICK PROTOTYPE DATA (Stage 1 only, for now)
        //
        // Needs/Wants/Savings menus for the new "pick your
        // level" flow the player will eventually go through
        // instead of funding buckets blind and reacting to
        // expenses later. Not wired into the live game yet --
        // only feeds the isolated tier-pick prototype screens
        // while they're being built and reviewed one piece at
        // a time. Numbers approved by Kayla 2026-09-15.
        // ==========================================

        tieredNeeds: [

            {
                id: "phone",
                name: "Phone Plan",
                icon: "phone",
                tiers: [
                    {
                        id: "family",
                        label: "Shared Family Line",
                        amount: 15,
                        wellbeing: -3,
                        note: "You're always fighting your family for data."
                    },
                    {
                        id: "basic",
                        label: "Basic Prepaid Plan",
                        amount: 30,
                        wellbeing: 0,
                        note: "Covers what you need, nothing fancy."
                    },
                    {
                        id: "unlimited",
                        label: "Unlimited Plan",
                        amount: 55,
                        wellbeing: 3,
                        note: "Never think about data again."
                    }
                ]
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                tiers: [
                    {
                        id: "ramen",
                        label: "Ramen & Snacks",
                        amount: 45,
                        wellbeing: -5,
                        note: "You're hungry a lot and it's not great food."
                    },
                    {
                        id: "groceries",
                        label: "Regular Groceries",
                        amount: 85,
                        wellbeing: 0,
                        note: "Solid, dependable meals."
                    },
                    {
                        id: "eatingout",
                        label: "Groceries + Eating Out With Friends",
                        amount: 140,
                        wellbeing: 5,
                        note: "Well-fed and social."
                    }
                ]
            },

            {
                id: "transportation",
                name: "Transportation",
                icon: "dollar",
                tiers: [
                    {
                        id: "walk",
                        label: "Walk/Bike Everywhere",
                        amount: 0,
                        wellbeing: -2,
                        note: "Exhausting, but free."
                    },
                    {
                        id: "gas",
                        label: "Gas Money for Rides",
                        amount: 35,
                        wellbeing: 0,
                        note: "Gets you where you need to go."
                    },
                    {
                        id: "own",
                        label: "Own Gas + Insurance Contribution",
                        amount: 75,
                        wellbeing: 3,
                        note: "Real independence."
                    }
                ]
            }

        ],

        tieredWants: [

            {
                id: "shopping",
                name: "Shopping",
                icon: "dollar",
                tiers: [
                    {
                        id: "small",
                        label: "A Small Treat",
                        amount: 10,
                        wellbeing: 1,
                        note: "Just something little for yourself."
                    },
                    {
                        id: "thrift",
                        label: "Thrift Finds",
                        amount: 30,
                        wellbeing: 2,
                        note: "A few new-to-you pieces."
                    },
                    {
                        id: "new",
                        label: "New Outfit",
                        amount: 65,
                        wellbeing: 5,
                        note: "Something you picked out fresh."
                    }
                ]
            },

            {
                id: "entertainment",
                name: "Entertainment",
                icon: "movie",
                tiers: [
                    {
                        id: "small",
                        label: "A Quiet Night In",
                        amount: 8,
                        wellbeing: 1,
                        note: "Just enough for a low-key night."
                    },
                    {
                        id: "occasional",
                        label: "Occasional Hangout",
                        amount: 20,
                        wellbeing: 2,
                        note: "A movie night here and there."
                    },
                    {
                        id: "regular",
                        label: "Regular Movie Nights & Outings",
                        amount: 50,
                        wellbeing: 5,
                        note: "Out with friends often."
                    }
                ]
            },

            {
                id: "takeout",
                name: "Takeout & Treats",
                icon: "food",
                tiers: [
                    {
                        id: "small",
                        label: "A Little Treat",
                        amount: 6,
                        wellbeing: 1,
                        note: "Just a small treat now and then."
                    },
                    {
                        id: "occasional",
                        label: "Occasional Treat",
                        amount: 15,
                        wellbeing: 2,
                        note: "A treat now and then."
                    },
                    {
                        id: "frequent",
                        label: "Frequent Takeout",
                        amount: 35,
                        wellbeing: 3,
                        note: "Eating out a lot."
                    }
                ]
            }

        ],

        tieredSavings: {

            id: "savings",
            name: "Savings",
            icon: "savings",
            tiers: [
                {
                    id: "minimal",
                    label: "Minimal",
                    amount: 10,
                    wellbeing: 0,
                    note: "Something is better than nothing."
                },
                {
                    id: "moderate",
                    label: "Moderate",
                    amount: 30,
                    wellbeing: 0,
                    note: "A steady habit."
                },
                {
                    id: "aggressive",
                    label: "Aggressive",
                    amount: 60,
                    wellbeing: 0,
                    note: "Building real momentum."
                }
            ]

        },


        // ==========================================
        // JAR NARRATIVE EVENTS
        // (every tiered bucket has a bad/good pair of
        // outcomes per tier now, but not every bucket
        // fires one every stage -- buildNarrativeQueue()
        // in game.js randomly picks just 2 of the
        // buckets a tier was actually chosen for, then
        // rolls a 50/50 on each of those two. Bonuses
        // always land in Savings; penalties come
        // straight out of Savings too (never below $0).
        // The one exception on each bucket is its
        // riskiest/priciest tier's bad outcome, which
        // carries forward as a bill next stage instead
        // of hitting Savings today -- same idea as a
        // real emergency expense or credit card catching
        // up with you later, and it keeps a bad stage
        // from being erased by low savings.)
        // ==========================================

        jarNarratives: {

            transportation: {

                walk: [
                    {
                        icon: "tools",
                        title: "New Helmet",
                        text: "Your old helmet cracked, so you had to replace it before riding again.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Saved on Gas",
                        text: "Great job saving on gas expenses this month!",
                        bonus: 10
                    }
                ],

                gas: [
                    {
                        icon: "car",
                        title: "Running Late",
                        text: "You were late one day because your friend slept in and couldn't give you a ride on time.",
                        penalty: 15
                    },
                    {
                        icon: "dollar",
                        title: "Being Resourceful",
                        text: "Good job being resourceful about getting your rides this month!",
                        bonus: 10
                    }
                ],

                own: [
                    {
                        icon: "emergency",
                        title: "Fender Bender",
                        text: "You got in a small accident this month. It wasn't serious, but the repair bill is coming due next stage.",
                        carryForwardBill: {
                            title: "Car Repair Bill",
                            amount: 40,
                            icon: "tools"
                        }
                    },
                    {
                        icon: "dollar",
                        title: "Extra Cash",
                        text: "Having your own ride paid off in an unexpected way -- you picked up a few paid rides for friends and made some extra cash.",
                        bonus: 20
                    }
                ]

            },


            food: {

                ramen: [
                    {
                        icon: "food",
                        title: "Not Enough Food",
                        text: "Your ramen-and-snacks budget ran short by the end of the month, so you had to spend a little more to get by.",
                        penalty: 8
                    },
                    {
                        icon: "food",
                        title: "Stretched It Well",
                        text: "You got creative with your ramen and snacks and stretched your budget further than expected.",
                        bonus: 8
                    }
                ],

                groceries: [
                    {
                        icon: "food",
                        title: "Grocery Prices Went Up",
                        text: "Prices crept up at the store this month, and you had to cover the difference.",
                        penalty: 12
                    },
                    {
                        icon: "food",
                        title: "Found Some Deals",
                        text: "You caught a great sale and saved more than expected on groceries this month.",
                        bonus: 12
                    }
                ],

                eatingout: [
                    {
                        icon: "emergency",
                        title: "Food Poisoning",
                        text: "One of those restaurant meals didn't agree with you. The doctor's visit is coming due next stage.",
                        carryForwardBill: {
                            title: "Doctor Visit Bill",
                            amount: 35,
                            icon: "emergency"
                        }
                    },
                    {
                        icon: "food",
                        title: "Free Dessert",
                        text: "A restaurant comped your whole table's dessert after a mix-up with your order -- nice surprise.",
                        bonus: 15
                    }
                ]

            },


            phone: {

                family: [
                    {
                        icon: "phone",
                        title: "Ran Out of Data",
                        text: "You blew through your shared data early and had to pay an overage fee.",
                        penalty: 8
                    },
                    {
                        icon: "phone",
                        title: "Sibling Paid You Back",
                        text: "Your sibling used more than their share of the family plan and paid you back for it.",
                        bonus: 8
                    }
                ],

                basic: [
                    {
                        icon: "phone",
                        title: "Lost Phone Case",
                        text: "You lost your phone case and had to replace it.",
                        penalty: 10
                    },
                    {
                        icon: "phone",
                        title: "Referral Bonus",
                        text: "Your prepaid carrier gave you a credit for referring a friend.",
                        bonus: 10
                    }
                ],

                unlimited: [
                    {
                        icon: "tools",
                        title: "Cracked Screen",
                        text: "You dropped your phone and cracked the screen. The repair bill is coming due next stage.",
                        carryForwardBill: {
                            title: "Phone Screen Repair",
                            amount: 45,
                            icon: "tools"
                        }
                    },
                    {
                        icon: "phone",
                        title: "Trade-In Credit",
                        text: "Your carrier ran a trade-in promotion and gave you an unexpected credit.",
                        bonus: 20
                    }
                ]

            },


            shopping: {

                small: [
                    {
                        icon: "dollar",
                        title: "Impulse Buy Regret",
                        text: "You grabbed something small on a whim that you didn't really need.",
                        penalty: 6
                    },
                    {
                        icon: "dollar",
                        title: "Found It On Sale",
                        text: "That little treat you wanted turned out to be on clearance.",
                        bonus: 6
                    }
                ],

                thrift: [
                    {
                        icon: "dollar",
                        title: "Store Credit Only",
                        text: "One of your thrifted pieces didn't fit right, and the store only gave store credit, not cash back.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Resold for More",
                        text: "You spotted a designer piece at the thrift store and resold it online for more than you paid.",
                        bonus: 15
                    }
                ],

                new: [
                    {
                        icon: "wallet",
                        title: "Credit Card Interest",
                        text: "You put your new outfit on a credit card and didn't pay it off -- the interest is catching up with you next stage.",
                        carryForwardBill: {
                            title: "Credit Card Balance",
                            amount: 25,
                            icon: "wallet"
                        }
                    },
                    {
                        icon: "dollar",
                        title: "Style Gig",
                        text: "A friend paid you to help style their outfit for an event.",
                        bonus: 25
                    }
                ]

            },


            entertainment: {

                small: [
                    {
                        icon: "movie",
                        title: "Forgot to Cancel",
                        text: "You forgot to cancel a free trial and got charged before you noticed.",
                        penalty: 6
                    },
                    {
                        icon: "movie",
                        title: "Free Rental",
                        text: "A friend's streaming code covered your night in for free.",
                        bonus: 6
                    }
                ],

                occasional: [
                    {
                        icon: "movie",
                        title: "Lost Your Ticket",
                        text: "You lost a ticket stub and had to pay for a replacement to get in.",
                        penalty: 10
                    },
                    {
                        icon: "movie",
                        title: "Won Something",
                        text: "You won a small prize at the arcade and it covered part of your night.",
                        bonus: 10
                    }
                ],

                regular: [
                    {
                        icon: "wallet",
                        title: "Overspent on a Night Out",
                        text: "One night out got more expensive than planned, and you put the rest on a card -- it's catching up with you next stage.",
                        carryForwardBill: {
                            title: "Credit Card Balance",
                            amount: 30,
                            icon: "wallet"
                        }
                    },
                    {
                        icon: "movie",
                        title: "Free Concert Tickets",
                        text: "A friend had extra tickets to a show and invited you along for free.",
                        bonus: 25
                    }
                ]

            },


            takeout: {

                small: [
                    {
                        icon: "food",
                        title: "Price Went Up",
                        text: "Your favorite spot raised prices and your treat cost more than expected.",
                        penalty: 4
                    },
                    {
                        icon: "food",
                        title: "Buy One Get One",
                        text: "Your favorite spot ran a surprise deal and you got two treats for the price of one.",
                        bonus: 4
                    }
                ],

                occasional: [
                    {
                        icon: "food",
                        title: "Forgot the Coupon",
                        text: "You forgot to use a coupon you'd been saving and paid full price.",
                        penalty: 8
                    },
                    {
                        icon: "food",
                        title: "Free Delivery",
                        text: "A delivery app waived the fee on your order this month.",
                        bonus: 8
                    }
                ],

                frequent: [
                    {
                        icon: "wallet",
                        title: "Takeout Adds Up",
                        text: "All that takeout added up more than you realized, and some of it went on a card -- it's catching up with you next stage.",
                        carryForwardBill: {
                            title: "Credit Card Balance",
                            amount: 20,
                            icon: "wallet"
                        }
                    },
                    {
                        icon: "food",
                        title: "Loyalty Rewards",
                        text: "Your takeout app's rewards program paid off with a nice credit.",
                        bonus: 15
                    }
                ]

            }

        }

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

        // See Stage 1's storyIntro above for how this field works.
        storyIntro: {
            title: "Phase 2: College",
            body:
                "This round, you're off on your own for college — " +
                "{income} to work with, and a real living situation " +
                "to sort out for the first time. Roommates keep the " +
                "rent cheap, your own place costs more, and there's " +
                "still food, phone, and plenty of things worth " +
                "spending on. Let's build this round's budget."
        },

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

        ],


        // ==========================================
        // TIERED NEEDS / WANTS
        // (same tier-pick pattern as Stage 1 -- see
        // that stage's comment block for the full
        // rationale. Bills combines Rent + Phone into
        // one housing-plus-plan choice instead of two
        // separate fixed line items; a bill carried in
        // from last stage's jar narratives adds its
        // amount on top of whichever Bills tier is
        // picked, same as it used to add onto the old
        // pooled Bills bucket during the payment phase.
        // stage.expenses above is unused dead data now,
        // same as Stage 1's -- left alone rather than
        // deleted.)
        // ==========================================

        tieredNeeds: [

            {
                id: "bills",
                name: "Bills",
                icon: "wallet",
                tiers: [
                    {
                        id: "roommates",
                        label: "Roommates + Basic Phone Plan",
                        amount: 220,
                        wellbeing: -3,
                        note: "Crowded, but it's cheap."
                    },
                    {
                        id: "own",
                        label: "Own Room + Standard Phone Plan",
                        amount: 280,
                        wellbeing: 0,
                        note: "Comfortable enough."
                    },
                    {
                        id: "solo",
                        label: "Private Apartment + Unlimited Plan",
                        amount: 370,
                        wellbeing: 4,
                        note: "Space and freedom, at a price."
                    }
                ]
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                tiers: [
                    {
                        id: "mealplanonly",
                        label: "Meal Plan Only",
                        amount: 60,
                        wellbeing: -3,
                        note: "Cafeteria food, every meal."
                    },
                    {
                        id: "groceries",
                        label: "Meal Plan + Some Groceries",
                        amount: 100,
                        wellbeing: 0,
                        note: "A bit more variety."
                    },
                    {
                        id: "eatingout",
                        label: "Meal Plan + Groceries + Eating Out",
                        amount: 150,
                        wellbeing: 4,
                        note: "Never stuck with just cafeteria food."
                    }
                ]
            },

            {
                id: "personalCare",
                name: "Basics",
                icon: "dollar",
                tiers: [
                    {
                        id: "minimum",
                        label: "Bare Minimum",
                        amount: 15,
                        wellbeing: -2,
                        note: "Just the essentials, nothing extra."
                    },
                    {
                        id: "stocked",
                        label: "Well-Stocked",
                        amount: 35,
                        wellbeing: 0,
                        note: "Toiletries and basics covered comfortably."
                    },
                    {
                        id: "selfcare",
                        label: "Self-Care Upgrade",
                        amount: 60,
                        wellbeing: 3,
                        note: "The extras that make you feel good."
                    }
                ]
            }

        ],

        tieredWants: [

            {
                id: "takeout",
                name: "Takeout",
                icon: "food",
                tiers: [
                    {
                        id: "rare",
                        label: "Rare Treat",
                        amount: 10,
                        wellbeing: 1,
                        note: "Coffee once in a while."
                    },
                    {
                        id: "regular",
                        label: "Regular Coffee Runs",
                        amount: 30,
                        wellbeing: 2,
                        note: "Coffee between classes, a few times a week."
                    },
                    {
                        id: "frequent",
                        label: "Coffee + Frequent Takeout",
                        amount: 60,
                        wellbeing: 4,
                        note: "Barely cook for yourself."
                    }
                ]
            },

            {
                id: "shopping",
                name: "Shopping",
                icon: "dollar",
                tiers: [
                    {
                        id: "minimal",
                        label: "Only If Necessary",
                        amount: 15,
                        wellbeing: 1,
                        note: "Replace something only when it wears out."
                    },
                    {
                        id: "occasional",
                        label: "A Few New Pieces",
                        amount: 40,
                        wellbeing: 2,
                        note: "Refresh your wardrobe here and there."
                    },
                    {
                        id: "frequent",
                        label: "Regular Shopping Trips",
                        amount: 80,
                        wellbeing: 5,
                        note: "Always something new."
                    }
                ]
            },

            {
                id: "entertainment",
                name: "Entertainment",
                icon: "movie",
                tiers: [
                    {
                        id: "streaming",
                        label: "Streaming Only",
                        amount: 12,
                        wellbeing: -1,
                        note: "Nights in, at home."
                    },
                    {
                        id: "goingout",
                        label: "Streaming + Going Out",
                        amount: 40,
                        wellbeing: 3,
                        note: "A mix of nights in and nights out."
                    },
                    {
                        id: "fullsocial",
                        label: "Streaming + Going Out + Weekend Trips",
                        amount: 75,
                        wellbeing: 5,
                        note: "Rarely turning down plans."
                    }
                ]
            }

        ],


        // ==========================================
        // JAR NARRATIVE EVENTS
        // Same shape and rules as Stage 1's block:
        // only the flagship (priciest) tier's bad
        // outcome carries forward as a bill; every
        // other tier's bad outcome comes straight out
        // of Savings instead.
        // ==========================================

        jarNarratives: {

            bills: {
                roommates: [
                    {
                        icon: "emergency",
                        title: "Loud Roommates",
                        text: "Your roommates threw a party the night before an exam and you couldn't focus for days.",
                        penalty: 8
                    },
                    {
                        icon: "dollar",
                        title: "Split A Grocery Run",
                        text: "Your roommates chipped in on shared snacks and supplies, saving everyone some cash.",
                        bonus: 8
                    }
                ],
                own: [
                    {
                        icon: "phone",
                        title: "Plan Overage",
                        text: "You went over your data limit this month and got hit with an overage fee.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Referral Credit",
                        text: "You referred a friend to your phone plan and got a bill credit.",
                        bonus: 10
                    }
                ],
                solo: [
                    {
                        icon: "tools",
                        title: "Apartment Repair",
                        text: "Something broke in your apartment and the landlord says it's on you to fix. The bill is due next stage.",
                        carryForwardBill: { title: "Apartment Repair Bill", amount: 50, icon: "tools" }
                    },
                    {
                        icon: "dollar",
                        title: "Landlord Credit",
                        text: "Your landlord gave you a partial credit for a maintenance delay.",
                        bonus: 25
                    }
                ]
            },

            food: {
                mealplanonly: [
                    {
                        icon: "food",
                        title: "Ran Out Of Meal Swipes",
                        text: "You ran out of meal swipes early and had to scrape together food for the last few days.",
                        penalty: 8
                    },
                    {
                        icon: "dollar",
                        title: "Meal Swipe Refund",
                        text: "The dining hall refunded some unused meal swipes at the end of the term.",
                        bonus: 8
                    }
                ],
                groceries: [
                    {
                        icon: "food",
                        title: "Groceries Went Bad",
                        text: "You bought more than you could eat before it went bad.",
                        penalty: 12
                    },
                    {
                        icon: "dollar",
                        title: "Coupon Savings",
                        text: "You found a stack of coupons and saved on your grocery run.",
                        bonus: 12
                    }
                ],
                eatingout: [
                    {
                        icon: "wallet",
                        title: "Food Delivery Adds Up",
                        text: "Delivery fees and tips quietly piled up this month. The bill catches up with you next stage.",
                        carryForwardBill: { title: "Food Delivery App Bill", amount: 35, icon: "wallet" }
                    },
                    {
                        icon: "dollar",
                        title: "Restaurant Gift Card",
                        text: "A friend's birthday dinner came with a surprise gift card for you too.",
                        bonus: 20
                    }
                ]
            },

            personalCare: {
                minimum: [
                    {
                        icon: "dollar",
                        title: "Ran Out Of Basics",
                        text: "You ran out of a few essentials and had to make do without them for a while.",
                        penalty: 6
                    },
                    {
                        icon: "dollar",
                        title: "Sample Sale",
                        text: "You scored a bunch of basics for cheap at a campus sample sale.",
                        bonus: 6
                    }
                ],
                stocked: [
                    {
                        icon: "dollar",
                        title: "Lost Your Bag",
                        text: "You left a bag of toiletries at the gym and had to replace everything.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Store Credit",
                        text: "A return you'd forgotten about came back as store credit.",
                        bonus: 10
                    }
                ],
                selfcare: [
                    {
                        icon: "tools",
                        title: "Salon Mishap",
                        text: "A salon appointment didn't go as planned and you're paying to get it fixed next stage.",
                        carryForwardBill: { title: "Salon Mishap Bill", amount: 30, icon: "tools" }
                    },
                    {
                        icon: "dollar",
                        title: "Referral Discount",
                        text: "You referred a friend to your favorite self-care spot and got a discount back.",
                        bonus: 20
                    }
                ]
            },

            takeout: {
                rare: [
                    {
                        icon: "food",
                        title: "Price Went Up",
                        text: "Your usual coffee order got more expensive this month.",
                        penalty: 4
                    },
                    {
                        icon: "dollar",
                        title: "Buy One Get One",
                        text: "A coffee shop near campus ran a buy-one-get-one deal.",
                        bonus: 4
                    }
                ],
                regular: [
                    {
                        icon: "food",
                        title: "Forgot The Coupon",
                        text: "You forgot your loyalty card and missed out on a free drink.",
                        penalty: 8
                    },
                    {
                        icon: "dollar",
                        title: "Loyalty Rewards",
                        text: "Your loyalty card finally paid off with a free item.",
                        bonus: 8
                    }
                ],
                frequent: [
                    {
                        icon: "wallet",
                        title: "Takeout Adds Up",
                        text: "Between coffee and takeout, the small charges added up more than you noticed. It catches up with you next stage.",
                        carryForwardBill: { title: "Credit Card Balance", amount: 25, icon: "wallet" }
                    },
                    {
                        icon: "dollar",
                        title: "Loyalty Rewards",
                        text: "A loyalty app you barely remembered signing up for paid out a reward.",
                        bonus: 18
                    }
                ]
            },

            shopping: {
                minimal: [
                    {
                        icon: "dollar",
                        title: "Impulse Buy Regret",
                        text: "You gave in and bought something small you didn't really need.",
                        penalty: 6
                    },
                    {
                        icon: "dollar",
                        title: "Found It On Sale",
                        text: "Something you needed anyway turned out to be on sale.",
                        bonus: 6
                    }
                ],
                occasional: [
                    {
                        icon: "dollar",
                        title: "Store Credit Only",
                        text: "A return didn't go the way you wanted -- store credit only, no cash back.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Resold For More",
                        text: "You resold something you didn't wear anymore for more than expected.",
                        bonus: 12
                    }
                ],
                frequent: [
                    {
                        icon: "wallet",
                        title: "Credit Card Interest",
                        text: "A few too many shopping trips this month mean interest is catching up with you next stage.",
                        carryForwardBill: { title: "Credit Card Balance", amount: 30, icon: "wallet" }
                    },
                    {
                        icon: "dollar",
                        title: "Resale Windfall",
                        text: "You cleaned out your closet and resold a few pieces for a solid profit.",
                        bonus: 25
                    }
                ]
            },

            entertainment: {
                streaming: [
                    {
                        icon: "tv",
                        title: "Forgot To Cancel A Trial",
                        text: "A free trial quietly turned into a paid subscription you forgot about.",
                        penalty: 5
                    },
                    {
                        icon: "dollar",
                        title: "Found A Cheaper Plan",
                        text: "You switched to a cheaper streaming bundle and pocketed the difference.",
                        bonus: 5
                    }
                ],
                goingout: [
                    {
                        icon: "movie",
                        title: "Lost Your Ticket",
                        text: "You lost a ticket to something you'd already paid for and had to buy it again.",
                        penalty: 10
                    },
                    {
                        icon: "dollar",
                        title: "Won Something",
                        text: "You won a small raffle prize at a campus event.",
                        bonus: 12
                    }
                ],
                fullsocial: [
                    {
                        icon: "wallet",
                        title: "Weekend Trip Overspend",
                        text: "A weekend trip cost more than planned, and it's catching up with you next stage.",
                        carryForwardBill: { title: "Credit Card Balance", amount: 30, icon: "wallet" }
                    },
                    {
                        icon: "dollar",
                        title: "Free Concert Tickets",
                        text: "A friend couldn't use their extra concert tickets, so you got in for free.",
                        bonus: 25
                    }
                ]
            }

        }

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

        // See Stage 1's storyIntro above for how this field works.
        storyIntro: {
            title: "Phase 3: Career",
            body:
                "This round, you've landed your first real job — " +
                "{income} to work with, and real responsibilities " +
                "to match. Rent, a car that actually needs to run, " +
                "groceries that aren't just snacks anymore — it " +
                "adds up fast before you even get to spend on " +
                "yourself. Let's see how much of this paycheck is " +
                "really yours."
        },

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

        ],


        // ==========================================
        // TIERED NEEDS / WANTS + JAR NARRATIVES
        // Same tier-picker + narrative system as
        // Stages 1 & 2. Career used to be the capstone
        // (no Stage 4 existed), so each bucket's
        // riskiest tier's bad outcome was just a
        // bigger flat penalty. Round 7 added Stage 4,
        // so those same seven bad outcomes were
        // upgraded to real carryForwardBill entries
        // (matching Stages 1 & 2's pattern) -- Advancing
        // Career is the capstone now.
        // ==========================================

        tieredNeeds: [

            {
                id: "bills",
                name: "Bills",
                icon: "wallet",
                tiers: [
                    { id: "shared", label: "Shared Apartment + Older Car", amount: 850, wellbeing: -4, note: "Cheaper, but your roommate's loud and your car makes a new noise every week." },
                    { id: "standard", label: "Own Apartment + Reliable Car", amount: 1090, wellbeing: 0, note: "Comfortable and dependable -- nothing fancy, nothing missing." },
                    { id: "upgraded", label: "Nicer Apartment + Newer Car", amount: 1400, wellbeing: 4, note: "More space, a nicer ride, one less thing to worry about." }
                ]
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                tiers: [
                    { id: "basic", label: "Basic Groceries", amount: 100, wellbeing: -3, note: "Keeps you fed. Ramen has range, apparently." },
                    { id: "groceries", label: "Groceries + Occasional Takeout", amount: 160, wellbeing: 0, note: "Solid meals, dependable, with a little variety." },
                    { id: "eatingwell", label: "Groceries + Eating Out Often", amount: 240, wellbeing: 4, note: "Good food, whenever you want it." }
                ]
            },

            {
                id: "gas",
                name: "Gas",
                icon: "car",
                tiers: [
                    { id: "efficient", label: "Fuel-Efficient Commute", amount: 50, wellbeing: -1, note: "You watch every gallon." },
                    { id: "standard", label: "Standard Commute", amount: 90, wellbeing: 0, note: "Fill up when you need to, no stress about it." },
                    { id: "flexible", label: "Fill Up Whenever", amount: 140, wellbeing: 3, note: "Road trips, detours, never checking the gauge." }
                ]
            },

            {
                id: "personalCare",
                name: "Basics",
                icon: "dollar",
                tiers: [
                    { id: "minimum", label: "Bare Minimum", amount: 25, wellbeing: -2, note: "Covers the basics. Barely." },
                    { id: "stocked", label: "Well-Stocked", amount: 45, wellbeing: 0, note: "Toiletries and basics, always on hand." },
                    { id: "selfcare", label: "Self-Care Routine", amount: 85, wellbeing: 4, note: "Skincare, haircuts, the extras that add up." }
                ]
            }

        ],

        tieredWants: [

            {
                id: "takeout",
                name: "Takeout",
                icon: "food",
                tiers: [
                    { id: "rare", label: "Rare Treat", amount: 25, wellbeing: 1, note: "Takeout once in a while." },
                    { id: "regular", label: "Regular Takeout", amount: 60, wellbeing: 2, note: "A few nights a week you just don't cook." },
                    { id: "frequent", label: "Frequent Takeout", amount: 110, wellbeing: 4, note: "You barely turn on your own stove." }
                ]
            },

            {
                id: "shopping",
                name: "Shopping",
                icon: "dollar",
                tiers: [
                    { id: "minimal", label: "Only When Necessary", amount: 30, wellbeing: 1, note: "Replace something only when it wears out." },
                    { id: "occasional", label: "A Few New Things", amount: 75, wellbeing: 2, note: "Refresh things here and there." },
                    { id: "frequent", label: "Regular Shopping Trips", amount: 140, wellbeing: 5, note: "Always something new on the way." }
                ]
            },

            {
                id: "entertainment",
                name: "Entertainment",
                icon: "movie",
                tiers: [
                    { id: "streaming", label: "Streaming Only", amount: 20, wellbeing: -1, note: "Nights in, at home." },
                    { id: "goingout", label: "Streaming + Going Out", amount: 65, wellbeing: 3, note: "A mix of nights in and nights out." },
                    { id: "fullsocial", label: "Streaming + Going Out + Weekend Trips", amount: 130, wellbeing: 5, note: "Rarely turning down plans." }
                ]
            }

        ],


        // ==========================================
        // JAR NARRATIVE EVENTS
        // Numbers approved by Kayla 2026-09-16.
        // ==========================================

        jarNarratives: {

            bills: {
                shared: [
                    { icon: "tools", title: "Car Trouble", text: "Your older car needed an unexpected repair this month.", penalty: 60 },
                    { icon: "dollar", title: "Roommate Split", text: "Your roommate covered a little extra on a shared bill.", bonus: 40 }
                ],
                standard: [
                    { icon: "emergency", title: "Rent Went Up", text: "Your landlord raised the rent a little this cycle.", penalty: 50 },
                    { icon: "dollar", title: "Utility Refund", text: "Your utility company refunded an overcharge from last cycle.", bonus: 50 }
                ],
                upgraded: [
                    { icon: "tools", title: "Big Repair Bill", text: "Something major went wrong at your nicer apartment, and repairs aren't cheap. It'll follow you into next stage.", carryForwardBill: { title: "Apartment Repair Bill", amount: 120, icon: "tools" } },
                    { icon: "dollar", title: "Landlord Credit", text: "Your landlord gave you a credit for a maintenance delay.", bonus: 70 }
                ]
            },

            food: {
                basic: [
                    { icon: "food", title: "Ran Out Early", text: "You ran out of groceries a few days before payday.", penalty: 15 },
                    { icon: "dollar", title: "Coupon Haul", text: "You found a stack of coupons and stocked up for less.", bonus: 15 }
                ],
                groceries: [
                    { icon: "food", title: "Food Went Bad", text: "You bought more than you could eat before it spoiled.", penalty: 20 },
                    { icon: "dollar", title: "Store Rewards", text: "Your grocery store's rewards program paid off this month.", bonus: 20 }
                ],
                eatingwell: [
                    { icon: "wallet", title: "Dining Out Adds Up", text: "Between restaurants and delivery, the tabs added up more than you noticed this month -- the balance is due next stage.", carryForwardBill: { title: "Dining Tab Balance", amount: 60, icon: "wallet" } },
                    { icon: "dollar", title: "Free Meal", text: "A friend treated you to a nice dinner out.", bonus: 35 }
                ]
            },

            gas: {
                efficient: [
                    { icon: "car", title: "Detour", text: "Road construction meant a longer route to work all month.", penalty: 10 },
                    { icon: "dollar", title: "Gas Prices Dropped", text: "Prices at the pump dipped for a few weeks.", bonus: 10 }
                ],
                standard: [
                    { icon: "car", title: "Price Spike", text: "Gas prices jumped right when you needed a fill-up.", penalty: 15 },
                    { icon: "dollar", title: "Carpool Savings", text: "You carpooled with a coworker a few times and split the cost.", bonus: 15 }
                ],
                flexible: [
                    { icon: "car", title: "Heavy Traveling Month", text: "Between errands, trips, and detours, you filled up more than expected -- and put some of it on a card.", carryForwardBill: { title: "Auto Maintenance Bill", amount: 35, icon: "tools" } },
                    { icon: "dollar", title: "Gas Rewards Card", text: "Your gas rewards card kicked back some cash this month.", bonus: 25 }
                ]
            },

            personalCare: {
                minimum: [
                    { icon: "dollar", title: "Ran Out Of Basics", text: "You ran out of a few essentials and had to make do.", penalty: 8 },
                    { icon: "dollar", title: "Sample Sizes", text: "You picked up some free samples that covered you for a bit.", bonus: 8 }
                ],
                stocked: [
                    { icon: "dollar", title: "Lost Your Bag", text: "You left a bag of toiletries at the gym and had to replace everything.", penalty: 12 },
                    { icon: "dollar", title: "Store Credit", text: "A forgotten return came back as store credit.", bonus: 12 }
                ],
                selfcare: [
                    { icon: "tools", title: "Appointment Mishap", text: "A haircut appointment didn't go as planned and you're paying to get it fixed next stage.", carryForwardBill: { title: "Salon Touch-Up Bill", amount: 30, icon: "tools" } },
                    { icon: "dollar", title: "Referral Discount", text: "You referred a friend to your favorite spot and got a discount back.", bonus: 22 }
                ]
            },

            takeout: {
                rare: [
                    { icon: "food", title: "Price Went Up", text: "Your usual order got a little pricier this month.", penalty: 6 },
                    { icon: "dollar", title: "Buy One Get One", text: "A restaurant near work ran a deal.", bonus: 6 }
                ],
                regular: [
                    { icon: "food", title: "Forgot The App Code", text: "You forgot to apply a discount code and paid full price.", penalty: 10 },
                    { icon: "dollar", title: "Loyalty Rewards", text: "Your rewards app finally paid off with a free item.", bonus: 10 }
                ],
                frequent: [
                    { icon: "wallet", title: "Takeout Adds Up", text: "Between lunches and dinners out, the small charges snowballed this month -- it's on a card now.", carryForwardBill: { title: "Food Delivery App Bill", amount: 28, icon: "wallet" } },
                    { icon: "dollar", title: "Surprise Gift Card", text: "A coworker passed along a gift card they weren't using.", bonus: 20 }
                ]
            },

            shopping: {
                minimal: [
                    { icon: "dollar", title: "Impulse Buy Regret", text: "You gave in and bought something small you didn't need.", penalty: 8 },
                    { icon: "dollar", title: "Found It On Sale", text: "Something you needed anyway turned out to be discounted.", bonus: 8 }
                ],
                occasional: [
                    { icon: "dollar", title: "Store Credit Only", text: "A return didn't go the way you wanted -- store credit only.", penalty: 14 },
                    { icon: "dollar", title: "Resold For More", text: "You resold something you didn't need for more than expected.", bonus: 15 }
                ],
                frequent: [
                    { icon: "wallet", title: "Credit Card Interest", text: "A few too many shopping trips mean interest is catching up with you -- the balance rolls into next stage.", carryForwardBill: { title: "Credit Card Balance", amount: 35, icon: "wallet" } },
                    { icon: "dollar", title: "Resale Windfall", text: "You cleaned out your closet and resold a few pieces for a solid profit.", bonus: 28 }
                ]
            },

            entertainment: {
                streaming: [
                    { icon: "tv", title: "Forgot To Cancel A Trial", text: "A free trial quietly turned into a paid subscription you forgot about.", penalty: 6 },
                    { icon: "dollar", title: "Found A Cheaper Bundle", text: "You switched to a cheaper streaming bundle and pocketed the difference.", bonus: 6 }
                ],
                goingout: [
                    { icon: "movie", title: "Lost Your Ticket", text: "You lost a ticket to something you'd already paid for and had to buy it again.", penalty: 14 },
                    { icon: "dollar", title: "Won Something", text: "You won a raffle prize at a work event.", bonus: 15 }
                ],
                fullsocial: [
                    { icon: "wallet", title: "Weekend Trip Overspend", text: "A weekend trip cost more than planned this month -- you put the overage on a card.", carryForwardBill: { title: "Travel Card Balance", amount: 32, icon: "wallet" } },
                    { icon: "dollar", title: "Free Concert Tickets", text: "A friend couldn't use their extra tickets, so you got in for free.", bonus: 28 }
                ]
            }

        }

    },


    // ==========================================
    // STAGE 4 — PEAK CAREER
    // Added round 7 -- years further into the same
    // career, a big promotion, and a much bigger
    // paycheck to go with it. Same tiered/narrative/
    // auto-savings system as every other stage, same
    // bucket ids as Career (food/gas/personalCare/
    // takeout/shopping/entertainment/bills/savings --
    // no new bucket added, to keep the Needs row at
    // its proven 5-wide layout) -- "more bills and
    // whatnot" is folded into the Bills jar itself:
    // its three tiers now bundle a housing + car
    // payment (like Career's Bills jar already did)
    // with an old-debt payoff pace on top (minimum-
    // only at the cheap end, aggressive payoff at the
    // expensive end), instead of adding a standalone
    // Debt jar that would've pushed the Needs row to
    // 6-wide and risked overflowing the stage width
    // (see setRowColumns's jarSize clamp -- 6 columns
    // computes below the 220px floor).
    //
    // This is now the CAPSTONE stage (no Stage 5) --
    // Career's old "riskiest tier = bigger flat
    // penalty" pattern moved here, and Career's own
    // narratives were upgraded to real carryForwardBill
    // entries above now that they have somewhere to
    // carry into.
    // ==========================================

    4: {

        name: "Advancing Career",

        income: 4000,

        title: "The Big Promotion",

        description:
            "Years of hard work paid off — a big promotion means a much bigger paycheck. But bigger responsibilities came with it: a mortgage instead of rent, a nicer car payment, and the old debt that's still hanging around. Let's see how you handle the next level.",

        // See Stage 1's storyIntro above for how this field works.
        storyIntro: {
            title: "Phase 4: Advancing Career",
            body:
                "This round, the promotion came through — {income} " +
                "to work with, a big jump from before. The " +
                "responsibilities grew right along with it: a " +
                "mortgage instead of rent, a nicer car payment, and " +
                "old debt that's still hanging around and needs " +
                "paying down. Let's see what a bigger paycheck " +
                "actually buys you, once everything else gets its cut."
        },

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

        // Dead/unused for a tiered stage (see the Career stage's
        // own note above) -- kept as an empty array rather than a
        // populated-but-unused one like Career's, since there's no
        // pre-migration history to preserve here. loadStage() still
        // reads stage.expenses unconditionally for every stage, so
        // this has to exist even though nothing in the tiered path
        // ever touches it.
        expenses: [],


        // ==========================================
        // TIERED NEEDS / WANTS + JAR NARRATIVES
        // Same tier-picker + narrative system as every
        // other stage. Dollar amounts roughly double
        // Career's to match the bigger $4,000 paycheck;
        // Bills scales up more than that since it now
        // bundles a debt-payoff pace on top of housing
        // + car (see the stage-level note above).
        // ==========================================

        tieredNeeds: [

            {
                id: "bills",
                name: "Bills",
                icon: "wallet",
                tiers: [
                    { id: "modest", label: "Starter Home + Reliable Car + Minimum Debt Payments", amount: 2000, wellbeing: -3, note: "A smaller mortgage, a car that gets the job done, and every loan at its minimum -- the balances aren't moving much." },
                    { id: "comfortable", label: "Upgraded Home + Newer Car + Steady Debt Payoff", amount: 2500, wellbeing: 0, note: "More space, a smoother commute, and steadily chipping away at what you owe." },
                    { id: "upgraded", label: "Dream Home + Luxury Car + Aggressive Debt Payoff", amount: 3000, wellbeing: 4, note: "The house and car you always pictured, plus throwing extra at your old debt every month." }
                ]
            },

            {
                id: "food",
                name: "Food",
                icon: "food",
                tiers: [
                    { id: "basic", label: "Basic Groceries", amount: 220, wellbeing: -3, note: "Keeps you fed. Nothing more." },
                    { id: "groceries", label: "Groceries + Occasional Takeout", amount: 340, wellbeing: 0, note: "Solid meals, dependable, with a little variety." },
                    { id: "eatingwell", label: "Groceries + Eating Out Often", amount: 480, wellbeing: 4, note: "Whatever sounds good, whenever you want it." }
                ]
            },

            {
                id: "gas",
                name: "Gas",
                icon: "car",
                tiers: [
                    { id: "efficient", label: "Fuel-Efficient Commute", amount: 100, wellbeing: -1, note: "You plan your trips around the tank." },
                    { id: "standard", label: "Standard Commute", amount: 160, wellbeing: 0, note: "Fill up when you need to, no stress about it." },
                    { id: "flexible", label: "Fill Up Whenever", amount: 260, wellbeing: 3, note: "Never checking the gauge." }
                ]
            },

            {
                id: "personalCare",
                name: "Basics",
                icon: "dollar",
                tiers: [
                    { id: "minimum", label: "Bare Minimum", amount: 50, wellbeing: -2, note: "Covers the basics. Barely." },
                    { id: "stocked", label: "Well-Stocked", amount: 90, wellbeing: 0, note: "Toiletries and basics, always on hand." },
                    { id: "selfcare", label: "Self-Care Routine", amount: 160, wellbeing: 4, note: "Skincare, haircuts, the extras that make life easier." }
                ]
            }

        ],

        tieredWants: [

            {
                id: "takeout",
                name: "Takeout",
                icon: "food",
                tiers: [
                    { id: "rare", label: "Rare Treat", amount: 50, wellbeing: 1, note: "Takeout once in a while." },
                    { id: "regular", label: "Regular Takeout", amount: 120, wellbeing: 2, note: "A few nights a week you just don't cook." },
                    { id: "frequent", label: "Frequent Takeout", amount: 220, wellbeing: 4, note: "You barely turn on your own stove." }
                ]
            },

            {
                id: "shopping",
                name: "Shopping",
                icon: "dollar",
                tiers: [
                    { id: "minimal", label: "Only When Necessary", amount: 60, wellbeing: 1, note: "Replace something only when it wears out." },
                    { id: "occasional", label: "A Few New Things", amount: 150, wellbeing: 2, note: "Refresh things here and there." },
                    { id: "frequent", label: "Regular Shopping Trips", amount: 280, wellbeing: 5, note: "Always something new on the way." }
                ]
            },

            {
                id: "entertainment",
                name: "Entertainment",
                icon: "movie",
                tiers: [
                    { id: "streaming", label: "Streaming Only", amount: 40, wellbeing: -1, note: "Nights in, at home." },
                    { id: "goingout", label: "Streaming + Going Out", amount: 130, wellbeing: 3, note: "A mix of nights in and nights out." },
                    { id: "fullsocial", label: "Streaming + Going Out + Weekend Trips", amount: 260, wellbeing: 5, note: "Rarely turning down plans." }
                ]
            }

        ],


        // ==========================================
        // JAR NARRATIVE EVENTS
        // Advancing Career is the capstone (no Stage 5), so
        // every bucket's riskiest tier's bad outcome is
        // a bigger flat penalty -- same convention
        // Career used to follow before it had a next
        // stage to carry a bill into.
        // ==========================================

        jarNarratives: {

            bills: {
                modest: [
                    { icon: "tools", title: "Furnace Repair", text: "Your starter home's furnace needed an emergency repair this month.", penalty: 120 },
                    { icon: "dollar", title: "Refinance Savings", text: "You refinanced one of your loans at a slightly better rate and pocketed the difference.", bonus: 90 }
                ],
                comfortable: [
                    { icon: "emergency", title: "Property Taxes Went Up", text: "Your property tax assessment came in higher than expected.", penalty: 150 },
                    { icon: "dollar", title: "Escrow Refund", text: "Your mortgage escrow account had a surplus refunded back to you.", bonus: 120 }
                ],
                upgraded: [
                    { icon: "tools", title: "Major Home Repair", text: "Something big broke at the dream house, and dream houses aren't cheap to fix.", penalty: 300 },
                    { icon: "dollar", title: "Payoff Milestone Bonus", text: "You hit a debt payoff milestone this month and celebrated with a little breathing room.", bonus: 170 }
                ]
            },

            food: {
                basic: [
                    { icon: "food", title: "Ran Out Early", text: "You ran out of groceries a few days before payday.", penalty: 25 },
                    { icon: "dollar", title: "Coupon Haul", text: "You found a stack of coupons and stocked up for less.", bonus: 25 }
                ],
                groceries: [
                    { icon: "food", title: "Food Went Bad", text: "You bought more than you could eat before it spoiled.", penalty: 35 },
                    { icon: "dollar", title: "Store Rewards", text: "Your grocery store's rewards program paid off this month.", bonus: 35 }
                ],
                eatingwell: [
                    { icon: "wallet", title: "Dining Out Adds Up", text: "Between restaurants and delivery, the tabs added up more than you noticed this month.", penalty: 90 },
                    { icon: "dollar", title: "Client Dinner Reimbursed", text: "Work reimbursed you for a dinner you'd already paid for out of pocket.", bonus: 55 }
                ]
            },

            gas: {
                efficient: [
                    { icon: "car", title: "Detour", text: "Road construction meant a longer commute all month.", penalty: 18 },
                    { icon: "dollar", title: "Gas Prices Dropped", text: "Prices at the pump dipped for a few weeks.", bonus: 18 }
                ],
                standard: [
                    { icon: "car", title: "Price Spike", text: "Gas prices jumped right when you needed a fill-up.", penalty: 25 },
                    { icon: "dollar", title: "Carpool Savings", text: "You carpooled with a coworker a few times and split the cost.", bonus: 22 }
                ],
                flexible: [
                    { icon: "car", title: "Heavy Travel Month", text: "Between errands, trips, and a few work drives, you filled up more than expected.", penalty: 55 },
                    { icon: "dollar", title: "Mileage Reimbursement", text: "Work reimbursed your mileage for a business trip.", bonus: 45 }
                ]
            },

            personalCare: {
                minimum: [
                    { icon: "dollar", title: "Ran Out Of Basics", text: "You ran out of a few essentials and had to make do.", penalty: 14 },
                    { icon: "dollar", title: "Sample Sizes", text: "You picked up some free samples that covered you for a bit.", bonus: 14 }
                ],
                stocked: [
                    { icon: "dollar", title: "Lost Your Bag", text: "You left a bag of toiletries at the gym and had to replace everything.", penalty: 20 },
                    { icon: "dollar", title: "Store Credit", text: "A forgotten return came back as store credit.", bonus: 20 }
                ],
                selfcare: [
                    { icon: "tools", title: "Appointment Mishap", text: "An appointment didn't go as planned and you're paying to get it fixed.", penalty: 45 },
                    { icon: "dollar", title: "Referral Discount", text: "You referred a friend to your favorite spot and got a discount back.", bonus: 35 }
                ]
            },

            takeout: {
                rare: [
                    { icon: "food", title: "Price Went Up", text: "Your usual order got a little pricier this month.", penalty: 10 },
                    { icon: "dollar", title: "Buy One Get One", text: "A restaurant near work ran a deal.", bonus: 10 }
                ],
                regular: [
                    { icon: "food", title: "Forgot The App Code", text: "You forgot to apply a discount code and paid full price.", penalty: 18 },
                    { icon: "dollar", title: "Loyalty Rewards", text: "Your rewards app finally paid off with a free item.", bonus: 18 }
                ],
                frequent: [
                    { icon: "wallet", title: "Takeout Adds Up", text: "Between lunches and dinners out, the small charges snowballed this month.", penalty: 50 },
                    { icon: "dollar", title: "Surprise Gift Card", text: "A coworker passed along a gift card they weren't using.", bonus: 35 }
                ]
            },

            shopping: {
                minimal: [
                    { icon: "dollar", title: "Impulse Buy Regret", text: "You gave in and bought something small you didn't need.", penalty: 14 },
                    { icon: "dollar", title: "Found It On Sale", text: "Something you needed anyway turned out to be discounted.", bonus: 14 }
                ],
                occasional: [
                    { icon: "dollar", title: "Store Credit Only", text: "A return didn't go the way you wanted -- store credit only.", penalty: 24 },
                    { icon: "dollar", title: "Resold For More", text: "You resold something you didn't need for more than expected.", bonus: 26 }
                ],
                frequent: [
                    { icon: "wallet", title: "Credit Card Interest", text: "A few too many shopping trips mean interest is catching up with you.", penalty: 60 },
                    { icon: "dollar", title: "Resale Windfall", text: "You cleaned out a closet and resold a few pieces for a solid profit.", bonus: 48 }
                ]
            },

            entertainment: {
                streaming: [
                    { icon: "tv", title: "Forgot To Cancel A Trial", text: "A free trial quietly turned into a paid subscription you forgot about.", penalty: 10 },
                    { icon: "dollar", title: "Found A Cheaper Bundle", text: "You switched to a cheaper streaming bundle and pocketed the difference.", bonus: 10 }
                ],
                goingout: [
                    { icon: "movie", title: "Lost Your Ticket", text: "You lost a ticket to something you'd already paid for and had to buy it again.", penalty: 24 },
                    { icon: "dollar", title: "Won Something", text: "You won a raffle prize at a work event.", bonus: 26 }
                ],
                fullsocial: [
                    { icon: "wallet", title: "Weekend Trip Overspend", text: "A weekend trip cost more than planned this month.", penalty: 55 },
                    { icon: "dollar", title: "Free Concert Tickets", text: "A friend couldn't use their extra tickets, so you got in for free.", bonus: 48 }
                ]
            }

        }

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

// Total $ of any carried-forward bills due THIS
// stage (from last stage's jar narratives), plus
// which ones they were -- set once per loadStage()
// call, added on top of whichever tier the "bills"
// bucket ends up picking (see selectTierForBucket
// and renderTierPickerOptions), same as these used
// to add onto the old pooled Bills bucket during the
// payment phase.
let carriedBillsThisStage = 0;
let carriedBillsList = [];

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

const allocateStatLabel =
    document.getElementById("allocate-stat-label");

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


const playAgainButton =
    document.getElementById(
        "play-again-btn"
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

// The welcome popup's second, quieter button -- takes the player
// through the same Phase 1 story popup as a normal Start, but arms
// tutorialActive first (see dismissWelcomePopup() below), so the
// guided walkthrough begins the moment they clear that story popup
// too (see stageIntroContinueBtn's handler further down).
const welcomeTutorialButton =
    document.getElementById(
        "tutorial-button"
    );

// True once the welcome popup has been dismissed for the first
// (and only) time this page load. Before that, loadStage(1)'s own
// story-popup priming (see primeStageIntro()/showStageIntro() below)
// stays a step short of actually revealing anything -- text is set
// and the sidebar/jars/wellness bar/step heading are all put into
// their hidden entrance state, but nothing pops into view behind
// the welcome popup itself. The welcome-dismiss handler below is
// what flips this and reveals the wellness bar + story popup.
let welcomeDismissed = false;

// True from the moment the welcome popup's Tutorial button is
// clicked until the tutorial ends (either finished or skipped --
// see endTutorial() in the TUTORIAL section below). Checked by
// stageIntroContinueBtn's handler to decide whether "Let's Go"
// should kick off the tutorial walkthrough or just behave normally.
let tutorialActive = false;

const wellnessBarEl =
    document.getElementById(
        "wellness-bar"
    );

// Shared by both welcome-popup buttons -- Start and Tutorial both
// dismiss the popup and reveal the wellness bar + this stage's
// story popup identically. Only the Tutorial button additionally
// arms tutorialActive first (see its own handler below), so
// everything that happens once the story popup itself is dismissed
// is what actually tells the two paths apart.
function dismissWelcomePopup() {

    if (welcomeStartScreen) {
        welcomeStartScreen.style.display = "none";
    }

    welcomeDismissed = true;

    // The wellness bar stays hidden (see primeStageIntro())
    // until the welcome popup goes away, so nothing but the
    // welcome popup itself is visible over the stage's
    // background scene on first load. Reveal it now,
    // regardless of whether this stage has a story popup --
    // it should never stay hidden past this point.
    if (wellnessBarEl) {
        wellnessBarEl.classList.remove("entrance-hidden");
    }

    // The current stage's story popup (if any) was already
    // primed -- text set, sidebar/jars/step-heading hidden --
    // by loadStage()'s initial call, but deliberately left
    // un-shown until now so it couldn't peek out from behind
    // the welcome popup (its box is wider than #start-box).
    // Reveal it for real.
    const stage = stages[currentStage];

    if (stage && stage.storyIntro && stageIntroScreen) {
        stageIntroScreen.classList.remove("hidden");
    }

}


if (welcomeStartButton) {

    welcomeStartButton.addEventListener(
        "click",
        dismissWelcomePopup
    );

}


if (welcomeTutorialButton) {

    welcomeTutorialButton.addEventListener(
        "click",
        () => {

            tutorialActive = true;

            dismissWelcomePopup();

        }
    );

}



// ============================================
// STAGE INTRO STORY POPUP
// A short narrative beat shown before a stage's
// sidebar/jars appear (see loadStage() below),
// establishing who the player is this stage and
// what they're working with. Only stages whose
// config has a `storyIntro` field show this --
// everything else falls through untouched, same
// as before this feature existed.
// ============================================

const stageIntroScreen =
    document.getElementById(
        "stage-intro-screen"
    );

const stageIntroTitle =
    document.getElementById(
        "stage-intro-title"
    );

const stageIntroBody =
    document.getElementById(
        "stage-intro-body"
    );

const stageIntroContinueBtn =
    document.getElementById(
        "stage-intro-continue-btn"
    );

const setupSidebarEl =
    document.querySelector(
        ".setup-sidebar"
    );

const setupNeedsRowEl =
    document.getElementById(
        "setup-needs-row"
    );

const setupWantsRowEl =
    document.getElementById(
        "setup-wants-row"
    );

// The "Build Your Budget" heading + instructions above the jar
// grid -- scoped to this one id (rather than the generic
// .step-heading class, which the month/payment screens also use)
// so this reveal never touches those other screens.
const stepHeadingEl =
    document.getElementById(
        "build-budget-heading"
    );


// Sets the popup's text and puts the sidebar, jar rows, and step
// heading into their hidden entrance state -- everything this
// stage's reveal will eventually fly/fade in. Deliberately does
// NOT touch #stage-intro-screen's own visibility or the wellness
// bar: on the very first load those two stay gated behind the
// welcome popup being dismissed (see welcomeStartButton's click
// handler above), so nothing about this stage is visible at all
// until the player has cleared the welcome popup first.
function primeStageIntro(stage) {

    if (!stage.storyIntro) {
        return;
    }

    stageIntroTitle.textContent =
        stage.storyIntro.title;

    stageIntroBody.textContent =
        stage.storyIntro.body.replace(
            "{income}",
            `$${stage.income.toLocaleString()}`
        );

    if (setupSidebarEl) {
        setupSidebarEl.classList.add("entrance-hidden");
    }

    if (setupNeedsRowEl) {
        setupNeedsRowEl.classList.add("entrance-hidden");
    }

    if (setupWantsRowEl) {
        setupWantsRowEl.classList.add("entrance-hidden");
    }

    if (stepHeadingEl) {
        stepHeadingEl.classList.add("entrance-hidden");
    }

    if (wellnessBarEl) {
        wellnessBarEl.classList.add("entrance-hidden");
    }

}


// Primes the stage (see above) AND immediately reveals the popup
// itself. Used whenever a stage's story popup should show right
// away -- i.e. any time other than the very first ever load, where
// the welcome popup needs to be dismissed first (see loadStage()
// and welcomeStartButton's handler, which call primeStageIntro()
// alone and reveal the popup separately once welcome is gone).
function showStageIntro(stage) {

    if (!stageIntroScreen || !stage.storyIntro) {
        return;
    }

    primeStageIntro(stage);

    // primeStageIntro() hides the wellness bar too (needed for the
    // very first load, while the welcome popup is still up), but by
    // any later stage the meters have already been revealed and
    // should stay put -- without this, Stages 2-4 lost their meters
    // for the rest of the game once round 22 gave them story popups.
    if (wellnessBarEl) {
        wellnessBarEl.classList.remove("entrance-hidden");
    }

    stageIntroScreen.classList.remove("hidden");

}


// Dismisses the popup and releases the sidebar/jars/step-heading
// into their normal positions -- the CSS transitions on
// .setup-sidebar, .bucket, and #build-budget-heading (see
// style.css) are what actually animate the fade-in / fly-up, this
// just flips the classes that gate them. Doesn't touch the
// wellness bar -- that's revealed earlier, when the welcome popup
// is dismissed, and stays visible from then on.
function hideStageIntro() {

    if (stageIntroScreen) {
        stageIntroScreen.classList.add("hidden");
    }

    if (setupSidebarEl) {
        setupSidebarEl.classList.remove("entrance-hidden");
    }

    if (setupNeedsRowEl) {
        setupNeedsRowEl.classList.remove("entrance-hidden");
    }

    if (setupWantsRowEl) {
        setupWantsRowEl.classList.remove("entrance-hidden");
    }

    if (stepHeadingEl) {
        stepHeadingEl.classList.remove("entrance-hidden");
    }

}


if (stageIntroContinueBtn) {

    stageIntroContinueBtn.addEventListener(
        "click",
        () => {

            hideStageIntro();

            // If the player came in through the welcome popup's
            // Tutorial button (see dismissWelcomePopup() above),
            // this is the exact moment the sidebar/jars fly in for
            // real -- the right beat for the guided walkthrough to
            // begin too, so kick off its first step here.
            // showTutorialStep() is defined further down (see the
            // TUTORIAL section) but that's fine: function
            // declarations are hoisted, and this only ever actually
            // runs on a later click, well after the whole script
            // has finished loading.
            //
            // Delayed past .setup-sidebar's own 0.5s fade/slide-up
            // transition (triggered by hideStageIntro() removing
            // entrance-hidden, just above) rather than fired in the
            // same tick -- step 1's target (the paycheck card) lives
            // inside that sidebar, and calling showTutorialStep(1)
            // immediately would measure the card's position mid-
            // transition (still offset by entrance-hidden's
            // translateY(20px) starting point), locking the
            // highlight onto that in-flight position instead of
            // where the card actually settles. 550ms clears the
            // sidebar's 500ms transition with a small buffer.
            if (tutorialActive) {
                setTimeout(
                    () => showTutorialStep(1),
                    550
                );
            }

        }
    );

}


// ============================================
// TUTORIAL
// A guided, five-step walkthrough of Stage 1's setup screen,
// reached only through the welcome popup's Tutorial button (see
// dismissWelcomePopup() above) -- same spotlight-and-callout
// pattern as Lemonade Stand and Driver Decides' own tutorials: a
// glowing outline highlights whatever part of the screen a step is
// explaining, with a small callout beside it. Most steps wait for
// Next; two instead wait for the player to actually perform the
// action being explained (tapping the Food jar, then picking one
// of its tiers), which is what makes this feel like a walkthrough
// of the real game rather than a slideshow over it.
// ============================================

const tutorialHighlightEl =
    document.getElementById(
        "tutorial-highlight"
    );

const tutorialPopupEl =
    document.getElementById(
        "tutorial-popup"
    );

const tutorialBodyEl =
    document.getElementById(
        "tutorial-body"
    );

const tutorialNextBtn =
    document.getElementById(
        "tutorial-next-btn"
    );

const tutorialSkipBtn =
    document.getElementById(
        "tutorial-skip-btn"
    );

const gameContainerEl =
    document.querySelector(
        ".game-container"
    );

// Which step the walkthrough is currently on -- 0 means "not
// running." Steps are 1-indexed to match how Kayla numbered them,
// so TUTORIAL_STEPS[0] is left null on purpose.
let tutorialStep = 0;

// How far the lit-up spotlight box extends past the real target on
// every side -- a little breathing room inside the lit area, rather
// than the highlight hugging the target's exact pixel edges. Shared
// between positionTutorialHighlight() (which uses it to grow the
// box and its radius) and positionTutorialPopup() (which uses it so
// a "right"-placed popup's top edge lines up with the lit box's
// top, not the bare target's).
const TUTORIAL_HIGHLIGHT_PAD = 14;

// Each step: what to say, which element (if any) to light up --
// a function, not a stored reference, since jar tiles get torn
// down and rebuilt fresh on every loadStage() call and this only
// ever runs on Stage 1 anyway -- where its popup sits relative to
// that target, and how it advances. Steps without showNext instead
// advance from elsewhere in the code, right where that action
// actually happens (see openTierPicker() and selectTierForBucket()
// further down).
const TUTORIAL_STEPS = [

    null,

    {
        body: "Here's your pay for each stage of life.",
        // Just the white amount box inside the blue card -- not the
        // whole card -- with TUTORIAL_HIGHLIGHT_PAD giving it some
        // breathing room. (A brief detour highlighted the entire
        // .level-banner instead; reverted -- that wasn't what Kayla
        // wanted.)
        target: () => document.querySelector(".paycheck-callout"),
        placement: "right",
        showNext: true
    },

    {
        body: "Tap a jar to pick how much you'll budget for that category.",
        target: () =>
            document.getElementById("jar-img-food")
                ?.closest(".bucket"),
        placement: "right",
        showNext: false
    },

    {
        body: "Choose which tier of spending you'll put toward Food.",
        target: null,
        placement: "below-tier-picker",
        showNext: false
    },

    {
        body:
            "Each choice will affect your Financial and Personal " +
            "Wellness — try to find balance between the two!",
        target: () => wellnessBarEl,
        placement: "below-center",
        showNext: true
    },

    {
        body:
            "Once you finish allocating all your money, the rest " +
            "will be kept in Savings.",
        target: () =>
            document.getElementById("jar-img-savings")
                ?.closest(".bucket"),
        placement: "right",
        showNext: true,
        nextLabel: "Let's Go",
        isLast: true
    }

];


// Converts an element's actual on-screen box into the stage's
// fixed 1920x1080 coordinate space -- the same space every other
// popup/overlay in this game (the welcome popup, the story popup,
// the tier picker) is already positioned in via plain CSS --
// regardless of how much .game-container's outer scale transform
// has shrunk everything down to fit the window. Both tutorial
// pieces are absolutely positioned children of .game-container, so
// setting their left/top to whatever this returns lines them up
// with the real element exactly, at any window size.
function getStageRect(el) {

    const containerRect =
        gameContainerEl.getBoundingClientRect();

    const elRect =
        el.getBoundingClientRect();

    const scale =
        containerRect.width / 1920;

    return {
        left: (elRect.left - containerRect.left) / scale,
        top: (elRect.top - containerRect.top) / scale,
        width: elRect.width / scale,
        height: elRect.height / scale
    };

}


function positionTutorialHighlight(target) {

    if (!target) {

        tutorialHighlightEl.classList.add("hidden");

        return;

    }

    const rect =
        getStageRect(target);

    // Grown out by TUTORIAL_HIGHLIGHT_PAD on every side -- the lit
    // area should give the real element a little breathing room,
    // not hug its exact pixel edges (that exact-fit version is what
    // Kayla asked to soften back a touch). positionTutorialPopup()
    // uses the same constant so a "right"-placed popup's top still
    // lines up with this box's top, not the bare target's.
    tutorialHighlightEl.style.left =
        (rect.left - TUTORIAL_HIGHLIGHT_PAD) + "px";
    tutorialHighlightEl.style.top =
        (rect.top - TUTORIAL_HIGHLIGHT_PAD) + "px";
    tutorialHighlightEl.style.width =
        (rect.width + TUTORIAL_HIGHLIGHT_PAD * 2) + "px";
    tutorialHighlightEl.style.height =
        (rect.height + TUTORIAL_HIGHLIGHT_PAD * 2) + "px";

    // Copy the target's own corner rounding instead of guessing a
    // fixed radius here -- a paycheck card (18px), a jar tile (0),
    // the wellness bar (0), etc. all get their real shape rather
    // than one generic rounded rectangle. Both this element and its
    // target live inside the same scaled .game-container, so the
    // computed CSS pixel value carries over as-is with no unit
    // conversion needed. The pad is added on top of that base
    // radius so the now-larger box's corners keep growing along
    // with it, instead of a big box with a small tight radius.
    const baseRadius =
        parseFloat(getComputedStyle(target).borderRadius) || 0;

    tutorialHighlightEl.style.borderRadius =
        (baseRadius + TUTORIAL_HIGHLIGHT_PAD) + "px";

    tutorialHighlightEl.classList.remove("hidden");

}


function positionTutorialPopup(step) {

    const gap = 24;

    const popupWidth =
        tutorialPopupEl.offsetWidth || 400;

    let left;
    let top;

    if (step.placement === "right") {

        const rect =
            getStageRect(step.target());

        // Measured from the padded highlight box, not the bare
        // target -- lines the popup's left/top edges up with the
        // lit area the player actually sees, not the smaller real
        // element sitting inside it.
        left =
            rect.left + rect.width + TUTORIAL_HIGHLIGHT_PAD + gap;
        top =
            rect.top - TUTORIAL_HIGHLIGHT_PAD;

    }

    else if (step.placement === "below-tier-picker") {

        const box =
            document.querySelector(".tier-picker-box");

        const rect =
            box
                ? getStageRect(box)
                : { left: 760, top: 480, width: 400, height: 200 };

        left = rect.left + rect.width / 2 - popupWidth / 2;
        top = rect.top + rect.height + gap;

    }

    else {

        // "below-center"
        const rect =
            getStageRect(wellnessBarEl);

        left = 1920 / 2 - popupWidth / 2;
        top = rect.top + rect.height + gap;

    }

    // Keeps the popup fully on the 1920x1080 stage no matter which
    // edge its target happens to sit near.
    left = Math.max(20, Math.min(left, 1920 - popupWidth - 20));
    top = Math.max(20, Math.min(top, 1080 - 20));

    tutorialPopupEl.style.left = left + "px";
    tutorialPopupEl.style.top = top + "px";

}


function showTutorialStep(stepNumber) {

    tutorialStep = stepNumber;

    const step =
        TUTORIAL_STEPS[stepNumber];

    if (!step) {
        return;
    }

    tutorialBodyEl.textContent =
        step.body;

    if (step.showNext) {

        tutorialNextBtn.textContent =
            step.nextLabel || "Next";

        tutorialNextBtn.classList.remove("hidden");

    }

    else {

        tutorialNextBtn.classList.add("hidden");

    }

    const target =
        step.target ? step.target() : null;

    positionTutorialHighlight(target);

    tutorialPopupEl.classList.remove("hidden");

    // Positioned after the popup is unhidden so its offsetWidth
    // (used by the centering placements above) reflects its real
    // rendered size rather than a stale/zero value.
    positionTutorialPopup(step);

}


function endTutorial() {

    tutorialActive = false;
    tutorialStep = 0;

    tutorialPopupEl.classList.add("hidden");
    tutorialHighlightEl.classList.add("hidden");

}


if (tutorialNextBtn) {

    tutorialNextBtn.addEventListener(
        "click",
        () => {

            const step =
                TUTORIAL_STEPS[tutorialStep];

            if (step && step.isLast) {

                endTutorial();

                return;

            }

            showTutorialStep(tutorialStep + 1);

        }
    );

}


if (tutorialSkipBtn) {

    tutorialSkipBtn.addEventListener(
        "click",
        endTutorial
    );

}



// ============================================
// LOAD STAGE
// ============================================

function loadStage(stageNumber) {

    currentStage = stageNumber;

    // Bring the setup screen back after the previous stage's
    // surprises/recap faded it out (round 26).
    if (setupScreen) {
        setupScreen.classList.remove("results-fade");
    }

    const stage =
        stages[currentStage];

    // Swap the per-stage background scene (see style.css's
    // "PER-STAGE BACKGROUND SCENES" rules) -- clear every possible
    // stage-bg-N class first, computed generically off how many
    // stages exist, then set the one for the stage we're loading.
    const gameContainer = document.querySelector(".game-container");
    if (gameContainer) {
        for (let n = 1; n <= Object.keys(stages).length; n++) {
            gameContainer.classList.remove(`stage-bg-${n}`);
        }
        gameContainer.classList.add(`stage-bg-${currentStage}`);
    }


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

    bucketTierSelections = {};


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

    // For tiered stages this immediately overwrites the line
    // above with the correct starting value -- at this point
    // nothing else has been allocated yet, so the whole paycheck
    // (plus whatever carried in) defaults into Savings until the
    // player starts picking tiers. No-op for not-yet-migrated
    // stages (see the function itself).
    recomputeAutoSavings();


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

    // Carried-forward bills from last stage's jar narratives --
    // always targeted at "bills" (see closeNarrativeCard's
    // carryForwardBill handling). Captured before
    // pendingExtraNeeds is cleared below, so a tiered "bills"
    // bucket this stage can add the total on top of whichever
    // tier gets picked.
    carriedBillsList =
        pendingExtraNeeds.filter(
            item =>
                item.bucket === "bills" &&
                item.carried
        );

    carriedBillsThisStage =
        carriedBillsList.reduce(
            (sum, item) => sum + item.amount,
            0
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

    updateSavingsCarryover();

    updateBillCarryover();

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


    // Reset to a clean, fully-revealed state first (in case an
    // earlier stage left the sidebar/jars mid-entrance, or the
    // player is replaying Stage 1 after a restart), then handle
    // this stage's story popup if it has one. On the very first
    // load ever (welcome popup still up, welcomeDismissed still
    // false) this only primes -- sets the popup's text and hides
    // the sidebar/jars/step-heading/wellness-bar -- without
    // showing the popup itself, so nothing about this stage peeks
    // out from behind the welcome popup; welcomeStartButton's
    // click handler reveals it once the welcome popup is gone.
    // Any later call (a real stage transition, welcome long since
    // dismissed) shows the popup immediately instead, same as
    // before this distinction existed.
    hideStageIntro();

    if (stage.storyIntro) {

        if (welcomeDismissed) {
            showStageIntro(stage);
        } else {
            primeStageIntro(stage);
        }

    }


    // ------------------------------------------
    // RESET ALLOCATION
    // ------------------------------------------

    document.getElementById(
        "budget-message"
    ).textContent =
        "";


    updateBudgetDisplay();


    // Refreshes both meters for the stage that just loaded --
    // Financial resets to its live estimate against the new
    // stage's own income/baseline (0% at the very start of a
    // fresh stage), and Financial's "already banked" check now
    // correctly sees the new currentStage as not yet scored.
    updateWellnessMeters();

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


    needsRow.innerHTML = "";

    wantsRow.innerHTML = "";


    const stage =
        stages[currentStage];


    // ------------------------------------------
    // SORT THIS STAGE'S BUCKETS INTO THEIR ROW --
    // top row is Savings (first/leftmost -- moved
    // into the grid instead of its own separate
    // slot next to the Start button), then Bills
    // (pooled, if this stage has it), then every
    // Need jar this stage has (groceries, gas,
    // personal care -- however many apply); the
    // second row is every Want jar.
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


    // Savings unshifts last so it lands at index 0 -- ahead of
    // Bills -- landing top row, first/leftmost jar.
    if (savingsBucket) {

        needBuckets.unshift(savingsBucket);

    }


    // ------------------------------------------
    // JAR SIZE -- now that the grid is always
    // exactly two rows (no more separate Savings
    // slot competing for vertical space), jars can
    // grow to fill it. Sized to whichever row has
    // more jars this stage, so both rows match and
    // a stage with more categories (Career's 5-wide
    // Needs row) shrinks a little instead of
    // overflowing the stage width, while a stage
    // with fewer (Teenager's 4) gets noticeably
    // bigger jars.
    // ------------------------------------------

    const maxColumns =
        Math.max(
            needBuckets.length,
            wantBuckets.length,
            1
        );

    // Stage width (1920) minus .screen's left/right padding (28
    // each), minus the sidebar column (420) and the gap between
    // sidebar and main (26) -- see .setup-columns / .screen in
    // style.css.
    const availableWidth = 1920 - 28 * 2 - 420 - 26;

    const columnGap = 30;

    const rawJarSize =
        (availableWidth - columnGap * (maxColumns - 1)) /
        maxColumns;

    const jarSize =
        Math.max(
            220,
            Math.min(330, Math.floor(rawJarSize))
        );


    setRowColumns(needsRow, needBuckets.length, jarSize);

    setRowColumns(wantsRow, wantBuckets.length, jarSize);


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

}


// Builds one jar tile for the setup screen -- tapping it opens
// the keypad to fund that specific bucket. Same shared shape
// (icon, jar art, type tag, amount pill) that renderPaymentPanel's
// buildPaymentBucketTile() below uses, just with a clickable
// amount instead of a plain one.
function buildSetupBucketTile(bucket) {

    const stage =
        stages[currentStage];

    const isSavings =
        bucket.id === "savings";

    // Once a stage is tiered (Savings has no keypad there anymore
    // -- it auto-fills, see recomputeAutoSavings), the Savings jar
    // itself stops being interactive at all: no click, no keypad,
    // not even a button. Not-yet-migrated stages (Stage 3) still
    // type Savings in freehand, so it stays a real clickable jar
    // there, same as always.
    const isAutoSavings =
        isSavings &&
        !!stage.tieredNeeds;


    // The ENTIRE jar is the tap target (Kayla: "the whole jar
    // should be the button to get into the tiers, not just the
    // number button") -- a real <button> element instead of a div,
    // same pattern the payment screen's buildPaymentBucketTile()
    // already uses for its tiles, so both screens' jars behave the
    // same way. The shared .bucket CSS already cancels the browser's
    // default button chrome (see its own comment), so this is a
    // safe swap. The one exception is an auto-filling Savings jar --
    // that one is a plain, non-interactive div, since there's
    // nothing to tap into anymore.

    const tile =
        document.createElement(
            isAutoSavings ? "div" : "button"
        );


    if (!isAutoSavings) {

        tile.type =
            "button";

    }


    // Savings sits apart from the rest of the buckets and gets
    // its own "featured" look so it stands out rather than
    // blending into the regular grid. Every other bucket type
    // (need/want/bill) gets a type tag + its own tag color (see
    // style.css) so which row/rule it belongs to reads at a
    // glance.

    tile.className =
        isSavings
            ? "bucket bucket-savings"
            : `bucket bucket-${bucket.type}`;


    // Read the bucket's actual current value rather than assuming
    // carriedSavings -- for an auto-filling Savings jar this has
    // already been set correctly by recomputeAutoSavings() (called
    // from loadStage() before this runs), so it reflects the whole
    // paycheck the first time this renders, not just what carried
    // in from last stage.
    const startingSavings =
        isSavings
            ? (buckets.savings || 0)
            : 0;


    // Every jar shows its dollar amount now (Kayla: put the numbers
    // back, they'll just auto-update when a tier is picked) -- this
    // works for free because updateBudgetDisplay() already writes
    // buckets[bucketId] into this exact #amount-<id> element on
    // every change, tiered or not. Nothing here needs to know
    // whether the bucket has tiers.

    const amountMarkup = `
            <span
                class="bucket-amount visible-amount-display"
                id="amount-${bucket.id}"
            >
                $${startingSavings}
            </span>
            `;


    tile.innerHTML = `

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

            ${amountMarkup}

        </div>

            `;


    if (!isAutoSavings) {

        tile.addEventListener(
            "click",
            () => {

                const tieredCategory =
                    getTieredCategoryForBucket(
                        bucket.id
                    );

                if (tieredCategory) {

                    openTierPicker(
                        bucket.id
                    );

                }

                else {

                    openKeypad(
                        bucket.id
                    );

                }

            }
        );

    }


    return tile;

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


// ============================================
// TIER PICKER (setup-screen jars with tier data)
//
// A handful of buckets (so far: Food, Shopping,
// Entertainment, Takeout) now have tier data
// (stage.tieredNeeds / stage.tieredWants) instead
// of relying only on free typed amounts. Their jar
// opens this tier picker instead of the number-pad
// keypad above; picking a tier sets buckets[id] to
// that tier's fixed dollar amount and reuses the
// exact same updateBudgetDisplay()/zero-based-start
// logic the keypad already relies on -- nothing
// about "every dollar has to be allocated" changes.
//
// Bills and Savings don't have matching tier data
// yet, so they keep opening the keypad exactly as
// before.
// ============================================

let activeTierPickerBucket = null;

let bucketTierSelections = {};

const tierPickerModal =
    document.getElementById(
        "tier-picker-modal"
    );

const tierPickerBucketIcon =
    document.getElementById(
        "tier-picker-bucket-icon"
    );

const tierPickerBucketName =
    document.getElementById(
        "tier-picker-bucket-name"
    );

const tierPickerOptions =
    document.getElementById(
        "tier-picker-options"
    );

const tierPickerError =
    document.getElementById(
        "tier-picker-error"
    );

const tierPickerNote =
    document.getElementById(
        "tier-picker-note"
    );


// ============================================
// WELLNESS METERS (persistent header bar)
//
// Both meters now update live, the instant something changes,
// and both react to the two kinds of events that can move
// them: your own tier picks during allocation, AND the random
// consequence cards that fire after "Start Stage" (round 6).
//
// Financial Wellness live-estimates the same formula
// finishMonth() uses to bank a stage's final score (savings
// ratio minus missed-bill/borrow penalties) using whatever
// buckets.savings is *right now* -- so it moves as you pick
// tiers, then keeps moving as consequence-card bonuses/
// penalties land on Savings, same as it always could. It only
// stops updating once finishMonth() actually banks the stage's
// real score into stageScores.
//
// Personal Wellness is a running total of wellbeing points:
// each tier choice contributes its own hand-picked value
// (unchanged), and now each consequence card also contributes
// a small flat swing (see NARRATIVE_WELLBEING_PENALTY/_BONUS
// below) -- unplanned bad news should cost you something
// emotionally too, not just financially.
// ============================================

let personalWellnessTotal = 0;

// Flat personal-wellbeing swing applied whenever a consequence
// card resolves. Individual cards don't carry their own
// wellbeing value the way tiers do (that's ~40 cards to
// hand-tune) -- instead every bad outcome (a penalty OR a
// carried-forward bill) applies the same small hit, and every
// good outcome (a bonus) applies the same small boost, on top
// of whatever it already does to Savings. Asymmetric on
// purpose -- unplanned bad news tends to sting a bit more than
// unplanned good news helps. Two numbers, tune both at once;
// no per-card editing needed.
const NARRATIVE_WELLBEING_PENALTY = -2;
const NARRATIVE_WELLBEING_BONUS = 1;

// Live estimate of the CURRENT (not-yet-banked) stage's
// financial score, using the exact same formula finishMonth()
// uses to bank the real one -- just evaluated against
// buckets.savings as it stands right now instead of waiting
// for the stage to finish. Returns null if there's no stage in
// play (shouldn't normally happen once the game has started).
function computeLiveFinancialScore() {

    const stage =
        stages[currentStage];

    if (!stage) {

        return null;

    }

    const newSavingsSoFar =
        Math.max(
            (buckets.savings || 0) - savingsAtStageStart,
            0
        );

    let score =
        Math.round(
            (newSavingsSoFar / stage.income) * 100
        );

    score -=
        missedNeeds * 15;

    score -=
        borrowedSameCategory * 2;

    score -=
        borrowedCrossCategory * 5;

    if (stageHadLoanCarriedIn) {

        score -= 10;

    }

    return Math.max(
        0,
        Math.min(100, score)
    );

}

const financialWellnessFill =
    document.getElementById(
        "financial-wellness-fill"
    );

const financialWellnessValue =
    document.getElementById(
        "financial-wellness-value"
    );

const personalWellnessFill =
    document.getElementById(
        "personal-wellness-fill"
    );

const personalWellnessValue =
    document.getElementById(
        "personal-wellness-value"
    );

// Same running Personal Wellness number as the top bar above --
// also surfaced inside the end-of-stage recap popup so a
// stage's recap isn't only about money. Not stage-scoped (no
// "This Stage" / "Overall" split like Financial Wellness): it's
// just the current live total, same as the top bar shows.
const personalWellnessRecapFill =
    document.getElementById(
        "personal-wellness-recap-fill"
    );

const personalWellnessRecapScore =
    document.getElementById(
        "personal-wellness-recap-score"
    );


// Personal Wellness as the 0-100 number the meters show: the
// cumulative raw wellbeing total mapped around a neutral 50%.
// Pulled out of updateWellnessMeters() (round 23) so the
// consequence cards can measure the exact same number before
// and after an outcome lands.
function computePersonalPercent() {

    return Math.max(
        0,
        Math.min(
            100,
            Math.round(
                50 + personalWellnessTotal * 2
            )
        )
    );

}


// Financial Wellness as the 0-100 number the meters show (or
// null before any stage exists). Same round-23 extraction as
// computePersonalPercent() -- see updateWellnessMeters() for
// how banked and live scores blend.
function computeFinancialPercent() {

    const stageAlreadyBanked =
        stageScores.length >= currentStage;

    const liveScore =
        stageAlreadyBanked
            ? null
            : computeLiveFinancialScore();

    const scoresForAverage =
        liveScore === null
            ? stageScores
            : [...stageScores, liveScore];

    if (scoresForAverage.length === 0) {

        return null;

    }

    return Math.round(
        scoresForAverage.reduce(
            (total, score) => total + score,
            0
        ) / scoresForAverage.length
    );

}


function updateWellnessMeters() {

    // Personal: map the cumulative raw wellbeing total onto a
    // 0-100 bar, treating 0 as a neutral midpoint (50%) so both
    // rough stretches and comfortable ones have room to show.
    const personalPercent =
        computePersonalPercent();

    personalWellnessFill.style.width =
        `${personalPercent}%`;

    personalWellnessValue.textContent =
        `${personalPercent}%`;

    if (personalWellnessRecapFill && personalWellnessRecapScore) {

        personalWellnessRecapFill.style.width =
            `${personalPercent}%`;

        personalWellnessRecapScore.textContent =
            `${personalPercent}%`;

    }


    // Financial: the average of every stage already banked by
    // finishMonth(), blended with a live estimate for the
    // current stage while it's still in progress. stageScores
    // gains one entry per finished stage, and currentStage only
    // advances once the player moves on -- so
    // stageScores.length >= currentStage means THIS stage's
    // real score is already banked (the recap is showing, or
    // we're between stages) and there's nothing live left to
    // add on top of it.
    const financialPercent =
        computeFinancialPercent();

    // Only possible before any stage has ever loaded -- keep the
    // neutral placeholder for that split second rather than
    // implying a real score.
    if (financialPercent === null) {

        financialWellnessFill.style.width = "0%";

        financialWellnessValue.textContent = "--";

        return;

    }

    financialWellnessFill.style.width =
        `${financialPercent}%`;

    financialWellnessValue.textContent =
        `${financialPercent}%`;

}



// ============================================
// JAR NARRATIVE EVENTS
//
// Every tiered bucket has bad/good outcomes per
// tier now (stage.jarNarratives), but showing all
// of them every stage would be overkill -- instead,
// buildNarrativeQueue() randomly picks up to 3 of
// the buckets a tier was actually chosen for (round
// 7: bumped from 2), then rolls a 50/50 on each. The
// three (if that many are eligible) show one at a
// time via narrativeQueue; closing one shows the
// next, and closing the last one finishes the
// stage. A bad outcome on a bucket's riskiest tier
// adds a bill that carries into next stage
// (reusing the same pendingExtraNeeds queue
// missBill() already feeds); every other bad
// outcome, and every good one, hits Savings
// directly (never below $0 on the downside).
// ============================================

// Round 23: consequence cards are a two-beat moment now instead of
// a read-and-dismiss text box. The stage's first card starts
// FACE-DOWN ("Life happens… tap to reveal"); tapping flips it over,
// and each later surprise flips the same card again (round 24).
// Effects only apply on each flip -- so the numbers the card shows
// are the real before/after change on the two wellness meters,
// not a guess. Each meter that actually moved gets its own big
// tile (red "−4%" / green "+4%", with the meter's name under it),
// side by side if both moved, plus a small chip for the dollar
// side (money in/out of Savings, or a bill carried forward).
// Bad news shakes the card, good news bounces it with confetti.

const narrativeModal =
    document.getElementById("narrative-modal");

const narrativeCard =
    document.getElementById("narrative-card");

const narrativeFront =
    document.getElementById("narrative-front");

const narrativeFrontIcon =
    document.getElementById("narrative-front-icon");

const narrativeBack =
    document.getElementById("narrative-back");

const narrativeProgress =
    document.getElementById("narrative-progress");

const narrativeBanner =
    document.getElementById("narrative-banner");

const narrativeIcon =
    document.getElementById("narrative-icon");

const narrativeTitle =
    document.getElementById("narrative-title");

const narrativeText =
    document.getElementById("narrative-text");

const narrativeImpacts =
    document.getElementById("narrative-impacts");

const narrativeMoney =
    document.getElementById("narrative-money");

const narrativeConfetti =
    document.getElementById("narrative-confetti");

const narrativeContinueBtn =
    document.getElementById("narrative-continue-btn");


let currentNarrativeOutcome = null;

let narrativeRevealed = false;

let narrativeQueue = [];

// How many cards this stage's queue started with -- drives the
// "Surprise 2 of 3" label. Set by buildNarrativeQueue().
let narrativeTotalThisStage = 0;

// Pending reveal-animation timers, cleared whenever a card
// closes or a new one shows, so nothing fires late onto the
// wrong card.
let narrativeTimers = [];


function buildNarrativeQueue() {

    const stage =
        stages[currentStage];

    const narrativeData =
        stage.jarNarratives;

    if (!narrativeData) {
        narrativeTotalThisStage = 0;
        return [];
    }


    // Only buckets where a tier was actually picked,
    // and narrative data exists for that specific
    // tier, are eligible to fire this stage.
    const eligibleBucketIds =
        Object.keys(narrativeData).filter(
            bucketId => {

                const tier =
                    bucketTierSelections[bucketId];

                return (
                    tier &&
                    narrativeData[bucketId][tier.id]
                );

            }
        );


    // Shuffle, then keep at most 3 (bumped up from 2
    // per Kayla, round 7) -- not every jar gets a
    // consequence every stage, so it still stays a
    // surprise instead of a wall of popups.
    const shuffled =
        [...eligibleBucketIds].sort(
            () => Math.random() - 0.5
        );

    const chosenBucketIds =
        shuffled.slice(0, 3);


    const queue =
        chosenBucketIds.map(
            bucketId => {

                const tier =
                    bucketTierSelections[bucketId];

                const outcomes =
                    narrativeData[bucketId][tier.id];

                const outcome =
                    outcomes[
                        Math.floor(
                            Math.random() * outcomes.length
                        )
                    ];

                // Tag which jar it came from, for the card's
                // face-down side ("Your Food jar").
                return { ...outcome, bucketId };

            }
        );

    narrativeTotalThisStage = queue.length;

    return queue;

}


function clearNarrativeTimers() {

    narrativeTimers.forEach(clearTimeout);

    narrativeTimers = [];

}


function narrativeLater(fn, ms) {

    narrativeTimers.push(setTimeout(fn, ms));

}


function narrativeProgressLabel() {

    const index =
        narrativeTotalThisStage - narrativeQueue.length + 1;

    return narrativeTotalThisStage > 1
        ? `Surprise ${index} of ${narrativeTotalThisStage}`
        : "Surprise!";

}


// Round 24: only the FIRST card of a stage starts face-down (a
// generic "Life happens… tap to reveal" with a dollar icon).
// After that the same result card just flips over to the next
// surprise -- no face-down beat in between.
function showNarrativeCard(outcome) {

    clearNarrativeTimers();

    currentNarrativeOutcome = outcome;

    narrativeRevealed = false;

    narrativeFrontIcon.innerHTML =
        iconMarkup("dollar");


    // Reset any tone/flip/shake classes from a previous stage.
    narrativeCard.className = "narrative-card";

    narrativeConfetti.innerHTML = "";

    // Sidebar + jars fade out while the surprises play, so the
    // background scene shows through (round 26).
    setupScreen.classList.add("results-fade");

    narrativeFront.classList.remove("hidden");

    narrativeBack.classList.add("hidden");

    narrativeModal.classList.remove("hidden");

}


// Same numbers the top bar shows (see updateWellnessMeters),
// captured before and after a card's effects so the card can
// show the real change.
function getWellnessSnapshot() {

    return {
        financial: computeFinancialPercent(),
        personal: computePersonalPercent(),
        savings: buckets.savings || 0
    };

}


function applyNarrativeEffects(outcome) {

    if (outcome.bonus) {

        buckets.savings =
            (buckets.savings || 0) +
            outcome.bonus;

        personalWellnessTotal +=
            NARRATIVE_WELLBEING_BONUS;

    }


    if (outcome.penalty) {

        buckets.savings =
            Math.max(
                0,
                (buckets.savings || 0) -
                    outcome.penalty
            );

        personalWellnessTotal +=
            NARRATIVE_WELLBEING_PENALTY;

    }


    if (outcome.carryForwardBill) {

        // Bad news now (the wellbeing hit), even though the
        // dollar hit itself is deferred to next stage's bill
        // -- same swing a same-stage penalty gets.
        personalWellnessTotal +=
            NARRATIVE_WELLBEING_PENALTY;

        pendingExtraNeeds.push({
            icon: outcome.carryForwardBill.icon,
            title: outcome.carryForwardBill.title,
            description:
                "A consequence from last stage -- due now.",
            amount: outcome.carryForwardBill.amount,
            bucket: "bills",
            fixed: true,
            carried: true
        });

    }


    updateBudgetDisplay();

    updateWellnessMeters();

}


function formatNarrativeDelta(value, sign) {

    // A real minus sign (−) reads cleaner than a hyphen at
    // this size.
    const prefix =
        sign > 0 ? "+" : sign < 0 ? "−" : "";

    return `${prefix}${Math.abs(value)}%`;

}


function renderNarrativeImpacts(impacts) {

    narrativeImpacts.innerHTML = "";

    if (impacts.length === 0) {

        narrativeImpacts.innerHTML =
            `<p class="narrative-no-change">Your wellness meters held steady.</p>`;

        return;

    }

    impacts.forEach(impact => {

        const tile =
            document.createElement("div");

        tile.className =
            `narrative-impact ${impact.delta > 0 ? "is-up" : "is-down"}`;

        tile.dataset.delta =
            impact.delta;

        tile.innerHTML =
            `<span class="narrative-impact-value">${formatNarrativeDelta(0, impact.delta)}</span>` +
            `<span class="narrative-impact-label">${impact.label}</span>`;

        narrativeImpacts.appendChild(tile);

    });

}


function renderNarrativeMoney(outcome, savingsChange) {

    let text = "";

    let tone = "is-down";

    if (outcome.carryForwardBill) {

        text =
            `$${outcome.carryForwardBill.amount.toLocaleString()} bill carries into next stage`;

    }

    else if (savingsChange > 0) {

        text =
            `+$${savingsChange.toLocaleString()} added to Savings`;

        tone = "is-up";

    }

    else if (savingsChange < 0) {

        text =
            `−$${Math.abs(savingsChange).toLocaleString()} out of Savings`;

    }

    else if (outcome.penalty) {

        text =
            "Savings was already empty";

    }

    narrativeMoney.textContent = text;

    narrativeMoney.className =
        `narrative-money ${tone}`;

    narrativeMoney.classList.toggle("hidden", !text);

}


// Counts a tile's number up from 0 to its real delta.
function countUpNarrativeValue(el, delta) {

    const duration = 550;

    const start = performance.now();

    const target = Math.abs(delta);

    function step(now) {

        const t =
            Math.min(1, (now - start) / duration);

        const eased =
            1 - Math.pow(1 - t, 3);

        el.textContent =
            formatNarrativeDelta(Math.round(target * eased), delta);

        if (t < 1) {
            requestAnimationFrame(step);
        }

    }

    requestAnimationFrame(step);

}


function burstNarrativeConfetti() {

    const colors =
        ["#16a34a", "#258BFF", "#59D2FE", "#FFF025", "#8BD1FF", "#1943DC"];

    narrativeConfetti.innerHTML = "";

    for (let i = 0; i < 22; i++) {

        const piece =
            document.createElement("span");

        const angle =
            (Math.PI * 2 * i) / 22 + (Math.random() - 0.5) * 0.4;

        const distance =
            180 + Math.random() * 140;

        piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
        piece.style.setProperty("--dy", `${Math.sin(angle) * distance - 60}px`);
        piece.style.setProperty("--rot", `${Math.round(Math.random() * 540 - 270)}deg`);
        piece.style.background = colors[i % colors.length];

        narrativeConfetti.appendChild(piece);

    }

}


// Applies an outcome for real (measuring both meters on either
// side of it), then flips the card -- from the face-down front on
// a stage's first surprise, or from the previous result on the
// ones after -- and plays the tiles/shake/confetti on the new
// result.
function presentNarrativeOutcome(outcome) {

    narrativeRevealed = true;

    const before = getWellnessSnapshot();

    applyNarrativeEffects(outcome);

    const after = getWellnessSnapshot();


    const isGood =
        Boolean(outcome.bonus);

    // Only meters that actually moved get a tile.
    const impacts = [];

    if (
        before.financial !== null &&
        after.financial !== null &&
        after.financial !== before.financial
    ) {
        impacts.push({
            label: "Financial Wellness",
            delta: after.financial - before.financial
        });
    }

    if (after.personal !== before.personal) {
        impacts.push({
            label: "Personal Wellness",
            delta: after.personal - before.personal
        });
    }


    // Held until the new result has landed, so a quick
    // double-tap can't skip past it.
    narrativeContinueBtn.disabled = true;


    // Flip out whichever side is showing now.
    narrativeCard.classList.remove(
        "is-flipping-in",
        "is-shaking",
        "is-celebrating"
    );

    narrativeCard.classList.add("is-flipping-out");

    narrativeLater(() => {

        // Swap in the new result while the card is edge-on.
        narrativeProgress.textContent =
            narrativeProgressLabel();

        narrativeBanner.textContent =
            isGood ? "Lucky Break!" : "Setback!";

        narrativeIcon.innerHTML =
            iconMarkup(outcome.icon);

        narrativeTitle.textContent =
            outcome.title;

        narrativeText.textContent =
            outcome.text;

        renderNarrativeImpacts(impacts);

        renderNarrativeMoney(
            outcome,
            after.savings - before.savings
        );

        const remainingAfterThis =
            narrativeQueue.length - 1;

        narrativeContinueBtn.textContent =
            remainingAfterThis === 0
                ? "See My Results"
                : remainingAfterThis === 1
                    ? "Last Surprise"
                    : "Next Surprise";

        narrativeConfetti.innerHTML = "";

        narrativeFront.classList.add("hidden");

        narrativeBack.classList.remove("hidden");

        narrativeCard.classList.remove(
            "is-flipping-out",
            "tone-good",
            "tone-bad"
        );

        narrativeCard.classList.add(
            "is-flipping-in",
            isGood ? "tone-good" : "tone-bad"
        );

        const tiles =
            narrativeImpacts.querySelectorAll(".narrative-impact");

        tiles.forEach((tile, i) => {

            narrativeLater(() => {

                tile.classList.add("is-in");

                countUpNarrativeValue(
                    tile.querySelector(".narrative-impact-value"),
                    Number(tile.dataset.delta)
                );

            }, 280 + i * 200);

        });

        narrativeLater(() => {

            narrativeCard.classList.remove("is-flipping-in");

            narrativeCard.classList.add(
                isGood ? "is-celebrating" : "is-shaking"
            );

            if (isGood) {
                burstNarrativeConfetti();
            }

        }, 280 + tiles.length * 200 + 120);

        narrativeLater(() => {

            narrativeContinueBtn.disabled = false;

        }, 600);

    }, 240);

}


// Tap on the face-down front (first surprise of a stage only).
function revealNarrativeCard() {

    if (!currentNarrativeOutcome || narrativeRevealed) {
        return;
    }

    presentNarrativeOutcome(currentNarrativeOutcome);

}


// "Next Surprise" / "Last Surprise" flips the same card over to
// the next outcome; "See My Results" closes it and finishes the
// stage.
function closeNarrativeCard() {

    // Nothing to advance until the current card's been
    // revealed -- its effects only land on reveal.
    if (!narrativeRevealed) {
        return;
    }

    clearNarrativeTimers();


    // The queue holds whatever's left to show --
    // the current outcome was always queue[0].
    narrativeQueue.shift();


    if (narrativeQueue.length > 0) {

        currentNarrativeOutcome =
            narrativeQueue[0];

        presentNarrativeOutcome(
            currentNarrativeOutcome
        );

        return;

    }


    currentNarrativeOutcome = null;

    narrativeRevealed = false;

    narrativeModal.classList.add(
        "hidden"
    );

    finishMonth();

}


if (narrativeFront) {

    narrativeFront.addEventListener(
        "click",
        revealNarrativeCard
    );

}


if (narrativeContinueBtn) {

    narrativeContinueBtn.addEventListener(
        "click",
        closeNarrativeCard
    );

}


function getTieredCategoryForBucket(bucketId) {

    const stage =
        stages[currentStage];

    const needMatch =
        (stage.tieredNeeds || []).find(
            item => item.id === bucketId
        );

    if (needMatch) {
        return needMatch;
    }

    const wantMatch =
        (stage.tieredWants || []).find(
            item => item.id === bucketId
        );

    return wantMatch || null;

}


// A carried-forward bill (see carriedBillsThisStage) always lands
// on the "bills" bucket, so its total gets added on top of
// whichever "bills" tier the player ends up picking -- same as it
// used to add onto the old pooled Bills bucket during the payment
// phase. Every other bucket has no surcharge.
function getBillSurcharge(bucketId) {

    return bucketId === "bills"
        ? carriedBillsThisStage
        : 0;

}


function openTierPicker(bucketId) {

    const stage =
        stages[currentStage];

    const bucket =
        stage.buckets.find(
            item => item.id === bucketId
        );

    const category =
        getTieredCategoryForBucket(bucketId);

    if (!bucket || !category) {
        return;
    }

    activeTierPickerBucket = bucketId;

    tierPickerBucketIcon.innerHTML =
        iconMarkup(bucket.icon);

    tierPickerBucketName.textContent =
        bucket.name;

    tierPickerError.textContent = "";

    const surcharge =
        getBillSurcharge(bucketId);

    if (surcharge > 0) {

        tierPickerNote.textContent =
            `+ $${surcharge} carried over from last stage `
            + `-- already added to every option below.`;

        tierPickerNote.classList.remove("hidden");

    }

    else {

        tierPickerNote.textContent = "";
        tierPickerNote.classList.add("hidden");

    }

    renderTierPickerOptions(bucketId, category);

    tierPickerModal.classList.remove("hidden");

    // Tutorial step 2 ("tap a jar") waits for exactly this --
    // opening the Food jar's tier picker -- to advance into step 3,
    // which repositions its callout underneath the now-open modal
    // (see TUTORIAL_STEPS' "below-tier-picker" placement).
    if (tutorialActive && tutorialStep === 2 && bucketId === "food") {
        showTutorialStep(3);
    }

}


function renderTierPickerOptions(bucketId, category) {

    tierPickerOptions.innerHTML = "";

    const surcharge =
        getBillSurcharge(bucketId);

    category.tiers.forEach(tier => {

        const btn =
            document.createElement("button");

        btn.type = "button";
        btn.className = "tier-option-button";

        const isSelected =
            bucketTierSelections[bucketId]
            && bucketTierSelections[bucketId].id === tier.id;

        if (isSelected) {
            btn.classList.add("selected");
        }

        btn.innerHTML =
            `<span class="tier-option-label">${tier.label}</span>`
            + `<span class="tier-option-amount">$${tier.amount + surcharge}</span>`
            + `<span class="tier-option-note">${tier.note}</span>`;

        btn.addEventListener("click", () => {
            selectTierForBucket(bucketId, tier);
        });

        tierPickerOptions.appendChild(btn);

    });

}


function selectTierForBucket(bucketId, tier) {

    const stage =
        stages[currentStage];

    const surcharge =
        getBillSurcharge(bucketId);

    const totalCost =
        tier.amount + surcharge;

    // Savings has no keypad on tiered stages anymore -- it just
    // auto-fills with whatever's left (see recomputeAutoSavings),
    // so affordability here is purely about the OTHER tiered
    // buckets: does everything except this one and Savings, plus
    // this new pick, still fit inside the paycheck? Savings itself
    // is deliberately excluded from "otherAllocated" -- it's not a
    // fixed commitment competing for room, it's just whatever's
    // left after the fixed ones are covered.
    const otherAllocated =
        stage.buckets
            .filter(
                bucket =>
                    bucket.id !== "savings" &&
                    bucket.id !== bucketId
            )
            .reduce(
                (total, bucket) =>
                    total + (buckets[bucket.id] || 0),
                0
            );

    if (otherAllocated + totalCost > stage.income) {

        const maxAllowed =
            stage.income - otherAllocated;

        tierPickerError.textContent =
            `That's more than your paycheck allows right now `
            + `-- you have $${maxAllowed} left to work with.`;

        return;

    }

    const previousTier =
        bucketTierSelections[bucketId];

    personalWellnessTotal -=
        previousTier ? previousTier.wellbeing : 0;

    personalWellnessTotal +=
        tier.wellbeing;

    buckets[bucketId] = totalCost;
    bucketTierSelections[bucketId] = tier;

    recomputeAutoSavings();

    closeTierPicker();
    updateBudgetDisplay();
    updateWellnessMeters();

    // Tutorial step 3 ("choose a tier") waits for exactly this --
    // a successful Food pick (the affordability check above didn't
    // bail out early) -- to advance into step 4. Reaching this line
    // at all means the pick went through, so no separate success
    // flag is needed.
    if (tutorialActive && tutorialStep === 3 && bucketId === "food") {
        showTutorialStep(4);
    }

}


function closeTierPicker() {

    tierPickerModal.classList.add("hidden");

    activeTierPickerBucket = null;

}


document.getElementById(
    "tier-picker-close-btn"
).addEventListener(
    "click",
    closeTierPicker
);


tierPickerModal.addEventListener(
    "click",
    event => {

        if (event.target === tierPickerModal) {
            closeTierPicker();
        }

    }
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
            `$${minimum.toLocaleString()} of this is locked in from last stage`;

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

// ============================================
// RECOMPUTE AUTO SAVINGS
// (tiered stages only -- Savings has no keypad
// there anymore. Whatever hasn't been committed to
// a specific tier just sits in Savings automatically,
// shrinking live as pricier tiers get picked. Not-yet-
// migrated stages keep manually typing Savings via the
// keypad, so this is a no-op for them.)
// ============================================

function recomputeAutoSavings() {

    const stage =
        stages[currentStage];

    if (!stage.tieredNeeds) {
        return;
    }

    const otherAllocated =
        stage.buckets
            .filter(
                bucket => bucket.id !== "savings"
            )
            .reduce(
                (total, bucket) =>
                    total + (buckets[bucket.id] || 0),
                0
            );

    buckets.savings =
        carriedSavings +
        Math.max(
            0,
            stage.income - otherAllocated
        );

}


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

    const usesAutoSavings =
        !!stage.tieredNeeds;


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
    // Tiered stages (Stage 1, Stage 2): Savings has
    // no keypad anymore -- it silently auto-fills
    // with whatever's left over (see
    // recomputeAutoSavings, called after every tier
    // pick), so a dollar-based "every dollar has a
    // bucket" check would always read as satisfied
    // from the moment the stage loads. Readiness is
    // about DECISIONS made, not dollars placed: every
    // tiered Need/Want (Bills included, where a stage
    // has one) needs an actual tier picked before the
    // stage can start. The "Left to Allocate" stat
    // becomes a count of jars still undecided instead
    // of a dollar figure.
    //
    // Not-yet-migrated stages (Stage 3) keep the
    // original dollar-exact, manually-typed-Savings
    // logic untouched below.
    // ------------------------------------------

    if (usesAutoSavings) {

        const categories =
            [
                ...stage.tieredNeeds,
                ...stage.tieredWants
            ];

        const remainingCount =
            categories.filter(
                category =>
                    !bucketTierSelections[category.id]
            ).length;

        allocateStatLabel.textContent =
            "Jars Left To Fill";

        remainingMoney.textContent =
            `${remainingCount}`;

        if (remainingCount === 0) {

            setStartButtonReady(true);

            showBudgetMessage(
                "✓ Every dollar has a job. Ready to go!",
                "success"
            );

        }

        else {

            setStartButtonReady(false);

            showBudgetMessage("", "neutral");

        }

        return;

    }


    allocateStatLabel.textContent =
        "Left to Allocate";

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
// BILL CARRYOVER
// (same idea as updateSavingsCarryover above, but
// for a bill that carried in from last stage's jar
// narratives instead of money saved -- see
// carriedBillsThisStage / carriedBillsList, set once
// per loadStage() call.)
// ============================================

function updateBillCarryover() {

    const section =
        document.getElementById(
            "bill-carryover"
        );

    const icon =
        document.getElementById(
            "bill-carryover-icon"
        );

    const title =
        document.getElementById(
            "bill-carryover-title"
        );

    const amount =
        document.getElementById(
            "bill-carryover-amount"
        );


    if (carriedBillsThisStage > 0) {

        section.classList.remove(
            "hidden"
        );

        icon.innerHTML =
            iconMarkup("wallet");

        title.textContent =
            carriedBillsList
                .map(item => item.title)
                .join(" + ");

        amount.textContent =
            `$${carriedBillsThisStage}`;

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

    const stage =
        stages[currentStage];


    // Tier-picking stages (Stage 1, for now) have no separate
    // bill-paying phase -- every Need/Want was already fixed to
    // its tier price at setup, so there's nothing left to "pay."
    // Go straight to any narrative consequence (Transportation
    // today), then the end-of-stage recap. The setup screen
    // stays visible behind it, same convention as the other
    // modals and the end screen.
    if (stage.tieredNeeds) {

        narrativeQueue =
            buildNarrativeQueue();

        if (narrativeQueue.length > 0) {

            showNarrativeCard(
                narrativeQueue[0]
            );

        }

        else {

            finishMonth();

        }

        return;

    }


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
            `<span class="lock-tag">Protected</span>`;

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
            bucket: expense.bucket,
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

                // Same jar-narrative hook startMonth() uses
                // for tier-picking stages -- harmless here since
                // Stage 2/3 don't have jarNarratives data yet, so
                // this just falls through to finishMonth() as
                // before, but it means this stays in sync
                // automatically if they ever get tier data too.
                narrativeQueue =
                    buildNarrativeQueue();

                if (narrativeQueue.length > 0) {

                    showNarrativeCard(
                        narrativeQueue[0]
                    );

                }

                else {

                    finishMonth();

                }

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

    // Sidebar + jars fade out so the stage's background scene
    // shows behind the recap (round 26) -- restored by loadStage().
    setupScreen.classList.add("results-fade");

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

    const usesTierPicking =
        !!stage.tieredNeeds;


    // Tier-picking stages never ran handleExpense(), so
    // totalSpent is still sitting at 0 -- but every Need/Want
    // bucket's tier price already IS committed spending the
    // moment it was picked, so it counts here in one shot.
    // Bill-type buckets count too now (Stage 2's "Bills" jar is
    // tiered same as everything else) -- Stage 1 just never had
    // one, so this only ever added zero there.
    if (usesTierPicking) {

        totalSpent =
            stage.buckets
                .filter(
                    bucket =>
                        bucket.type === "need" ||
                        bucket.type === "want" ||
                        bucket.type === "bill"
                )
                .reduce(
                    (total, bucket) =>
                        total + (buckets[bucket.id] || 0),
                    0
                );

    }


    const remaining =
        usesTierPicking

            // Nothing is "leftover" in the old sense once tiers
            // are committed spending -- whatever's left is just
            // Savings.
            ? (buckets.savings || 0)

            : Object.values(buckets)
                .reduce(
                    (total, amount) =>
                        total + amount,
                    0
                );


    const overfundingSection =
        document.getElementById(
            "overfunding-callout"
        );


    if (usesTierPicking) {

        // A tier is either affordable and picked, or it isn't
        // offered -- there's no "left $40 sitting unused in
        // Needs" scenario to call out anymore.
        overfundingSection.classList.add(
            "hidden"
        );

    }

    else {

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

    }


    // ------------------------------------------
    // SAVE SAVINGS
    // ------------------------------------------

    // Captured before the overwrite below -- the wellness score
    // needs "how much carried in at the START of this stage" to
    // measure new money saved DURING it. (Bug fix 2026-09-16:
    // newMoneyIn() used to be called after carriedSavings was
    // already reassigned to endingSavings, so it always computed
    // endingSavings - endingSavings = 0 for Stage 2+ -- the "new
    // savings" part of the score silently zeroed out every stage
    // after the first.)
    const carriedSavingsAtStageStart =
        carriedSavings;

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
        // payoff, so it leads with the full Teenager-to-(whichever
        // stage is the capstone right now) arc instead of just
        // restating this stage's ending number. stage.name is
        // whatever the currently-finishing (and therefore final)
        // stage is called -- Career before round 7, Advancing Career
        // after -- so this keeps working automatically if another
        // stage is ever appended.
        readinessSection.className =
            "readiness-outcome met";


        readinessSection.innerHTML = `

            <strong>You built $${endingSavings.toLocaleString()} from nothing!</strong>

            <p>
                You started with $0 back in Teenager and grew it all
                the way to $${endingSavings.toLocaleString()} by the end
                of ${stage.name}. That's what saving a little each
                stage adds up to.
            </p>

        `;

    }

    else if (endingSavings > 0) {

        readinessSection.className =
            "readiness-outcome met";


        readinessSection.innerHTML = `

            <strong>You saved $${endingSavings.toLocaleString()} this stage</strong>

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
                ? `You're finishing ${stage.name} with $0 in Savings`
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
        `$${totalSpent.toLocaleString()}`;


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
        currentStage > 1
            ? Math.max(
                  endingSavings - carriedSavingsAtStageStart,
                  0
              )
            : endingSavings;


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

    updateWellnessMeters();


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


    // Which number the recap's Financial Wellness bar shows --
    // this stage's own score, or (on the capstone) the average
    // across every completed stage. The "(This Stage)"/"(Overall)"
    // label and the separate "Overall so far" line that used to
    // spell this out in words were removed per Kayla's feedback
    // (2026-09-16) -- the bar's header row (title left, percentage
    // right, matching the top wellness bar's layout) is enough on
    // its own.
    const displayScore =
        isCapstone
            ? cumulativeScore
            : stageScore;


    document.getElementById(
        "wellness-score"
    ).textContent =
        `${displayScore}%`;


    document.getElementById(
        "wellness-fill"
    ).style.width =
        `${displayScore}%`;


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


        if (playAgainButton) {

            playAgainButton.classList.add(
                "hidden"
            );

        }

    }

    else {

        nextMonthButton.classList.add(
            "hidden"
        );


        // Capstone recap -- nothing left to advance to, so swap
        // in "Play Again" instead of leaving the popup a dead end.
        if (playAgainButton) {

            playAgainButton.classList.remove(
                "hidden"
            );

        }

    }



    // Capstone gets its own "grand finale" look (round 26).
    applyFinaleLayout(
        isFinalStage,
        endingSavings,
        stage
    );

}


// ============================================
// GRAND FINALE (capstone recap, round 26)
//
// The last stage's recap swaps the plain savings bar for a big
// "You saved $X" hero (counting up), adds an eyebrow + bigger
// title, a larger glowing sparkle, and gentle falling confetti.
// Every other stage's recap is untouched -- this just toggles
// .is-finale on #end-card and fills a few elements.
// ============================================

const endCardEl =
    document.getElementById("end-card");

const endEyebrowEl =
    document.getElementById("end-eyebrow");

const endConfettiEl =
    document.getElementById("end-confetti");


function applyFinaleLayout(isFinale, endingSavings, stage) {

    if (!endCardEl) {
        return;
    }

    endCardEl.classList.toggle("is-finale", isFinale);

    endConfettiEl.innerHTML = "";

    endEyebrowEl.classList.toggle("hidden", !isFinale);

    if (!isFinale) {
        return;
    }


    const stageCount =
        Object.keys(stages).length;

    endEyebrowEl.textContent =
        `All ${stageCount} Stages Complete`;

    document.getElementById("end-title").textContent =
        "You Did It!";

    document.getElementById("end-message").textContent =
        `From your first paycheck as a Teenager to ${stage.name}, here's what you built.`;


    const readinessSection =
        document.getElementById("readiness-outcome");

    readinessSection.className =
        "readiness-outcome finale-hero";

    readinessSection.innerHTML =
        endingSavings > 0
            ? `
                <span class="finale-hero-label">You saved</span>
                <strong class="finale-hero-amount" id="finale-hero-amount">$0</strong>
                <p>You started with $0 and grew it one stage at a time. That's what saving a little every paycheck adds up to.</p>
              `
            : `
                <span class="finale-hero-label">You finished with</span>
                <strong class="finale-hero-amount is-zero">$0</strong>
                <p>No savings this time. Play again and try a different mix of jars to see how much you can build.</p>
              `;


    // Count the hero number up from $0.
    const amountEl =
        document.getElementById("finale-hero-amount");

    if (amountEl) {

        const start = performance.now();

        const duration = 1400;

        const step = now => {

            const t = Math.min(1, (now - start) / duration);

            const eased = 1 - Math.pow(1 - t, 3);

            amountEl.textContent =
                `$${Math.round(endingSavings * eased).toLocaleString()}`;

            if (t < 1) {
                requestAnimationFrame(step);
            }

        };

        requestAnimationFrame(step);

    }


    // Gentle falling confetti across the card (loops while the
    // recap is up; cleared on the next applyFinaleLayout call).
    if (endingSavings > 0) {

        const colors =
            ["#FF2525", "#8BD1FF", "#FFF025", "#16a34a", "#59D2FE", "#ffffff"];

        for (let i = 0; i < 46; i++) {

            const piece =
                document.createElement("span");

            piece.style.left = `${Math.random() * 100}%`;
            piece.style.background = colors[i % colors.length];
            piece.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
            piece.style.animationDuration = `${(3.2 + Math.random() * 2.6).toFixed(2)}s`;
            piece.style.setProperty("--spin", `${Math.round(Math.random() * 720 - 360)}deg`);
            piece.style.setProperty("--drift", `${Math.round(Math.random() * 120 - 60)}px`);

            endConfettiEl.appendChild(piece);

        }

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

            reloadFromStart();

        }
    );

}


// ============================================
// PLAY AGAIN BUTTON (capstone recap)
// Same reset as the header's restart icon --
// simplest safe way to clear this much state.
// ============================================

if (playAgainButton) {

    playAgainButton.addEventListener(
        "click",
        () => {

            reloadFromStart();

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
// TIER-PICK PROTOTYPE (Needs + Wants so far)
//
// Isolated from the live game -- doesn't touch loadStage,
// startMonth, or any of the bucket/expense flow above. Only
// reachable via window.__startTierPickPrototype(stageNumber)
// while this new flow is being built and reviewed piece by
// piece. Needs and Wants steps are built; Savings comes in a
// later increment once this one is approved.
// ============================================

let tierPickStage = null;

let tierPickStepName = "needs";

let tierPickNeedSelections = {};

let tierPickWantSelections = {};

let tierPickSavingsSelection = null;

const tierPickScreen =
    document.getElementById("tier-pick-screen");

const tierPickHeading =
    document.getElementById("tier-pick-heading");

const tierPickSubheading =
    document.getElementById("tier-pick-subheading");

const tierPickRemainingDisplay =
    document.getElementById("tier-pick-remaining");

const tierPickNeedsList =
    document.getElementById("tier-pick-needs-list");

const tierPickWantsList =
    document.getElementById("tier-pick-wants-list");

const tierPickSavingsList =
    document.getElementById("tier-pick-savings-list");

const tierPickContinueBtn =
    document.getElementById("tier-pick-continue-btn");

const tierPickSummary =
    document.getElementById("tier-pick-summary");


function tierPickNeedsSpent() {

    return Object.values(tierPickNeedSelections).reduce(
        (sum, tier) => sum + tier.amount,
        0
    );

}


function tierPickWantsSpent() {

    return Object.values(tierPickWantSelections).reduce(
        (sum, tier) => sum + tier.amount,
        0
    );

}


// Shared by renderTierPickNeeds/renderTierPickWants -- builds
// one category's card (title + its row of tier buttons) into
// whichever list container it's given.
function buildTierPickCard(item, selections, datasetKey, onPick) {

    const card =
        document.createElement("div");

    card.className = "tier-item";

    card.innerHTML =
        `<h3>${item.name}</h3>`
        + `<div class="tier-options" id="tier-options-${item.id}"></div>`;

    const optionsRow =
        card.querySelector(".tier-options");

    item.tiers.forEach(tier => {

        const btn =
            document.createElement("button");

        btn.type = "button";
        btn.className = "tier-option-button";
        btn.dataset[datasetKey] = item.id;
        btn.dataset.tierId = tier.id;

        const isSelected =
            selections[item.id]
            && selections[item.id].id === tier.id;

        if (isSelected) {
            btn.classList.add("selected");
        }

        btn.innerHTML =
            `<span class="tier-option-label">${tier.label}</span>`
            + `<span class="tier-option-amount">$${tier.amount}</span>`
            + `<span class="tier-option-note">${tier.note}</span>`;

        btn.addEventListener("click", () => {
            onPick(item.id, tier);
        });

        optionsRow.appendChild(btn);

    });

    return card;

}


function renderTierPickNeeds() {

    const stage =
        stages[tierPickStage];

    tierPickNeedsList.innerHTML = "";

    stage.tieredNeeds.forEach(need => {

        tierPickNeedsList.appendChild(
            buildTierPickCard(
                need,
                tierPickNeedSelections,
                "needId",
                selectNeedTier
            )
        );

    });

    updateTierPickRemaining();

}


function renderTierPickWants() {

    const stage =
        stages[tierPickStage];

    tierPickWantsList.innerHTML = "";

    stage.tieredWants.forEach(want => {

        tierPickWantsList.appendChild(
            buildTierPickCard(
                want,
                tierPickWantSelections,
                "wantId",
                selectWantTier
            )
        );

    });

    updateTierPickRemaining();

}


function selectNeedTier(needId, tier) {

    tierPickNeedSelections[needId] = tier;

    renderTierPickNeeds();

}


function selectWantTier(wantId, tier) {

    tierPickWantSelections[wantId] = tier;

    renderTierPickWants();

}


function tierPickSavingsAmount() {

    return tierPickSavingsSelection
        ? tierPickSavingsSelection.amount
        : 0;

}


function renderTierPickSavings() {

    const stage =
        stages[tierPickStage];

    const savings =
        stage.tieredSavings;

    const remainingBeforeSavings =
        stage.income
        - tierPickNeedsSpent()
        - tierPickWantsSpent();

    tierPickSavingsList.innerHTML = "";

    const card =
        document.createElement("div");

    card.className = "tier-item";

    card.innerHTML =
        `<h3>${savings.name}</h3>`
        + `<div class="tier-options" id="tier-options-${savings.id}"></div>`;

    const optionsRow =
        card.querySelector(".tier-options");

    savings.tiers.forEach(tier => {

        const btn =
            document.createElement("button");

        btn.type = "button";
        btn.className = "tier-option-button";
        btn.dataset.savingsTierId = tier.id;

        const isSelected =
            tierPickSavingsSelection
            && tierPickSavingsSelection.id === tier.id;

        if (isSelected) {
            btn.classList.add("selected");
        }

        // Savings tiers are fixed dollar amounts rather than a
        // percentage of what's left, so unlike Needs/Wants (whose
        // max combined cost always leaves room for every Savings
        // tier this stage) a heavily-spent player could genuinely
        // not have enough left for the bigger tiers here. Grey
        // those out instead of letting the total go negative.
        const affordable =
            tier.amount <= remainingBeforeSavings;

        if (!affordable) {
            btn.disabled = true;
            btn.classList.add("tier-option-unaffordable");
        }

        btn.innerHTML =
            `<span class="tier-option-label">${tier.label}</span>`
            + `<span class="tier-option-amount">$${tier.amount}</span>`
            + `<span class="tier-option-note">`
            + `${affordable ? tier.note : "Not enough left over for this."}`
            + `</span>`;

        if (affordable) {

            btn.addEventListener("click", () => {
                selectSavingsTier(tier);
            });

        }

        optionsRow.appendChild(btn);

    });

    tierPickSavingsList.appendChild(card);

    updateTierPickRemaining();

}


function selectSavingsTier(tier) {

    tierPickSavingsSelection = tier;

    renderTierPickSavings();

}


function updateTierPickRemaining() {

    const stage =
        stages[tierPickStage];

    const remaining =
        stage.income
        - tierPickNeedsSpent()
        - tierPickWantsSpent()
        - tierPickSavingsAmount();

    tierPickRemainingDisplay.textContent =
        `$${remaining}`;

    if (tierPickStepName === "needs") {

        tierPickContinueBtn.disabled =
            !stage.tieredNeeds.every(
                need => tierPickNeedSelections[need.id]
            );

    }

    else if (tierPickStepName === "wants") {

        tierPickContinueBtn.disabled =
            !stage.tieredWants.every(
                want => tierPickWantSelections[want.id]
            );

    }

    else {

        tierPickContinueBtn.disabled =
            !tierPickSavingsSelection;

    }

}


function goToTierPickWantsStep() {

    tierPickStepName = "wants";

    tierPickHeading.textContent =
        "Pick Your Wants";

    tierPickSubheading.textContent =
        "Every Want has a small option and a couple of bigger "
        + "ones -- there's always a little room for fun, and "
        + "spending more on it is good for how you feel about "
        + "this stage.";

    tierPickNeedsList.classList.add("hidden");
    tierPickWantsList.classList.remove("hidden");

    renderTierPickWants();

}


function goToTierPickSavingsStep() {

    tierPickStepName = "savings";

    tierPickHeading.textContent =
        "Pick Your Savings";

    tierPickSubheading.textContent =
        "Whatever you set aside here carries into the next "
        + "stage. There's no penalty for saving less -- saving "
        + "more just feels better.";

    tierPickWantsList.classList.add("hidden");
    tierPickSavingsList.classList.remove("hidden");

    renderTierPickSavings();

}


tierPickContinueBtn.addEventListener("click", () => {

    if (tierPickStepName === "needs") {

        goToTierPickWantsStep();

        return;

    }

    if (tierPickStepName === "wants") {

        goToTierPickSavingsStep();

        return;

    }

    // All three steps are done -- show the full run's results.
    // NOTE: Savings tiers are fixed amounts (not "whatever's
    // left"), so there can be real money left over here that
    // isn't in any bucket. Calling that out on purpose rather
    // than hiding it -- what happens to that leftover (auto-save
    // it? let them add more? nothing?) is still an open question.

    const stage =
        stages[tierPickStage];

    const totalWellbeing =
        Object.values(tierPickNeedSelections)
            .concat(Object.values(tierPickWantSelections))
            .reduce((sum, tier) => sum + tier.wellbeing, 0);

    const totalSpent =
        tierPickNeedsSpent() + tierPickWantsSpent();

    const savingsAmount =
        tierPickSavingsAmount();

    const leftover =
        stage.income - totalSpent - savingsAmount;

    tierPickSummary.textContent =
        `All done! Needs + Wants: $${totalSpent}. Savings: `
        + `$${savingsAmount}. Well-being: `
        + `${totalWellbeing >= 0 ? "+" : ""}${totalWellbeing}. `
        + `$${leftover} left over and not assigned anywhere `
        + `(open question -- see next check-in).`;

});


window.__startTierPickPrototype = function(stageNumber) {

    tierPickStage = stageNumber;
    tierPickStepName = "needs";
    tierPickNeedSelections = {};
    tierPickWantSelections = {};
    tierPickSavingsSelection = null;

    if (welcomeStartScreen) {
        welcomeStartScreen.style.display = "none";
    }

    setupScreen.classList.add("hidden");
    monthScreen.classList.add("hidden");
    endScreen.classList.add("hidden");

    tierPickScreen.classList.remove("hidden");

    tierPickHeading.textContent =
        "Pick Your Needs";

    tierPickSubheading.textContent =
        "Every Need has a few ways to cover it -- pick the "
        + "level that fits how you want to live.";

    tierPickSummary.textContent = "";

    tierPickWantsList.classList.add("hidden");
    tierPickSavingsList.classList.add("hidden");
    tierPickNeedsList.classList.remove("hidden");

    renderTierPickNeeds();

};



// ============================================
// START GAME
// ============================================

loadStage(1);

updateWellnessMeters();


// ============================================
// STAGE JUMP (testing / check-in shortcut)
//
// Add #stage1, #stage2, #stage3, or #stage4 to the end of the
// URL (e.g. index.html#stage3) to skip the welcome popup and land
// straight on that stage's story popup. Jumped-to stages start
// fresh -- $0 carried savings, no carried bills, meters from
// neutral -- since there's no real playthrough behind them.
// Changing the hash on an open page reloads into the new stage.
// No hash = the normal game, untouched.
// ============================================

function getStageFromHash() {

    const match =
        /^#stage(\d+)$/i.exec(window.location.hash);

    const stageNumber =
        match ? Number(match[1]) : null;

    return stageNumber && stages[stageNumber]
        ? stageNumber
        : null;

}


const hashStage =
    getStageFromHash();

if (hashStage) {

    dismissWelcomePopup();

    if (hashStage !== 1) {

        loadStage(hashStage);

    }

    updateWellnessMeters();

}


window.addEventListener(
    "hashchange",
    () => {

        if (getStageFromHash()) {

            location.reload();

        }

    }
);


// Restart / Play Again should always go back to the real start,
// even when the page was opened with a #stageN jump -- so strip
// the hash before reloading.
function reloadFromStart() {

    history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
    );

    location.reload();

}


// Convenience preview hook -- open index.html?preview=needs in a
// browser to jump straight to the tier-pick Needs prototype
// without needing the browser console. Safe to remove once this
// flow is wired into the real game.
const previewParam =
    new URLSearchParams(window.location.search).get("preview");

if (previewParam === "needs") {
    window.__startTierPickPrototype(1);
}