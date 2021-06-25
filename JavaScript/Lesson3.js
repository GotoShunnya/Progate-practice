const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) =>{
  let max = a;
  
  if(max < b){
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

// 「最大値は○○です」と出力してください
const max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);
