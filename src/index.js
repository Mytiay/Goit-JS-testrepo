{/* <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно> </выражение_если_условие_ложно> */}

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"