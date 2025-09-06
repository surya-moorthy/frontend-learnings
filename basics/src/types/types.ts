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

export type Id = string | number;

export type column = {
    id : Id,
    title : string
}