    // When the page is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll(".operation-button"); // Get all operation buttons
        const resultDiv = document.getElementById("result"); // Where to show the result
  
        // 10% chance for faulty behavior
        const isFaulty = () => Math.random() < 0.1; // Randomly decide if the calculator should make a mistake
  
        // Function to calculate the result, with the possibility of a mistake
        const calculate = (num1, num2, operator) => {
          if (isFaulty()) { 
            // If the calculator is faulty, it performs the wrong operation
            switch (operator) {
              case "+": return num1 - num2; // + becomes -
              case "-": return num1 / num2; // - becomes /
              case "*": return num1 + num2; // * becomes +
              case "/": return num1 ** num2; // / becomes **
              default: return "Invalid operation!";
            }
          } else {
            // If not faulty, it performs the correct operation
            switch (operator) {
              case "+": return num1 + num2;
              case "-": return num1 - num2;
              case "*": return num1 * num2;
              case "/": return num1 / num2;
              default: return "Invalid operation!";
            }
          }
        };
  
        // Add click listeners to all buttons
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            const num1 = parseFloat(document.getElementById("input1").value); // Get the first number
            const num2 = parseFloat(document.getElementById("input2").value); // Get the second number
            const operator = button.getAttribute("data-operator"); // Get the operator (e.g., +, -, etc.)
  
            // If one or both numbers are invalid, show a message
            if (isNaN(num1) || isNaN(num2)) {
              resultDiv.textContent = "Result: Please enter valid numbers.";
            } else {
              // Calculate and show the result
              const result = calculate(num1, num2, operator);
              resultDiv.textContent = `Result: ${result}`;
            }
          });
        });
      });