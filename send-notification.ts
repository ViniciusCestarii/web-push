import 'dotenv/config';
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:viniciuscestari01@gmail.com',
  process.env.VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

const pushSubscription = {
  endpoint: process.env.USER_ENDPOINT!,
  keys: {
    auth: process.env.USER_AUTH!,
    p256dh: process.env.USER_P256DH!
  }
};

const payload = JSON.stringify({
  title: 'Hello World!',
  body: 'This is a sample notification sent from the server'
});

webpush.sendNotification(pushSubscription, payload)
  .then(() => console.log('Notification sent successfully!'))
  .catch(error => console.error('Error sending notification:', error));