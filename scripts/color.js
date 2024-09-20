
(function(){
    let rbBlack = document.getElementById('rb-black')
let rbGreen = document.getElementById('rb-green')

console.log(rbBlack)
console.log(rbGreen)

const radioGroup = document.querySelector('.product-colors')
const img = document.querySelector('.product__product-img')
//img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_08.png`)


radioGroup.addEventListener('click', e =>{
   // console.log(e.target.value)
   // console.log(img)

    switch(e.target.value){
        case 'black':{
            console.log(e.target.value)
            img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_07.png`)
            break;
        }
        case 'white':{
            console.log(e.target.value)
            img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_08.png`)
            break
        }
        case 'green':{
            console.log(e.target.value)
            img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_09.png`)
            break
        }
        case 'blue':{
            console.log(e.target.value)
            img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_10.png`)
            break
        }
        case 'red':{
            console.log(e.target.value)
            img.setAttribute('src',`\\images\\web-ready\\tshirts\\tshirt_11.png`)
            break
        }
        default:{

        }
    }
})
}())
