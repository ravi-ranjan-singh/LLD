import ATMState from "../enums/ATMState";

export default class UpdateATMStateRequestDTO {
  private readonly atmId: string;
  private readonly state: ATMState;

  constructor(atmId: string, state: ATMState) {
    this.atmId = atmId;
    this.state = state;
  }

  public getAtmId(): string {
    return this.atmId;
  }

  public getState(): ATMState {
    return this.state;
  }
}
