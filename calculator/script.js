function apply(item){
    document.getElementById('inp').value+=item;

}
function calcu() {
    let inputElement = document.querySelector('#inp');
    let currentvalue=inputElement.value;
    let result = currentvalue.slice(0,-1);
    inputElement.value = result;
}
function calculate(){
    let inputElement = document.querySelector('#inp');
    let result = eval(inputElement.value);
    inputElement.value ='='+ result;

}
function clearDisplay(){
    const displayvalue=document.getElementById('inp');
    displayvalue.value='';
}


  