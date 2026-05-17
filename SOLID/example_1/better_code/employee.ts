// this class is now only responsible for employee CRUD

class Employee {
  private id: number;
  private name: string;
  private address: string;

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  // Getter and Setter for id
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  // Getter and Setter for name
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  // Getter and Setter for address
  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }
}
export default Employee;
