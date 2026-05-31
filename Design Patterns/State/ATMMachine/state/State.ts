interface State {
  initTransaction(): number;

  readCardDetailsAndPin(): boolean; // return true if card details and pin is valid otherwise false

  dispenseCash(transactionId: number): number; // returns the amount dispensed

  ejectCard(): void;

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean; // return true if cash withdrawal details are valid
}

export default State;
