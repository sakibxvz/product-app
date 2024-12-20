// src/components/ProductDetails.tsx
import React from 'react';
import { Variant, Size } from '../data/product';
import ProductRating from './ProductRating';
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';

interface ProductDetailsProps {
    productPrice: number;
    productName: string;
    productDescription: string;
    selectedColor: string;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    variants: Variant[];
    sizes: Size[];
    addToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    productPrice,
    productName,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    quantity,
    setQuantity,
    variants,
    sizes,
    addToCart,
}) => {
    const selectedSizeObj = sizes.find((size) => size.name === selectedSize);

    return (
        <div id="productDetails" className="flex flex-col w-full  lg:w-auto lg:py-[90px] justify-between">
            <h1 className="text-[28px] lg:text-[40px] font-bold text-[#364A63] leading-tight lg:leading-[44px] tracking-[-1.2px] py-[12px] ">{productName}</h1>



            {/* Product Rating  */}
            <ProductRating />



            <div className="flex items-center gap-[5px] pt-[20px]">
                <span
                    className="text-[#8091A7] text-[16px] lg:text-[20px] font-normal leading-[30px] text-left line-through"
                >
                    $99.00
                </span>
                <span
                    id="currentPrice"
                    className="text-[#6576FF] text-xl lg:text-2xl font-bold leading-8"
                >
                    ${(selectedSizeObj?.price || productPrice) ?? 69.00}.00
                </span>
            </div>

            <p
                className="text-[#8091A7] text-base lg:text-[18px] font-normal leading-[1.6] lg:leading-[30px] text-left max-w-[626px] pt-[20px] pr-[4px] gap-2"
            >
                I must explain to you how all this mistaken idea of denouncing ple
                praising pain was born and I will give you a complete account of the
                system, and expound the actual teaching.
            </p>


            <div className="grid gap-4 lg:gap-0">
                <div className="flex gap-[43px] pt-[20px] pr-[4px] flex-wrap">
                    <div className="flex flex-col">
                        <span className="text-[#8091A7] text-sm font-normal leading-[23.1px]"
                        >Type</span
                        >
                        <p className="text-[#364A63] text-base font-bold">Watch</p>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#8091A7] text-sm font-normal leading-[23.1px]"
                        >Model Number</span
                        >
                        <p className="text-[#364A63] text-base font-bold">Forerunner 290XT</p>
                    </div>
                </div>

            </div>

            {/* Color Selector */}
            <div className="flex flex-col gap-2.5 pt-[20px]">
                <span className="text-[#364A63] text-lg leading-[20px] font-bold"
                >Band Color</span
                >
                <div className="color-selector flex gap-5 mt-[2px] ml-[2px]">
                    {variants.map((variant) => (
                        <button
                            key={variant.color}
                            data-color={variant.color}
                            className={`w-4 h-4 rounded-full ${variant.class} ${variant.color === selectedColor ? `ring-2 ring-offset-2 ring-[${variant.color}]` : ''}`}
                            onClick={() => setSelectedColor(variant.color)}
                        ></button>
                    ))}
                </div>
            </div>



            {/* Size Selector */}
            <div className="flex flex-col gap-2.5 pt-[20px]">
                <span className="text-[#364A63] text-lg leading-[20px] font-bold">Wrist Size</span>
                <div className="flex gap-3 flex-wrap" id="sizeSelector">
                    {sizes.map((size) => (
                        <button
                            key={size.name}
                            data-size={size.name}
                            className={`w-[73px] h-[36px] rounded border ${size.name === selectedSize ? 'border-[#6576FF] bg-[#6366F1]/5' : 'border-[#E5E7EB]'}`}
                            onClick={() => setSelectedSize(size.name)}
                        >
                            <span className={`text-sm font-bold ${size.name === selectedSize ? 'text-[#6576FF]' : 'text-[#364A63]'}`}>{size.name} </span>
                            <span className="text-xs text-[#6B7280]">${size.price}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Control */}

            <div className="flex items-center gap-3 pt-[20px] flex-wrap">
                <div className="flex items-center border border-[#DBDFEA] rounded h-[36px]">
                    <button
                        id="decreaseQuantity"
                        className="w-[35px] h-[36px] px-2 py-[3px] gap-[10px] border border-[#DBDFEA] flex items-center justify-center hover:bg-gray-50"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                        <FiMinus className="text-[#8091A7] text-xs" />
                    </button>
                    <span
                        id="quantity"
                        className="w-[60px] h-[36px] px-[26px] py-[5px] gap-[10px] border border-[#DBDFEA] text-center text-[#2A323C]"
                    >
                        {quantity}
                    </span>
                    <button
                        id="increaseQuantity"
                        className="w-[35px] h-[36px] px-2 py-[3px] gap-[10px] border border-[#DBDFEA] flex items-center justify-center hover:bg-gray-50"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        <FiPlus className="text-[#6B7280] text-xs" />
                    </button>
                </div>

                {/* add to cart  */}
                <button
                    id="addToCart"
                    className="h-[36px] w-[105px] bg-[#6366F1] hover:bg-[#6366F1]/90 text-white rounded text-sm font-bold"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>

                <button className="h-[19px] w-[16px] flex items-center justify-center">
                    <FiHeart className="text-[#6576FF]" />
                </button>
            </div>

        </div>
    );
};

export default ProductDetails;
