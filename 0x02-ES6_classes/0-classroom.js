// Implement a class named ClassRoom

export default class ClassRoom {
  constructor(maxStudentsSize) {
    // asign parameter to private variable
    this._maxStudentsSize = maxStudentsSize;
  }

// Getter method to access maximum student size
getmaxStudentsSize() {
  return this._maxStudentsSize;
}

// setter method to set the value of maxStudentsSize
setmaxStudentsSize(newSize) {
  return this._maxStudentsSize = newSize;
}
}
