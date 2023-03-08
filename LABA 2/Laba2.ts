//1
let products={
    shoes:{
        boots:{
            id:1,
            size: 42,
            color:"brown",
            cost:150
        },
        sneakers:{
            id:2,
            size:45,
            color:"red",
            cost:200
        },
        sandals:{
            id:3,
            size:48,
            color:"dark",
            cost:202
        }
    }
}
//2
function Iterator(array:number[]|string[]){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
  }
//3
  let costs:number[]=[products.shoes.boots.cost,products.shoes.sneakers.cost,products.shoes.sandals.cost]
  let sizes:number[]=[products.shoes.boots.size,products.shoes.sneakers.size,products.shoes.sandals.size]
  let colors:string[]=[products.shoes.boots.color,products.shoes.sneakers.color,products.shoes.sandals.color]
  let strTemp = prompt("1-фильтр обуви по цене\n2-фильтр обуви по размеру\n3-фильтр обуви по цвету\n4-выход")
  let choice:number = 0;
  if(strTemp){
    choice=parseInt(strTemp);
  }
  switch(choice){
    case 1:{

        strTemp = prompt("Начальный диапазон");
        let choice1:number = 0;
        if(strTemp){
            choice1 = parseInt(strTemp);
        }

        let choice2:number = 0;
        strTemp = prompt("Конечный диапазон")
        if(strTemp){
            choice2 = parseInt(strTemp);
        } 

        var it:any = Iterator(costs);

        for(let i:number = 0 ; i < costs.length ; i++){
            let vr = it.next().value
            if(vr){
                if(vr >= choice1 && vr <= choice2){
                    if(vr == products.shoes.boots.cost){
                        alert(`Номер товара:${products.shoes.boots.id}`)
                    }
                    else if(vr == products.shoes.sneakers.cost){
                        alert(`Номер товара:${products.shoes.sneakers.id}`)
                    }
                    else{
                        alert(`Номер товара:${products.shoes.sandals.id}`)
                    }
                }
            }
            
          }
          break
      }
      case 2:
        {
            strTemp = prompt("Начальный диапазон");
            let choice1:number = 0;
            if(strTemp){
                choice1 = parseInt(strTemp);
            }

            let choice2:number = 0;
            strTemp = prompt("Конечный диапазон")
            if(strTemp){
                choice2 = parseInt(strTemp);
            }

          var it:any = Iterator(sizes);
          for(let i = 0; i < sizes.length ; i++){
             let vr = it.next().value
            if(vr >= choice1 && vr <= choice2){
             if(vr == products.shoes.boots.size){
                 alert(`Номер товара:${products.shoes.boots.id}`)
             }
             else if(vr === products.shoes.sneakers.size){
                 alert(`Номер товара:${products.shoes.sneakers.id}`)
             }
             else{
                 alert(`Номер товара:${products.shoes.sandals.id}`)
             }
          }
         }
         break
      }
      case 3:
      {
        let choice1:number = 0;
        strTemp = prompt("Какой цвет обуви вам нужен?")
        if(strTemp){
            choice1 = parseInt(strTemp)
        }
        var it:any = Iterator(colors)   
        for(let i=0; i < colors.length; i++){
            let vr = it.next().value
            if(vr == choice1 && vr == products.shoes.boots.color){
                alert(`Номер товара:${products.shoes.boots.id}`)
            }
            else if(vr === products.shoes.sneakers.color){
                alert(`Номер товара:${products.shoes.sneakers.id}`)
            }
            else if(vr == choice1 && vr == products.shoes.sandals.color){
                alert(`Номер товара:${products.shoes.sandals.id}`)
            }
        }
        break
      }
  }
  
//4
  class Product{
    public id : number;
    readonly color : string;
    readonly size : number;
    readonly cost : number;
    public descount : number; //5
    public _total_cost : number; //5
    public get total_cost(): number {//5
        return this._total_cost;
    }
  
    public set total_cost(n: number) {//5
         this._total_cost = this.cost-this.descount;
    }
    constructor(id:number,color:string,size:number,cost:number,descount:number){
        this.id=id
        this.color=color
        this.size=size
        this.cost=cost
        this.descount=descount
        this.total_cost = descount
        this._total_cost = this.total_cost;
    }
  }
let prod =new Product(1,"black",43,100,30)
Object.defineProperty(prod, "id",{
    writable: false,
    configurable:true
  });

prod.id = 2

//delete prod.id;

alert(prod.id)
alert(prod.total_cost)