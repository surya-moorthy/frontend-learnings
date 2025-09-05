export type Product = {
    name : string,
    image : string,
    price : string,
    description : string,
}

export type cartProductType = {
    product : Product,
    items   : number
}