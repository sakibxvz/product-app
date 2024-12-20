// src/components/FloatingCheckoutButton.tsx
import React from 'react';

interface FloatingCheckoutButtonProps {
    itemCount: number;
    onClick: () => void;
}

const FloatingCheckoutButton: React.FC<FloatingCheckoutButtonProps> = ({ itemCount, onClick }) => {
    return (
        <button
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#FFBB5A] hover:bg-[#FFB732] text-[#2A323C] px-6 py-2 rounded-full shadow-lg hidden lg:flex items-center gap-2 transition-colors"
            onClick={onClick}
        >
            <span className="text-sm font-bold text-[#364A63]">Checkout</span>
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-sm font-medium">{itemCount}</span>
            </div>
        </button>
    );
};

export default FloatingCheckoutButton;
