var op=""
var FirstNumber=""
var SecondNumber=""

var operator=""
var res=''

function append(number){
        if(operator===""){
                FirstNumber+=number
                document.getElementById("result").value=FirstNumber
        }
        else{
            SecondNumber+=number
            document.getElementById('result').value=FirstNumber+operator+SecondNumber
        }

}

function setoperator(op){
    operator=op
    document.getElementById('result').value=FirstNumber+op;
}

function showresult(){
    switch(operator){
        case '+':
            res= parseInt(FirstNumber)+ parseInt(SecondNumber);
            break
        case '-':
                res=parseInt(FirstNumber)- parseInt(SecondNumber);
                break
        case '*':
                res= parseInt(FirstNumber) * parseInt(SecondNumber);
                break
        case '/':
                res=parseInt(FirstNumber)/ parseInt(SecondNumber);
                break
    }  
    document.getElementById('result').value=res
}

function reset(){
    first="";
    second="";
    operator="";
    document.getElementById('result').value="";
}

const body=document.querySelector('body');

const button=document.querySelector('button');
const color=['pink','yellow','violet','whiesmoke'];
let index = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = color[index];
    index = (index + 1) % color.length; 
  }

  setInterval(changeBackgroundColor, 1000);
  