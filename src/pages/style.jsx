import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

export default function Style() {
    return (

    <Layout titulo="Exemplo de CSS Modularizado">

        <div className={styles.vermelho}>
            <h1>Estilo usando CSS Módulos</h1>
        </div>

    </Layout>
    
    )
}