import './App.css'
import { Button } from './Btn.jsx'

export function App () {

    const  acharRua = async () => {
        let cep = document.getElementById("search").value;
        let res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let data = await res.json();
        let rua = document.getElementById("rua");
        rua.innerHTML = data.logradouro;
        let bairro = document.getElementById("bairro");
        bairro.innerHTML = data.bairro;
        let cidade = document.getElementById("cidade");
        cidade.innerHTML = data.localidade;
        let uf = document.getElementById("uf");
        uf.innerHTML = data.uf;
        let clima = await fetch('https://goweather.herokuapp.com/weather/${cidade}');
        let data2 = await clima.json();
        let temperatura = document.getElementById("temperatura");
        temperatura.innerHTML = data2.temperature;
        let vento = document.getElementById("ventos");
        vento.innerHTML = data2.wind;

        console.log(data2)
    };

    const limparTexto = () => {
        document.getElementById("search").value = "";  
    }

     return (
        <main>
            <logo >
                <img id="logo" src="../public/map.png" alt="Logo App" />
            </logo>
            <header>
                <h2>Inserir CEP</h2>
                <input type="text" id="search" placeholder='Por favor inserir um CEP'/>
            </header>
            <botones>
                <Button 
                    text={'Enviar'} fun={acharRua}
                />
                <Button
                    text={'Apagar'} fun={limparTexto}
                />
            </botones>
            <div id='informacoes'>
                <endereco >
                    <div>
                        <span><strong>Rua:</strong> </span> <span id='rua'></span>
                    </div>
                    <div>
                        <span><strong>Bairro:</strong> </span> <span id='bairro'></span>
                    </div>
                    <div>
                        <span><strong>Cidade:</strong> </span> <span id='cidade'></span>
                    </div>
                    <div>
                        <span><strong>UF:</strong> </span> <span id='uf'></span>
                    </div>
                </endereco>
                <clima>
                    <h4>Clima da região</h4>
                    <div>
                        <span><strong>Temperatura:</strong> </span> <span id='temperatura'></span>
                    </div>
                    <div>
                        <span><strong>Ventos:</strong> </span> <span id='ventos'></span>
                    </div>
                </clima> 
            </div>       
        </main>
    )
}