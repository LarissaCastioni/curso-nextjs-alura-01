import Link from "next/link"
import { PageTitle } from '../src/components/PageTitle/PageTitle'

export async function getStaticProps() {
    const FAQ_API_URL = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    const responseFaq = await FAQ_API_URL.json()
    return { props: { responseFaq } }
}


export default function FAQPage({ responseFaq }) {
    return (
        <div>
            <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - Páginas de perguntas FAQ</h1>
            <Link href="/">Ir para Home Page</Link>
            <ul>
                {responseFaq.map(({ answer, question }) => (
                    <li key={question}>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}