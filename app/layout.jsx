import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './global.css'

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
      lang="pt-BR"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      >
      </Head>
      <body>
        <Layout
          pageMap={pageMap}
          navbar={navbar}
          editLink={null}
          sidebar={{ autoCollapse: false }}
          feedback={{ content: '' }}
          docsRepositoryBase="https://github.com/GahBarbosa/PI-I-DOCS"
          footer={footer}
          toc={{ title: 'Nesta Página' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}