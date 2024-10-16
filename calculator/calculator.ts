class Calculator {
    operand1: HTMLInputElement;
    operand2: HTMLInputElement;
    operand: HTMLSelectElement;
    buttonCalculate: HTMLButtonElement;
    buttonResult: HTMLButtonElement;

    constructor() {
        // Fetching DOM elements and assigning them to class properties
        this.operand1 = document.querySelector("body>input.operand1") as HTMLInputElement;
        this.operand2 = document.querySelector("body>input.operand2") as HTMLInputElement;
        this.operand = document.querySelector("body>select.operand") as HTMLSelectElement;  // Fixed the selector for the operand
        this.buttonCalculate = document.querySelector("body>button.equals") as HTMLButtonElement;
        this.buttonResult = document.querySelector("body>button.results") as HTMLButtonElement;

        // Binding the event listener correctly with 'this'
        this.buttonCalculate.addEventListener("click", this.handleCalculate.bind(this));
    }

    // Function to perform the calculation
    calculatorFunction(operand1Value: number, operand2Value: number): number {
        switch (this.operand.value) {
            case 'addition':
                return operand1Value + operand2Value;

            case 'subtraction':
                return operand1Value - operand2Value;

            case 'multiplication':
                return operand1Value * operand2Value;  

            default:
                return 0;
        }
    }

    
    handleCalculate() {
        
        const operand1Value: number = parseInt(this.operand1.value || "0");
        const operand2Value: number = parseInt(this.operand2.value || "0");

        const result = this.calculatorFunction(operand1Value, operand2Value);
        console.log("Result:", result);

        this.buttonResult.textContent = `Result: ${result}`;
    }
}

// Instantiate the calculator
const calculator = new Calculator();
