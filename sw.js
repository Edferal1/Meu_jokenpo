// Este arquivo permite que o app funcione offline no futuro.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("SW registrado"))
    .catch(err => console.log("Erro:", err));
}
