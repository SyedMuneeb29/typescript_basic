var Student = /** @class */ (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
    return Student;
}());
function firstAndLastName(person) {
    return person.firstname + " " + person.lastname;
}
var student = new Student("Muneeb", "Ur", "Rehmane");
document.body.textContent = firstAndLastName(student);
