
let tableau1 ;
function sauvJson(){
  let sensjson=JSON.stringify(tableau1);
  localStorage.setItem("jsontableau1", sensjson);
    
  console.log(localStorage)
  }

if(!localStorage.getItem("jsontableau1"))  //localStorage.getItem("jsontableau1")==0
 
 {
  tableau1=[];
 }
else{
let localstorgeparse=JSON.parse(localStorage.getItem("jsontableau1"));

  tableau1=localstorgeparse ;
}


//fonction dire nom
function direNom() {
  console.log("Je suis "+ this.nom +" "+this.prenom+", mon numéro est "+ this.tel+", mon mail est"+this.mail);
}
let suprButton = document.querySelectorAll(".btnSupr");

function suprButton1(ele,index){
  suprButton = document.querySelectorAll(".btnSupr");

  suprButton.forEach((ele,index)=>
 
 ele.addEventListener("click",function (ele) {
 
    tableau1.splice(index, 1);
     populateTableList();
    //  suprButton = document.querySelectorAll(".btnSupr");
     suprButton1(ele,index);
 
  }) 
  )
}


//creation element1 avec fonction dedans test
let element = {
  prenom: "david",
  nom: "ATHUIL",
  mail: "david_athuil@yahoo.fr",
  tel: '0625142609',
  direNom: function() {
  console.log("Je suis "+ this.nom +" "+this.prenom+", mon numéro est "+ this.tel+", mon mail est"+this.mail);
  },
 
};
  
  element.direNom();
  
//creation MOI avec fonction en dehors

//  MOI.direNom();
let MOI = {
  prenom: "MOI",
  nom: "ATHUIL1",
  mail: "david1_athuil@yahoo.fr",
  tel: '0625142610',
 };

//creation AUTRE avec fonction en dehors+ consolelog

let AUTRE = {
    prenom: "elsa",
    nom: "AUTRE",
    mail: "elsa_athuil@yahoo.fr",
    tel: '0625142611',
   };
// AUTRE.direNom();
// console.log(AUTRE);

//creation TABLEAU


// tableau1.push(element, MOI, AUTRE);
 console.log(tableau1);


function populateTableList(){
  let listOfName='';


tableau1.map((ele,index)=>
  listOfName += ` 
    <tr class="text-center">
            
      <td class="w-25 align-middle">${ele.prenom}</td>
      <td class="w-25 align-middle">${ele.nom}</td>
      <td class="w-25 align-middle">${ele.mail}</td>
      <td class="w-25 align-middle">${ele.tel}</td>
      <th>Adresse<input type="text" id="Adresse" name="Adresse" placeholder="Adresse"/></th>
      <th>NomEntreprise<input type="text" id="Nomentreprise" name="NomEntreprise" placeholder="Entreprise"/></th> 
      <td class="w-25 align-middle"><button id="${tableau1.indexOf(ele)}" class="btnSupr" onclick='SuprTableList(${index})'>Suprimer ${tableau1.indexOf(ele)}</button></td>

    </tr>
    `  
    )

document.getElementById('NameList').innerHTML = listOfName;
suprButton1();
sauvJson();
}

// const index = tableau1.findIndex( () => btnSupr.onclick);
// console.log(index);



 populateTableList();

 function SuprTableList(index){
   // tableau1.splice(index, 1);
   // populateTableList();
 }
 
function deleteRow(tableID,currentRow) {
  
      var table = document.getElementById(tableID);
      var rowCount = table.rows.length;
      for (var i = 0; i < rowCount; i++) {
          var row = table.rows[i];
          /*var chkbox = row.cells[0].childNodes[0];*/
          /*if (null != chkbox && true == chkbox.checked)*/
          
          if (row==currentRow.parentNode.parentNode) {
             
              table.deleteRow(i);
              // tableau1.splice(i, 1);
        
          }
      } 
}


