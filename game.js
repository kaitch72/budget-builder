// ============================================
// BUDGET BUILDER
// MONTH 1 + MONTH 2
// ============================================


// ============================================
// GAME DATA
// ============================================

const months = {

    1: {

        income: 1000,

        title: "Your First Paycheck",

        description:
            "You've got your first paycheck. Now decide where every dollar should go.",

        buckets: [

            {
                id: "transportation",
                name: "Transportation",
                icon: "🚗",
                description: "Gas & car costs"
            },

            {
                id: "food",
                name: "Food",
                icon: "🍔",
                description: "Food & drinks"
            },

            {
                id: "fun",
                name: "Fun",
                icon: "🎉",
                description: "Entertainment & extras"
            },

            {
                id: "savings",
                name: "Savings",
                icon: "💰",
                description: "Money you don't spend"
            }

        ],

        commitments: [],

        expenses: [

            {
                icon: "🚗",
                title: "Gas",
                description: "You filled up your car.",
                amount: 40
            },

            {
                icon: "🍔",
                title: "Fast Food",
                description: "You grabbed fast food with friends.",
                amount: 15
            },

            {
                icon: "🚗",
                title: "Gas",
                description: "Time for another trip to the gas station.",
                amount: 35
            },

            {
                icon: "🎬",
                title: "Movie Night",
                description: "You went to the movies with friends.",
                amount: 20
            },

            {
                icon: "🍕",
                title: "Fast Food",
                description: "You grabbed dinner on the way home.",
                amount: 18
            },

            {
                icon: "🔧",
                title: "Car Maintenance",
                description: "Your car needs a routine maintenance check.",
                amount: 75
            },

            {
                icon: "📺",
                title: "Streaming Subscription",
                description: "Your monthly streaming subscription renewed.",
                amount: 12
            },

            {
                icon: "🚗",
                title: "Unexpected Car Repair",
                description: "Uh oh! Your car needs a small repair.",
                amount: 100
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
                icon: "🏠",
                description: "Rent, utilities & phone"
            },

            {
                id: "transportation",
                name: "Transportation",
                icon: "🚗",
                description: "Gas, insurance & car costs"
            },

            {
                id: "food",
                name: "Food",
                icon: "🍔",
                description: "Groceries & eating out"
            },

            {
                id: "subscriptions",
                name: "Subscriptions",
                icon: "📱",
                description: "Streaming & memberships"
            },

            {
                id: "fun",
                name: "Fun",
                icon: "🎉",
                description: "Entertainment & shopping"
            },

            {
                id: "savings",
                name: "Savings",
                icon: "💰",
                description: "Money for your future"
            },

            {
                id: "emergency",
                name: "Emergency",
                icon: "🚨",
                description: "Unexpected expenses"
            }

        ],

        commitments: [

            {
                name: "Rent",
                icon: "🏠",
                amount: 400
            },

            {
                name: "Phone",
                icon: "📱",
                amount: 60
            },

            {
                name: "Car Insurance",
                icon: "🚗",
                amount: 120
            },

            {
                name: "Internet",
                icon: "🌐",
                amount: 50
            },

            {
                name: "Streaming",
                icon: "📺",
                amount: 15
            }

        ],

        expenses: [

            {
                icon: "🏠",
                title: "Rent",
                description: "Your monthly rent payment is due.",
                amount: 400
            },

            {
                icon: "🚗",
                title: "Car Insurance",
                description: "Your monthly car insurance payment is due.",
                amount: 120
            },

            {
                icon: "📱",
                title: "Phone Bill",
                description: "Your phone bill is due.",
                amount: 60
            },

            {
                icon: "📺",
                title: "Streaming Subscription",
                description: "Your streaming subscription renewed.",
                amount: 15
            },

            {
                icon: "🌐",
                title: "Internet",
                description: "Your monthly internet bill is due.",
                amount: 50
            },

            {
                icon: "🚗",
                title: "Gas",
                description: "You filled up your car.",
                amount: 50
            },

            {
                icon: "🍎",
                title: "Groceries",
                description: "You bought groceries for the week.",
                amount: 100
            },

            {
                icon: "🍔",
                title: "Fast Food",
                description: "You grabbed dinner with friends.",
                amount: 20
            },

            {
                icon: "🎵",
                title: "Concert Ticket",
                description: "Your friend invited you to a concert!",
                amount: 75
            },

            {
                icon: "🚗",
                title: "More Gas",
                description: "Another trip to the gas station.",
                amount: 45
            },

            {
                icon: "👕",
                title: "New Clothes",
                description: "You found an outfit you really like.",
                amount: 80
            },

            {
                icon: "🩹",
                title: "Unexpected Expense",
                description: "You had an unexpected $100 expense.",
                amount: 100
            },

            {
                icon: "🔧",
                title: "Car Repair",
                description: "Uh oh! Your car needs a repair.",
                amount: 150
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

let buckets = {};



// ============================================
// GET ELEMENTS
// ============================================

const setupScreen =
    document.getElementById("setup-screen");

const monthScreen =
    document.getElementById("month-screen");

const endScreen =
    document.getElementById("end-screen");


const availableMoney =
    document.getElementById("available-money");

const allocatedMoney =
    document.getElementById("allocated-money");

const remainingMoney =
    document.getElementById("remaining-money");

const startButton =
    document.getElementById("start-month-btn");

const nextMonthButton =
    document.getElementById("next-month-btn");

const budgetMessage =
    document.getElementById("budget-message");



// ============================================
// LOAD MONTH
// ============================================

function loadMonth(monthNumber) {

    currentMonth = monthNumber;

    const month = months[currentMonth];


    currentExpense = 0;

    totalSpent = 0;


    buckets = {};


    month.buckets.forEach(bucket => {

        buckets[bucket.id] = 0;

    });


    // Update header

    document.getElementById(
        "month-number"
    ).textContent = currentMonth;


    document.getElementById(
        "game-month-number"
    ).textContent = currentMonth;


    document.getElementById(
        "month-title"
    ).textContent = month.title;


    document.getElementById(
        "month-description"
    ).textContent = month.description;


    document.getElementById(
        "paycheck-amount"
    ).textContent =
        `$${month.income.toLocaleString()}`;


    availableMoney.textContent =
        `$${month.income.toLocaleString()}`;


    startButton.textContent =
        `Start Month ${currentMonth}`;


    // Build buckets

    createSetupBuckets();

    createGameBuckets();


    // Show commitments if the month has them

    createCommitments();


    // Reset summary

    allocatedMoney.textContent = "$0";

    remainingMoney.textContent =
        `$${month.income.toLocaleString()}`;


    budgetMessage.textContent = "";


    startButton.disabled = true;

}



// ============================================
// CREATE SETUP BUCKETS
// ============================================

function createSetupBuckets() {

    const container =
        document.getElementById("setup-buckets");


    container.innerHTML = "";


    const month =
        months[currentMonth];


    month.buckets.forEach(bucket => {


        const div =
            document.createElement("div");


        div.className = "bucket";


        div.innerHTML = `

            <div class="bucket-icon">
                ${bucket.icon}
            </div>

            <h3>
                ${bucket.name}
            </h3>

            <input
                type="number"
                min="0"
                value="0"
                data-bucket="${bucket.id}"
            >

            <p>
                ${bucket.description}
            </p>

        `;


        container.appendChild(div);


        const input =
            div.querySelector("input");


        input.addEventListener(
            "input",
            updateBudget
        );

    });

}



// ============================================
// CREATE GAME BUCKETS
// ============================================

function createGameBuckets() {

    const container =
        document.getElementById("game-buckets");


    container.innerHTML = "";


    const month =
        months[currentMonth];


    month.buckets.forEach(bucket => {


        const button =
            document.createElement("button");


        button.className =
            "game-bucket";


        button.dataset.bucket =
            bucket.id;


        button.innerHTML = `

            <span class="bucket-icon">
                ${bucket.icon}
            </span>

            <span class="bucket-name">
                ${bucket.name}
            </span>

            <strong>
                $0
            </strong>

        `;


        button.addEventListener(
            "click",
            () => {

                handleExpense(
                    bucket.id
                );

            }
        );


        container.appendChild(button);

    });

}



// ============================================
// CREATE COMMITMENTS
// ============================================

function createCommitments() {

    const section =
        document.getElementById(
            "commitments-section"
        );


    const list =
        document.getElementById(
            "commitments-list"
        );


    const month =
        months[currentMonth];


    if (
        !month.commitments ||
        month.commitments.length === 0
    ) {

        section.classList.add("hidden");

        return;

    }


    section.classList.remove("hidden");


    list.innerHTML = "";


    month.commitments.forEach(commitment => {


        const item =
            document.createElement("div");


        item.className =
            "commitment";


        item.innerHTML = `

            <span class="commitment-icon">
                ${commitment.icon}
            </span>

            <span class="commitment-name">
                ${commitment.name}
            </span>

            <span class="commitment-amount">
                $${commitment.amount}
            </span>

        `;


        list.appendChild(item);

    });

}



// ============================================
// UPDATE BUDGET
// ============================================

function updateBudget() {

    const month =
        months[currentMonth];


    const inputs =
        document.querySelectorAll(
            "#setup-buckets input"
        );


    let total = 0;


    inputs.forEach(input => {

        let value =
            Number(input.value);


        if (value < 0) {

            value = 0;

            input.value = 0;

        }


        total += value;

    });


    const remaining =
        month.income - total;


    allocatedMoney.textContent =
        `$${total.toLocaleString()}`;


    remainingMoney.textContent =
        `$${remaining.toLocaleString()}`;


    availableMoney.textContent =
        `$${Math.max(remaining, 0).toLocaleString()}`;



    if (total === month.income) {

        startButton.disabled = false;

        budgetMessage.textContent =
            "✓ Your budget is ready!";

        budgetMessage.style.color =
            "#16a34a";

    }

    else if (total > month.income) {

        startButton.disabled = true;

        budgetMessage.textContent =
            `You're $${total - month.income} over budget.`;

        budgetMessage.style.color =
            "#dc2626";

    }

    else {

        startButton.disabled = true;

        budgetMessage.textContent =
            `You still need to allocate $${remaining}.`;

        budgetMessage.style.color =
            "#6b7280";

    }

}



// ============================================
// START MONTH
// ============================================

startButton.addEventListener(
    "click",
    startMonth
);


function startMonth() {

    const inputs =
        document.querySelectorAll(
            "#setup-buckets input"
        );


    inputs.forEach(input => {

        const bucketName =
            input.dataset.bucket;


        buckets[bucketName] =
            Number(input.value);

    });


    setupScreen.classList.add(
        "hidden"
    );


    monthScreen.classList.remove(
        "hidden"
    );


    availableMoney.textContent =
        "$0";


    updateBucketDisplay();


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
    ).textContent =
        expense.icon;


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

}



// ============================================
// UPDATE GAME BUCKETS
// ============================================

function updateBucketDisplay() {

    const buttons =
        document.querySelectorAll(
            ".game-bucket"
        );


    buttons.forEach(button => {

        const bucketName =
            button.dataset.bucket;


        const amount =
            buckets[bucketName];


        const balance =
            button.querySelector(
                "strong"
            );


        balance.textContent =
            `$${amount}`;

    });

}



// ============================================
// HANDLE EXPENSE
// ============================================

function handleExpense(
    selectedBucket
) {

    const month =
        months[currentMonth];


    const expense =
        month.expenses[currentExpense];


    // Not enough money

    if (
        buckets[selectedBucket] <
        expense.amount
    ) {

        showMessage(

            `Not enough money in your ${getBucketName(selectedBucket)} bucket.`,

            "error"

        );

        return;

    }


    // Pay the expense

    buckets[selectedBucket] -=
        expense.amount;


    totalSpent +=
        expense.amount;


    updateBucketDisplay();


    showMessage(

        `✓ $${expense.amount} taken from ${getBucketName(selectedBucket)}.`,

        "success"

    );


    setTimeout(() => {


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

    }, 700);

}



// ============================================
// MESSAGE
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


    if (type === "error") {

        message.style.color =
            "#dc2626";

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


    const remaining =
        Object.values(buckets)
            .reduce(
                (total, amount) =>
                    total + amount,
                0
            );


    const savings =
        buckets.savings || 0;


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
    // WELLNESS SCORE
    // ------------------------------------------

    let score =
        Math.round(
            (savings /
            month.income) * 100
        );


    if (score > 100) {

        score = 100;

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

    if (
        months[currentMonth + 1]
    ) {

        nextMonthButton.classList.remove(
            "hidden"
        );


        nextMonthButton.textContent =
            `Start Month ${currentMonth + 1}`;


        document.getElementById(
            "end-message"
        ).textContent =
            currentMonth === 1

                ? "Nice work! But life is about to get a little more complicated."

                : "You handled another month. Ready for what's next?";

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
// HELPER FUNCTIONS
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