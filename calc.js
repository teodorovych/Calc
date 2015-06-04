;
var x = '', y = '', m = 0, oper, comma;
var screenCalc = document.getElementById('screen');
var oldscreenCalc = document.getElementById('old');
var inRememberValue = document.getElementById('mem');
var Operator = document.getElementById('operator');

addEventListener("click", calc);

function calc(event) {
  if (!event.target.parentNode.classList.contains('Calc')) {return};
  if (event.target.classList.contains('hide')) {return};

  if (event.target.classList.contains('num')) {
    if (event.target.value == '.' && comma) {}
    else {
      screenCalc.innerHTML += event.target.value;
      if (event.target.value == '.') {
        comma = 1;
      }
    }
  }

  if (event.target.classList.contains('func')) {

    switch (event.target.name) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (x) {
          res();
        }
        x = screenCalc.innerHTML;
        oper = event.target.value;
        oldscreenCalc.innerHTML = screenCalc.innerHTML;
        Operator.innerHTML = oper;
        screenCalc.innerHTML = '';
        comma = 0;
        break;

      case 'MC':
        m = 0;
        inRememberValue.innerHTML = '';
        break;

      case 'MR':
        screenCalc.innerHTML = m;
        break;

      case 'MS':
        m = +screenCalc.innerHTML;
        inRememberValue.innerHTML = 'M';
        break;

      case 'M+':
        m = +m + screenCalc.innerHTML;
        inRememberValue.innerHTML = 'M';
        break;

      case 'M-':
        m = +m - screenCalc.innerHTML;
        inRememberValue.innerHTML = 'M';
        break;

      case 'BS':
        screenCalc.innerHTML = screenCalc.innerHTML.substr(0, screenCalc.innerHTML.length - 1);
        break;

      case 'CE':
        screenCalc.innerHTML = '';
        break;

      case 'C':
        x = '';
        y = '';
        oper = '';
        comma = 0;
        screenCalc.innerHTML = '';
        oldscreenCalc.innerHTML = '';
        Operator.innerHTML = '';
        break;

      case '+-':
        if (screenCalc.innerHTML.substr(0, 1) == '-') {
          screenCalc.innerHTML = screenCalc.innerHTML.substr(1);
        }
        else {
          screenCalc.innerHTML = '-' + screenCalc.innerHTML;
        }
        break;

      case 'SQ':
        oldscreenCalc.innerHTML = 'sqrt (' + screenCalc.innerHTML + ')';
        screenCalc.innerHTML = Math.sqrt(+screenCalc.innerHTML);
        break;

      case '%':
        screenCalc.innerHTML = +oldscreenCalc.innerHTML * +screenCalc.innerHTML / 100 ;
        break;

      case '1/x':
        oldscreenCalc.innerHTML = '1 / ' + screenCalc.innerHTML;
        screenCalc.innerHTML = 1 / (+screenCalc.innerHTML);
        break;

      case '=':
        if (!x) {
          break;
        }
        else {
          res();

          break;
        }

    }
  }

  function res() {

    y = screenCalc.innerHTML;
    oldscreenCalc.innerHTML = x + oper + y;

    if (oper === '+') {
      screenCalc.innerHTML = (+x) + (+y);
    }
    else {
      if (oper === '-') {
        screenCalc.innerHTML = (+x) - (+y);
      }
      else {
        if (oper === '*') {
          screenCalc.innerHTML = (+x) * (+y);
        }
        else {
          screenCalc.innerHTML = (+x) / (+y);
        }
      }
    }
    x = '';
  }
  return;
}
;
