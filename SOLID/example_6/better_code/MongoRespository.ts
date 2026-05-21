import OrderRepository from "./OrderRepository";

class MongoRepository implements OrderRepository {
  insertOrder(order: Object) {
    console.log("order added: ", order);
  }
}

export default MongoRepository;
