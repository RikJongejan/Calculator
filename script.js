let isOn = true;

function addToDisplay(value) {
    if (isOn) {
        document.getElementById('display').value += value;
    }
}
function clearDisplay() {
    document.getElementById('display').value = ('');
}
function deleteLastChar(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);

}
function calculate(){
   let value =  document.getElementById('display').value;
    let result =eval(value);
    document.getElementById('display').value = result;
}
function calculatePercentage() {
    let value = document.getElementById('display').value;
    let number = parseFloat(value);
    if (!isNaN(number)) {
        document.getElementById('display').value = number / 100;
    }
}
