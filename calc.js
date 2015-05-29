;
var x = '', y = '', m = 0, oper, comma;
var Screen = document.getElementById('screen');
var OldScreen = document.getElementById('old');
var Mem = document.getElementById('mem');
var Operator = document.getElementById('operator');

document.onclick = function (event) {

  if (event.target.className === 'num') {
    if (event.target.value === '.' && comma) {
    }
    else {
      Screen.innerHTML += event.target.value;
      if (event.target.value === '.') {
        comma = 1;
      }
    }
  }
  if (event.target.className === 'func') {
    switch (event.target.value) {
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
        m = m + +Screen.innerHTML;
        Mem.innerHTML = 'M';
        break;

      case 'M-':
        m = m - Screen.innerHTML;
        Mem.innerHTML = 'M';
        break;

      case '&#8592':
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

      case '&plusmn':
        if (Screen.innerHTML.substr(0, 1) == '-') {
          Screen.innerHTML = Screen.innerHTML.substr(1);
        }
        else {
          Screen.innerHTML = '-' + Screen.innerHTML;
        }
        break;

      case '&#8730':
        OldScreen.innerHTML = 'sqrt (' + Screen.innerHTML + ')';
        Screen.innerHTML = Math.sqrt(+Screen.innerHTML);
        break;

      case '%':
        alert('???? ?? ??????');
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
  };
}
;
