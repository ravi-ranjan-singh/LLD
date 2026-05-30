import { nanoid } from "nanoid";

interface Card {
  number: string;
  expiry: string;
  holderName: string;
  cvv: number;
}

interface ATMState {
  transactionId?: string;
  card?: Card;
  amount?: number;
}

class ATM {
  private atmId;
  private atmState: ATMState;
  private atmDailyLimit: number;

  constructor(atmId: string, atmDailyLimit: number) {
    this.atmId = atmId;
    this.atmState = {};
    this.atmDailyLimit = atmDailyLimit;
  }

  private generateTransactionId() {
    // make api call to start a transaction
    return nanoid();
  }

  private validateCardDetails(card: Card) {
    console.log("Validating Card: ", card);
    // make api call to bank server
    return true;
  }

  private validatePin(pin: number) {
    // api call to validate
    console.log("Validating Pin", this.atmState?.card?.number, pin);
    return true;
  }

  private fetchAccountBalance() {
    // fetch account balance based on card details
    console.log(
      "fetching account balance for card: ",
      this.atmState.card?.number,
    );

    return 10000;
  }

  private dispanceCash() {
    // start dispancing cash
  }

  public startTransaction() {
    this.atmState.transactionId = this.generateTransactionId();
  }

  public acceptCard(card: Card) {
    if (!this.validateCardDetails(card)) {
      return this.endTransaction();
    }
    this.atmState.card = card;
  }

  public acceptPin(pin: number) {
    if (!this.validatePin(pin)) {
      return this.endTransaction();
    }
  }

  public acceptAmount(amount: number) {
    this.atmState.amount = amount;
  }

  public widthdraw() {
    const accountBalance = this.fetchAccountBalance();
    if (
      this.atmState.amount &&
      (this.atmState.amount > accountBalance ||
        this.atmState.amount > this.atmDailyLimit)
    ) {
      return this.endTransaction();
    }
    // api call to update balance
    this.dispanceCash();
  }

  public endTransaction() {
    console.log("transaction cancelled: ", this.atmState.transactionId);
    this.atmState = {};
  }

  public cancelTransaction() {
    this.endTransaction();
  }
}

export default ATM;
