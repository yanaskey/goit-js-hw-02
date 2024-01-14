// 1st version
function checkForSpam(message) {
  let result;
  let normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// 2nd version

// function checkForSpam(message) {
//   let normalizedMessage = message.toLowerCase();

//   let result =
//     normalizedMessage.includes('spam') || normalizedMessage.includes('sale') ? true : false;

//   return result;
// }

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
