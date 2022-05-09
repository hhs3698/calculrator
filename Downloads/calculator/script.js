const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === "+"){
    result = Number(n1)+Number(n2);
  }
  if(operator === "-"){
    result = Number(n1)-Number(n2);
  }
  if(operator === "/"){
    result = Number(n1)/Number(n2);
  }
  if(operator === "*"){
    result = Number(n1)*Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {


  const target = event.target; 
  const action = target.classList[0]; 
  const buttonContent = target.textContent; 


  if (target.matches('button')) {


    if (action === 'number') {
      if(firstOperend.textContent==="0"){
        firstOperend.textContent = buttonContent
      }
      else{
        secondOperend.textContent = buttonContent
      }


      console.log('숫자 ' + buttonContent + ' 버튼');
    }

    if (action === 'operator') {
      operator.textContent=buttonContent
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0";
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
     calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent)
      console.log('계산 버튼');
    }
  }
});

