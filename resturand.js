const childAge = 10;
const oldMan = 40;
const isIdcard = true;
const isCoupon = true;
const money = 500;
if(childAge <= 12){
    console.log("Free Food")
} else if(oldMan >= 60 && isIdcard == true){
    const discound = money * 50/100
    const pay = money - discound;
    console.log(pay);
}else if(isCoupon == true){
    const discound = money * 25/100
    const pay = money - discound;
    console.log(pay);
}else{
    console.log("pay amount")
}