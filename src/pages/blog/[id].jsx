
import Script from "next/script"
import Layout from "../../../components/layout"
const Home = ({data}) => {
  return (
    <Layout>
    <div>
        <h1>Pagina principal del blog</h1>
        
         <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </div>
    <h1>{data.id} - {data.title}</h1>
    <p>{data.body}</p>
    </Layout>
  )
}
export default Home


export async function getStaticPaths(){
  try{
    //este fetch es para saber cuantos articulos son
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map (datos => (
      {params: {
        id: `${datos.id}`

      }}
    ))
    return {
      paths,
      fallback: false
    }
  }catch (error){
    console.log(error)
  }
  
}

export async function getStaticProps ({params}){
  try{
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  }catch(error){
    console.log(error)
  }
}

