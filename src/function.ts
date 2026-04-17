function makeChai(type:string, cups :number){
    console.log(`making ${cups} cup of ${type}`);
}


makeChai("Masala",2)

function getChaiPrice():number{
    return 25;
}


function makeOrder(order:string)
{
    if(!order)
        return null

    return order
}


function logCHai(): void{
    console.log("chai is ready")
}


function orderCHai(type:string ="masala" )
{
}// this is the default value

function createChai(order:{
    type:string;
    sugar:number;
    size:"sugar"|"large"
}):number{
    return 4;
}

// tuples 
const chaiItem:[string, number]= ["masala", 25]
const chaiItems:[name:string, price: number]= ["masala", 25]

//enum 

enum CupSzie{
    SMALL,MEDIUM,
    LARGE
}
const size= CupSzie.LARGE;

enum  Status{
    PENDING=100,
    SERVED,// 101
    CANCELLED//102
}