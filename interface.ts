interface Person {
     firstname : string ;
     lastname : string ;
}

function abc(person : Person) {

  return `person name : ${person.firstname} ${person.lastname}` ;

}

let user = {firstname : "Admin" , lastname : "User"} ;

document.body.textContent = abc(user) ;
