abstract class CreditCard {
  private cardNumber: string;
  private cardHolder: string;
  private expiryDate: string;
  private cvv: number;

  constructor(
    cardNumber: string,
    cardHolder: string,
    expiryDate: string,
    cvv: number,
  ) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
  }

  // Getters and Setters

  public abstract swipeAndPay(): void;
  public abstract onlinePayment(): void;
  public abstract tapAndPay(): void;
}
export default CreditCard;
/*
Now the issue remains is of code duplication between diff class where they have common methods
for example : doRefund() , for this method code will be duplicated across different classes
which implements RefundCompatibleCreditCard, even if move it to base class, the issue will be
either not all card support Refund or event if they support some may have different algo for refund
example Visa and Master might have common algo whereas Rupay may have a different algo for refund which
might be common with some other card say Amex. In that case even if move it to base class we again will
end up having to overide it for Rupay and Amex (assuming we moved the Visa and Master algorith to the base)
and there will be code duplication in Rupay and Amex.

To Solve this we can use something call Strategy Design pattern
*/
