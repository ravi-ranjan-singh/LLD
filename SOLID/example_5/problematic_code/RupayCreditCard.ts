class RupayCreditCard extends CreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("Rupay Credit Card swipeAndPay");
  }

  public doRefund(): void {
    console.log("Rupay Credit Card doRefund");
  }

  public onlinePayment(): void {
    console.log("Rupay Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Rupay Credit Card tapAndPay");
  }

  public upiPayment(): void {
    console.log("Rupay Credit Card upiPayment");
  }

  public intlPayment(): void {
    throw new Error("Not supported yet.");
  }
}
