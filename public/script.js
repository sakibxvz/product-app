const variants = [
	{
		color: 'purple',
		class: 'bg-[#6366F1]',
		image: '../src/assets/images/purple.jpg', // Access from the public directory
	},
	{
		color: 'cyan',
		class: 'bg-cyan-400',
		image: '../src/assets/images/cyan.jpg',
	},
	{
		color: 'blue',
		class: 'bg-blue-500',
		image: '../src/assets/images/blue.jpg',
	},
	{
		color: 'black',
		class: 'bg-black',
		image: '../src/assets/images/Blackv2.jpg',
	},
];

const sizes = [
	{ name: 'S', price: 69 },
	{ name: 'M', price: 79 },
	{ name: 'L', price: 89 },
	{ name: 'XL', price: 99 },
];

let selectedColor = 'purple';
let selectedSize = 'S';
let quantity = 1;
let cartItems = [];

function updateProductImage() {
	const productImage = document.getElementById('productImage');
	const variant = variants.find((v) => v.color === selectedColor);
	productImage.src = variant.image;
	productImage.classList.remove('fade-in');
	void productImage.offsetWidth; // Trigger reflow
	productImage.classList.add('fade-in');
}

function updateColorSelection() {
	const buttons = document.querySelectorAll('#colorSelector button');
	buttons.forEach((button) => {
		if (button.dataset.color === selectedColor) {
			button.classList.add('ring-2', 'ring-offset-2', 'ring-[#6366F1]');
		} else {
			button.classList.remove('ring-2', 'ring-offset-2', 'ring-[#6366F1]');
		}
	});
}

function updateSizeSelection() {
	const buttons = document.querySelectorAll('#sizeSelector button');
	buttons.forEach((button) => {
		if (button.dataset.size === selectedSize) {
			button.classList.remove('border-gray-200', 'text-gray-600');
			button.classList.add(
				'border-[#6366F1]',
				'bg-[#6366F1]/5',
				'text-[#6366F1]'
			);
		} else {
			button.classList.add('border-gray-200', 'text-gray-600');
			button.classList.remove(
				'border-[#6366F1]',
				'bg-[#6366F1]/5',
				'text-[#6366F1]'
			);
		}
	});
}

function updatePrice() {
	const currentPrice = document.getElementById('currentPrice');
	const size = sizes.find((s) => s.name === selectedSize);
	currentPrice.textContent = `$${size.price}.00`;
}

function updateQuantity() {
	document.getElementById('quantity').textContent = quantity;
}

function addToCart() {
	const size = sizes.find((s) => s.name === selectedSize);
	const newItem = {
		id: `${selectedColor}-${selectedSize}-${Date.now()}`,
		name: 'Classy Modern Smart watch',
		color: selectedColor,
		size: selectedSize,
		qty: quantity,
		price: size.price,
		image: variants.find((v) => v.color === selectedColor).image,
	};
	cartItems.push(newItem);
	updateCartModal();
	openCartModal();
}

function updateCartModal() {
	const cartItemsContainer = document.getElementById('cartItems');
	cartItemsContainer.innerHTML = '';
	let total = 0;

	cartItems.forEach((item) => {
		const itemTotal = item.price * item.qty;
		total += itemTotal;

		cartItemsContainer.innerHTML += `
         <div class="border-b divide-y">
            <div class="grid grid-cols-[4fr,1fr,1fr,1fr,1fr] pr-[4px] pb-[16px] pt-3 items-center gap-x-2 ">
                <div class="flex items-center gap-2 ">
                    <div class="w-[36px] h-[36px] bg-[#6366F1]/10 rounded-lg overflow-hidden">
                        <img src="${item.image}" alt="${
			item.name
		}" class="object-cover w-full h-full">
                    </div>
                    <span class="text-sm text-[#364A63]">${item.name}</span>
                </div>
                <div class="text-sm capitalize text-right text-[#364A63]">${
									item.color
								}</div>
                <div class="text-sm text-center text-[#364A63] font-bold">${
									item.size
								}</div>
                <div class="text-sm text-center text-[#364A63] font-bold">${
									item.qty
								}</div>
                <div class="text-sm text-right text-[#364A63] font-bold">$${itemTotal.toFixed(
									2
								)}</div>
            </div>
            </div>
        `;
	});

	document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
	document.getElementById('cartTotalItem').textContent = `${cartItems?.length}`;

	// Update item count on floating checkout button
	const floatingCheckoutCount = document.getElementById(
		'floatingCheckoutCount'
	);
	if (floatingCheckoutCount) {
		floatingCheckoutCount.textContent = `${cartItems.length}`;
	}
}

function openCartModal() {
	document.getElementById('cartModal').classList.remove('hidden');
}

function closeCartModal() {
	document.getElementById('cartModal').classList.add('hidden');
}

// Event Listeners
document.getElementById('colorSelector').addEventListener('click', (e) => {
	if (e.target.dataset.color) {
		selectedColor = e.target.dataset.color;
		updateProductImage();
		updateColorSelection();
	}
});

document.getElementById('sizeSelector').addEventListener('click', (e) => {
	if (e.target.closest('button') && e.target.closest('button').dataset.size) {
		selectedSize = e.target.closest('button').dataset.size;
		updateSizeSelection();
		updatePrice();
	}
});

document.getElementById('decreaseQuantity').addEventListener('click', () => {
	if (quantity > 1) {
		quantity--;
		updateQuantity();
	}
});

document.getElementById('increaseQuantity').addEventListener('click', () => {
	quantity++;
	updateQuantity();
});

document.getElementById('addToCart').addEventListener('click', addToCart);

document
	.getElementById('continueShopping')
	.addEventListener('click', closeCartModal);

document.getElementById('checkout').addEventListener('click', () => {
	alert('Checkout functionality not implemented in this demo.');
});

document
	.getElementById('floatingCheckout')
	.addEventListener('click', openCartModal);

// Initialize
updateProductImage();
updateColorSelection();
updateSizeSelection();
updatePrice();
updateQuantity();
