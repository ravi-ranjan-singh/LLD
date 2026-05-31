import ATMState from "../enums/ATMState";
import State from "./State";

class EjectingCard implements State {
  initTransaction(): number {
    return 0;
  }

  readCardDetailsAndPin(): boolean {
    return false;
  }

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean {
    return false;
  }

  dispenseCash(transactionId: number): number {
    return 0;
  }

  ejectCard(): void {}

  getState(): ATMState {
    return ATMState.READY_FOR_TRANSACTION;
  }
}

export default EjectingCard;
