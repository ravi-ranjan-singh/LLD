import BackendAPI from "./BackendAPI";

class NodeBackendAPI implements BackendAPI {
  createTransaction(atmId: string): number {
    if (!atmId) {
      throw new Error("ATM ID is required to create transaction");
    }
    console.log(`Creating transaction for ATM ${atmId}`);
    return Math.floor(Math.random() * 1000);
  }

  updateState(): boolean {
    console.log("Updating state in backend");
    return true;
  }

  getATMAmount(): number {
    console.log("Getting ATM amount from backend");
    return 10000;
  }
}

export default NodeBackendAPI;
