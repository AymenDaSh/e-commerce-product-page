export const products = [{
  name: "Fall Limited Edition Sneakers",
  company: "SNEAKER COMPANY",
  description: "These low-profile sneakers are your perfect casual wear compaion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125.00,
  discount: true,
  images: [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg"
  ]
},
//second fake product just for practice 
{
  name: "testsets  testtets",
  company: "testestsets",
  description: "teststetsteststs our perfect casual wear compaion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 234.00,
  discount: false,
  images: [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg"
  ]
}];


export function roundPrice(price){
  return price.toFixed(2);
}