let right = document.querySelector(".right");
let left = document.querySelector(".left");
let slider = document.querySelector(".images-div");
let images = document.querySelectorAll(".images");

let images_cnt = images.length;
let cnt = 1;
const nextslide = () => {
    slider.style.transform = `translateX(-${cnt * 500}px)`;
    cnt++;
}
const prevslide = () => {
    slider.style.transform = `translateX(-${(cnt-1 )* 500}px)`;
    cnt--;
}
const firstslide = () => {
    slider.style.transform = `translateX(0px)`;
    cnt = 1;  
}
const lastslide = () => {
    slider.style.transform = `translateX(-${(images_cnt-1) * 500}px)`;
    cnt = images_cnt-1;
}
right.addEventListener("click",() =>{
    cnt < images_cnt  ? nextslide() : firstslide();
});
left.addEventListener("click",() =>{
    cnt < 1 ? lastslide() : prevslide();
});