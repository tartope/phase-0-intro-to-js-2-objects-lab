const employee = {
    name: 'Jane Sie',
    streetAddress: '123 Strasse St',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee1 = {...employee};
    delete newEmployee1.name;
    return newEmployee1
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee
}









// Write your solution in this file!
// const employee = {
//     name: "Jane Doe",
//     streetAddress: "123 Washington Avenue",
// }
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newEmployee = {...employee};
//     newEmployee[key] = value;
//     return newEmployee;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key){
//     const newObject = Object.assign({}, employee);
//     delete newObject[key];
//     return newObject;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// }