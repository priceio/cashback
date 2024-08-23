document.getElementById('spendingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cashbackRate = 0.015; // 1.5%

    const spending = {
        shopping: Number(document.getElementById('shopping').value),
        food: Number(document.getElementById('food').value),
        groceries: Number(document.getElementById('groceries').value),
        subscriptions: Number(document.getElementById('subscriptions').value),
        utilities: Number(document.getElementById('utilities').value),
        insurance: Number(document.getElementById('insurance').value)
    };

    let totalSpending = 0;
    for (let category in spending) {
        totalSpending += spending[category];
    }

    const totalCashback = totalSpending * cashbackRate;

    document.getElementById('result').textContent = `🎉 Total Spent: $${totalSpending.toFixed(2)} | Cashback Earned: $${totalCashback.toFixed(2)} 🎉`;
});