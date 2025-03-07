self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('push', (event) => {
    const options = {
        body: 'アプリ化しました。（主にAndroid）',
        icon: '/img/icon.png',
        badge: '/img/icon.png'
    };
    event.waitUntil(self.registration.showNotification('アプリ化のお知らせ。', options));
});