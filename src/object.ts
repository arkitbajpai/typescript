const chai ={
    name: "Masala chai",
    price: 20,
    isHot:true
}


let tea:{
    name: string ,
    price:number;
    isHot:boolean
}

tea={
    name:"Ginger tea",
    price:25,
    isHot:true
}

type Tea={
    name: string;
    price :number ;
    ingredients:string[]
}

const adrakCHai:Tea={
    name:"Adrak Chai",
    price:25,
    ingredients:["ginger", "ellachi"]
}

type Cup ={size:string};
let smallCup: Cup={size:"200ml"}

let bigCup ={size: "500ml", material: "stell"
}

// taking the data from the bigger plate as it satisfy the smaller ones.
smallCup=bigCup
// if the is more than required then its ok but if it is less then it is bad.


type Item={name:string, quantity:number}
type Address={street:string, pin:number}

type Order={
    id:string;
    items: Item[];
    addres:Address
}



type Chai={
    name: string ,
    price:number;
    isHot:boolean
}

const updateChai = (updates: Partial<Chai>)=>{
    console.log("updatting chai with",updates)
}

// we can take partial values also in it even we wana use the full ds

updateChai({price:25})

//// required --evene we have decalres it as the optional 
// pick -- we can pick the any of the value.
// Omit -- we can omit the sepific value;