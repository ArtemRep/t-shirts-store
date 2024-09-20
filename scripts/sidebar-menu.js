(function(){

    function testFunction(){
        console.log('hello123')
    }
    
    testFunction();
    
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    console.log(openingBtn)
    console.log(closingBtn)
    
    openingBtn.addEventListener('click', openSidebar)
    closingBtn.addEventListener('click', function(){
        sidebar.classList.remove('sidebar--opened')
    })
    
    
    
    function openSidebar(){
        sidebar.classList.add('sidebar--opened')
    }
    

})();





