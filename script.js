let slides=document.querySelectorAll(".slide");
let index=0;

setInterval(()=>{
  slides[index].classList.remove("active");
  index=(index+1)%slides.length;
  slides[index].classList.add("active");
},5000);

// QR Code
new QRCode(document.getElementById("qrcode"), {
  text: window.location.href,
  width: 160,
  height: 160
});
