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
