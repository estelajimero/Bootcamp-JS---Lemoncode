let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'  ñ";  
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm  ñ";

let encryptButton = document.getElementById("encrypt");
let decryptButton = document.getElementById("decrypt");

function encrypt (text) {
    let encryptedResult = "";
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < plainAlphabet.length; j++) {
            if (text[i] === plainAlphabet[j]) {
                encryptedResult += encryptedAlphabet[j];

                break;
            }
        }
    }

    return encryptedResult;
}

function decrypt (text) {
    let decryptedResult = "";
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < encryptedAlphabet.length; j++) {
            if (text[i] === encryptedAlphabet[j]) {
                decryptedResult += plainAlphabet[j];

                break;
            }
        }
    }

    return decryptedResult;
}

let getEncryptedText = () => {
    let encryptedText = document.getElementById("encrypt-text").value;

    let textResult = encrypt(encryptedText);

    document.getElementById("decrypt-text").value = textResult;
}

let getDecryptedText = () => {
    let decryptedText = document.getElementById("encrypt-text").value;

    let textResult = decrypt(decryptedText);

    document.getElementById("decrypt-text").value = textResult;
}

encryptButton.addEventListener('click', getEncryptedText);
decryptButton.addEventListener('click', getDecryptedText);