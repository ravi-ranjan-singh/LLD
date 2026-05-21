import OrderRepository from "./OrderRepository";

class OrderService {
  // dependency inversion is being followed here because we are depending on abstarction rather
  // then concrete classes
  orderRepository: OrderRepository;
  // dependency injection is used here to suply the value of abstraction at runtime
  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  createOrder(order: Object) {
    this.orderRepository.insertOrder(order);
  }
}

export default OrderService;
