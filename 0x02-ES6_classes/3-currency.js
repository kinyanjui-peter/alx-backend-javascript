// implemetation of class Currency

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      console.log(new Error('code must be  string'));
    }
    if (typeof name !== 'string') {
      console.log(new Error('code must be  string'));
    }
    this._code = code;
    this._name = name;
  };

    // getter and setter for code
  get code() {
    return this._code;
  };
  set code(value) {
    this._code = value;
  };
    // getter and setter for name
  get name() {
    return this._name;
  };
  set name(value) {
    this._name = value;
  };

  displayFullCurrency() {
    return '${this._name} (${this._code})';
  };
}
