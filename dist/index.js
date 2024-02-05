"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateRectangleArea() {
        console.log(this.height * this.width);
    }
    calculateRectanglePerimeter() {
        console.log(2 * (this.height + this.width));
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateCircleArea() {
        console.log(Math.PI * Math.pow(this.radius, 2));
    }
    calculateCirclePerimeter() {
        console.log(2 * Math.PI * this.radius);
    }
}
const rectangle = new Rectangle(10, 20);
const circle = new Circle(10);
rectangle.calculateRectangleArea();
circle.calculateCircleArea();
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
function findMax(numbers) {
    return Math.max(...numbers);
}
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);
const maxNumber = findMax([23, 56, 12, 89, 43]);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);
console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactionHistory = [];
    }
    getAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Not enough money to withdraw");
        }
    }
    transferFunds(amount, account) {
        if (this.balance >= amount) {
            this.balance -= amount;
            account.balance += amount;
        }
        else {
            console.log("Not enough money to transfer");
        }
    }
    getTransactionHistory() {
        console.log(this.transactionHistory);
    }
    recordTransaction(amount, date) {
        this.transactionHistory.push({
            amount,
            date,
            account: this,
        });
    }
}
const account1 = new BankAccount(123456, 1000);
const account2 = new BankAccount(654321, 2000);
account1.deposit(1000);
account1.withdraw(500);
account1.transferFunds(1000, account2);
account1.recordTransaction(1000, "2021-01-01");
account1.recordTransaction(1222, "2021-01-01");
account2.deposit(2200);
account2.transferFunds(2000, account1);
account2.recordTransaction(2000, "2021-01-01");
account1.getTransactionHistory();
account2.getTransactionHistory();
account1.getAccountInfo();
account2.getAccountInfo();
