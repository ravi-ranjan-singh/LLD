export default interface BackendAPI {
  createTransaction(atmId: string): number;

  updateState(): boolean;

  getATMAmount(): number;
}