document.getElementById("inscriptions").addEventListener("submit",function (e) {
  e.preventDefault();
  alert('formulaire envoyé');
  let newpersonne = Object.create(element);

  newpersonne.prenom = this.prenom.value;
  newpersonne.nom = this.nom.value;
  newpersonne.mail =this.mail.value;
  newpersonne.tel = this.tel.value;
  tableau1.push(newpersonne); 
  populateTableList();

})





  document.getElementById("filtre").addEventListener("click",function (e) {
    e.preventDefault();
    alert('formulaire fiiltre');
     
    
    // // filtreelement.nom = document.getElementById('nomF');
    // // filtreelement.mail =document.getElementById('mailF');
    // // filtreelement.tel = document.getElementById('telF');
  
    // console.log(filtreprenom);
    
    filtretableau()
  
  })
  function filtretableau(){
  
  let NameFiltre='';
  let  filtreprenom = document.getElementById('prenomF');
  var Prenomfiltre =  tableau1.filter(function(ele) {
    return ele.prenom == filtreprenom.value;
    // return ele.nom == filtreelement.nom;
    // return ele.mail == filtreelement.mail;
    // return ele.tel == filtreelement.tel;

    
  });
 
 

Prenomfiltre.forEach((ele,index)=>
NameFiltre += ` 
    <tr class="text-center">
            
      <td class="w-25 align-middle">${ele.prenom}</td>
      <td class="w-25 align-middle">${ele.nom}</td>
      <td class="w-25 align-middle">${ele.mail}</td>
      <td class="w-25 align-middle">${ele.tel}</td>
      <th>Adresse<input type="text" id="Adresse" name="Adresse" placeholder="Adresse"/></th>
      <th>NomEntreprise<input type="text" id="Nomentreprise" name="NomEntreprise" placeholder="Entreprise"/></th> 
      <td class="w-25 align-middle"><button id="${tableau1.indexOf(ele)}" class="btnSupr" onclick='SuprTableList(${index})'>Suprimer ${tableau1.indexOf(ele)}</button></td>

    </tr>
    `  
    )
    alert(JSON.stringify(Prenomfiltre))

document.getElementById("FiltreTa").innerHTML = NameFiltre;
;
}




// function filtreN(){
//   preventDefault();
//   alert('formulaire fiiltre');
// }
// tableau1.filter
// arrayofObjects.forEach(tableau1 =>{
//   if(ele.nom === prompt("quel nom?")){
//       alert("le numero de tel est", ele.tel);
//   }
// });



//saisirNom();

//populateTableList();
// //appeler saisirNom pour creer newelement



// //PARTIE2

// // prototype à partir objet
// let personne1 = Object.create(element);


// prototype à partir constructeur

function personneGeneral(prenom, nom,mail,tel) {
  this.prenom = prenom;
  this.nom = nom;
  this.mail = mail;
  this.tel = tel;
  this.direNom = function (params) {
  console.log("Je suis "+ this.nom +" "+this.prenom+", mon numéro est"+ this.tel+", mon mail est"+this.mail);
};
};
function personnePersonnel(prenom, nom,mail,tel,direNom, adressepostale) {
personneGeneral.call(this, prenom, nom,mail,tel,direNom);
this.adressepostale = adressepostale; 
};
function personneProfessionel(prenom, nom,mail,tel,direNom, NomEntreprise) {
  personneGeneral.call(this, prenom, nom,mail,tel,direNom);
  this.NomEntreprise = NomEntreprise; 
  };

// personnePersonnel(prenom, nom,mail,tel,direNom, adressepostale);



let david = new personnePersonnel("david","ATHUIL","david_athuil@yahoo.fr","0625142609","161 blvd ");
console.log(david);
// //partie 3

// class personneGeneral {
//   constructor(prenom, nom,mail,tel,direNom) {
//     this.prenom = prenom;
//     this.nom = nom;
//     this.mail = mail;
//     this.tel = tel;
    
//   }
//   direNom() {
//     console.log("Je suis "+ this.nom +" "+this.prenom+", mon numéro est"+ this.tel+", mon mail est"+this.mail);
//   }
// }

//   class personnePersonnel extends personneGeneral{
//   constructor(prenom, nom,mail,tel,direNom, adressepostale) {
//   super(prenom, nom,mail,tel,direNom);
//   this.adressepostale = adressepostale;
//   }
//   }
