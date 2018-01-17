const bestSellers = {
    title: 'Award Winners',
    products: [
        {   
            id: Math.random().toString(36).substring(7),
            name: 'ALTO',
            description: 'Rouge Red Blend 2015',
            award: 3,
            price: 85,
            sixPackPrice: 510,
            oneFive: false,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/alto-rouge-2012-copy_be0ca5fa-323c-41d1-9f4c-8fa1764ee45f_1024x1024-e1516013331973.png',
            newProduct: false
        },
        {   
            id: Math.random().toString(36).substring(7),
            name: 'ALTO',
            description: 'Shiraz 2015',
            award: 2,
            price: 199,
            sixPackPrice: 1194,
            oneFive: false,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/alto-rouge-2012-copy_be0ca5fa-323c-41d1-9f4c-8fa1764ee45f_1024x1024-e1516013331973.png',
            newProduct: true
        },
        {   
            id: Math.random().toString(36).substring(7),
            name: 'DURBANVILLE HILLS',
            description: 'The Tangram White Blend 2016',
            award: 1,
            price: 375,
            sixPackPrice: 2250,
            oneFive: true,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/durbaville-hills-the-tangram-white-blend-2016-nv-new_1024x1024-e1516018574943.png',
            newProduct: true
        },
        {   
            id: Math.random().toString(36).substring(7),
            name: 'NEDERBERG',
            description: 'The Brew Master Bordeaux Blend 2015',
            award: 1,
            price: 170,
            sixPackPrice: 1020,
            oneFive: false,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/nederburg-hh-brew-master-bordeaux-2015-nv-new_903c46b1-8c74-4254-8516-e5836e26f314_1024x1024-e1516018564917.png',
            newProduct: false
        },
        {   
            id: Math.random().toString(36).substring(7),
            name: 'ALTO',
            description: 'Rouge Red Blend 2015',
            award: 3,
            price: 85,
            sixPackPrice: 510,
            size: 750,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/alto-rouge-2012-copy_be0ca5fa-323c-41d1-9f4c-8fa1764ee45f_1024x1024-e1516013331973.png',
            newProduct: false
        },
        {   
            id: Math.random().toString(36).substring(7),
            name: 'ALTO',
            description: 'Shiraz 2015',
            award: 2,
            price: 199,
            sixPackPrice: 1194,
            size: 750,
            imgUrl: 'https://itmates.co.za/wp-content/uploads/2018/01/alto-rouge-2012-copy_be0ca5fa-323c-41d1-9f4c-8fa1764ee45f_1024x1024-e1516013331973.png',
            newProduct: true
        },
    ]
}

export default bestSellers;