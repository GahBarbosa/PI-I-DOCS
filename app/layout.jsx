import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={<b>Projeto Integrador I</b>}
    projectLink='https://github.com/GahBarbosa/PI-I'
  />
)
const footer = <Footer>© 2025 Projeto Integrador I – Big Data para Negócios | FATEC Ipiranga | Desenvolvido por Gabriel Barbosa, Bárbara Carvalho, Mariana Roque e Nayara Alves</Footer>

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  return (
    <html
      // Not required, but good for SEO
      lang="pt-BR"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          pageMap={pageMap}
          navbar={navbar}
          editLink={null}
          feedback={{ content: '' }}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        // lastUpdated={<LastUpdated></LastUpdated>}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}