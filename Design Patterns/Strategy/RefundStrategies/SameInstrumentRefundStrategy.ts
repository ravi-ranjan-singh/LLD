import RefundStrategy from "./RefundStrategy";

class SameInstrumentRefundStrategy implements RefundStrategy {
  refund(): void {}
}

export default SameInstrumentRefundStrategy;
