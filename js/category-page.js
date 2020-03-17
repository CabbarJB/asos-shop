



//FILL FAV BUTTON ON HOVER
function handleFavBtnActions() {
    let favButtons = document.querySelectorAll('.single-found-item-fav-btn');
    let favIcons = document.querySelectorAll('.single-found-item-fav-btn-icon')
     for(let i=0;i<favButtons.length;i++){
         favButtons[i].addEventListener('mouseover', ()=>{
             favIcons[i].classList.remove('far');
             favIcons[i].classList.add('fas')
         });
         favButtons[i].addEventListener('mouseleave', ()=>{
             favIcons[i].classList.remove('fas');
             favIcons[i].classList.add('far')
         })

     }
}

if (document.querySelector('.single-found-item-fav-btn')){
    handleFavBtnActions()
}

function handleSortTabClick() {
    let sortTab = document.querySelector('.small-screen-filter-menu-sort-tab-txt');
    let sortTabExpanded = document.querySelector('.filter-menu-tab-sort-expanded')
    sortTab.addEventListener('click', ()=>{
        if (sortTabExpanded.classList.contains('hidden') ){
            sortTabExpanded.classList.remove('hidden')
        }
else sortTabExpanded.classList.add('hidden')
    })
}

handleSortTabClick();