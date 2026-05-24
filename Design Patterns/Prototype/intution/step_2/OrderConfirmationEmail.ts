import Email from "./Email";

class OrderConfirmationEmail extends Email {
  orderNumber: number;
  orderDate: string;

  // this will act as both a constructor and copy constructor
  // improved as compared to step 1 for the sake of simplicity
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
