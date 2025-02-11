# web-push

This is a simple web push notification example using the [web-push](https://www.npmjs.com/package/web-push) js library.


<div align="center">
  
![image](https://github.com/user-attachments/assets/4ee20172-8950-47d8-b07c-c13f9dd48e2a)

</div>

## Installation

```bash
npm i
```

## Usage

### Copy the `.env.example` file to `.env`

```bash
cp .env.example .env
```

### Generate VAPID keys

```bash
npm run enerate-vapid-keys
```

### Update the `.env` file with the generated VAPID keys

```bash
VAPID_PUBLIC_KEY=<your-public-key>
VAPID_PRIVATE_KEY=<your-private-key>
```

### Update `index.html` with the public key

```bash
applicationServerKey: 'Your public key here'
```

### Start the frontend server to subscribe to push notifications

> I used the vscode live server extension to serve the `index.html` file. But you can use any server to serve the `index.html` file.

When you open the `index.html` file in the browser, it will ask for permission to send push notifications. Click on `Allow` and you will get a subscription object in the console.

Copy the subscription values into the .env file.

(In a real-world scenario, you would save the subscription object in a database.)

### Send a push notification to yourself!

> Certify that all the .env variables are set.

```bash
npm run send
```

## License

[MIT](https://github.com/ViniciusCestarii/web-push/blob/main/LICENSE)

## Support

[Browser Push compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Push_API#browser_compatibility)

[Browser VAPID support](https://github.com/web-push-libs/web-push?tab=readme-ov-file#browser-support)
