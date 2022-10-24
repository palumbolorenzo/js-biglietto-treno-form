

const eleAge = document.querySelector('#age');
const eleName = document.querySelector('#name');
const eleKm = document.querySelector('#distance');
const eleConfirm = document.querySelector('.confirm');
const eleDelete = document.querySelector('.delete');
const eleCosto = document.querySelector('#costo')


const inputName = document.getElementById('name');



eleConfirm.addEventListener('click', function () {
    const km = parseFloat(eleKm.value);
    const basePrice = parseFloat(km * 0.21);
    const age = eleAge.value;
    let sconto = 0;

    if (age == 'minorenne') {
        sconto = 20;
        console.log('lo sconto è:', '€', sconto)
    } else if (age == 'over') {
        sconto = 40;
        console.log('lo sconto è:', '€', sconto)
    } 

    if (eleName.value === '' || eleKm.value === '' || eleAge.value === 'none') {
        eleBoxTicket.innerHTML = ('inserisci dati');
        } else {
            let totalPrice = basePrice - basePrice * sconto / 100;
            totalPrice = parseFloat(totalPrice.toFixed(2));
            eleCosto.innerHTML = ('il prezzo del biglietto è:', '€', totalPrice);
            outputName.innerHTML = inputName.value;
    } 
});
