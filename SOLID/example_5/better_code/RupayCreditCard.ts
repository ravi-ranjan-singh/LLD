import CreditCard from "./CreditCard";
import RefundCompatibleCreditCard from "./RefundCompatibleCreditCard";
import UPICompatibleCreditCard from "./UPICompatibleCreditCard";

class RupayCreditCard
  extends CreditCard
  implements UPICompatibleCreditCard, RefundCompatibleCreditCard
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
    console.log("Rupay Credit Card swipeAndPay");
  }

  public onlinePayment(): void {
    console.log("Rupay Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Rupay Credit Card tapAndPay");
  }
  doRefund(): void {}
  upiPayment(): void {}
}
