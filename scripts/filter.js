(function () {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope(elem, {
        itemSelector: '.products__item',
        filter: '.popular'
    });




    const controlls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';

    console.log(controlls)

    controlls.forEach(
        (item) => item.addEventListener('click',
            function (e) {
                console.log('click')
                console.log(e);
                e.preventDefault();

                const filterName = item.getAttribute("data-filter");

                controlls.forEach( 
                    function (link) {
                        link.closest('.filter__item').classList.remove(activeClass);
                    }
                )

                item.closest('.filter__item').classList.add(activeClass);

                 iso.arrange({
                    filter: `.${filterName}`,
                 }); 

                // iso.arrange({
                //     // item element provided as argument
                //     filter: function (itemElem) {
                //         var number = itemElem.querySelector('.number').innerText;
                //         return parseInt(number, 10) > 50;
                //     }
                // });

            }
        )
    )
}());