import { Product } from "./types/Product";

export const simpleProducts: Product[] = [
    {
        name: "T-shirt",
        slug: 't-shirt',
        image: "./images/userprofile.jpg",
        category: 'Shirt',
        brand: 'nike',
        price: 20000,
        countInStock: 20,
        discription: 'hight quentity',
        rating: 6,
        numberRewiews: 712,

    },
    {
        name: "Adidas shirt",
        slug: 'adidas-shirt',
        image: './images/userprofile.jpg',
        category: 'Shirt',
        brand: 'adidass',
        price: 2000,
        countInStock: 200,
        discription: 'hight quentitys',
        rating: 4,
        numberRewiews: 72,

    },
    {
        name: "Lacoste shirt",
        slug: 'lacoste-shirt',
        image: './images/userprofile.jpg',
        category: 'Pants',
        brand: 'Lacoste',
        price: 2000,
        countInStock: 200,
        discription: 'hight quentitys',
        rating: 4,
        numberRewiews: 72,

    }
]