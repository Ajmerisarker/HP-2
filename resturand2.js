const age =90;
const isIdCard = true;
const isCoupon = true;
let discount = 0;

if(age <= 10){
    discount = 100;
}else if(age >= 60 && isIdCard && isCoupon){
    discount = 75;
}
console.log("discount", discount + "%")