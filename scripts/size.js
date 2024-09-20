
(function () {

    const t = document.querySelector('.product-sizes__list');

    const nodeOfSizes = document.querySelectorAll('.size-link')

    t.onclick = event => {
        let target = event.target;
        console.log(target)

        nodeOfSizes.forEach(node => node.style.backgroundColor = 'transparent')

        target.style.backgroundColor = 'red'
    }

}());




