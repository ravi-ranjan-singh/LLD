import RefundStrategy from "./RefundStrategy";

// DIP -concrete class
class SameInstrumentRefundStrategy implements RefundStrategy {
  refund(): void {}
}

export default SameInstrumentRefundStrategy;
