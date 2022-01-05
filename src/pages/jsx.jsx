import Layout from "../components/Layout"

export default function Jsx(){
    
    const titulo = <h1>JSX é um conceito central</h1>

    return (

    <Layout titulo="Entendendo o JSX">
        <div>
            {titulo}
            <p>
                {JSON.stringify({name: 'Jão', idade: 30})}
            </p>
        </div>
    </Layout>
    )
}