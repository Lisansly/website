import { notifications } from "@mantine/notifications";
import {
  IconExclamationMark,
  IconInfoSmall,
  IconCheck,
} from "@tabler/icons-react";

type NotificationProps = {
  color: string;
  message: string;
  icon: React.ReactNode;
};

class Notification {
  show(props: NotificationProps) {
    return notifications.show({
      withBorder: true,
      radius: "lg",
      message: props.message,
      color: props.color,
      icon: props.icon,
    });
  }
  public success(message: string) {
    return this.show({
      color: "teal",
      message: message,
      icon: <IconCheck size="1rem" />,
    });
  }
  public info(message: string) {
    return this.show({
      color: "yellow",
      message: message,
      icon: <IconInfoSmall size="2rem" />,
    });
  }
  public error(message: string) {
    return this.show({
      color: "red",
      message: message,
      icon: <IconExclamationMark size="1.3rem" />,
    });
  }
}

export default Notification;
