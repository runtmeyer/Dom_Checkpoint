const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const likeBtns = document.querySelectorAll('.like-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');
const totalPrice = document.querySelector('.subtotal span');

let totalPriceValue = 0;

minusBtns.forEach(button =>
    button.addEventListener('click', () =>{
        const text = button.closest('.cart-item')
        const update = text.querySelector('.quantity')
        let number = parseFloat(update.textContent)
        if (number > 1){
            number--;
            update.textContent = number;
            updateTotalPriceValue();
        }
    }));

plusBtns.forEach(button =>
    button.addEventListener('click', () => {
        const text = button.closest('.cart-item')
        const update = text.querySelector('.quantity');
        let number = parseFloat(update.textContent)
        if (number >= 0){
            number++;
            update.textContent = number;
            updateTotalPriceValue();
        }
    }));
    

deleteBtns.forEach(button =>
    button.addEventListener('click', () => {
        const text = button.closest('.cart-item')
        text.remove();
        updateTotalPriceValue();
    }));

likeBtns.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    })});

function updateTotalPriceValue() {
    totalPriceValue = 0;
    const itemQuantity = document.querySelectorAll('.quantity');
    const priceValue = document.querySelectorAll('.price');

    for(let i = 0; i < itemQuantity.length; i++) {
        const quantity = parseFloat(itemQuantity[i].textContent);
        const price = parseFloat(priceValue[i].textContent.split("$")[1]);
        totalPriceValue += quantity * price;
    }

    
    totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`

    
}






    

