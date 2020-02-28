
interface Person {
  firstname : string ;
  lastname : string ;

}


class Student {
  fullname : string ;

  constructor (public firstname : string ,
               public middlename : string ,
               public lastname : string )
  {
    this.fullname = firstname+ " " + middlename + " " + lastname ;
  }

}

function firstAndLastName (person : Person) {

      return `${person.firstname} ${person.lastname}`

}

var student = new Student("Muneeb","Ur","Rehmane") ;

document.body.textContent  = firstAndLastName(student) ;
