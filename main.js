
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

