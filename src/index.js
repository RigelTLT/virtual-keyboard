import './style.scss';
let lang = 'rus';
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    let lang = localStorage.getItem('lang');
    changeLanguage(lang);
  }
}
window.addEventListener('load', getLocalStorage);
//англ мал

//[33, 49, 64, 50, 35, 51, 36, 52, 37, 53, 94, 54, 38, 55, 42, 56, 40, 57, 41, 48, 95, 45, 43, 61]
//[[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
//АНГЛ БОЛЬ
//[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47]
//русс мал
//[1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61]
//[1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46]
//РУС БОЛЬ
//[1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61]
//[1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 92, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46]

/*const rusBig = [
  1105,
  ['!', '1'],
  ['"', '2'],
  ['№', '3'],
  [';', '4'],
  ['%', '5'],
  [':', '6'],
  ['?', '7'],
  ['*', '8'],
  ['(', '9'],
  [')', '0'],
  ['_', '-'],
  ['+', '='],
  'Backspace',
  'Tab',
  1049,
  1062,
  1059,
  1050,
  1045,
  1053,
  1043,
  1064,
  1065,
  1047,
  1061,
  1066,
  1060,
  'Del',
  'Caps',
  1067,
  1042,
  1040,
  1055,
  1056,
  1054,
  1051,
  1044,
  1046,
  1069,
  92,
  'Enter',
  'ShiftL',
  1071,
  1063,
  1057,
  1052,
  1048,
  1058,
  1068,
  1041,
  1070,
  46,
  'ShiftR',
  'CtrlL',
  'Win',
  'AltL',
  '',
  'AltR',
  'CtrlR',
];*/
const rusSmall = [
  [192, 1105],
  [49, [33, 49]],
  [50, [34, 50]],
  [51, [8470, 51]],
  [52, [59, 52]],
  [53, [37, 53]],
  [54, [58, 54]],
  [55, [63, 55]],
  [56, [42, 56]],
  [57, [40, 57]],
  [48, [41, 48]],
  [189, [95, 45]],
  [187, [43, 61]],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  [81, 1081],
  [87, 1094],
  [69, 1091],
  [82, 1082],
  [84, 1077],
  [89, 1085],
  [85, 1075],
  [73, 1096],
  [79, 1097],
  [80, 1079],
  [219, 1093],
  [221, 1098],
  ['Delete', 'Del'],
  ['CapsLock', 'Caps'],
  [65, 1092],
  [83, 1099],
  [68, 1074],
  [70, 1072],
  [71, 1087],
  [72, 1088],
  [74, 1086],
  [75, 1083],
  [76, 1076],
  [186, 1078],
  [222, 1101],
  [220, 92],
  ['Enter', 'Enter'],
  ['ShiftLeft', 'ShiftL'],
  [90, 1103],
  [88, 1095],
  [67, 1089],
  [86, 1084],
  [66, 1080],
  [78, 1090],
  [77, 1100],
  [188, 1073],
  [190, 1102],
  [191, 46],
  ['ShiftRight', 'ShiftR'],
  ['ControlLeft', 'CtrlL'],
  ['MetaLeft', 'Win'],
  ['AltLeft', 'AltL'],
  ['Space', '&nbsp;'],
  ['AltRight', 'AltR'],
  ['ControlRight', 'CtrlR'],
];
//[33, 49, 64, 50, 35, 51, 36, 52, 37, 53, 94, 54, 38, 55, 42, 56, 40, 57, 41, 48, 95, 45, 43, 61]
//[[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]

const enSmall = [
  [192, 96],
  [49, [33, 49]],
  [50, [64, 50]],
  [51, [35, 51]],
  [52, [36, 52]],
  [53, [37, 53]],
  [54, [94, 54]],
  [55, [38, 55]],
  [56, [42, 56]],
  [57, [40, 57]],
  [48, [41, 48]],
  [189, [95, 45]],
  [187, [43, 61]],
  ['Backspace', 'Backspace'],
  ['Tab', 'Tab'],
  [81, 113],
  [87, 119],
  [69, 101],
  [82, 114],
  [84, 116],
  [89, 121],
  [85, 117],
  [73, 105],
  [79, 111],
  [80, 112],
  [219, 91],
  [221, 93],
  ['Delete', 'Del'],
  ['CapsLock', 'Caps'],
  [65, 97],
  [83, 115],
  [68, 100],
  [70, 102],
  [71, 103],
  [72, 104],
  [74, 106],
  [75, 107],
  [76, 108],
  [186, 59],
  [222, 39],
  [220, 92],
  ['Enter', 'Enter'],
  ['ShiftLeft', 'ShiftL'],
  [90, 122],
  [88, 120],
  [67, 99],
  [86, 118],
  [66, 98],
  [78, 110],
  [77, 109],
  [188,  44],
  [190,  46],
  [191,  47],
  ['ShiftRight', 'ShiftR'],
  ['ControlLeft', 'CtrlL'],
  ['MetaLeft', 'Win'],
  ['AltLeft', 'AltL'],
  ['Space', '&nbsp;'],
  ['AltRight', 'AltR'],
  ['ControlRight', 'CtrlR'],
];

