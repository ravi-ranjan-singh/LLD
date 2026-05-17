import CreditCard from "../CreditCard";

class DinnersCreditCard extends CreditCard {
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

  public onlinePayment(): void {
    console.log("Diners Credit Card onlinePayment");
  }

  public tapAndPay(): void {
    console.log("Diners Credit Card tapAndPay");
  }
}

export default DinnersCreditCard;
