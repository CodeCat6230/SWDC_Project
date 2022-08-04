var var_1 = "Hello_World_";/*동일한 이름으로 다시 선언, 할당할 수 있음 = 리셋 가능. 
                            ex) : var A = 1;
                                    var A = 0;      //리셋
                                    */
const const_1 = "js_programming_is";//동일한 이름으로 다시 선언, 할당할 수 없음. = 리셋 불가능, 불변의 값을 가지게 됨.
let let_1 = 1123;   //동일한 이름으로 다시 선언할 수는 없지만, 같은 변수로 할당할 수는 있음.

//함수선언

function sum(a,b){
    return a+b;
}


const pd = (c,d) => {
    return (c*d);
}

var imsub = (e,f) => {
    return  (e-f);
} 


console.log(sum(3,5))       //8
console.log(pd(7,5))        //35
console.log(imsub(100,90))  //10