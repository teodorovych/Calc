;
var x = NaN, y = NaN, m = 0, oper, comma;
var Screen = document.getElementById('scrin');
var OldScreen = document.getElementById('old');
var Mem = document.getElementById('mem');
var Operator = document.getElementById('operator');

onclick = function(event) {

    if (event.target.className == 'num') {
        if (event.target.id == ',' && comma){}
        else {
            Screen.innerHTML += event.target.value;
           if (event.target.id == ',') {
               comma = 1;
           }
        }
    }
    if (event.target.className == 'func') {
        switch (event.target.id) {
            case '+':
            case '-':
            case 'mul':
            case '/':
                if (isNaN(x)) {
                    x = Screen.innerHTML;
                    oper = event.target.value;
                    OldScreen.innerHTML = x;
                    Operator.innerHTML = oper;
                    Screen.innerHTML = '';
                }
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

            case 'BS':
                Screen.innerHTML = Screen.innerHTML.substr(0, Screen.innerHTML.length - 1);
                break;

            case 'CE':
                Screen.innerHTML = '';
                break;

            case 'C':
                x = NaN;
                y = NaN;
                oper = '';
                comma = 0;
                Screen.innerHTML = '';
                OldScreen.innerHTML = '';
                Operator.innerHTML = '';
                break;

            case '+-':
                if (Screen.innerHTML.substr(0, 1) == '-'){
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
                alert('Поки не працює');
                break;

            case '1/x':
                OldScreen.innerHTML = '1 / ' + Screen.innerHTML;
                Screen.innerHTML = 1/(+Screen.innerHTML);
                break;

            case '=':
                if (!isNaN(x)) {
                    y = Screen.innerHTML;
                    OldScreen.innerHTML = x + oper + y;
                    if (oper == '+') {
                        Screen.innerHTML = +x + +y;
                    } else {
                        if (oper == '-') {
                            Screen.innerHTML = +x - +y;
                        } else {
                            if (oper == '*') {
                                Screen.innerHTML = +x * +y;
                            } else {
                                Screen.innerHTML = +x / +y;
                            }
                        }
                    }
                }
                break;

        }
    }
}
;