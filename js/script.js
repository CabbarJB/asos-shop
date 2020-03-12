

//CREATE USER ICON DROPDOWN

function createUserDropdown() {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('user-icon-dropdown');
    let menuContainerTop = document.createElement('div');
    menuContainerTop.classList.add('user-icon-dropdown-top');
    let logButtonsContainer = document.createElement('div');
    logButtonsContainer.classList.add('user-icon-dropdown-top-log-buttons');
    let singInBtn = document.createElement('a');
    let joinBtn = document.createElement('a');
    singInBtn.classList.add('log-btn');
    joinBtn.classList.add('log-btn');
    singInBtn.innerText = 'Sign In';
    joinBtn.innerText = 'Join';
    logButtonsContainer.appendChild(singInBtn);
    logButtonsContainer.appendChild(joinBtn);
    menuContainerTop.appendChild(logButtonsContainer);
    let closeBtn = document.createElement('i');
    closeBtn.classList.add('fas');
    closeBtn.classList.add('fa-times');
    closeBtn.classList.add('user-icon-dropdown-close-btn');
    menuContainerTop.appendChild(closeBtn);
    menuContainer.appendChild(menuContainerTop);
    let menuContainerBody = document.createElement('div');
    menuContainerBody.classList.add('user-icon-dropdown-body');
    let itemsList = document.createElement('ul');
    let createSingleListItem = function (iconClasses,itemTxt) {
    let singleItem = document.createElement('li');
    singleItem.classList.add('user-icon-dropdown-body-item');
    let icon= document.createElement('i');

    for (let elem of iconClasses){
        icon.classList.add(elem);
    }

    let itemTitle = document.createElement("div");
    itemTitle.classList.add("user-icon-dropdown-body-item-title");
    itemTitle.innerText = itemTxt;
    singleItem.appendChild(icon);
    singleItem.appendChild(itemTitle);

        return singleItem;
    };
    itemsList.appendChild(createSingleListItem(["far", "fa-user", "user-icon-dropdown-body-item-icon"], 'My Account'));
    itemsList.appendChild(createSingleListItem(["fas", "fa-box", "user-icon-dropdown-body-item-icon"], 'My Orders'));
    itemsList.appendChild(createSingleListItem(["fas", "fa-undo", "user-icon-dropdown-body-item-icon"], 'Returns Info'));
    itemsList.appendChild(createSingleListItem(["far", "fa-comment", "user-icon-dropdown-body-item-icon"], 'Contact Preferences'));


    menuContainerBody.appendChild(itemsList);
    menuContainer.appendChild(menuContainerBody);
    return menuContainer;
}


// SHOW DROP DOWN WHEN HOVERED


let userIcon = document.querySelector('.nav-right-user-icon');
let navRight = document.querySelector('.nav-right');
// if (screen.width>1024){
    navRight.appendChild(createUserDropdown())
    let dropDownMenu = document.querySelector('.user-icon-dropdown');
    userIcon.addEventListener('mouseover', ()=>{
        dropDownMenu.style.top = "38px";
        dropDownMenu.style.zIndex = '99'
        dropDownMenu.style.opacity = '1'

    });

// HIDE DROPDOWN ON MOUSE LEAVE


    dropDownMenu.addEventListener('mouseleave', ()=>{
        dropDownMenu.style.top = "-162px";
        dropDownMenu.style.zIndex = '-100';
        dropDownMenu.style.opacity = '0'
    });
// }


// EXPAND NAV-EXTENSION TABS ON HOVER

let navExtensionTabs = document.querySelectorAll('.nav-extension-list-item');
let expandedWindows = document.querySelectorAll('.nav-extension-item-expanded');
for (let i =0;i<navExtensionTabs.length;i++){
    navExtensionTabs[i].addEventListener('mouseover', ()=>{
        for (let j = 0;j<navExtensionTabs.length;j++){
            expandedWindows[j].classList.add('invisible')
        }
    expandedWindows[i].classList.remove('invisible')
    })
}

expandedWindows.forEach(item=>{
    item.addEventListener('mouseleave', event=>{
        for (let elem of expandedWindows){
            elem.classList.add('invisible')
        }
    })
});


// LOWER OPACITY ON BRAND HOVER

let brands = document.querySelectorAll('.trending-brands-list-item');
brands.forEach(item=>{
    item.addEventListener('mouseover',event=>{
        for (let it=0;it<brands.length;it++){
            brands[it].style.opacity = "0.3";
        }
        event.currentTarget.style.opacity = '1';
    });
    item.addEventListener('mouseleave', event=>{
        for (let e of brands){
            e.style.opacity = '1';
        }
    })
});

//BURGER MENU OPEN CLOSE


let burgerBtn = document.querySelector('.small-screen-burger-btn');
let leftMenu = document.querySelector('.small-screen-left-menu');
burgerBtn.addEventListener('click', (event)=>{
    leftMenu.style.left = '0'
    let blurredBg = document.createElement('div');
    blurredBg.classList.add('blurry-bg');
    document.querySelector('.nav').before(blurredBg);
    document.body.style.overflow = 'hidden'
});


let leftMenuCloseBtn = document.querySelector('.left-menu-close-btn');
leftMenuCloseBtn.addEventListener('click', event=>{
    leftMenu.style.left = '-320px';
    let blurredBg = document.querySelector('.blurry-bg')
    document.body.removeChild(blurredBg);
    document.body.style.overflow = 'auto'
})
