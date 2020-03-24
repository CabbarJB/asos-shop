//FILL FAV BUTTON ON HOVER
function handleFavBtnActions() {
    let favButtons = document.querySelectorAll('.single-found-item-fav-btn');
    let favIcons = document.querySelectorAll('.single-found-item-fav-btn-icon')
    for (let i = 0; i < favButtons.length; i++) {
        favButtons[i].addEventListener('mouseover', () => {
            favIcons[i].classList.remove('far');
            favIcons[i].classList.add('fas')
        });
        favButtons[i].addEventListener('mouseleave', () => {
            favIcons[i].classList.remove('fas');
            favIcons[i].classList.add('far')
        })

    }
}

if (document.querySelector('.single-found-item-fav-btn')) {
    handleFavBtnActions()
}

function handleSortTabClick() {
    let sortTab = document.querySelector('.small-screen-filter-menu-sort-tab-txt');
    let sortTabExpanded = document.querySelector('.filter-menu-tab-sort-expanded')
    sortTab.addEventListener('click', () => {
        if (sortTabExpanded.classList.contains('hidden')) {
            sortTabExpanded.classList.remove('hidden')
        } else sortTabExpanded.classList.add('hidden')
    })
}

handleSortTabClick();

function handleFilterTabClick() {
    let filterBtn = document.querySelector('.right-sliding-menu-open-btn');
    let rightMenu = document.querySelector('.right-sliding-menu');
    let rightMenuCloseBtn = document.querySelector('.right-sliding-menu-close-btn');
    filterBtn.addEventListener('click', () => {
        rightMenu.style.left = '0';
        let blurredBg = document.createElement('div');
        blurredBg.classList.add('blurry-bg');
        document.querySelector('.nav').before(blurredBg);
        document.body.style.overflow = 'hidden'
    })

    rightMenuCloseBtn.addEventListener('click', () => {
        rightMenu.style.left = '100%';
        let blurredBg = document.querySelector('.blurry-bg');
        document.body.removeChild(blurredBg);
        document.body.style.overflow = 'auto'
    })

}

handleFilterTabClick()