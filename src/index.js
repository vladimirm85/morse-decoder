const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const LETTER_LENGTH = 10;

const DASH_DOT_LENGTH = 2;

const DASH_DOT = {
    10: ".",
    11: "-",
};

const getCharsArray = (str) => {
    const res = [];
    for (let i = 0; i < str.length; i += LETTER_LENGTH) {
        res.push(str.substr(i, LETTER_LENGTH));
    }
    return res;
};

const getMorseCode = (str) => {
    let morseCode = "";
    for (let i = 0; i < str.length; i += DASH_DOT_LENGTH) {
        morseCode += DASH_DOT[str.substr(i, DASH_DOT_LENGTH)];
    }
    return morseCode;
};

const getChar = (str) => {
    const firstOne = str.indexOf("1");
    if (!~firstOne) return " ";
    const morseCode = getMorseCode(str.slice(firstOne));
    return MORSE_TABLE[morseCode];
};

const decode = (expr) =>
  getCharsArray(expr).reduce((acc, el) => (acc += getChar(el)), "");

module.exports = {
    decode
}
