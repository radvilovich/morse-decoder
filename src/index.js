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

function decode(expr) {
    // write your solution here
    const wordsList = [];
    const words = expr.split('**********');
    //console.log(words);
    words.forEach((word) => {
        //console.log(word);
        let wordResult = '';
        for (let i = 0; i < word.length; i += 10) {
            let symbols = '';    
            const letterCode = word.substring(i, i + 10);
            //console.log(letterCode);
            for (let j = 0; j < letterCode.length; j += 2) {
                const pair = letterCode.substring(j, j + 2);
                let symbol = '';
                if (pair === '10'){
                    symbol = '.';
                } else if (pair === '11') {
                    symbol = '-';            
                }
                //console.log(symbol, pair);
                symbols += symbol;
            }
            //console.log(MORSE_TABLE[symbols]);
            wordResult += MORSE_TABLE[symbols];       
        }
        //console.log(wordResult);
        wordsList.push(wordResult);
    });
    return wordsList.join(' ');
}

module.exports = {
    decode
}