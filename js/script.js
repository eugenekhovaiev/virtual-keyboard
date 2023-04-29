'use strict';
window.addEventListener('DOMContentLoaded', () => {
  class KeyboardButton {
    constructor(mainSymbol, code, shiftSymbol = '') {
      this.mainSymbol = mainSymbol;
      this.shiftSymbol = shiftSymbol;
      this.code = code;

      this.button = document.createElement('button');
      this.button.className = 'button';

      if (mainSymbol.length !== 1) {
        this.button.classList.add('button_func');
      } else {
        mainSymbol = mainSymbol.toUpperCase();
      }

      this.button.innerHTML = `
        <div class="button__main-symbol">${mainSymbol}</div>
        <div class="button__shift-symbol">${shiftSymbol}</div>\n`;
    }
  
    getElem() {
      return this.button;
    }
  
    getHTML() {
      return this.button.outerHTML;
    }
  }

  const keyboardCodesRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  const keyboardCodesRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  const keyboardCodesRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  const keyboardCodesRow4 = ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
  const keyboardCodesRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
  
  const engKeyboardRow1Shift = [{"Backquote": "~"}, {"Digit1": "!"}, {"Digit2": "@"}, {"Digit3": "#"}, {"Digit4": "$"}, {"Digit5": "%"}, {"Digit6": "^"}, {"Digit7": "&"}, {"Digit8": "*"}, {"Digit9": "("}, {"Digit0": ")"}, {"Minus": "_"}, {"Equal": "+"}];
  const engKeyboardRow1 = [{"Backquote": "`"}, {"Digit1": "1"}, {"Digit2": "2"}, {"Digit3": "3"}, {"Digit4": "4"}, {"Digit5": "5"}, {"Digit6": "6"}, {"Digit7": "7"}, {"Digit8": "8"}, {"Digit9": "9"}, {"Digit0": "0"}, {"Minus": "-"}, {"Equal": "="}, {"Backspace": "Backspace"}];
  const engKeyboardRow2 = [{"Tab": "Tab"}, {"KeyQ": "q"}, {"KeyW": "w"}, {"KeyE": "e"}, {"KeyR": "r"}, {"KeyT": "t"}, {"KeyY": "y"}, {"KeyU": "u"}, {"KeyI": "i"}, {"KeyO": "o"}, {"KeyP": "p"}, {"BracketLeft": "["}, {"BracketRight": "]"}, {"Backslash": "\\"}, {"Delete": "Del"}];
  const engKeyboardRow3 = [{"CapsLock": "CapsLock"},{"KeyA": "a"},{"KeyS": "s"},{"KeyD": "d"},{"KeyF": "f"},{"KeyG": "g"},{"KeyH": "h"},{"KeyJ": "j"},{"KeyK": "k"},{"KeyL": "l"},{"Semicolon": ";"},{"Quote": "'"},{"Enter": "Enter"}];
  const engKeyboardRow4 = [{"ShiftLeft": "Shift"}, {"IntlBackslash": "\\"}, {"KeyZ": "z"}, {"KeyX": "x"}, {"KeyC": "c"}, {"KeyV": "v"}, {"KeyB": "b"}, {"KeyN": "n"}, {"KeyM": "m"}, {"Comma": ","}, {"Period": "."}, {"Slash": "/"}, {"ArrowUp": "Up"}, {"ShiftRight": "Shift"}];
  const engKeyboardRow5 = [{"ControlLeft": "Ctrl"}, {"MetaLeft": "Win"}, {"AltLeft": "Alt"}, {"Space": " "}, {"AltRight": "Alt"}, {"MetaRight": "Win"}, {"ContextMenu": "Cont"}, {"ControlRight": "Ctrl"}, {"ArrowLeft": "Left"}, {"ArrowDown": "Down"}, {"ArrowRight": "Right"}];
  // const engKeyboardRow1Shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  // const engKeyboardRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  // const engKeyboardRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
  // const engKeyboardRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
  // const engKeyboardRow4 = ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'];
  // const engKeyboardRow5 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'Meta', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  const rusKeyboardRow1Shift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
  const rusKeyboardRow1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const rusKeyboardRow2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'];
  const rusKeyboardRow3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
  const rusKeyboardRow4 = ['Shift', '/', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift'];
  const rusKeyboardRow5 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'Meta', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  let keyboardArr = [engKeyboardRow1, engKeyboardRow2, engKeyboardRow3, engKeyboardRow4, engKeyboardRow5];
  // console.log(keyboardArr);

  const container = createContainer(document.body);

  const buttonsObj = {};

  createKeyboard(keyboardArr, container);

  // console.log(buttonsObj);
  
  window.addEventListener('keydown', changeButton);
  window.addEventListener('keyup', changeButton);


  function changeButton(event) {
    event.preventDefault();
    if (event.repeat) return;
    let code = event.code;
    // console.log(code);
    if (buttonsObj[code]) {
      buttonsObj[code].classList.toggle('button_active');
    } else return;

  }

  function createContainer(where) {
    const container = document.createElement('main');
    container.className = 'container';
    where.insertAdjacentElement('afterbegin', container);
    return container;
  }

  function createButton(key, code, where) {
    const button = new KeyboardButton(key, code);
    where.insertAdjacentElement('beforeend', button.getElem());

    buttonsObj[code] = button.getElem();
    return button;
  }

  function createRow(where) {
    const row = document.createElement('div');
    row.className = 'keyboard__row';
    where.insertAdjacentElement('beforeend', row);
    return row;
  }

  function fillRowFrom(keyboardRow, where) {
    const row = createRow(where);
    keyboardRow.forEach(item => {
      const code = Object.keys(item)[0];
      const key = item[code];
      createButton(key, code, row);
    });
  }

  function createKeyboard(keyboardArr, where) {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';

    keyboardArr.forEach(row => {
      fillRowFrom(row, keyboard);
    });

    where.insertAdjacentElement('beforeend', keyboard);
  }

  // *Function to rebuild keyboardRow arrays into objects arrays
  // rebuildRowArr(keyboardCodesRow1, engKeyboardRow1Shift);
  
  // function rebuildRowArr(codesRow, keysRow) {
  //   for (let i = 0; i < codesRow.length; i++) {
  //     let obj = {};
  //     obj[codesRow[i]] = keysRow[i];
  //     keysRow[i] = obj;
  //   }
  //   console.log(keysRow);
  // }
  
  // *Function to fill keyboardRow arrays
  // let array = [];
  // window.addEventListener('keydown', createButtonOnPush);
  
  // function createButtonOnPush(event) {
  //   let key = event.key;
  //   let code = event.code;
  //   let button = new KeyboardButton(key, code);
  //   container.insertAdjacentElement('beforeend', button.getElem());

  //   let keyObj = {};
  //   keyObj[code] = key;
  //   array.push(keyObj);
  //   console.log(array);
  // }
});
