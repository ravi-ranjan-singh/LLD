import { NotificationType, Notification } from "./Notification";

export class NotificationSender {
  sendNotifications(notifications: Notification[], message: string): void {
    for (const notification of notifications) {
      switch (notification.type) {
        case NotificationType.SMS:
          notification.sendSMSNotification(message);
          break;

        case NotificationType.EMAIL:
          notification.sendEmailNotification(message);
          break;

        case NotificationType.PUSH:
          notification.sendPushNotification(message);
          break;

        case NotificationType.WHATSAPP:
          notification.sendWhatsAppNotification(message);
          break;
      }
    }
  }
}
