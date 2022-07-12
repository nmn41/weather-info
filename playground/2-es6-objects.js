//Object property shorthand
const name ='Naman'
const userAge=20
const user ={
    name,
    age:userAge,
    location:'Philadephia'

}
console.log(user)

//Object destruction
const product ={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice :undefined,
    rating:4.2
}
// const label=product.label
// const stock=product.stock
// const{label:productlabel,stock,rating=5}=product
// console.log(productlabel)
// console.log(stock)
// console.log(rating )
const transaction =(type,{label,stock =0}={})=>{
    console.log(type,label,stock)
}
transaction('order',product)
