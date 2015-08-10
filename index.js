var Parsimmon = require('Parsimmon');

var opt = Parsimmon.regex(/\+|\-|\*|\//);
var number = Parsimmon.regex(/[0-9]+/).map(parseInt);
var expr = number.or(opt).many();

if (process.argv.length < 3) {
  console.log('error');
  return;
}

var ret = expr.parse(process.argv[2]);
if (!ret.status) {
  console.log(ret);
  return;
}

switch (ret.value[1]) {
  case '+':
    console.log(ret.value[0] + ret.value[2]);
    return;
  case '-':
    console.log(ret.value[0] - ret.value[2]);
    return;
  case '*':
    console.log(ret.value[0] * ret.value[2]);
    return;
  case '/':
    console.log(ret.value[0] / ret.value[2]);
    return;
  default:
    console.log("error");
    return;
}
