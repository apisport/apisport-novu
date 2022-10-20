const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
})

module.exports = withPWA({
    // next.js config
    async rewrites() {
        return [
          {
            source: '/notifikasi/mailjet',
            destination: 'https://api.novu.co/v1/events/trigger',
          },
        ]
      },
})