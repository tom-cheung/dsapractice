function test(num) {
    let array = []; 
    array.push(num); 

    return function test2() {
        if(array.length > 3) {
            for(let el of array) {
                console.log(el); 
            }
        }
    }
}

function switchTest(name) {
    switch(name) {
        case 'peanut': 
            return console.log('moms cat'); 
        case 'uni':
            return console.log('steve and priscillas')
        default: 
            return console.log('whose cat is this?')
    }
}

switchTest('sdasdas'); 