;
var x = '', y = '', m = 0, oper, comma;
var Screen = document.getElementById('screen');
var OldScreen = document.getElementById('old');
var Mem = document.getElementById('mem');
var Operator = document.getElementById('operator');

addEventListener("click", calcOnclick);

function calcOnclick (event){
  if (!event.target.parentNode.classList.contains('Calc') || event.target.classList.contains('hide')) return null;

  if (event.target.classList.contains('num')) {
    if (event.target.value == '.' && comma) {
    }
    else {
      Screen.innerHTML += event.target.value;
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
        x = Screen.innerHTML;
        oper = event.target.value;
        OldScreen.innerHTML = Screen.innerHTML;
        Operator.innerHTML = oper;
        Screen.innerHTML = '';
        comma = 0;
        break;

      case 'MC':
        m = 0;
        Mem.innerHTML = '';
        break;

      case 'MR':
        Screen.innerHTML = m;
        break;

      case 'MS':
        m = +Screen.innerHTML;
        Mem.innerHTML = 'M';
        break;

      case 'M+':
        m = +m + Screen.innerHTML;
        Mem.innerHTML = 'M';
        break;

      case 'M-':
        m = +m - Screen.innerHTML;
        Mem.innerHTML = 'M';
        break;

      case 'BS':
        Screen.innerHTML = Screen.innerHTML.substr(0, Screen.innerHTML.length - 1);
        break;

      case 'CE':
        Screen.innerHTML = '';
        break;

      case 'C':
        x = '';
        y = '';
        oper = '';
        comma = 0;
        Screen.innerHTML = '';
        OldScreen.innerHTML = '';
        Operator.innerHTML = '';
        break;

      case '+-':
        if (Screen.innerHTML.substr(0, 1) == '-') {
          Screen.innerHTML = Screen.innerHTML.substr(1);
        }
        else {
          Screen.innerHTML = '-' + Screen.innerHTML;
        }
        break;

      case 'SQ':
        OldScreen.innerHTML = 'sqrt (' + Screen.innerHTML + ')';
        Screen.innerHTML = Math.sqrt(+Screen.innerHTML);
        break;

      case '%':
        Screen.innerHTML = +OldScreen.innerHTML * +Screen.innerHTML / 100 ;
        break;

      case '1/x':
        OldScreen.innerHTML = '1 / ' + Screen.innerHTML;
        Screen.innerHTML = 1 / (+Screen.innerHTML);
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
    y = Screen.innerHTML;
    OldScreen.innerHTML = x + oper + y;
    if (oper === '+') {
      Screen.innerHTML = (+x) + (+y);
    } else {
      if (oper === '-') {
        Screen.innerHTML = (+x) - (+y);
      } else {
        if (oper === '*') {
          Screen.innerHTML = (+x) * (+y);
        } else {
          Screen.innerHTML = (+x) / (+y);
        }
      }
    }
    x = '';
  }
  return event;
}
;
