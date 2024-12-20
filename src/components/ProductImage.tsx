// src/components/ProductImage.tsx
import React, { useEffect, useRef } from 'react';
import { Variant } from '../data/product';

interface ProductImageProps {
    selectedColor: string;
    variants: Variant[];
}

const ProductImage: React.FC<ProductImageProps> = ({ selectedColor, variants }) => {
    const productImageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const selectedVariant = variants.find((variant) => variant.color === selectedColor);
        console.log(selectedVariant);
        if (selectedVariant && productImageRef.current) {
            productImageRef.current.src = selectedVariant.image;
            productImageRef.current.classList.remove('fade-in');
            void productImageRef.current.offsetWidth; // Trigger reflow
            productImageRef.current.classList.add('fade-in');
        }
    }, [selectedColor, variants]);



    return (
        <div className="relative w-full lg:w-[630px] aspect-square lg:h-[720px]">
            <img
                id="productImage"
                ref={productImageRef}
                src={variants.find((variant) => variant.color === selectedColor)?.image || ''}
                alt="Product"
                className="transition-opacity duration-700 ease-in-out object-cover w-full h-full fade-in rounded"
            />
        </div>
    );
};

export default ProductImage;
