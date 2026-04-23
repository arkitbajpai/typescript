function wrapInArray<T>(item:T):T[]{
return [item]
}


// it takes on t data types and return t data types.



wrapInArray("masala");
wrapInArray(42)

function pair<A,B>(a:A,b:B):[A,B]{
    return[a,b]
}

pair("masala",20)
