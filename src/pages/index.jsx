import Link from "next/link"
import Layout from "../../components/layout"
import utils from "../styles/utils.module.css"
export default function Home({data}) {
  return (
    <Layout
    titulo="Pagina index"
    descripcion="descripcion del index"
    home>
       <section className={utils.headingMd}>
        <p>esta web es solo para idos del csgo</p>
        <p>
          Esta es mi presentación en la web, puedes verme en{' '}
          <a href="https://www.linkedin.com/in/javier-lopez-aliste/">LikedIn</a>
        </p>
      </section>
      <h1>Mostrar los datos de la API</h1>
      {data.map (datos => (
        <div key={datos.id}>
          <Link href={`/blog/${datos.id}`}>
          <h3>
            {datos.id} - {datos.title}
          </h3>
          </Link>
          <br></br>
          <p>
            {datos.body}
            </p>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps (){
  try{
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }catch(error){
    console.log(error)
  }
}


