
let tableau1=[];
let zone= document.getElementById("zonesignature")
let modalsiganture= document.getElementById("Simulation")
let zoneinitialemodal=document.querySelector("#modalbodysim")

let testbouttonmodal = document.querySelector("#modalboutton")

// set up variables
var reader = new FileReader(),
    // i=0,
     numFiles = 0,
    imageFiles;

// use the FileReader to read image i
function readFile() {
    reader.readAsDataURL(imageFiles[0])
}

// define function to be run when the File
// reader has finished reading the file
reader.onloadend = function(e) {
    
   var image = $('<img>').attr('src', e.target.result);
     $(image).appendTo('#images');
    // make an image and append it to the div
    
    // if there are more files run the file reader again
    // if (i < numFiles) {
    //     i++;
    //     readFile();
    // }
 };

$('#go').click(function() {

    imageFiles = document.getElementById('files').files
    // get the number of files
    numFiles = imageFiles.length;
    readFile();   
    

// Set a new width and height

       

});

 let buttonfui =document.getElementById("fuillant")
  


function flee(buttonfui) {
  buttonfui.style.position = 'absolute';
  buttonfui.style.left = parseInt(Math.random() * (document.documentElement.clientWidth - buttonfui.offsetWidth)) + 'px';
  buttonfui.style.top = parseInt(Math.random() * (document.documentElement.clientHeight - buttonfui.offsetHeight)) + 'px';
}





testbouttonmodal.addEventListener("click",function (e) {
  
//   checkremoveParent(zone, modalsiganture,zoneinitialemodal);
//   // changeparent(zoneinitialemodal, modalsiganture, )
//  console.log(newparent)
  // function checkremoveParent(parent, child,newparent) {
  if (zone.contains(modalsiganture)){
   zone.removeChild(modalsiganture);
  zoneinitialemodal.appendChild(modalsiganture)
  if (numFiles>=1){var image_x = document.getElementById("images");
  image_x.removeChild(image_x.firstChild);}
  }

// function changeparent(newparent, child ) {
//   console.log(newparent)
//   if (!newparent.appendChild(child))
//  return ;
// }

})
 let formulaire = document.getElementById("Inscriptions")
 formulaire.addEventListener("click",function (e) {
   e.preventDefault();
   alert('formulaire envoyé');
   zone.appendChild(modalsiganture);
   $('#myModal').modal('hide');


   
//    let formData = new FormData(formulaire);
 
//    let mail = formData.get("mail");
//    let nom = formData.get("nom");
//    let prenom = formData.get("prenom");
//    let telfixe = formData.get("telfixe");
//    let telporta = formData.get("telporta");
//    let adressepostale = formData.get("Adresse");
//    let Type = formData.get("Type")
   
 
//   //  let contact= new PersonneGeneral(prenom,nom,mail,tel)
//   let contact= new PersonneGeneral(prenom, nom,mail,telporta,telfixe,Type,adressepostale);
//   tableau1.push(contact)
 
//   populateTableList();
 
   })
 
// function populateTableList(){
//   let listOfName='';

// console.log(tableau1);  
// tableau1.map((ele,index)=> {console.log(ele.Type)
//   listOfName += ` 
          
//     ${ele.nom} ${ele.prenom} 
//     ${ele.Type}<br>
//     ${ele.mail}<br>
//     ${ele.adressepostale}<br>
//     ${ele.telfixe}<br> 
//     ${ele.telporta}<br>

//     `  
// }
//     )

// document.getElementById('NameList').innerHTML = listOfName;

// }
//  populateTableList();
// // prototype à partir constructeur


// function PersonneGeneral(prenom, nom,mail,telporta,telfixe,Type,adressepostale) {
//   this.prenom = prenom;
//   this.nom = nom;
//   this.mail = mail;
//   this.telporta = telporta;
//   this.telfixe= telfixe;
//   this.adressepostale = adressepostale;
//   this.Type = Type;  
// };


// let david = new PersonneGeneral("david","ATHUIL","david_athuil@yahoo.fr","0625142609","161 blvd ","","");

