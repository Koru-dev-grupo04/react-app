import './App.css'
import { Button } from './Btn.jsx'

export function App () {
    return (
        <main>
            <header>
                <h2>Inserir CEP</h2>
                <input type="text" />
            </header>
            <botones>
                <Button
                    text={'Enviar'}
                />
                <Button
                    text={'Apagar'}
                />
            </botones>
        </main>
    )
}