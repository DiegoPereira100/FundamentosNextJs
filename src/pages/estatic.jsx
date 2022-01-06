import Layout from "../components/Layout";

export async function getStaticProps() {
    
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Estatic(props) {

    return (
        <Layout>
            <div>
                {props.number}
            </div>
        </Layout>
    )
    
}