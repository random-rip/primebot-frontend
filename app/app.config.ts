export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    }
  },
  header: {
    title: 'PrimeBot',
    to: '/',
    links: [
      {
        label: 'Docs',
        children: [
          { label: 'Discord', to: '/docs/discord', icon: 'i-lucide-message-circle' },
          { label: 'Telegram', to: '/docs/telegram', icon: 'i-lucide-send' },
          { label: 'API', to: '/docs/api', icon: 'i-lucide-code' }
        ]
      },
      { label: 'Kalender', to: '/calendar', icon: 'i-lucide-calendar' },
      { label: 'Changelog', to: '/changelog', icon: 'i-lucide-file-text' },
      {
        label: 'About',
        children: [
          { label: 'Kontakt', to: '/contact', icon: 'i-lucide-users' },
          { label: 'Partner', to: '/partner', icon: 'i-lucide-handshake' },
          { label: 'Open Source', to: '/open-source', icon: 'i-lucide-github' }
        ]
      }
    ]
  },
  footer: {
    links: [
      { label: 'Impressum', to: '/imprint' },
      { label: 'Kontakt', to: '/contact' },
      { label: 'Datenschutz', to: '/privacy' },
      { label: 'Nutzungsbedingungen', to: '/tos' }
    ]
  }
})