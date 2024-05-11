const display = document.getElementById("display");


function appendDisplay(value){
    display.value += value;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }


}

function clearDisplay(){
    display.value="";
}