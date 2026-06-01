import ATMState from "../enums/ATMState";
import State from "./State";

class ReadCardDetailsAndPinState implements State {
  initTransaction(): number {
    throw new Error(
      "Cannot init transaction while reading card details and pin",
    );
  }

  readCardDetailsAndPin(): boolean {
    return false;
  }

  readCashWithdrawalDetails(transactionId: number, amount: number): boolean {
    throw new Error(
      "Cannot read cash withdraw details while reading card details and pin",
    );
  }

  dispenseCash(transactionId: number): number {
    throw new Error("Cannot dispense cash while reading card details and pin");
  }

  ejectCard(): void {
    throw new Error("Cannot eject card while reading card details and pin");
  }

  getState(): ATMState {
    return ATMState.READ_CARD_DETAILS_AND_PIN;
  }
}
export default ReadCardDetailsAndPinState;
