
var listNumber=[];
var listNumber2=[];

//Them so
document.getElementById("btnThemSo").onclick = function (){
var number = document.getElementById("number").value*1;

listNumber.push(number);
console.log(listNumber);
}

// Xuat so
document.getElementById("btnXuatSo").onclick = function(){
  var content="";
  var count='';
  for(var i=0;i<listNumber.length;i++){
      content+="["+listNumber[i]+"] ";
      count+=" -"+i+"- ";
  }
  document.getElementById('notifiCation').innerHTML = "Dãy số:  "+content;
  document.getElementById('notifiCation1').innerHTML ="Vị trí số:" +count;
}

//Xoa so
document.getElementById("btnXoaso").onclick = function(){
   
  clearArray(listNumber);
 
   document.getElementById('notifiCation').innerHTML = listNumber;
}
function clearArray(a) {
   a.splice(0, a.length);
   return a;
 }

// tong so duong

document.getElementById("btnTongSoDuong").onclick = function(){
  var count=btnTongSoDuong(listNumber);
  
document.getElementById("notifiCation3").innerHTML ="Tổng số dương: "+ count;
}
function btnTongSoDuong(num){
  var sum = 0;
  if(listNumber.length === 0){
      alert("vui long nhap so");
      return;
  }
  for (var i = 0; i < num.length; i++){
if(num[i] > 0){
  sum += num[i];
}
  }
  return sum;
}

// dem so duong
document.getElementById("btnDemSoDuong").onclick = function(){
  var count = btnDemSoDuong(listNumber);
  
document.getElementById("notifiCation3").innerHTML = "Có: "+count+" số dương";
}
function btnDemSoDuong(num){
  var count = 0;
  for(var i = 0; i < num.length; i++){
      if(num[i] > 0){
          count += 1;
      }
  }
  return count;
}

//So nho nhat
document.getElementById("btnSoNhoNhat").onclick = function(){
  var count = btnSoNhoNhat(listNumber);
  
document.getElementById("notifiCation3").innerHTML = "Số nhỏ nhất là: "+count;
}
function btnSoNhoNhat(num){
  var count = num[0];
  for(var i = 0; i < num.length; i++){
    if(count > num[i]){
      count = num[i];
    }
  }
  return count;
}

//So duong nho nhat
