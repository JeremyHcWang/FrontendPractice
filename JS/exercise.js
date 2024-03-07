// 1.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let name in salaries) {
  sum += salaries[name];
}
console.log(sum);

// 2.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// 3.
function checkEmailId(str) {
  for (let i=0; i<str.length; i++) {
    if (i > 0 && str[i] === '@') {
      for (let j=i; j<str.length; j++) {
        if (j > i+1 && str[j] === '.') {
          return true
        }
      }
    }
  }

  return false;
}

console.log(checkEmailId('hello@email.com'))
console.log(checkEmailId('helloemail.com'))
console.log(checkEmailId('hello.@emailcom'))
console.log(checkEmailId('@email.com'))
console.log(checkEmailId('hello@.com'))

// 4.
function truncate(str, maxlength) {
  if (str.length > maxlength) return str.substring(0, maxlength) + '...';
  else return str;
}

console.log(truncate("Hi everyone!", 20))
console.log(truncate("What I\'d like to tell on this topic is:", 20))

// 5.
const styles = ['james', 'Brennie']
console.log(styles);

styles.push('Robert');
console.log(styles);

styles[Math.floor(styles.length/2)] = 'Calvin'
console.log(styles);

console.log(styles.shift())
console.log(styles);

styles.unshift('Rose', 'Regal')
console.log(styles);