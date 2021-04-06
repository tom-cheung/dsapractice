let parenthesis = ['(', ')','(', ')','(', ')']

let combos = []; 

for(let i = 0; i < parenthesis.length; i++) {
  let newCombo = []; 
  newCombo.push(parenthesis[i])
  for(let x = 0; x < parenthesis.length; x++) {
    if(x !== i) {
      newCombo.push(parenthesis[x])
    }
  }
  combos.push(newCombo);
}

console.log(combos); 