import nextra from 'nextra'

const withNextra = nextra({
  // ... Other Nextra config options
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // i18n: {
  //   locales: ['en', 'pt-BR'],
  //   defaultLocale: 'pt-BR'
  // }
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
})