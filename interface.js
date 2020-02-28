function abc(person) {
    return "person name : " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Admin", lastname: "User" };
document.body.textContent = abc(user);
