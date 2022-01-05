import Link from 'next/link'
import Nav from '../components/Nav'

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
        </div>
    )
}