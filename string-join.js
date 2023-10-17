// Uses of .join()
const vagitableName = ['Tomato', 'Potato', 'Cabbage', 'Cauliflower', 'Carrot', 'Spinach'];
const joinVagitableName = vagitableName.join('//');
// console.log(joinVagitableName)

// Uses of .Concat()
const firstName = 'Pappu';
const lastName = 'Kumar'
// const fullName = firstName+' '+lastName+ ' '+'Pal';   //Old rules
const fullName = firstName.concat(lastName).concat('Pal') //New Rules
console.log(fullName)

