// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  //declared variables needed
  let employeesArray = [];
  let newEmployee = true;

  //loop to contain whether they want to add another employee
  while (newEmployee) {
  //created employee object with 3 properties
  //directly embedded window prompt to collect properties
  const currentEmployee = {
    firstName: window.prompt("Enter employee's First Name: "),
    lastName: window.prompt("Enter Employee Last Name: "),
    //made sure to convert salary to an float (integer with decimals)
    salary: parseFloat(window.prompt("Enter employee's salary: ")),
  }  

  // added employee object to last spot in array 
  employeesArray.push(currentEmployee);

  //log to check it works
  console.log(currentEmployee);
  console.log(employeesArray);

  //prompt to control the boolean of "newEmployee" yes/no
  newEmployee = window.confirm("would you like to enter another employee?")

}

  // return the array so other functions can access the data
  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  //declare variables
  let totalSalary =  0;
  let averageSalary = 0;
  let averageSalaryInt = 0;
  let averageSalaryDec = 0;

  //conditional statement to catch no employees
  //this prevents dividing by 0
  if (employeesArray.length == 0) {
    console.log("Sorry, no employees")
  } else {
    //loop to add each salary, for each employee
    for (i = 0; i < employeesArray.length; i++) {
      //add employee salary to a running total
      totalSalary += employeesArray[i].salary;
      // divided by employees for average, rounded to 2 decimals
      averageSalary = (totalSalary / employeesArray.length).toFixed(2);
      
    }
    //output answer
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
  }
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //another conditional statement to catch no employees
  if (employeesArray.length == 0) {
    console.log("Sorry, no employees")
  } else {
    //first make random integer from 0 to amount of employees  (rounded down)
    let randomIndex = Math.floor(Math.random() * employeesArray.length);
    //next call the name of employee at random index
    let randomEmployeeF = employeesArray[randomIndex].firstName;
    let randomEmployeeL = employeesArray[randomIndex].lastName;
    //output answer
    console.log(`Congratulations to ${randomEmployeeF} ${randomEmployeeL}, our random drawing winner!`);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

