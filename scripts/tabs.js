(function(){
    console.log('----------------')

    const activeItem = document.querySelector('.item--active');
    console.log(activeItem)

  //  activeItem.classList.remove('item--active')

    const nodes = document.querySelectorAll('.tabs-list__item')

    // console.log(nodes)

    // nodes[1].classList.add('item--active')

    nodes.forEach(node => {
        node.addEventListener('click', el =>{
            console.log(el.target)
            el.preventDefault();

            nodes.forEach(activeItem => activeItem.classList.remove('item--active'))

            node.classList.add('item--active')

            if(el.target.innerText === 'таблица размеров'.toUpperCase()){
                console.log('This IS ТАБЛИЦА РАЗМЕРОВ')
                document.querySelector('.content-section').style.display='none'
                document.querySelector('.table-size-content').style.display='block'
            }

            if(el.target.innerText === 'описание'.toUpperCase()){
                console.log('This IS OPISANIE')
                 document.querySelector('.table-size-content').style.display='none'
                 document.querySelector('.content-section').style.display='block'
            }


        })
    })
}())