interface Person {
    name: string;
    Vorname: string;
    age: number;
    nationality: string;
}

class Players implements Person {
    private course: string[]; 

    constructor(
        public name: string,
        public Vorname: string,
        public age: number,
        public nationality: string,
        course: string[] 
    ) {
        this.course = course;
    }

    getCourses(): string[] {
        return this.course;
    }

    addCourse(newCourse: string): void {
        this.course.push(newCourse);
    }

    PlayersDetail(): string {
        return `${this.Vorname} ${this.name}, Age: ${this.age}, Nationality: ${this.nationality}`;
    }
}

const playerAli = new Players("Hinnawe", "Ali", 32, "Lebanese", ["Football"]);

playerAli.addCourse("Tennis");
console.log(playerAli.PlayersDetail()); 
console.log(playerAli.getCourses()); 
