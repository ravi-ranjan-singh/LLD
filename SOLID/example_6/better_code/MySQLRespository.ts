import OrderRepository from "./OrderRepository";

class MySQLRepository implements OrderRepository {
  insertOrder(order: Object) {
    console.log("order inserted", order);
  }
}

export default MySQLRepository;
