import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Btn from '../components/btn'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({allPostsData}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>Meu nome é Weslley Oliveira, trabalho e moro em Londres, sou desenvolvedor Web,
           faço <strong>landing pages, e-commerce e sites responsivos para web</strong>,
            com tecnologia usada pelas maiores empresas tais como: <strong>Facebook, Google, Uber e Airbnb.</strong></p>

        <p>Site rápido e que não cai independente do números de usuário online!</p> 

        <h2 className={utilStyles.headingLg}>Contate-me através dos links abaixo, vamos trabalhar juntos nos seus projetos.</h2>

        <Btn contente><Link href="https://www.instagram.com/weslleyoliveirapro/"><strong>Instagram</strong></Link></Btn>

        <Btn contente><Link href="https://api.whatsapp.com/send?phone=4407756118628&text=Ola%20eu%20gostaria%20de%20saber%20mais"><strong>Whatsapp</strong></Link></Btn>
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

