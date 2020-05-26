function soma(a) {
    console.log("Valor de a " + a);
    return function(b){
        console.log("Valor de b " + a);

        return a + b;
        
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
