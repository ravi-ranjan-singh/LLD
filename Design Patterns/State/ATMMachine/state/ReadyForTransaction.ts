import BackendAPI from "../apis/BackendAPI";
import ATMState from "../enums/ATMState";
import ATM from "../models/ATM";
import State from "./State";

class ReadyForTransaction implements State {
  private atm: ATM;
  private backendAPI: BackendAPI;

  constructor(atm: ATM, backendAPI: BackendAPI) {
    this.atm = atm;
    this.backendAPI = backendAPI;
  }

  initTransaction(): number {
    const transactionId = this.backendAPI.createTransaction(
      this.atm.getATMId(),
    );
    return transactionId;
  }

  readCardDetailsAndPin(): boolean {
    throw new Error("Cannot read card details and pin without inserting card");
  }

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean {
    throw new Error(
      "Cannot read cash withdraw details without reading card details and pin",
    );
  }

  dispenseCash(transactionId: number): number {
    throw new Error(
      "Cannot dispense cash without reading card details and pin",
    );
  }

  ejectCard(): void {
    throw new Error("Cannot eject card without reading card details and pin");
  }

  getState(): ATMState {
    return ATMState.READY_FOR_TRANSACTION;
  }
}

export default ReadyForTransaction;
