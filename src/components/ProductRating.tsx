import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductRating = () => {
  return (
    <div className="flex items-center gap-2 pr-[4px] pb-[4px]">
      <div className="flex gap-[5px]">
        <FaStar className="text-[#FDB022]" />
        <FaStar className="text-[#FDB022]" />
        <FaStar className="text-[#FDB022]" />
        <FaStarHalfAlt className="text-[#FDB022]" />
        <FaRegStar className="text-[#E5E7EB]" />
      </div>
      <span className="text-sm text-[#8091A7] leading-[23.1px]">(2 Reviews)</span>
    </div>
  );
};

export default ProductRating;