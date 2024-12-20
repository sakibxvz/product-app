export interface Variant {
	color: string;
	class: string;
	image: string;
	rating?: number;
	price: number;
}

export interface Size {
	name: string;
	price: number;
}

export const variants: Variant[] = [
	{
		color: 'purple',
		class: 'bg-[#6366F1]',
		image: 'images/purple.jpg',
		rating: 4,
		price: 5, // base price for purple (S size)
	},
	{
		color: 'cyan',
		class: 'bg-[#22D3EE]',
		image: 'images/cyan.jpg',
		rating: 3,
		price: 5, // base price for cyan (S size)
	},
	{
		color: 'blue',
		class: 'bg-[#3B82F6]',
		image: 'images/Blue.jpg',
		rating: 5,
		price: 5, // base price for blue (S size)
	},
	{
		color: 'black',
		class: 'bg-[#000000]',
		image: 'images/Blackv2.jpg',
		rating: 3,
		price: 5, // base price for black (S size)
	},
];

export const sizes: Size[] = [
	{
		name: 'S',
		price: 10, // no additional cost for S size
	},
	{
		name: 'M',
		price: 15, // additional cost for M size
	},
	{
		name: 'L',
		price: 25, // additional cost for L size
	},
	{
		name: 'XL',
		price: 30, // additional cost for XL size
	},
];

export const productName = 'Classy Modern Smart watch';

export const productDescription = 'A modern smartwatch with great features.';

export const calculatePrice = (
	variantColor: string,
	sizeName: string
): number => {
	const variant = variants.find((v) => v.color === variantColor);
	const size = sizes.find((s) => s.name === sizeName);

	if (!variant || !size) {
		throw new Error('Invalid variant color or size name');
	}

	return variant.price + size.price;
};
