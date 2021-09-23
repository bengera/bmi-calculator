'use strict';

// BMI = (weight) / (height * height)

/* 
1. When button clicked take the input of height and weight and store in variables
2. calculate kg / height squared
3. output calculation to result

*/

// cancel the submit event - default action will not occur
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();


    const calculate = document.getElementById('btn-calculate');
    calculate.addEventListener("click", calculateBMI);


    function calculateBMI() {

        const height = parseInt(document.getElementById('height').value); //parseInt - change string to numbers
        const weight = parseInt(document.getElementById('weight').value); // parseFloat - change string with decimals
        const result = document.querySelector('.result');

        if (height === "" || isNaN(height)) {
            result.innerHTML = "Invalid height";
        } else if (weight === "" || isNaN(weight)) {
            result.innerHTML = "Invalid weight";

        } else {

            const bmi = (weight / ((height * height) /
                10000)).toFixed(2); // show 2 numbers after decimal point

            if (bmi < 18.6) {
                result.innerHTML = `Underweight: <span>${bmi}</span>`;
            } else if (bmi >= 18.6 && bmi < 24.9) {
                result.innerHTML = `Normal weight: </span>${bmi}</span>`;
            } else result.innerHTML= `Overweight: </span>${bmi}</span>`;

        }





    };

});