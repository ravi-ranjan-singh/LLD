enum Color {
  BLACK,
  WHITE,
}

class ChessPiece {
  symbol: string;
  positionX: number;
  positionY: number;
  color: Color;

  constructor(symbol: string, startPosition: [number, number], color: Color) {
    this.symbol = symbol;
    this.positionX = startPosition[0];
    this.positionY = startPosition[1];
    this.color = color;
  }

  move(endPosition: [number, number]) {
    if (!this.isValidMove(endPosition)) {
      throw Error("invalid move");
    }
    this.makeMove(endPosition);
  }

  private isValidMove(endPosition: [number, number]) {
    // assuming there will be some logic
    return true;
  }

  private makeMove(endPosition: [number, number]) {
    this.positionX = endPosition[0];
    this.positionY = endPosition[1];
  }
}
