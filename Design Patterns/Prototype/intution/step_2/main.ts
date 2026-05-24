import Email from "./Email";
import OrderConfirmationEmail from "./OrderConfirmationEmail";

function main() {
  // What if we have parent and child and parent class such that parent class is the one which is
  // expensive to create which means even child class will become expensive to create. Though we
  // can follow the same pattern where we have copy constructor on child class as well but that will
  // have to call the copy constructor of parent class. This have some issues which is shown by the below code

  const original: Email = new Email(
    undefined,
    "test@abc.com",
    "Order Confirmed",
    "AB123XXXXXXCD567",
    "<html><p>Order Confirmation</p></html>",
  );

  // const original: any = new OrderConfirmationEmail(
  //   undefined,
  //   2123,
  //   Date(),
  //   "test@abc.com",
  //   "Order Confirmed",
  //   "AB123XXXXXXCD567",
  //   "<html><p>Order Confirmation</p></html>",
  // );

  // now we have original object but now since we have both parent class and child class we don't whether
  // the original object which need to be cloned belongs to parent class or child class because we can
  // event do what is there in the commented code. So when object comes we will have to do something like
  let copy: Email;

  if (original instanceof OrderConfirmationEmail) {
    copy = new OrderConfirmationEmail(original, 2124, Date());
  } else if (original instanceof Email) {
    copy = new Email(original);
  }

  // Why this code is needed - Because we can pass original object create by calling OrderConfirmationEmail
  // to constructor of Email but we can't pass original created using Email to copy constructor of OrderConfirmationEmail
  // as it also requires orderNo and orderDate

  // The above code is vialoating OCP because tomorrow if we introduce a new email which inherits
  // from Email class we will have to come here and add a check for that as well
  // The main issue is The logic to create copy is written in the corresponding classes
  // but which logic to trigger is written in the driver class / main function. The responsibility of which
  // copy logic to call is given to driver class which is not very suitable

  // Solution:
  // Driver class or main function should not drive which logic to trigger, instead each class can expose
  // a copy or clone method which give a new copy of the class using that object which solves this problem
  // This called prototype design pattern
}

main();