const body = document.body;
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);
const texareaDiv = document.createElement('div');
texareaDiv.classList.add('text-block');
wrapper.append(texareaDiv);
const textarea = document.createElement('textarea');
textarea.classList.add('text-block__textarea');
texareaDiv.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

let arrLang = [];
if (lang === 'rus') {
  arrLang = rusSmall;
}
if (lang === 'en') {
  arrLang = enSmall;
}
const arrArrow = [
  '',
  ['ArrowUp', 8593],
  '',
  ['ArrowLeft', 8592],
  ['ArrowDown', 8595],
  ['ArrowRight', 8594],
];
const specialKey = {
  Backspace: 'Backspace',
  Tab: 'Tab',
  Delete: 'Del',
  CapsLock: 'Caps',
  ShiftLeft: 'ShiftL',
  ShiftRight: 'ShiftR',
  ControlLeft: 'CtrlL',
  MetaLeft: 'Win',
  AltLeft: 'AltL',
  Space: '&nbsp;',
  AltRight: 'AltR',
  ControlRight: 'CtrlR',
  Enter: 'Enter',
  ArrowUp: '8593',
  ArrowLeft: '8592',
  ArrowDown: '8595',
  ArrowRight: '8594',
};
const rowButton = 5;
const colButton = 14;
const colButton2 = 12;
const colButton3 = 7;
let indexKey = 0;
let flagShift = false;
let flagAlt = false;
let corret = textarea.selectionStart;
for (let i = 0; i < rowButton; i++) {
  let maxCol = colButton;
  if (i === 3) {
    maxCol = colButton2;
  }
  if (i === 4) {
    maxCol = colButton3;
  }
  for (let j = 0; j < maxCol; j++) {
    const button = document.createElement('div');
    button.classList.add('button-key');
    button.classList.add(`button__i-${i}__j-${j}`);
    keyboard.append(button);
    if (i === 4 && j === 6) {
      let indexArrow = 0;
      while (indexArrow < 6) {
        const inputArr = document.createElement('div');
        inputArr.classList.add('button-key');
        inputArr.classList.add(`button__i-${indexArrow}__Arrow`);
        button.append(inputArr);
        if (typeof arrArrow[indexArrow] === 'object') {
          const key = document.createElement('span');
          key.classList.add('button-key__span');
          inputArr.dataset.id = arrArrow[indexArrow][0];
          key.innerHTML = String.fromCharCode(Number(arrArrow[indexArrow][1]));
          inputArr.append(key);
        }
        indexArrow++;
      }
    } else {
      const key = document.createElement('span');
      key.classList.add('button-key__span');

      if (typeof arrLang[indexKey][1] === 'number') {
        key.classList.add('button-key__span__letter');
        button.dataset.id = arrLang[indexKey][0];
        key.innerHTML = String.fromCharCode(Number(arrLang[indexKey][1]));
      }
      if (typeof arrLang[indexKey][1] === 'string') {
        button.dataset.id = arrLang[indexKey][0];
        key.innerHTML = String(arrLang[indexKey][1]);
      }
      if (typeof arrLang[indexKey][1] === 'object') {
        const keyTwo = document.createElement('span');
        keyTwo.classList.add('button-key__spanUp');
        keyTwo.innerHTML = String.fromCharCode(Number(arrLang[indexKey][1][0]));
        button.append(keyTwo);
        button.dataset.id = arrLang[indexKey][0];
        key.innerHTML = String.fromCharCode(Number(arrLang[indexKey][1][1]));
      }
      button.append(key);
      indexKey++;
    }
  }
}
const letters = document.querySelectorAll('.button-key__span__letter');
const keyTilda = document.querySelector('.button-key[data-id="192"] .button-key__span');
const keyСomma = document.querySelector('.button-key[data-id="188"] .button-key__span');
const keyPoint = document.querySelector('.button-key[data-id="190"] .button-key__span');
const keySlash = document.querySelector('.button-key[data-id="191"] .button-key__span');


