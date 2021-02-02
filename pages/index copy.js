import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Btn from '../components/btn'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Whatsapp from '../components/whatsapp'

export default function Home({allPostsData}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>Ola! Sejam bem vindos!!! <br></br> Trabalho e moro em Londres, sou desenvolvedor Web 👨‍💻
           faço <strong>landing pages</strong>, <strong>e-commerce</strong> e <strong>aplicativos</strong> responsivos para web,
            com as mesmas ferramentas e linguagens usadas por grandes empresas de tecnologia 🚀 <strong>Facebook, Google, Uber e Airbnb😲</strong></p>

        <h2 className={utilStyles.headingLg}>Contate-me através dos links abaixo, vamos trabalhar juntos nos seus projetos.</h2>

        <Btn>
          <Link  href="https://www.instagram.com/weslleyoliveirapro/">
              <Image  className={utilStyles.instagram}
                src="/images/instagram.png"
                alt="Picture of the author"
                width={180}
                height={50}
              />
          </Link>
        </Btn>

        {/* <Btn>
          <Link href="https://api.whatsapp.com/send?phone=4407756118628&text=Ola%20eu%20gostaria%20de%20saber%20mais">
            <Image  className={utilStyles.instagram}
                  src="/images/whatsapp.png"
                  alt="Picture of the author"
                  width={180}
                  height={50}
                />
                <strong>Whatsapp</strong>
          </Link></Btn> */}
{/*         
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul> */}

      </section>
    </Layout>
    <Whatsapp></Whatsapp>
    <footer className={utilStyles.footer}><p>Copyright © 2020. Weslley Oliveira. Todos direitos reservados</p></footer>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

