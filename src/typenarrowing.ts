function getChai(kind: string| number)
{
    if(typeof kind ==='string')
    {
        return `Making ${kind} chai...`
    }
    return `chai oder:${kind}`;
}
// this is the narrowing done of the types of function we are using.

function serveChai(msg?:string){
    if(msg){
        return `serving ${msg}`;

    }
    return `serving default masala chai`
}

// this is the truthi value is the garuantee.


