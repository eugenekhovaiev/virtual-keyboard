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

  const windowsIcon = `
  <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 20 20" version="1.1"> 
  <title>windows [#174]</title>
  <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7439.000000)" fill="#000000">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179" id="windows-[#174]">
          </path>
        </g>
      </g>
    </g>
  </svg>`;

  function createIconWithClass(directionClass) {
    const arrowIcon = `
    <svg class="button__icon ${directionClass}" width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>triangle-filled</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="drop" fill="#000000" transform="translate(32.000000, 42.666667)">
          <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z" id="Combined-Shape">
          </path>
        </g>
      </g>
    </svg>`;
    return arrowIcon;
  }

  const keyboardCodesRow1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  const keyboardCodesRow2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  const keyboardCodesRow3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  const keyboardCodesRow4 = ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
  const keyboardCodesRow5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
  
  const engKeyboardRow1Shift = [{'Backquote': '~'}, {'Digit1': '!'}, {'Digit2': '@'}, {'Digit3': '#'}, {'Digit4': '$'}, {'Digit5': '%'}, {'Digit6': '^'}, {'Digit7': '&'}, {'Digit8': '*'}, {'Digit9': '('}, {'Digit0': ')'}, {'Minus': '_'}, {'Equal': '+'}];
  const engKeyboardRow1 = [{'Backquote': '`', shift: '~'}, {'Digit1': '1', shift: '!'}, {'Digit2': '2', shift: '@'}, {'Digit3': '3', shift: '#'}, {'Digit4': '4', shift: '$'}, {'Digit5': '5', shift: '%'}, {'Digit6': '6', shift: '^'}, {'Digit7': '7', shift: '&'}, {'Digit8': '8', shift: '*'}, {'Digit9': '9', shift: '('}, {'Digit0': '0', shift: ')'}, {'Minus': '-', shift: '_'}, {'Equal': '=', shift: '+'}, {'Backspace': 'Backspace'}];
  const engKeyboardRow2 = [{'Tab': 'Tab'}, {'KeyQ': 'q'}, {'KeyW': 'w'}, {'KeyE': 'e'}, {'KeyR': 'r'}, {'KeyT': 't'}, {'KeyY': 'y'}, {'KeyU': 'u'}, {'KeyI': 'i'}, {'KeyO': 'o'}, {'KeyP': 'p'}, {'BracketLeft': '[', shift: '{'}, {'BracketRight': ']', shift: '}'}, {'Backslash': '\\', shift: '|'}, {'Delete': 'Del'}];
  const engKeyboardRow3 = [{'CapsLock': 'Caps Lock'}, {'KeyA': 'a'}, {'KeyS': 's'}, {'KeyD': 'd'}, {'KeyF': 'f'}, {'KeyG': 'g'}, {'KeyH': 'h'}, {'KeyJ': 'j'}, {'KeyK': 'k'}, {'KeyL': 'l'}, {'Semicolon': ';', shift: ':'}, {'Quote': "'", shift: '"'}, {'Enter': 'Enter'}];
  const engKeyboardRow4 = [{'ShiftLeft': 'Shift'}, {'IntlBackslash': '\\', shift: "|"}, {'KeyZ': 'z'}, {'KeyX': 'x'}, {'KeyC': 'c'}, {'KeyV': 'v'}, {'KeyB': 'b'}, {'KeyN': 'n'}, {'KeyM': 'm'}, {'Comma': ',', shift: "<"}, {'Period': '.', shift: ">"}, {'Slash': '/', shift: "?"}, {'ArrowUp': `${createIconWithClass('button__icon_up')}`}, {'ShiftRight': 'Shift'}];
  const engKeyboardRow5 = [{'ControlLeft': 'Ctrl'}, {'MetaLeft': `${windowsIcon}`}, {'AltLeft': 'Alt'}, {'Space': ' '}, {'AltRight': 'Alt'}, {'MetaRight': `${windowsIcon}`}, {'ControlRight': 'Ctrl'}, {'ArrowLeft': `${createIconWithClass('button__icon_left')}`}, {'ArrowDown': `${createIconWithClass('button__icon_down')}`}, {'ArrowRight': `${createIconWithClass('button__icon_right')}`}];
  // const engKeyboardRow1Shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  // const engKeyboardRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  // const engKeyboardRow2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
  // const engKeyboardRow3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
  // const engKeyboardRow4 = ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'];
  // const engKeyboardRow5 = ['Control', 'Meta', 'Alt', ' ', 'Alt', 'Meta', 'ContextMenu', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  const rusKeyboardRow1Shift = ['Ё', '!', "'", '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
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

  let selectedButton;
  window.addEventListener('mousedown', changeButtonByClick);
  window.addEventListener('mouseup', changeButtonByClick);


  function changeButton(event) {
    event.preventDefault();
    if (event.repeat) return;
    let code = event.code;
    // console.log(code);
    if (buttonsObj[code]) {
      buttonsObj[code].classList.toggle('button_active');
    } else return;

  }

  function changeButtonByClick(event) {
    const target = event.target.closest('.button');
    
    if (event.type === 'mousedown') {
      if (!target) return;
      selectedButton = target;
    }
    selectedButton.classList.toggle('button_active');
  }

  function createContainer(where) {
    const container = document.createElement('main');
    container.className = 'container';
    where.insertAdjacentElement('afterbegin', container);
    return container;
  }

  function createButton(key, code, shift, where) {
    const button = new KeyboardButton(key, code, shift);
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
      let shift;
      if (item.shift) {
        shift = item.shift;
      } else {
        shift = '';
      }
      createButton(key, code, shift, row);
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
