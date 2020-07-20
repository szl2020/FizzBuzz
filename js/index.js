const contain3Reg = /3/;
const contain5Reg =/5/;
const contain7Reg = /7/;

const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const WHIZZ = 'Whizz';

const zhengChu = (num,index) => num % index === 0;

var result = '';

//声明一个对象
const a7Rule = {
    isMatch:num=>contain7Reg.test(num),
    logResult:num=>{
        result = '';
        if (zhengChu(num,3)) {
            result += FIZZ;
        }
        if (zhengChu(num,7)) {
            result += WHIZZ;
        }
        return  result;
    }
}
const a5Rule = {
    isMatch:num=>contain5Reg.test(num),
    logResult:num=>{
        result = '';
        if (zhengChu(num,5)) {
            result += BUZZ;
        }

        if (zhengChu(num,7)) {
            result += WHIZZ;
        }
        return  result;
    }
}
const a3Rule = {
    isMatch:num=>contain3Reg.test(num),
    logResult:num=>{
        result = '';
        result = FIZZ;
        return result;
    }
}

const defalutRule = {
    isMatch:num=>{
       return true;
    },//不满足前三种情况
    logResult:num=>{
        result = '';

        if ((zhengChu(num,3) && zhengChu(num,5) && zhengChu(num,7) )=== false){
            result = num;

        }
        if (zhengChu(num,3)) {
            result += FIZZ;
        }
        if (zhengChu(num,5)) {
            result += BUZZ;
        }
        if (zhengChu(num,7)) {
            result += WHIZZ;
        }
    return result;
    }
}

//对于用的比较多的字符串声明常量
//用的多的地方包装成方法
//整除3且整除5切整除7可以写成 整除3的话加等于Fizz
//整合成两种情况 扔到一个对象中 用数组find方法找到第一个满足情况的值，

   export  default function FizzBuzz(num) {
    return ( [a7Rule,a5Rule,a3Rule,defalutRule].find(ele=>ele.isMatch(num)).logResult(num))





}
FizzBuzz(1);
