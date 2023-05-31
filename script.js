// desktop menu

const itemsOfMenu = document.querySelectorAll(".hero__navbar_nav_menu-item")

function closeAllMenus(index) {
    itemsOfMenu.forEach((element, i) => {
        let menu = element.getElementsByTagName("div")
        let icon = element.getElementsByTagName("i") 

            if(index === i){
                return
            }
            icon[0].classList.remove('rotate')
            menu[0].classList.remove("active-menu")
        
    })
}

itemsOfMenu.forEach((element, i) => {
    let menu = element.getElementsByTagName("div")
    let icon = element.getElementsByTagName("i")
    console.log("hi")
    element.addEventListener("click", () => {
        closeAllMenus(i)
        icon[0].classList.toggle('rotate')
        menu[0].classList.toggle("active-menu")
        console.log("hi")
    })
})

// modal and mobile menu
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = modal.querySelector('.close');

openModalBtn.addEventListener('click', function() {

  modal.classList.add("modal-active")
});

closeModal.addEventListener('click', function() {

  modal.classList.remove("modal-active")
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {

    modal.classList.remove("modal-active")
  }
});

// modal accordion

const accordionHeaders = document.querySelectorAll('.modal-content__menu_item-header');

accordionHeaders.forEach((header) => {
  header.addEventListener('click', function() {
    const activeContents = document.querySelectorAll('.accordion-content.active');

    const accordionContent = this.nextElementSibling;

    activeContents.forEach((content) => {
        if (content !== accordionContent) {
          content.classList.remove('active');
        }
      });
      
    accordionContent.classList.toggle('active');
  });
});