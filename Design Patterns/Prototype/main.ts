import Email from "./Email";
import OrderConfirmationEmail from "./OrderConfirmationEmail";

function main() {
  const original: Email = new Email(
    undefined,
    "test@abc.com",
    "Welcome Email",
    "AB123XXXXXXCD567",
    "<html><p>We welcome you to the platform</p></html>",
  );

  // const original: any = new OrderConfirmationEmail(
  //   undefined,
  //   2123,
  //   Date(),
  //   "test@abc.com",
  //   "Order Confirmed",
  //   "AB123XXXXXXCD567",
  //   `<html><p>Order Confirmation: ${2123}</p></html>`,
  // );

  const copy = original.copy();
  console.log(copy.getBody());
}

main();
