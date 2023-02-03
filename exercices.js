class Parser{
    constructor(delimiter){
        this.delimiter = delimiter;
    }

    isNumber(str)
    {
        return !isNaN(str)
    }

    parse(string)
    {
        this.str=string.split(this.delimiter).map((elem) => elem.trim()).filter(elem => this.isNumber(elem)).join(" ");
        return this;
    }
    
}

const phrase = "8790: bonjour le monde:8987:7777:Hello World:    9007";

const p = new Parser(":");
p.parse(phrase);
console.log("exo1: \n", p.str);

/***************************************** */

const values = [{value: 2}, {value: 3}, {value: 5}]

const max = values.reduce((acc, {value}) => value > acc ? value : acc, 0);

console.log("exo2: \n", max);

/***************************************** */

const data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0
];

const results = data.reduce((acc, nb) => (acc[nb] = 1+acc[nb] || 1, acc),{});
console.log("ex03 \n", results);


/**************************************** */

const charRot = (letter) => {
    return letter.charCodeAt(letter);
}

const cesear = (shift, string) => {
    //shift%26 (au cas où le nombre soit inférieur à -52 le modulo permet de garder un résultat entre 0 et 26)
    shift_number = shift > 0 ? shift : 26 + (shift%26);
    
    return [...string].map((character) => {
      const code = charRot(character);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift_number) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift_number) % 26) + 97);
      }
      return String.fromCharCode(code);
    })
    .join("");
}

console.log("exo4 \n", cesear(1, "Hello World"));
