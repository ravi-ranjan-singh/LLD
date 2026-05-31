import State from "./State";

class ReadingCashWithdrawDetails implements State {
  initTransaction(): number {}

  readCardDetailsAndPin(): boolean {}

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean {}

  dispenseCash(transactionId: number): number {}

  ejectCard(): void {}
}

export default ReadingCashWithdrawDetails;
