
const display = document.getElementById('display');
function AppendToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value = "";
}

function Szamolas(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}