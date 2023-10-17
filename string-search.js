const discription =[
    'Dell Latitude 3520 Core i3 11th Gen 15.6" HD Laptop',
    'HP ENVY 15-ep1890TX Core i7 11th Gen RTX 3050 Ti 4GB Graphics 15.6" FHD Touch Gaming Laptop',
    'ASUS VivoBook 15 X515EA Core i5 11th Gen 512GB SSD 15.6" FHD Laptop',
    'Toshiba Dynabook Satellite Pro C40-G-109 Celeron 5205U 14" HD Laptop',
    'Lenovo IdeaPad Slim 3i 15IGL Intel Celeron N4020 15.6" HD Laptop',
    'Walton Prelude N50 Pro Pentium Silver N5030 14" FHD Laptop',
    'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop',
    'Toshiba Dynabook Satellite Pro C40-G-13F Celeron 5205U 14" HD Laptop',
    'Lenovo IdeaPad D330 10IGL Intel CDC N4020 10.1" HD Touch Laptop',
    'Walton Prelude N41 Pro Celeron N4120 14" FHD Laptop',
    
] 

const searchingProductList = 'lenovo';

const emptyArray = []

// uses of .includes()

for(const product of discription){
if(product.toLowerCase().includes(searchingProductList.toLowerCase())){
    emptyArray.push(product)
}
}


// uses of .indexOf()

// for (const product of discription) {
// if(product.toLowerCase().indexOf(searchingProductList.toLowerCase()) != -1){
//     emptyArray.push(product)
// }
// }


// uses  of .startWith()

// for(const product of discription){
//     if(product.toLowerCase().startsWith(searchingProductList.toLowerCase())){
//         emptyArray.push(product)
//     }
// }

// Uses of .endWith()

// for (const product of discription) {
//     if(product.toLowerCase().endsWith(searchingProductList.toLowerCase())){
//         emptyArray.push(product)
//     }
// }

console.log(emptyArray)