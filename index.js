// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) return false;
      const [a, b, c] = this.sides.sort((x, y) => x - y);
      return a + b > c;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      return this.countSides === 4 && this.sides.every(side => side === this.sides[0]);
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  }