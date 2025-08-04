let cartbtn=document.getElementById('cartbtn')
cartbtn.onclick=function(){
    cartbtn.style.backgroundColor='white'
    cartbtn.style.color='black'
     cartbtn.style.border='2px solid red'
     cartbtn.innerText='Added to cart'
     alert("Purchased successfully")
}