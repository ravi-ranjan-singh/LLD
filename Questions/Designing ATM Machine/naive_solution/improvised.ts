enum ATMState {
  IDLE,
  TRANSACTION_IN_PROGRESS,
  CARD_INSERTED,
  AMOUNT_ENTERED,
  DISPENSING_CASH,
}

class ATM {
  // Instance variables
  private atmId: string;
  private state: ATMState;

  constructor(atmId: string) {
    this.atmId = atmId;
    this.state = ATMState.IDLE;
  }

  // Start a transaction
  public startTransaction(): number {
    if (this.state !== ATMState.IDLE) {
      throw new Error("ATM is currently busy with another transaction.");
    }

    this.state = ATMState.TRANSACTION_IN_PROGRESS;

    const transactionId = this.generateTransactionId();

    console.log(
      `Transaction started with ID: ${transactionId} on ATM: ${this.atmId}`,
    );

    return transactionId;
  }

  // Cancel a transaction
  public cancelTransaction(): void {
    if (this.state === ATMState.IDLE) {
      throw new Error("No transaction to cancel.");
    }

    if (this.state == ATMState.DISPENSING_CASH) {
      throw new Error("Cannot cancel transaction while dispensing cache");
    }

    this.state = ATMState.IDLE;

    console.log(`Transaction canceled on ATM: ${this.atmId}`);
  }

  // Read card details and validate
  public readCard(cardType: string, cardNumber: number, pin: number): boolean {
    if (this.state !== ATMState.TRANSACTION_IN_PROGRESS) {
      throw new Error("Cannot read card. Start a transaction first.");
    }

    this.state = ATMState.CARD_INSERTED;

    const isValid = this.validateCardDetails(cardType, cardNumber, pin);

    if (!isValid) {
      this.state = ATMState.IDLE;
    }

    return isValid;
  }

  // Enter withdrawal amount
  public enterAmount(amount: number): boolean {
    if (this.state !== ATMState.CARD_INSERTED) {
      throw new Error("Card must be inserted before entering an amount.");
    }

    this.state = ATMState.AMOUNT_ENTERED;

    return this.checkWithdrawalLimit(amount);
  }

  // Dispense cash
  public dispenseCash(amount: number): void {
    if (this.state !== ATMState.AMOUNT_ENTERED) {
      throw new Error("Amount must be entered before dispensing cash.");
    }

    this.state = ATMState.DISPENSING_CASH;

    console.log(`Dispensing cash: ${amount} on ATM: ${this.atmId}`);

    this.state = ATMState.IDLE;
  }

  // Eject card
  public ejectCard(): void {
    if (this.state === ATMState.IDLE) {
      throw new Error("No card to eject.");
    }

    this.state = ATMState.IDLE;

    console.log(`Card ejected from ATM: ${this.atmId}`);
  }

  // Private helper methods
  private generateTransactionId(): number {
    return Math.floor(Math.random() * 100000);
  }

  private validateCardDetails(
    cardType: string,
    cardNumber: number,
    pin: number,
  ): boolean {
    // Simulate card validation
    return true;
  }

  private checkWithdrawalLimit(amount: number): boolean {
    // Simulate withdrawal limit check
    return amount <= 1000;
  }
}
