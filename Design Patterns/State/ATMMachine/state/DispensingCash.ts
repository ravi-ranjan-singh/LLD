import State from "./State";

class DispensingCash implements State {
  initTransaction(): number {}

  readCardDetailsAndPin(): boolean {}

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean {}

  dispenseCash(transactionId: number): number {}

  ejectCard(): void {}
}

export default DispensingCash;
