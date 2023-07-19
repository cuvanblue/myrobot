let sideMenu = false;
// xu ly searchbar
document.querySelectorAll('.search-bar_type')[0].style.width = String(document.querySelectorAll('.search-bar')[0].offsetWidth  
                                                                    - document.querySelectorAll('.search-bar_category')[0].offsetWidth -50) + "px";
function turnSideMenuOn(){
        sideMenu = true;
        document.querySelectorAll('.black-cover')[0].style.display = "block";
        document.querySelectorAll('.side-menu-box')[0].style.display = "block";
}
function turnSideMenuOff(){
        sideMenu = false;
        document.querySelectorAll('.black-cover')[0].style.display = "none";
        document.querySelectorAll('.side-menu-box')[0].style.display = "none";
}
function turnSearchBarCategoryOn(){
        if(window.getComputedStyle(document.querySelectorAll('.category')[0]).display == "none")
        {
                document.querySelectorAll('.category')[0].style.display = "block";
        }
        else if(window.getComputedStyle(document.querySelectorAll('.category')[0]).display == "block")
        {
                document.querySelectorAll('.category')[0].style.display = "none";
        }
}

function enterKeyWord(){
        document.querySelectorAll('.black-cover')[0].style.display = "block";
        document.querySelectorAll('.black-cover')[0].style.zIndex = "3";
}
document.addEventListener('click', function(event) {
        let searchIput = document.getElementById('search-bar-type');
        let searchIcon = document.getElementById('search-bar-icon');
        let searchCategory = document.getElementById('search-bar-category');
        if (searchIput != event.target && searchCategory != event.target && searchIcon != event.target) {         
                document.querySelectorAll('.black-cover')[0].style.zIndex = "5";
                if(!sideMenu){
                        document.querySelectorAll('.black-cover')[0].style.display = "none";
                }
        }
});