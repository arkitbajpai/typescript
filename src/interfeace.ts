type ChaiOrder={
    type:string; 
    sugar:number ; 
    strong:boolean
}
function makechai(order:ChaiOrder){
    console.log(order);
}

function serverChai(order:{
    type:string; sugar:number ; strong:boolean
}){
    console.log(order)
}

type TeaRecipe={
    water:number;
    milk: number;
}

class MasalaChai implements TeaRecipe{
 water= 100;
 milk =50;
}

interface Cupsize{
    size :"small"| "large"
}
// we use interface with the classes 
class Chai implements Cupsize{
    size: "small" | "large"="large";
}

