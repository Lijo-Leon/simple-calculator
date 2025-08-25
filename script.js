//Display Number
function displayNumber(num){
    result.value += num
}

//Clear while clicking AC
function clearText(){
    result.value = ""
}

//Back Button
function lastDigit(){
    result.value = result.value.slice(0,-1)
}

//Calculation
function calculation(){
    result.value = eval(result.value)
}