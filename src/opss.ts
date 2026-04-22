class Chai{
    flavour:string;
    price:number

    constructor(flavour:string, price :number)
    {
        this.flavour=flavour
        this.price=price
    }


}

const masalaChai= new Chai("Ginger", 20);
//masalaChai.flavour= "masala"

//accessmofider

class CHai{
    public flavor:string ="Masala"
    private secretIngredients="Cardamon"

    reveal(){
        return this. secretIngredients
    }
   
}
class shop{ protected shopName=" CHai corner"}
class branch extends shop{
    getName(){
        return this.shopName// accesses the protected 
        }
}

const c = new CHai()
//c.reveal-- to acces the protected values


class Walet{
    #balance=100// this is the private decaltion.

}

class Cup{
    readonly capacity:number=250
    constructor(capacity:number){
        this.capacity= capacity
    }
}


class MorderChai{
    private _sugar=2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value>5)
            throw new Error("too sweets")
        this._sugar= value
    }
}

const ct = new MorderChai()
ct.sugar=3

class Ekchai{
    static shopName ="Chai Code Caffe"

    constructor(public flavour: string){

    }

}


class Heater{
    heat(){

    }
}

class ChaiMaker{
    constructor(private heater: Heater){

    }
    make(){
        this.heater.heat
    }
}

