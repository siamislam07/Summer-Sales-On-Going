document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applybtn = document.getElementById('btn-coupon');
    if(text === 'SELL200'){
        applybtn.removeAttribute('disabled')
    }else{
        applybtn.setAttribute('disabled', true);
    }
})

function handleClickBtn(target){
    const addToCartContainer = document.getElementById('addToCart')
    const itemName = target.childNodes[2].nextSibling.innerText;
    const li = document.createElement("li")
    li.innerText = itemName
    addToCartContainer.appendChild(li)
} 
