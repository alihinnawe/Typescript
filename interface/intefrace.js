var Players = /** @class */ (function () {
    function Players(name, Vorname, age, nationality, course) {
        this.name = name;
        this.Vorname = Vorname;
        this.age = age;
        this.nationality = nationality;
        this.course = course;
    }
    Players.prototype.getCourses = function () {
        return this.course;
    };
    Players.prototype.addCourse = function (newCourse) {
        this.course.push(newCourse);
    };
    Players.prototype.PlayersDetail = function () {
        return "".concat(this.Vorname, " ").concat(this.name, ", Age: ").concat(this.age, ", Nationality: ").concat(this.nationality);
    };
    return Players;
}());
var playerAli = new Players("Hinnawe", "Ali", 32, "Lebanese", ["Football"]);
playerAli.addCourse("Tennis");
console.log(playerAli.PlayersDetail());
console.log(playerAli.getCourses());
