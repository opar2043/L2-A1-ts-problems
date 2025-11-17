// * Problem 1 ==============================

function formatValue(
  value: string | number | boolean
): string | number | boolean | undefined {
  if (typeof value == "string") {
    return value.toUpperCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else if (typeof value == "boolean") {
    return !value;
  }
}

// * Problem 2 ==============================

const getLength = (value: string | unknown[]): number | undefined => {
  if (typeof value == "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};


// * Problem 3 ==============================

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

// * Problem 4 ==============================

type RatedArr = {
  title: string;
  rating: number;
};


const filterByRating = (books: RatedArr[]): RatedArr[] => {
  return books.filter((book) => book.rating > 4);
};



// * Problem 5 ==============================

type ActiveUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: ActiveUser[]): ActiveUser[] => {
  return users.filter((user) => user.isActive == true);
};


// * Problem 6 ==============================
type Books = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};

// * Problem 7 ==============================
// * Problem 8 ==============================

type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};


const calculateTotalPrice = (items: Products[]): number => {
  return items.reduce((total, item) => {
    if (item.discount) {
      const discountPrice =  item.price * item.quantity;
      const totalprice = discountPrice * (1 - item.discount / 100);
      return totalprice + total;
    } else {
      const totalprice = total + item.price * item.quantity;
      return totalprice;
    }
  }, 0);
};


