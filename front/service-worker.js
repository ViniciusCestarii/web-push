self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'Default body',
    icon: '/icon.png'
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});