export enum NotificationType {
  SMS = "SMS",
  EMAIL = "EMAIL",
  PUSH = "PUSH",
  WHATSAPP = "WHATSAPP",
}

export class Notification {
  type: NotificationType;

  constructor(type: NotificationType) {
    this.type = type;
  }

  sendSMSNotification(message: string): void {
    console.log(`SMS: ${message}`);
  }

  sendEmailNotification(message: string): void {
    console.log(`Email: ${message}`);
  }

  sendPushNotification(message: string): void {
    console.log(`Push: ${message}`);
  }

  sendWhatsAppNotification(message: string): void {
    console.log(`WhatsApp: ${message}`);
  }
}
