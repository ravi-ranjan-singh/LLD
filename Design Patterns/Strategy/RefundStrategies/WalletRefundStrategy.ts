import RefundStrategy from "./RefundStrategy";

// DIP -concrete class
class WalletRefundStrategy implements RefundStrategy {
  refund(): void {}
}

export default WalletRefundStrategy;
