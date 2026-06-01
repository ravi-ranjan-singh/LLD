export default class CreateTransactionRequestDTO {
  private readonly atmId: string;

  constructor(atmId: string) {
    this.atmId = atmId;
  }

  public getAtmId(): string {
    return this.atmId;
  }
}
