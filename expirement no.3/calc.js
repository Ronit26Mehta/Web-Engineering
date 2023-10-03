function display(val) {
    document.getElementById('result').value += val;
    return val;
}

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

function clearScreen() {
    document.getElementById('result').value = '';
}
function round() {
    let x = document.getElementById('result').value;
    let y = Math.round(x);
    document.getElementById('result').value = y;
    return y;
    
}
function factorial() {
    let x = document.getElementById('result').value;
    var sum =1;
    for(let y = 1;y<=x;y++){
        sum = sum * y;
    }
    let z = sum;
    document.getElementById('result').value = z;
    return z;
    
   
}