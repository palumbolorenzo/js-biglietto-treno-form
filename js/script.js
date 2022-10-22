/*const distance = prompt('Quanti km vuoi percorrere?');
const age = parseInt(prompt('Qual è la tua età?'));
const price = (distance * 0.21);
console.log('il prezzo è:', price);
if (age < 18) {
    scontoUnder = (price * (20 / 100));
    console.log('lo sconto è:', scontoUnder);
}
if (age > 65) {
    scontoOver = (price * (40 / 100));
    console.log('lo sconto è:', scontoOver);
}
*/

const eleAge = document.querySelector('#age');
const eleName = document.querySelector('#name');
const eleKm = document.querySelector('#distance');
const eleConfirm = document.querySelector('.confirm');
const eleDelete = document.querySelector('.delete');

eleConfirm.addEventListener('click', function () {
    const km = parseFloat(eleKm.value);
    const basePrice = parseFloat(km * 0.21);
    const age = eleAge.value;
    let sconto = 0;

    if (age == 'minorenne') {
        sconto = 20;
        console.log('lo sconto è:', sconto)
    } else if (age == 'over') {
        sconto = 40;
        console.log('lo sconto è:', sconto)
    }

    if (eleName.value == '' || eleKm.value == '' || eleAge.value == 'none') {
        eleBoxTicket.innerHTML = ('inserisci dati');
        } else {
            let totalPrice = basePrice * sconto / 100;
            totalPrice = parseFloat(totalPrice.toFixed(2));
            console.log('il prezzo del biglietto è:', totalPrice);
    } 
});