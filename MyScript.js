const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
// console.log(addressbtn)
addressbtn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})
//---------------Slider chuyển ảnh-----------------------------//
var arr_hinh=[
    "./TGDD_Picture/1.jpg",
    "./TGDD_Picture/2.jpg",
    "./TGDD_Picture/3.jpg",
    "./TGDD_Picture/4.jpg",
    "./TGDD_Picture/5.jpg",
]
var index=1;
function next(){
    index++;
    if(index>=arr_hinh.length)index=1;
    var hinh=document.getElementById("hinh");
    hinh.src=arr_hinh[index];
}
function prev(){
    index--;
    if(index<0) index= arr_hinh.length-1;
    document.getElementById("hinh").src=arr_hinh[index];
}
//-------------------Slider-product--------------------//
const rightbtn = document.querySelector('.left-arrow')
const leftbtn = document.querySelector('.right-arrow')
const imgNumber = document.querySelectorAll('.slider-product-one-content-items')
// console.log(rightbtn)
// console.log(leftbtn)
rightbtn.addEventListener("click", function(){
    index = index+1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtn.addEventListener("click", function(){
    index = index-1
    if(index<=0){
        index=imgNumber.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})