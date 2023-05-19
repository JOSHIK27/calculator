const input_field = document.querySelector("input");
let a, b;
let flag = false;
for (let i = 0; i <= 9; i++) {
  let x = `${i}`;
  let y = "#a";
  const element = document.querySelector(y + x);
  element.addEventListener("click", (e) => {
    input_field.value = input_field.value + e.target.innerText;
    if (!flag) {
      a = input_field.value;
    } else {
      b = input_field.value;
    }
  });
}
const compute = (str = "") => {
  let total = 0;
  str = str.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
  while (str.length) {
    total += parseFloat(str.shift());
  }
  return total;
};
const arr = ["add", "sub", "into", "divide", "dot"];

arr.forEach((x) => {
  const element = document.querySelector(`#${x}`);
  element.addEventListener("click", (e) => {
    input_field.value = input_field.value + e.target.innerText;
  });
});

const ans = document.querySelector("#result");
ans.addEventListener("click", (e) => {
  input_field.value = math.evaluate(input_field.value);
});
