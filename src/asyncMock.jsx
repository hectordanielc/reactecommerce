const prod = [
    { 
        id: 1,
        name: "Iphone 12",
        price: 1000, 
        category: "Celular",
        stock: 5,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45738484846_042021-F.webp",
        description: "Descripcion de Iphone 12"
    },
    {
        id: 2,
        name: "Samsung Galaxy S20",
        price: 8000,
        category: "tablet",
        stock: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45738484846_042021-F.webp",
        description: "Descripcion de Samsung Galaxy S20"
    },
    {
        id: 3,
        name: "Motorola G9",
        price: 7000,
        category: "notebook",
        stock: 15,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45738484846_042021-F.webp",
        description: "Descripcion de Motorola G9"
    },
    { 
        id: 1,
        name: "Iphone 12",
        price: 1000, 
        category: "Celular",
        stock: 5,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_901878-MLA45738484846_042021-F.webp",
        description: "Descripcion de Iphone 12"
    }
]

export const getProducts =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod.find(prod => prod.id === productId))
        }, 2000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(prod.filter(prod => prod.category === category))
        }, 2000)
    })
}