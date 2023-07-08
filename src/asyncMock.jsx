const prod = [
    { 
        id:1,
        name: "Iphone 12",
        price: 1000, 
        category: "celular",
        stock: 5,
        img: "https://adminapi.applegadgetsbd.com/storage/media/large/1533-48820.jpg",
        description: "Descripcion de Iphone 12"
    },
    {
        id:2,
        name: "Samsung Galaxy S20",
        price: 8000,
        category: "tablet",
        stock: 10,
        img: "https://d500.epimg.net/cincodias/imagenes/2020/02/11/smartphones/1581422749_169001_1581448788_sumario_normal.jpg",
        description: "Descripcion de Samsung Galaxy S20"
    },
    {
        id:3,
        name: "Motorola G9",
        price: 7000,
        category: "notebook",
        stock: 15,
        img: "https://i.blogs.es/befed4/moto-g9-03/450_1000.jpg",
        description: "Descripcion de Motorola G9"
    }
]

export const getProducts =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod.find(prod => prod.id === parseInt(productId)));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod.filter(prod => prod.category === category))
        }, 500)
    })
}