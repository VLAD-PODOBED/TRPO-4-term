class Product{
    number:number;
    size:number;
    color:string;
    price:any;
}
let shoes = new Product();
shoes.number = 12;
shoes.size = 12;
shoes.color= "red";
shoes.price= "45";
console.log(`number:${shoes.number}`); 