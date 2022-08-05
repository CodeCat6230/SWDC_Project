let i = 0;
let j = 0;

let dog={
  name: "뽀삐",
  color_: "갈색",
  kind_: "푸들",
  age: 5
};

let repeat_w = 10;
while (repeat_w > 0) {
    i++;
    console.log('i', i);
    repeat_w--;
  }

  console.log("--------");

for(repeat_f = 0; repeat_f < 10; repeat_f++){
    j++;
    console.log("j", j);
}

for (let key in dog){
  console.log(`${key}: ${dog[key]}`)
}


let numbers = [25, 113, 829, 12, 24, 9, 5, 3, 29];
for(let number of numbers){
  console.log(number);
}