let a,b,rest;
[a,b] = [10,20];    //a와 b에 각각 10과 20 을 나누어 할당하는것. list 구조를 분해하여 할당한다.

console.log(a);

console.log(b);

[a,b,...rest] = [10,20,30,40,50,60,70,1293875];         //a,b,rest에 각각 10, 20, 나머지를 할당하는 코드.

console.log(rest);