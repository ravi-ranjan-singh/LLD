class Email {
  private sender: string;
  private subject: string;
  private API_KEY: string | null;
  private body: string;

  // this will act as both a constructor and copy constructor
  // improved as compared to step 1 for the sake of simplicity
  constructor(
    obj: Email | undefined,
    sender = "",
    subject = "",
    api_key: string | null = null,
    body = "",
  ) {
    if (obj) {
      this.sender = obj.getSender();
      this.subject = obj.getSubject();
      this.API_KEY = obj.getAPI_KEY();
      this.body = obj.getBody();
      return;
    }

    this.sender = sender;
    this.subject = subject;
    this.API_KEY = api_key;
    this.body = body;
  }

  // Getters
  public getSender(): string {
    return this.sender;
  }

  public getSubject(): string {
    return this.subject;
  }

  public getAPI_KEY(): string | null {
    return this.API_KEY;
  }

  public getBody(): string {
    return this.body;
  }

  // Setters
  public setSender(sender: string): void {
    this.sender = sender;
  }

  public setSubject(subject: string): void {
    this.subject = subject;
  }

  public setAPI_KEY(apiKey: string | null): void {
    this.API_KEY = apiKey;
  }

  public setBody(body: string): void {
    this.body = body;
  }
}

export default Email;
