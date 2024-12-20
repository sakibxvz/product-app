import React, { useState } from 'react';
import { variants, sizes, productName, productDescription } from './data/product';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import CartModal from './components/CartModal';
import FloatingCheckoutButton from './components/FloatingCheckoutButton';

export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  qty: number;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(variants[0].color);
  const [selectedSize, setSelectedSize] = useState(sizes[0].name);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    const newItem: CartItem = {
      id: `${selectedColor}-${selectedSize}-${Date.now()}`,
      name: productName,
      color: selectedColor,
      size: selectedSize,
      qty: quantity,
      price: sizes.find(s => s.name === selectedSize)!.price,
      image: variants.find(v => v.color === selectedColor)!.image,
    };
    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="product-body mx-auto max-w-[1320px] flex flex-col lg:flex-row gap-6 lg:gap-[60px] p-4 lg:p-0">
        <ProductImage
          selectedColor={selectedColor}
          variants={variants}
        />
        <ProductDetails
          productPrice={variants.find(v => v.color === selectedColor)!.price}
          productName={productName}
          productDescription={productDescription}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          variants={variants}
          sizes={sizes}
          addToCart={addToCart}
        />
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
      <FloatingCheckoutButton
        itemCount={cartItems.length}
        onClick={() => setIsCartOpen(true)}
      />
    </div>

  );
};

export default App;