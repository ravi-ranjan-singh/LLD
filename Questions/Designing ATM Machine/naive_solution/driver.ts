import { nanoid } from "nanoid";
import ATM from "./atm";

function main() {
  const atm = new ATM(nanoid(), 25000);

  atm.startTransaction();
  atm.acceptCard({
    cvv: 100,
    expiry: "02/24",
    number: "1234 5678 9123 4678",
    holderName: "Rahul",
  });
  atm.acceptPin(1234);
  atm.acceptAmount(2000);
  atm.widthdraw();
  atm.endTransaction();
}

main();
// https://pastebin.com/LVvrFfST
