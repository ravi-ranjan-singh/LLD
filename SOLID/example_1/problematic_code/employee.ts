class Employee {
  private id: number;
  private name: string;
  private address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  // if the format of the report ( excel , pdf) changes, this class will change
  printPerformanceReport() {
    console.log("Performance report of employee: " + this.name);
  }

  // if things like tax bracket etc changes, this function will have to change
  computeSalary() {
    return 1000;
  }

  // if data storage requirements change, this function will change
  updateEmployeeData() {
    console.log("Employee Data updated successfully");
  }

  fetchEmployeeData() {
    console.log("Employee data fetched successfully");
  }
}

// since the above class is doing to many things therefore there are two many reasons to update the code present in the class
