class Position {
  constructor(private column: Column, private row: Row) {}

  distanceFrom(position: Position) {
    return {
      row: Math.abs(position.row - this.row),
      column: Math.abs(position.column.charCodeAt(0) - this.column.charCodeAt(0)),
    };
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, column: Column, row: Row) {
    this.position = new Position(column, row);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position);
    return distance.row < 2 && distance.column < 2;
  }
}

class Queen extends Piece {}

class Bishop extends Piece {}

class Knight extends Piece {}

class Rook extends Piece {}

class Pawn extends Piece {}

type Color = 'black' | 'white';
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type Column = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

class Game {
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      // kings
      new King('white', 'e', 1),
      new King('black', 'e', 8),

      // queens
      new Queen('white', 'd', 1),
      new Queen('black', 'd', 8),

      // bishops
      new Bishop('white', 'c', 1),
      new Bishop('white', 'f', 1),
      new Bishop('black', 'c', 8),
      new Bishop('black', 'f', 8),

      // knights
      new Knight('white', 'b', 1),
      new Knight('white', 'g', 1),
      new Knight('black', 'b', 8),
      new Knight('black', 'g', 8),

      // rooks
      new Rook('white', 'a', 1),
      new Rook('white', 'h', 1),
      new Rook('black', 'a', 8),
      new Rook('black', 'h', 8),

      // pawns
      new Pawn('white', 'b', 1),
      new Pawn('white', 'b', 2),
      new Pawn('white', 'b', 3),
      new Pawn('white', 'b', 4),
      new Pawn('white', 'b', 5),
      new Pawn('white', 'b', 6),
      new Pawn('white', 'b', 7),
      new Pawn('white', 'b', 8),
      new Pawn('black', 'f', 1),
      new Pawn('black', 'f', 2),
      new Pawn('black', 'f', 3),
      new Pawn('black', 'f', 4),
      new Pawn('black', 'f', 5),
      new Pawn('black', 'f', 6),
      new Pawn('black', 'f', 7),
      new Pawn('black', 'f', 8),
    ];
  }
}

// const p: Piece = new Piece('black', 1, 'a');
