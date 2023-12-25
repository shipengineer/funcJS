class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log(this.name);
  }
}
class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(this.name);
    console.log(this.department);
  }
}
const employee = new Employee('John Smith');
employee.displayInfo();
const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();
//_______________________________________

class Order {
  constructor(orderNumber, products) {
    this.orderNumber = orderNumber;
    if (products) {
      this.products = products;
    } else {
      this.products = {};
    }
  }
  addProduct(product) {
    this.products[product.name] = product.price;
    console.log(this.products);
  }
  getTotalPrice() {
    return Object.values(this.products).reduce((elem, sum) => sum + elem);
  }
}
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice());
