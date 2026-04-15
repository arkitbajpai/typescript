let subs: number | string='1M'
//  using the two different variable is known as the union.

let apiResquestSattus : 'pending'| 'success'| 'error'='pending'

let airlineSeat:'aisle'| 'window'| 'middle'='aisle';


const orders= ['12', '20', '28', '42']

let currentorder;

for(let order of orders){
    if(order==='28'){
        currentorder= order
       break
    }
    currentorder="11"
}


console.log(currentorder);


