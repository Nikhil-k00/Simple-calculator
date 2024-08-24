function clickme(val){
    document.getElementById("s").value+=val
}
function clearDisplay(val){
    document.getElementById("s").value=""
}
function Equalclick(){
    var text= document.getElementById("s").value
    var result=eval(text);
    document.getElementById("s").value=result
}
