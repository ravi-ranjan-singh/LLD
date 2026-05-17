import CreditCard from "../CreditCard";
import RefundCompatibleCreditCard from "../RefundCompatibleCreditCard";
import BankAccountRefundStrategy from "../RefundStrategies/BankAccountRefundStrategy";
import RefundStrategy from "../RefundStrategies/RefundStrategy";
import UPICompatibleCreditCard from "../UPICompatibleCreditCard";

class RupayCreditCard
  extends CreditCard
  implements UPICompatibleCreditCard, RefundCompatibleCreditCard
{
  refundStrategy: RefundStrategy;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
    this.refundStrategy = new BankAccountRefundStrategy();
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
  doRefund(): void {
    this.refundStrategy.refund();
  }
  upiPayment(): void {}
}

export default RupayCreditCard;
