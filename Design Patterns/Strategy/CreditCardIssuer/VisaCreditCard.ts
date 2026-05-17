import CreditCard from "../CreditCard";
import RefundCompatibleCreditCard from "../RefundCompatibleCreditCard";
import RefundStrategy from "../RefundStrategies/RefundStrategy";
import SameInstrumentRefundStrategy from "../RefundStrategies/SameInstrumentRefundStrategy";

class VisaCreditCard extends CreditCard implements RefundCompatibleCreditCard {
  refundStrategy: RefundStrategy;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
    this.refundStrategy = new SameInstrumentRefundStrategy();
  }

  public swipeAndPay(): void {
    console.log("Visa Credit Card swipeAndPay");
  }

  public onlinePayment(): void {
    console.log("Visa Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Visa Credit Card tapAndPay");
  }

  doRefund(): void {
    this.refundStrategy.refund();
  }
}

export default VisaCreditCard;
