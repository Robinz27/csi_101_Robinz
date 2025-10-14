const num = document.getElementById("num01")
console.log(num)
const result = document.getElementById("result")
console.log(result)

const num1 = document.getElementById("num02")
console.log(num1)
const num2 = document.getElementById("num03")
console.log(num2)

function main(){
    let r = parseFloat(num.value)
    console.log("paw ==> ",Math.pow(r,2))
    console.log("sqrt ==> ",Math.sqrt(r))
    console.log("abs ==> ",Math.abs(r))

    // console.log("round ==> ",Math.round(r))
    // console.log("ceil ==> ",Math.ceil(r))
    // console.log("floor ==> ",Math.floor(r))
}

function fuc_min(){
    let n1 = parseFloat(num1.value)
    let n2 = parseFloat(num2.value)
    console.log("n1 = ",n1)
    console.log("n2 = ",n2)
    console.log("Min = ",Math.min(n1,n2))
}

function fuc_max(){
    let n1 = parseFloat(num1.value)
    let n2 = parseFloat(num2.value)
    console.log("n1 = ",n1)
    console.log("n2 = ",n2)
    console.log("Min = ",Math.max(n1,n2))
}

function randomData(){
    console.log("random Data = ",Math.floor(Math.random()*100))
}