export default function Jsx(){
    
    const titulo = <h1>JSX é um conceito central</h1>

    return (
        <div>
            {titulo}
            <p>
                {JSON.stringify({name: 'Jão', idade: 30})}
            </p>
        </div>
    )
}