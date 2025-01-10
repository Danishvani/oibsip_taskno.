let previousAnswer = 0;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        const result = eval(display.value);
        previousAnswer = result;
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function useAnswer() {
    appendToDisplay(previousAnswer.toString());
}
