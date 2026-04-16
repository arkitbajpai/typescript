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

// class MasalaChai implements TeaRecipe{
//  water= 100;
//  milk =50;
// }

interface Cupsize{
    size :"small"| "large"
}
// we use interface with the classes 
class Chai implements Cupsize{
    size: "small" | "large"="large";
}

/// this is the union   examples of types
// this is called the litteral types
type TeaType ="masala" |"ginger" |"lemon";

function orderChai(t:TeaType){
    console.log(t);
}
/// this is the inteserction we can aslo give the optional values

type BaseChai= {teaLeaves:number}

type Extra = {masala:number}

type MasalaChai= BaseChai & Extra

const cup: MasalaChai={
    teaLeaves:2,
    masala:2
}
type Config={
    readonly appName :string,
    version: number
}

const cfg: Config={
    appName :"arkit",
    version:2
}

// cig.appName="CHaicodde" ---- we cannot do that as the value is readonly 