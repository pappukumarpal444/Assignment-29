
// Check Large Array

const vagitableName = ['Tomato', 'Potato', 'Cabbage', 'Cauliflower', 'Carrot', 'Spinach'];


function vagitableFunction(products){
    // console.log(products)
    if(Array.isArray(products) == false){
     return 'Please Provided an array'
    }
    let emptyAArray = []
    for (const element of vagitableName) {
       if(element.length > emptyAArray.length){
        emptyAArray = element;
       }
    }
    return emptyAArray
}


console.log(vagitableFunction(vagitableName))
// console.log(vagitableFunction('Brinja'))