function changeLanguage(lang) {
  const allKeys = document.querySelectorAll('.button-key__span');
  const allKeys2 = document.querySelectorAll('.button-key__spanUp');
  let arrLang = [];

  if (lang === 'rus') {
    arrLang = enSmall;
  }
  if (lang === 'en') {
    arrLang = rusSmall;
  }
  localStorage.setItem('lang', lang);
  for (let index = 0; index < allKeys.length; index++) {
    if (typeof arrLang[index][1] === 'number') {
      allKeys[index].innerHTML = String.fromCharCode(Number(arrLang[index][1]));
    }
    if (typeof arrLang[index][1] === 'object') {
      allKeys2[index - 1].innerHTML = String.fromCharCode(
        Number(arrLang[index][1][0])
      );
      allKeys[index].innerHTML = String.fromCharCode(
        Number(arrLang[index][1][1])
      );
    }
    if (allKeys[index].innerHTML === 'CtrlR') {
      break;
    }
  }
}
function keyDownListener(event) {
  event.preventDefault();
  if (specialKey[`${event.code}`]) {
    document
      .querySelector(`.button-key[data-id="${event.code}"]`)
      .classList.add('active_button');

    if (event.code === 'AltLeft' || event.code === 'AltRight') {
      flagAlt = true;
      console.log(textarea.selectionStart);
    }
    if (event.code === 'CapsLock') {
      letters.forEach(function (element) {
        element.classList.toggle('capslock');
      });
      window.removeEventListener('keydown', keyDownListener);
    }
    if (event.code === 'Backspace') {
      if (textarea.selectionStart === 0 && textarea.innerHTML) {
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      } else {
        corret = textarea.selectionStart;
        textarea.innerHTML =
          textarea.innerHTML.slice(0, textarea.selectionStart - 1) +
          textarea.innerHTML.slice(textarea.selectionStart);
        textarea.selectionStart = corret - 1;
      }
    }
    if (event.code === 'Delete') {
      corret = textarea.selectionStart;
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        textarea.innerHTML.slice(textarea.selectionStart + 1);
      textarea.selectionStart = corret;
    }
    if (event.code === 'Enter') {
      corret = textarea.selectionStart;
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        '\n' +
        textarea.innerHTML.slice(textarea.selectionStart);
      textarea.selectionStart = corret + 1;
    }
    if (event.code === 'Tab') {
      corret = textarea.selectionStart;
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        '\t' +
        textarea.innerHTML.slice(textarea.selectionStart);
      textarea.selectionStart = corret + 1;
    }
    if (event.code === 'Space') {
      corret = textarea.selectionStart;
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        ' ' +
        textarea.innerHTML.slice(textarea.selectionStart);
      textarea.selectionStart = corret + 1;
    }
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !flagShift) {
      letters.forEach(function (element) {
        element.classList.toggle('capslock');
      });
      if(lang === 'rus') {
      keyTilda.innerHTML = '~';
      keyСomma.innerHTML = '<';
      keyPoint.innerHTML = '>';
      keySlash.innerHTML = '?';
      }
      document
      .querySelector(`.button-key[data-id="${event.code}"]`).classList.add('active_button_shift');
      flagShift = true;
      if(flagAlt){
        shiftAlt(event);
      } 
    }
  } else {
    if (flagShift) {
      let letter = '';
      let additionalKey = document.querySelector(
        `.button-key[data-id="${event.keyCode}"] .button-key__spanUp`
      );
      
      if(additionalKey){
        letter = additionalKey;
      }else{
        letter = document.querySelector(
          `.button-key[data-id="${event.keyCode}"] .button-key__span`
        );
      }
      let toUp = letter.innerHTML;
      if (letter.classList.contains('capslock')) {
        toUp = toUp.toUpperCase();
      }   
      corret = textarea.selectionStart;
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        toUp +
        textarea.innerHTML.slice(textarea.selectionStart);
      textarea.selectionStart = corret + 1;
    } else {
      document
        .querySelector(`.button-key[data-id="${event.keyCode}"]`)
        .classList.add('active_button');
      let letter = document.querySelector(
        `.button-key[data-id="${event.keyCode}"] .button-key__span`
      );
      corret = textarea.selectionStart;
      let toUp = letter.innerHTML;
      if (letter.classList.contains('capslock')) {
        toUp = toUp.toUpperCase();
      }
      textarea.innerHTML =
        textarea.innerHTML.slice(0, textarea.selectionStart) +
        toUp +
        textarea.innerHTML.slice(textarea.selectionStart);
      textarea.selectionStart = corret + 1;
    }
  }
}

function shiftAlt(el){
    if (el.code === 'ShiftLeft' || el.code === 'ShiftRight') {
      document
        .querySelector(`.button-key[data-id="${el.code}"]`)
        .classList.add('active_button');
      if (lang === 'rus') {
        lang = 'en';
      } else if (lang === 'en') {
        lang = 'rus';
      }
      window.removeEventListener('keydown', keyDownListener);
      changeLanguage(lang);
    } else {
      window.removeEventListener('keydown', keyDownListener);
    }
    flagAlt = false;
}
window.addEventListener('keydown', keyDownListener);
window.addEventListener('keyup', function (event) {
  document.querySelectorAll('.button-key').forEach(function (el) {
    el.classList.remove('active_button');
  });
  window.addEventListener('keydown', keyDownListener);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    flagShift = false;
    letters.forEach(function (element) {
      element.classList.toggle('capslock');
    });
    if(lang === 'rus') {
      keyTilda.innerHTML = '`';
      keyСomma.innerHTML = ',';
      keyPoint.innerHTML = '.';
      keySlash.innerHTML = '/';
      }
    document
    .querySelector(`.button-key[data-id="${event.code}"]`).classList.remove('active_button_shift');
  }
});

textarea.addEventListener('focus', function () {
  corret = textarea.selectionStart;
});
textarea.addEventListener(
  'blur',
  function (event) {
    window.addEventListener('keydown', keyDownListener);
    event.preventDefault();
  },
  false
);
//document.querySelector('.button-key__span').style.textTransform  = 'uppercase';
