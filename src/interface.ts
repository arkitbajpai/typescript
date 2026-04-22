interface Chai{
    flavor:string
    price:number 
}

// interface define the code of ds
// they dont genrate code for the js


interface Shop{
  readonly id :number
  name:string 
}

const s:Shop={id:1, name: "cafe"}


interface TeaMachine{
    start():void;
    stop():void;
}

const machine: TeaMachine={
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface ratings{
    [rate:string]:number
}

const rating: ratings={
    masala:4.5,
    ginger:4.5
}
