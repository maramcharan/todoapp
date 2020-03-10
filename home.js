

var itemarr=[];
var counter=0;
var count=0;
 function Additemclick(){
    var divref=document.getElementById('itemlist');
     var inputitem=document.getElementById('data').value;
     if(inputitem){
     var html='<p>'+'<div  name="itemdisplay" id="newdiv'+counter+'" class="row newdivstyle">'+'<span id="itemdisplay'+counter+'" class="col-sm-6 textdisplay">'+inputitem+'</span>'+'<span id="editbutton'+counter+'" class=" glyphicon glyphicon-edit col-sm-1 btn" onclick="updateitem(this.id)">'+'</span>'+'<span id="deletebutton'+counter+'" class=" glyphicon glyphicon-trash col-sm-1 btn" onclick="deleteitem(this.id)">'+'</span>'+'</div>'+'</p>';
     divref.insertAdjacentHTML('beforeend',html);
     counter++;
     count++;
     }else{
         alert('please enter the item');
     }
     itemarr.push(inputitem);
     document.getElementById('data').value="";
     console.log(itemarr);
 }
 function updateitem(updateid){
     console.log(updateid);
    var currentitem =document.getElementById(updateid).previousSibling;
     var edititem=prompt("enter the new item value");
     if(edititem){
     currentitem.innerText=edititem;
     alert("you have succesfully updated the item...");
     }else{
         alert('you have cancelled the updation')
     }
 }
 function deleteitem(deleteid){
     var confirmvalue=confirm("Are you sure to delete the item?");
     if(confirmvalue){
     var currentitem =document.getElementById(deleteid).parentNode;
     currentitem.remove();
     alert("item successfully  deleted...");
     }else{
         alert("item not deleted...!");
     }
     
     
 }
 function notesclick(){
     document.getElementById('notestrash').style.display="block";
         var refdiv=document.getElementById('linksclick');
         refdiv.innerText=itemarr;

     
 }
