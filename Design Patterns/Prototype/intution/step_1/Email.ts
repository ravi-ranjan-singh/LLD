class Email {
  private sender: string;
  private subject: string;
  private API_KEY: string | null;
  private body: string;

  constructor(
    sender = "",
    subject = "",
    api_key: string | null = null,
    body = "",
  ) {
    // default value is trying to mimic constructor overload
    // which is only supported in C++ or Java, so that we have
    // one parameterized constructor and one default constructor
    this.sender = sender;
    this.subject = subject;
    this.API_KEY = api_key;
    this.body = body;
  }

  //  to solve 3rd, we can have a copy method in the class itself which will be responsible
  // for creating copy of itself

  copy_constructor(original: Email) {
    this.sender = original.getSender();
    this.subject = original.getSubject();
    this.API_KEY = original.getAPI_KEY();
    this.body = original.getBody();
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
