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