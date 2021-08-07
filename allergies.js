//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(value) {
    this.value = value;
    this.set = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];
  }

  list() {
    return this.getAllergy();
  }

  getAllergy() {
    var i = this.value;
    i %= 256;
    return Number(i).toString(2).split('').reduce((acc, num, index) => {
      if (num == 1) {
        return [this.set.slice(0, Number(i).toString(2).length).reverse()[(parseInt(index))], ...acc]
      }

      return acc
    }, [])
  }

  allergicTo(item) {
    return this.getAllergy().indexOf(item) > -1;
  }

}