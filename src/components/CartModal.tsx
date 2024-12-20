// src/components/CartModal.tsx
import React from 'react';
import { CartItem } from '../App';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div className="bg-white rounded-[20px] max-w-[650px] w-full p-4 lg:p-[44px] max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-[#364A63]">Your Cart</h2>
                <div className="space-y-6">
                    <div className="border-b divide-y">
                        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] lg:grid-cols-[4fr,1fr,1fr,1fr,1fr] pt-[4px] pb-[8px] pr-[4px] text-sm font-medium text-gray-500">
                            <div className="text-left text-[14px] text-[#8091A7] font-normal leading-[23.1px]">
                                Item
                            </div>
                            <div className="text-center text-[14px] leading-[23.1px] font-normal text-[#8091A7]">
                                Color
                            </div>
                            <div className="text-center text-[14px] leading-[23.1px] font-normal text-[#8091A7]">
                                Size
                            </div>
                            <div className="text-center text-[14px] leading-[23.1px] font-normal text-[#8091A7]">
                                Qty
                            </div>
                            <div className="justify-self-end text-right text-[14px] text-[#8091A7] font-normal leading-[23.1px]">
                                Price
                            </div>
                        </div>
                        <div>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => {
                                    const itemTotal = item.price * item.qty; // Calculate the total price for the item
                                    return (
                                        <div key={item.id} className="border-b divide-y">
                                            <div className="grid grid-cols-[4fr,1fr,1fr,1fr,1fr] pr-[4px] pb-[16px] pt-3 items-center gap-x-2">
                                                {/* Image and Name */}
                                                <div className="flex items-center gap-2">
                                                    <div className="w-[36px] h-[36px] bg-[#6366F1]/10 rounded-lg overflow-hidden">
                                                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                                                    </div>
                                                    <span className="text-sm text-[#364A63]">{item.name}</span>
                                                </div>

                                                {/* Color */}
                                                <div className="text-sm capitalize text-right text-[#364A63]">{item.color}</div>

                                                {/* Size */}
                                                <div className="text-sm text-center text-[#364A63] font-bold">{item.size}</div>

                                                {/* Quantity */}
                                                <div className="text-sm text-center text-[#364A63] font-bold">{item.qty}</div>

                                                {/* Price */}
                                                <div className="text-sm text-right text-[#364A63] font-bold">${itemTotal.toFixed(2)}</div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-center text-gray-600">Your cart is empty.</div>
                            )}
                        </div>

                    </div>

                    <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] lg:grid-cols-[4fr,1fr,1fr,1fr,1fr] pt-[4px] pb-[8px] pr-[4px] text-sm font-medium text-gray-500">
                        <div className="text-left text-[16px] font-extrabold leading-[22px] tracking-[-0.2px] text-[#373737]">
                            Total
                        </div>
                        <div></div>
                        <div></div>
                        <div className="text-center">
                            <span className="text-[14px] font-extrabold leading-[22px] tracking-[-0.2px] text-[#364A63]">
                                {cartItems.length}
                            </span>
                        </div>
                        <div className="text-right text-[18px] font-extrabold tracking-[-0.2px] text-[#364A63]">
                            ${total.toFixed(2)}
                        </div>
                    </div>

                    <div className="flex gap-3 lg:gap-6 justify-end flex-wrap">
                        <button
                            onClick={onClose}
                            className="border border-gray-200 py-2 px-[18px] rounded"
                        >
                            <p className="text-[#364A63] font-bold text-sm">Continue Shopping</p>
                        </button>
                        <button
                            onClick={() => alert('Checkout functionality not implemented in this demo.')}
                            className="bg-[#6576FF] hover:bg-[#6576FF]/90 text-white py-2 px-[18px] rounded"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
