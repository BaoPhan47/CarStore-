const sidebar = document.querySelector('.sidebar');
const toglebar = document.querySelector('.bx-menu');
toglebar.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
})
console.log(sidebar);