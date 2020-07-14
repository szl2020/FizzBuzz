const reg3 = RegExp(/3/);
const reg5 = RegExp(/5/);
const reg7 = RegExp(/7/);

export default function FizzBuzz(num) {
  if (reg7.test(num)) {
    if (num % 3 === 0 && num % 7 === 0) {
      num = 'FizzWhizz';
    }
    if (num % 3 === 0) {
      num = 'Fizz';
    }
    if (num % 7 === 0) {
      num = 'Whizz';
    }
    
  }
  if (reg5.test(num)) {
    if (num % 5 === 0 && num % 7 === 0) {
      num = 'BuzzWhizz';
    }
    if (num % 5 === 0) {
      num = 'Buzz';
    }
    if (num % 7 === 0) {
      num = 'Whizz';
    }
   
  }
  if (reg3.test(num)) {
    num = 'Fizz'
  }
  if (num % 5 === 0 && num % 7 === 0 && num % 3 == 0) {
    num = 'FizzBuzzWhizz';
  }
  if (num % 3 === 0 && num % 7 === 0) {
    num = 'FizzWhizz';
  }
  if (num % 5 === 0 && num % 7 === 0) {
    num = 'BuzzWhizz';
  }
  if (num % 3 === 0 && num % 7 === 0) {
    num = 'FizzWhizz';
  }
 
  if(num % 3 == 0){
    num = 'Fizz'
  }
  if(num % 5 == 0){
    num = 'Buzz'
  }
  if(num % 7 == 0){
    num = 'Whizz'
  }
  return num;
}
