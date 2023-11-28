class Key {
  private signature: number;
  constructor(signature: number) {
    this.signature = signature;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: "open" | "close";
  tenants: Person[] = [];
  key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if ((this.door = "open")) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if ((key = this.key)) {
      this.door = "open";
    } else {
      this.door = "close";
    }
  }
}
const key = new Key(Math.random());
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
