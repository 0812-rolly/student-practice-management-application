import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './notifications.scss';

const createNotification = (type, message) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message);
      break;
    case 'success':
      NotificationManager.success(message);
      break;
    case 'warning':
      NotificationManager.warning(message, 3000);
      break;
    case 'error':
      NotificationManager.error(message, 5000);
      break;
    default: break;
  }
};

export default createNotification;
