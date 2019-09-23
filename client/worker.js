console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Amgad Hassan",
    icon: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
  });
});