type HasSides = {
  numberOfSides: number;
};

type SideHasLength = {
  sideLength: number;
};

function logPerimeter<Shape extends HasSides & SideHasLength>(shape: Shape): Shape {
  console.log(shape.numberOfSides * shape.sideLength);
  return shape;
}

type Square = HasSides & SideHasLength;

let square: Square = {
  numberOfSides: 4,
  sideLength: 3,
};

logPerimeter(square);
