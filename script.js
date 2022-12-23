let cardnum = prompt('Karta raqamini kiriting');
function getCardNumber(cardNumber){
    let cardNum = cardNumber.split(' ').join(' ');
    if(cardNum.length === 16){
        console.log(cardNum.slice(0,5) + ' **** ' + '**** ' + cardNum.slice(12));
    }else if(isNaN(cardNum)){
        console.log('Karta xato kiritilgan')
    }else if(isNaN(cardNum)){
        console.log('Karta xato kiritilgan')
    }else if(isNaN(cardNum)){
        console.log('bu uzkard')
    }else {
        console.log('Krata raqami faqat 16 ta sondan iborat. Qayta urunib kuring')
    }
}


getCardNumber('8600123456789101') //8600 **** **** 9101
getCardNumber('86001234567891012') // karta xato kiritildi
getCardNumber('860012345678910a') // karta xato kiritildi
getCardNumber('8600123456789101') // 8600 **** **** 9101, bu uzkard
getCardNumber('9860123456789101') // 9680 **** **** 9101, bu humo
getCardNumber('1233123456789101') // 1233 **** **** 9101




let cardnum1 = prompt('Karta raqamini kiriting');

if(cardnum.length==16 ){
    console.log( cardnum = cardnum.substring(0, cardnum.length - 8) + "****" )}
else if( isNaN(cardnum) || cardnum.length<16  ){
    console.log("Karta raqami noto'gri")}
else if( cardnum.startsWith('9600'))
    {console.log('Khumo'+cardnum);}
else if( cardnum.startsWith('8600'))
    {console.log('Uzcard'+cardnum)}
else {
            console.log('Krata raqami faqat 16 ta sondan iborat. Qayta urunib kuring')
    }
