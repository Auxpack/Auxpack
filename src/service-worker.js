importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.NetworkFirst()
);