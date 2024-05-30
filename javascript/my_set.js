class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    this.data = {};
    if (typeof(iterable) === "string" || Array.isArray(iterable)) {
      for (let n of iterable) {
        this.data[n] = true
      }
    } else if (!iterable) {
      this.data = {};
    }
    else {
      throw new Error("message")
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data[item]) {
      return delete this.data[item]
    } else {
      return false
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return this.data[item] === true
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return this.data.keys
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = MySet;

