function generateQR(){
  document.querySelector("#qr-image").style.display = "block";
  let QRText = document.querySelector("#text").value;
  const imgW = document.querySelector("#imgen");
  console.log(QRText)
  if(QRText.trim().length == 0){
    document.querySelector("#qr-image .error").innerHTML = "Please enter text";
    imgW.style.display = "none";
  }else{
    imgW.style.display = "block";
    document.querySelector("#qr-image .error").innerHTML = "";
    imgW.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ QRText;
  }
}