import Email from "./Email";

function main() {
  const original = new Email(
    "test@abc.com",
    "Order Confirmed",
    "AB123XXXXXXCD567",
    // in real world, this will be a file i/o
    "<html><p>Order Confirmation</p></html>",
  );

  const copy = new Email();

  // copy.setSender(original.getSender());
  // copy.setSubject(original.getSubject());
  // copy.setAPI_KEY(original.getAPI_KEY());
  // copy.setBody(original.getBody().replace("{{name}}", "John Doe"));

  /*
  This current solution is violating:
  1. DRY principle as if we have to create n emails , we will be repeating this 5-6 step copy n number of times
  2. OCP - Whenever an attributed is added/removed from the original email, the code for copy in createCopy
     function will also have to change to handle that while copying which violates OCP for createCopy function
  3. Tight coupling between original class and copy logic as they both need to be present at the same place
  */

  // solving dry principle

  // function createCopy(name: string) {
  //   const copy = new Email();
  //   copy.setSender(original.getSender());
  //   copy.setSubject(original.getSubject());
  //   copy.setAPI_KEY(original.getAPI_KEY());
  //   copy.setBody(original.getBody().replace("{{name}}", name));
  //   return copy;
  // }

  // createCopy("John Doe");

  copy.copy_constructor(original);

  console.log(copy.getSender());
  // now this solves the 1 and 2 (using copy constructor) as earlier OCP was getting violated as
  // whenever the email class changes , copy function would also change
}
