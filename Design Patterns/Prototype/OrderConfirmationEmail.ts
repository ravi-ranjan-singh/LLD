import Email from "./Email";
import Prototype from "./Prototype";

class OrderConfirmationEmail
  extends Email
  implements Prototype<OrderConfirmationEmail>
{
  orderNumber: number;
  orderDate: string;

  constructor(
    obj: OrderConfirmationEmail | undefined,
    orderNumber: number,
    orderDate = Date.now().toLocaleString(),
    sender = "",
    subject = "",
    api_key: string | null = null,
    body = "",
  ) {
    if (obj) {
      super(obj);
      this.orderDate = obj.orderDate;
      this.orderNumber = obj.orderNumber;
      return;
    }

    super(undefined, sender, subject, api_key, body);
    this.orderDate = orderDate;
    this.orderNumber = orderNumber;
  }

  copy(): OrderConfirmationEmail {
    const copy = new OrderConfirmationEmail(this, 26376);
    return copy;
  }
  // Getters
  public getOrderNumber(): number {
    return this.orderNumber;
  }

  public getOrderDate(): string {
    return this.orderDate;
  }

  // setters
  public setOrderNumber(orderNumber: number): void {
    this.orderNumber = orderNumber;
  }

  public setDate(date: Date): void {
    this.orderDate = date.toLocaleString();
  }
}

export default OrderConfirmationEmail;
