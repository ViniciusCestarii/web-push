# web-push

This is a simple web push notification example using the [web-push](https://www.npmjs.com/package/web-push) library.


<div align="center">
  
![image](https://github.com/user-attachments/assets/4ee20172-8950-47d8-b07c-c13f9dd48e2a)

</div>

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ViniciusCestarii/web-push.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Setup

1. Create environment file:
   ```bash
   cp .env.example .env
   ```
2. Generate VAPID keys:
   ```bash
   npm run generate-vapid-keys
   ```
3. Update the `.env` file with the generated VAPID keys:
   ```bash
   VAPID_PUBLIC_KEY=<your-public-key>
   VAPID_PRIVATE_KEY=<your-private-key>
   ```
4. Update `index.html` with the public key:
   ```js
   applicationServerKey: 'Your VAPID public key here'
   ```

## Usage


### Start the frontend server to subscribe to push notifications

1. Start a local server to serve the frontend:
   - Using VS Code: Install "Live Server" extension and right-click `index.html` to open with Live Server
   - Or use any HTTP server of your choice

2. Open the webpage in your browser
   - Allow push notifications when prompted
   - Check browser console for subscription object
   - Copy subscription details to your .env file
   ```bash
   USER_ENDPOINT=<endpoint-from-console>
   USER_AUTH=<auth-from-console>
   USER_P256DH=<p256dh-from-console>
   ```

> In a real-world scenario, you would save the subscription object in a database.

3. Send a push notification

> Certify that all the .env variables are set.

```bash
npm run send
```

## License

[MIT](LICENSE)

## Support

[Browser Push compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Push_API#browser_compatibility)

[Browser VAPID support](https://github.com/web-push-libs/web-push?tab=readme-ov-file#browser-support)

## Production Notes

In a production environment:

- Store subscription objects in a database
- Implement proper error handling
- Use secure HTTPS connections
- Consider implementing subscription management
- Implement retry mechanisms in case of failures or transient issues with the push service.
