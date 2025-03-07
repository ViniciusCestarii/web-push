self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    console.log("Notification data:", data)
    const options = {
      body: data.body ?? 'Default body',
      icon: 'https://www.viniciuscestari.dev/public-icon.png'
    };
    const title = data.title ?? 'Default title';
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});