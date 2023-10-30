const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H1").innerText
    var productPrice = product.querySelector("span").innerText
    //console.log(productPrice)
    addcart(productPrice,productImg,productName)
}})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'"><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr) // Them the tr vao duoi cung

    carttotal()
    deleteCart()
}
//-------------------TotalPrice------------------------------//
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value       //cartItem la 1 the tr, se di tu cartItem vao de lay thong tin
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(inputValue,productPrice)
        var newsProductPrice = productPrice.split('.').join('');
        totalA = inputValue*newsProductPrice                                  
        totalC = totalC + totalA
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    //console.log(cartTotalA)
}
//-------------------Delete Cart------------------------------//
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            //console.log(cartItemR)
        })

    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
            //console.log(cartItemR)
    }
}
const cartbtn = document.querySelector(".fa-delete-left")
const cartShow = document.querySelector(".btngiohang")
cartShow.addEventListener("click",function(){
    console.log(cartShow)
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartShow)
    document.querySelector(".cart").style.right = "-100%"
})


