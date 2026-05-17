class MasterCardCreditCard extends CreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("MasterCard Credit Card swipeAndPay");
  }

  public doRefund(): void {
    console.log("MasterCard Credit Card doRefund");
  }

  public onlinePayment(): void {
    console.log("MasterCard Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("MasterCard Credit Card tapAndPay");
  }

  public intlPayment(): void {
    console.log("MasterCard Credit Card intlPayment");
  }

  // public upiPayment(): void {
  //   console.log("MasterCard Credit Card upiPayment");
  // }
}
