let celcius= document.getElementById("celcius");
let fah= document.getElementById("Fahrenheit");

celcius.oninput = () =>{
    let output = parseFloat(celcius.value*9)/5+32;
    fah.value= parseFloat(output.toFixed(2));
};