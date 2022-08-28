import Layout from './layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Home" Link="/about">
      <h2>Esta en la página principal</h2>
      <Link href="/news/newsApp">Noticias</Link>
      <br />
      <Link href="/about">About</Link>
    </Layout>
  )
}
