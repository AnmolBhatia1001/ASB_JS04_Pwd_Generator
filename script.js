// length
const lengthElement = document.getElementById('length') //length

//cases
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')

// btn
const generateElement = document.getElementById('generate')

// clipbord
const clipboardElement = document.getElementById('clipboard') // copy feat

// output
const resultElement = document.getElementById('result')// output box



const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$&_+-";

let genratedPassword = [];

const casesFunc = [
    {lower: () => commonFn(alphaLower)},
    {upper: () => commonFn(alphaUpper)},
    {number: () => commonFn(num)},
    {symbol: () => commonFn(symbol)}
]

// console.log(Object.keys(casesFunc[0]));

let checkedCases = []

function pushToChecked(element, fnName){
    if(element.checked){
        casesFunc.forEach(ele =>{
            if(Object.keys(ele).toString() === fnName){
                checkedCases.push(ele)
            }
        })

    }
}

function isChecked(){
        pushToChecked(lowercaseElement, "lower");
        pushToChecked(uppercaseElement, "upper");
        pushToChecked(numbersElement, "number");
        pushToChecked(symbolsElement, "symbol");
}



function arrayToStr(arr){
    let converterText = arr.toString().replaceAll(",","")
    return converterText
}

function commonFn(caseType){
    return caseType.charAt(Math.floor(Math.random()* caseType.length))
}


// console.log(checkedCases);
generateElement.addEventListener("click",genrate)

function genrate(){
    isChecked()
    for(let i=0; i<lengthElement.value; i++){
        let randomIndex = Math.floor(Math.random() * checkedCases.length)
        
        for (const key in checkedCases[randomIndex]) {
            let genratedChar =  checkedCases[randomIndex][key]();
            genratedPassword.push(genratedChar)
        }
    
    }
    resultElement.innerText = arrayToStr(genratedPassword);
    genratedPassword = []
    checkedCases = []

}



