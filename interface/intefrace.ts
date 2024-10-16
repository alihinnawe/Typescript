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

    get PersonTemplate () { return document.querySelector("head>template.personTable");}

    get PersonSection () { return this.PersonTemplate?.querySelector("sectionn.personTable");}

    getCourses(): string[] {
        return this.course;
    }

    addCourse(newCourse: string): void {
        this.course.push(newCourse);
    }

    PlayersDetail(): string {
        return `${this.Vorname} ${this.name}, Age: ${this.age}, Nationality: ${this.nationality}`;
    }

    createNewTable(){
        const tableRow = this.PersonTemplate.content.firstElementChild.cloneNode(true);
        this.PersonSection.append(tableRow);


    }
}

const playerAli = new Players("Hinnawe", "Ali", 32, "Lebanese", ["Football"]);

playerAli.addCourse("Tennis");
console.log(playerAli.PlayersDetail()); 
console.log(playerAli.getCourses()); 

