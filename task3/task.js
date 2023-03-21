const products = document.getElementsByClassName('product');

[...products].forEach(product => {
	let quantityControl = product.getElementsByClassName('product__quantity-controls')[0].firstElementChild;
	let quantity = quantityControl.nextElementSibling;
	let incQuantity = quantityControl.nextElementSibling.nextElementSibling;
	quantityControl.onclick = () => {
		let q = Number(quantity.innerText);
		if (q > 1){
			quantity.innerText = q - 1;
		}
	}
	incQuantity.onclick = () => {
		let q = Number(quantity.innerText);
		quantity.innerText = q + 1;
	}
	
	let productAdd = product.getElementsByClassName('product__add')[0];
	
	productAdd.onclick = () => {
		let image = product.getElementsByClassName('product__image')[0].getAttribute('src');
		let id = product.dataset.id;
		let cart = document.getElementsByClassName('cart__products')[0];
		let cartProducts = [...cart.getElementsByClassName('cart__product')];
		
		
		let Total = Number(quantity.innerText);
		let Exists = cartProducts.find(item => item.dataset.id == product.dataset.id);
		if (Exists != undefined){
			Exists.lastElementChild.innerText = Total + Number(Exists.lastElementChild.innerText);
			return true;
		}
		
		let template = `
			<div class="cart__product" data-id="${id}">
			    <img class="cart__product-image" src="${image}">
			    <div class="cart__product-count">${Total}</div>
			</div>		
		`;
			    
		cart.insertAdjacentHTML('beforeend', template);
	}
})