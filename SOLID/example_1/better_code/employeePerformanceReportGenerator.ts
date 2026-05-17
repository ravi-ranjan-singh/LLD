import Employee from "./employee";

//  only responsible for printing perrformance report

class EmployeePerformanceReportGenerator {
  public printPerformanceReport(emp: Employee) {
    console.log("Performance report of employee: " + emp.getName());
  }
}

export default EmployeePerformanceReportGenerator;
