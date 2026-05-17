import Notification from "./Notification";

export class NotificationSender {
  sendNotifications(notifications: Notification[], message: string): void {
    for (const notification of notifications) {
      notification.sendMessage(message);
    }
  }
}
