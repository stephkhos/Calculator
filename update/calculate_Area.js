let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    if (isNaN(length) || isNaN(width)) {
        alert('Please enter valid numeric values for length and width.');
        return;
    }

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
