import Nav from '../components/Nav'
import { useRouter } from 'next/router'

export default function Initial(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Nav text="Estiloso" destino="/style" cor="#df00d7"/>
            <Nav text="Exemplo" destino="/exemplo" cor="#1adab7"/>
            <Nav text="Jsx" destino="/jsx" cor="#dc143c"/>
            <Nav text="Navegação #01" destino="/navegation" cor="green"/>
            <Nav text="Navegação #02" destino="/client/sp-2/123" cor="blue"/>
            <Nav text="Componente com Estado" destino="/state" cor="a45b71"/>
            <Nav text="Integração com API #01" destino="/integracao_01" cor="#42a9a2"/>
            <Nav text="Conteúdo Estático" destino="/estatic" cor="#fa054a"/>
        </div>
    )
}