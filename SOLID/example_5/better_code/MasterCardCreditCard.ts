import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";

class MasterCardCreditCard
  extends CreditCard
  implements RefundCompatibleCreditCard
{
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

  public onlinePayment(): void {
    console.log("MasterCard Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("MasterCard Credit Card tapAndPay");
  }
  doRefund(): void {}
}
