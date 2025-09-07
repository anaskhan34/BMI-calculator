function bmiHandler() {

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var resultShow = document.getElementById("resultShow");

    if (!weight || !height || weight <= 0 || height <= 0) {
        resultShow.innerHTML = "Please enter valid data";
        return;
    }

    var bmi = weight / (height * height);
    var result = bmi.toFixed(2);

    //condition

    if(result<18.5){
        resultShow.innerHTML ="Your BMI is:(Under weight)" + result;
        resultShow.style.color = "red";
    }
    else if(result>=18.5 && result<=24.9){
        resultShow.innerHTML = "Your BMI is:(Normal Weight)" + result;
        resultShow.style.color = "green";
    }
    else if(result>=25 && result<=29.9){
        resultShow.innerHTML = "Your BMI is:(Over weight)" + result;
        resultShow.style.color = "red";
    }
    else {
        resultShow.innerHTML = "Your BMI is:(obese)" + result;
        resultShow.style.color = "red";
    }
    }

