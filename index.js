/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input-num");
const convertBtn = document.getElementById("convert-btn");
const lengthConversions = document.getElementById("length-conversions");
const volumeConversions = document.getElementById("volume-conversions");
const massConverstions = document.getElementById("mass-conversions");

convertBtn.addEventListener("click", function() {
    lengthConversions.textContent = `${inputNum.value} meters = ${meterToFeet(inputNum.value)} feet | ${inputNum.value} feet = ${feetToMeter(inputNum.value)} meters`;
    volumeConversions.textContent = `${inputNum.value} liters = ${literToGallon(inputNum.value)} gallons | ${inputNum.value} gallons = ${gallonToLiter(inputNum.value)} liters`;
    massConverstions.textContent = `${inputNum.value} kilos = ${kilosToPounds(inputNum.value)} pounds | ${inputNum.value} pounds = ${poundsToKilos(inputNum.value)} kilos`;
})

function meterToFeet(val) {
    return (val*3.281).toFixed(3)
}

function feetToMeter(val) {
    return (val/3.281).toFixed(3)
}

function literToGallon(val) {
    return (val*0.264).toFixed(3)
}

function gallonToLiter(val) {
    return (val/0.264).toFixed(3)
}

function kilosToPounds(val) {
    return (val*2.204).toFixed(3)
}

function poundsToKilos(val) {
    return (val/2.204).toFixed(3)
}