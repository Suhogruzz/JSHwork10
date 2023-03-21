const products = document.getElementsByClassName('product');

for (const product of products){
	//назначаем обработчики на изменение количества данного продукта
	const decQuantity = product.getElementsByClassName('product__quantity-controls')[0].firstElementChild;
	const quantity = decQuantity.nextElementSibling;
	const incQuantity = decQuantity.nextElementSibling.nextElementSibling;
	decQuantity.onclick = () => {
		let q = Number(quantity.innerText);
		if (q > 1){
			quantity.innerText = q - 1;
		}
	}
	incQuantity.onclick = () => {
		let q = Number(quantity.innerText);
		quantity.innerText = q + 1;
	}
	
	const productAdd = product.getElementsByClassName('product__add')[0];
	
	productAdd.onclick = () => {
		const picture = product.getElementsByClassName('product__image')[0].getAttribute('src');
		const id = product.dataset.id;
		const cart = document.getElementsByClassName('cart__products')[0];
		const cartProducts = Array.from(cart.getElementsByClassName('cart__product'));
		
		
		let quantityTotal = Number(quantity.innerText);
		const isExists = cartProducts.find(item => item.dataset.id == product.dataset.id);
		if (isExists != undefined){
			isExists.lastElementChild.innerText = quantityTotal + Number(isExists.lastElementChild.innerText);
			return true;
		}
		
		const html = `
			<div class="cart__product" data-id="${id}">
			    <img class="cart__product-image" src="${picture}">
			    <div class="cart__product-count">${quantityTotal}</div>
			</div>		
		`;
			    
		cart.insertAdjacentHTML('beforeend', html);
	}
}