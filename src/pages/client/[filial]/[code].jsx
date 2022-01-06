import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';


export default function ClientForCode() {
    const router = useRouter();
    
    return (
        <Layout titulo="Navegação Dinâmica">
            
                <div>Código = {router.query.code}</div>
                <div>Filial = {router.query.filial}</div>
            
        </Layout>
    )
}