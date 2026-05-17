import Notification from "./Notification";

export class WhatsAppNotification implements Notification {
  sendMessage(message: string) {
    console.log("WhatsAPP notification sent :" + message);
  }
}
