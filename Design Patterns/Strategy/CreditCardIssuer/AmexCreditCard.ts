import CreditCard from "../CreditCard";
import RefundCompatibleCreditCard from "../RefundCompatibleCreditCard";
import RefundStrategy from "../RefundStrategies/RefundStrategy";
import WalletRefundStrategy from "../RefundStrategies/WalletRefundStrategy";

class AmexCreditCard extends CreditCard implements RefundCompatibleCreditCard {
  refundStrategy: RefundStrategy;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    super(cardNumber, cardHolder, expiryDate, cvv);
    // DIP
    this.refundStrategy = new WalletRefundStrategy();
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
  doRefund(): void {
    this.refundStrategy.refund();
  }
}

export default AmexCreditCard;
