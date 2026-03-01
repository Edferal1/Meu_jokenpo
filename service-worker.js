if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker registrado com o escopo:', registration.scope);
    }, function(err) {
      console.log('Registro do Service Worker falhou:', err);
    });
  });
}
