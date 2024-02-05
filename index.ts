class Rectangle {
  width: number;
  height: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
  calculateRectangleArea(): void {
    console.log(this.height * this.width);
  }
  calculateRectanglePerimeter(): void {
    console.log(2 * (this.height + this.width));
  }
}

class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateCircleArea(): void {
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

function addNumbers(a: number, b: number) {
  return a + b;
}

function multiplyNumbers(a: number, b: number) {
  return a * b;
}

function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]) {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]) {
  return Math.max(...numbers);
}

function isPalindrome(str: string) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
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

/* 

2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
   კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
   გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
   კლასში უნდა გვქონდეს მეთოდები:
   getAccountInfo
   deposit - თანხის დამატება ანგარიშზე.
   withdraw - თანხის მოკლება ანგარიშიდან.
   transferFunds - გადარიცხვა სხვა BankAccount_ზე
   getTransactionHistory - აბრუნებს transactionHistory_ მასივს
   recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ

   შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
   გავაკეთოთ სხვადასხვა ოპერაციები.
   დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.

*/

interface Props {
  amount: number;
  date: string;
  account: BankAccount;
}

class BankAccount {
  private accountNumber: number;
  private balance: number;
  private transactionHistory: Props[];
  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactionHistory = [];
  }
  getAccountInfo(): void {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Balance: ${this.balance}`);
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Not enough money to withdraw");
    }
  }
  transferFunds(amount: number, account: BankAccount): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      account.balance += amount;
    } else {
      console.log("Not enough money to transfer");
    }
  }
  getTransactionHistory(): void {
    console.log(this.transactionHistory);
  }
  recordTransaction(amount: number, date: string): void {
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
