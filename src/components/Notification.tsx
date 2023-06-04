import { IconCheck, IconExclamationMark } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

class Notification {
  show(color: string, message: string, icon: React.ReactNode) {
    return notifications.show({
      withBorder: true,
      radius: "lg",
      message,
      color,
      icon,
    });
  }
  public error(message: string) {
    return this.show("red", message, <IconExclamationMark size="1.5rem" />);
  }
  public success(message: string) {
    return this.show("green", message, <IconCheck size="1rem" />);
  }
}

export default new Notification();
