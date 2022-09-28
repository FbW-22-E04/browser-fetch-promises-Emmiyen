// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
// const modal = document.querySelector('.modal')

// const popup = new Promise((resolve, reject)=>{
// setTimeout(()=>{
// modal.style.display = 'block'
// },6000)
// })
const modal = document.querySelector(".modal");
const popUp = new Promise(() => {
setTimeout(() => {
modal.style.display = "block";
}, 1000);
});

const close = document.querySelector(".close");
const closeWindow = () => {
modal.style.display = "none";
};

close.addEventListener("click", closeWindow); 
