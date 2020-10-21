const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = expr
    .match(/.{1,10}/g)
    .map((el) =>
      el
        .replace("**********", " ")
        .match(/.{1,2}/g)
        .map((el) => el.replace("10", ".").replace("11", "-").replace("00", ""))
    )
    .map((el) => el.filter((el) => el !== ""))
    .map((el) => el.join(""));

  return arr
    .map(function (el) {
      for (let letter in MORSE_TABLE) {
        if (el === letter) {
          return (el = MORSE_TABLE[letter]);
        } else if (el === " ") {
          return (el = " ");
        }
      }
    })
    .join("");
}

module.exports = {
  decode,
};
