let response:any ="42";

let numericLength:number = (response as string).length
// this is forcefull type assertion becasue we are forcing to tell typscript that it is string


type book={
    name: string
}

let bookString='{"name": "whow mooved"}';
let bookObject = JSON.parse(bookString) as book;

let value:any;

value ="arkit";
value = [1,2,3,4];
value=2.5;
  value.toUpperCase();

let newvalue:unknown;

newvalue ="arkit";
newvalue = [1,2,3];
newvalue=2.5;
if(typeof newvalue==="string")
newvalue.toUpperCase();
////

try{}catch(error){
    if(error instanceof Error){
        console.log(error)
    }
    console.log("Error messsage",error);
    
}







