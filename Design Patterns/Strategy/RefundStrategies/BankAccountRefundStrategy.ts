import RefundStrategy from "./RefundStrategy";

// DIP -concrete class
class BankAccountRefundStrategy implements RefundStrategy {
  refund(): void {}
}

export default BankAccountRefundStrategy;
