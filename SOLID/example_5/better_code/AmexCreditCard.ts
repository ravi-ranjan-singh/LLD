import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";

class AmexCreditCard extends CreditCard implements RefundCompatibleCreditCard {
  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
  }

  public swipeAndPay(): void {
    console.log("Amex Credit Card swipeAndPay");
  }

  public onlinePayment(): void {
    console.log("Amex Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Amex Credit Card tapAndPay");
  }
  doRefund(): void {}
}
