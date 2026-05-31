class ATM {
  private atmId: string;

  constructor(atmId: string) {
    this.atmId = atmId;
  }

  getATMId(): string {
    return this.atmId;
  }
}

export default ATM;
