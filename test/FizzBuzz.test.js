import FizzBUzz from '../js/index';


// should throw.../return... when... given...

/*
 * given 
 * when
 * then
**/


test('FizzBuzz', () => {
  expect(FizzBUzz(3)).toBe('Fizz');
});

test('FizzBuzz', () => {
  expect(FizzBUzz(5)).toBe('Buzz');
});

test('FizzBuzz', () => {
  expect(FizzBUzz(7)).toBe('Whizz');
});

test('FizzBuzz', () => {
  expect(FizzBUzz(13)).toBe('Fizz');
});

test('FizzBuzz', () => {
  expect(FizzBUzz(35)).toBe('BuzzWhizz');
});

test('FizzBuzz', () => {
  expect(FizzBUzz(75)).toBe('Fizz');
});

test('FizzBuzz',()=>{
  expect(FizzBUzz(105)).toBe('BuzzWhizz')
});

test('FizzBuzz',()=>{
  expect(FizzBUzz(30)).toBe('Fizz')
});
test('1',()=>{
    expect(FizzBUzz(1)).toBe(1)
});
test('1',()=>{
    expect(FizzBUzz(2)).toBe(2)
});