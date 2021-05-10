import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Payam',
            email:'admin@payam.com',
            password: bcrypt.hashSync("1234",8),
            isAdmin:true,
        },
        {
            name:'Alex',
            email:'alex@example.com',
            password: bcrypt.hashSync("1234",8),
            isAdmin:false,
        }
    ],
    products:[
        {
            name:'Magners',
            category:'Fruits',
            image:'/images/p1.jpg',
            price: 1.20,
            countInStock:10,
            brand: 'Spain',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            expDate:"2021-05-20"
        },
        {
            name:'Apple',
            category:'Fruits',
            image:'/images/p2.jpg',
            price: 1.00,
            countInStock:15,
            brand: 'Spain',
            rating: 4.0,
            numReviews: 10,
            description: 'High quality product',
            expDate:"2021-06-20"
        },
        {
            name:'Large Oranges',
            category:'Fruits',
            image:'/images/p3.jpg',
            price: 1.00,
            countInStock:0,
            brand: 'Spain',
            rating: 4.8,
            numReviews: 17,
            description: 'High quality product',
            expDate:"2021-06-20"
        },
        {
            name:'Strawberries',
            category:'Fruits',
            image:'/images/p4.jpg',
            price: 0.50,
            countInStock:20,
            brand: 'Spain',
            rating: 4.5,
            numReviews: 14,
            description: 'High quality product',
            expDate:"2021-06-20"
        },
        {
            name:'Banana',
            category:'Fruits',
            image:'/images/p5.jpg',
            price: 0.80,
            countInStock:6,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            expDate:"2021-06-20"
        },
        {
            name:'Canteloupe Melon',
            category:'Fruits',
            image:'/images/p6.jpg',
            price: 1.39,
            countInStock:13,
            brand: 'Spain',
            rating: 4.5,
            numReviews: 15,
            description: 'High quality product',
            expDate:"2021-06-20"
        },
    ]
}

export default data;