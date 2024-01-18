function groceryTracker(amount1, amount2, amount3) {
    // Calculate total amount
    let totalAmount = amount1 + amount2 + amount3;

    // Display the result
    document.getElementById('result').innerText = `Total amount spent on groceries: ${totalAmount}`;
}

function calculateTotal() {
    // Get values from input boxes
    let amount1 = parseFloat(document.getElementById('grocery1').value) || 0;
    let amount2 = parseFloat(document.getElementById('grocery2').value) || 0;
    let amount3 = parseFloat(document.getElementById('grocery3').value) || 0;

    // Call the groceryTracker function with the amounts
    groceryTracker(amount1, amount2, amount3);
}
