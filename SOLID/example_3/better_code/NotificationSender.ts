import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";
import { WhatsAppNotification } from "./WhatsAppNotification";
import { PushNotification } from "./PushNotification";

export enum NotificationType {
  SMS = "SMS",
  EMAIL = "EMAIL",
  PUSH = "PUSH",
  WHATSAPP = "WHATSAPP",
}

export class NotificationSender {
  sendNotifications(notifications: NotificationType[], message: string): void {
    for (const notification of notifications) {
      switch (notification) {
        case NotificationType.SMS:
          const smsNotification = new SMSNotification();
          smsNotification.sendSMSNotification(message);
          break;

        case NotificationType.EMAIL:
          const emailNotification = new EmailNotification();
          emailNotification.sendEmailNotification(message);
          break;

        case NotificationType.PUSH:
          const pushNotification = new PushNotification();
          pushNotification.sendPushNotification(message);
          break;

        case NotificationType.WHATSAPP:
          const whatsappNotification = new WhatsAppNotification();
          whatsappNotification.sendWhatsAppNotification(message);
          break;
      }
    }
  }
}
