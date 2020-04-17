let menuBtn = document.getElementById("menu-btn");
let subMenu = document.getElementsByClassName("sub-menu")[0];

menuBtn.addEventListener("click", function(event){
    event.preventDefault();

    if (!subMenu.classList.contains('d-block')) {
        subMenu.classList.add('d-block');
        subMenu.style.height = 'auto';

        let height = subMenu.clientHeight + "px";

        subMenu.style.height = '0px';

        setTimeout(function () {
            subMenu.style.height = height;
        }, 0);
        } 
        else {
            subMenu.style.height = '0px';
            subMenu.addEventListener('transitionend', function () {
                subMenu.classList.remove('d-block');
            }, 
        {
            once: true
        });
    }
});

let profileBtn = document.getElementsByClassName("profile-nav")[0];
let loginRegBtns = document.getElementsByClassName("login-reg-btns")[0];

profileBtn.addEventListener("click", function(event){
    loginRegBtns.classList.toggle("d-flex");
});


// Navbar active color changes

window.onload = function(){
    //Get current Path 
    var pathArray = location.pathname.split('/');
    var filename = pathArray[1];

   

    if(filename=="" || filename == "index.html"){
        $('nav ul li').first().addClass('active');
        var nav = document.getElementsByTagName('nav');
      

    }else {
        var menudiv = this.document.getElementsByClassName('menu')[0];
        var nav = menudiv.getElementsByTagName('nav')[0];
        var ul = nav.getElementsByTagName('ul')[0];
        var li = ul.getElementsByTagName('li');
        

        for(var i = 1; i< li.length ;i++){

        if(li[i].getElementsByTagName('a')[0].getAttribute('href').indexOf(filename)>-1){
            li[i].className='active'
        }
      }
      
    }




    // Mobile


    
    if(filename=="" || filename == "index.html"){
        $('.sub-menu ul li').first().addClass('active');
        var nav = document.getElementsByClassName('sub-menu')[0];
      

    }else {
        var mobmenudiv =  document.getElementsByClassName('sub-menu')[0];
        var mobul = mobmenudiv.getElementsByTagName('ul')[0];
        var mobli = mobul.getElementsByTagName('li');
        

        for(var i = 1; i< mobli.length ;i++){

        if(mobli[i].getElementsByTagName('a')[0].getAttribute('href').indexOf(filename)>-1){
            mobli[i].className='active'
        }
      }
      
    }
}



