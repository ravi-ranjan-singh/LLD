class DinersCreditCard extends CreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("Diners Credit Card swipeAndPay");
  }

  public doRefund(): void {
    console.log("Diners Credit Card doRefund");
  }

  public onlinePayment(): void {
    console.log("Diners Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Diners Credit Card tapAndPay");
  }

  public intlPayment(): void {
    console.log("Diners Credit Card intlPayment");
  }

  // public upiPayment(): void {
  //   console.log("Diners Credit Card upiPayment");
  // }
}
