import './App.css'
import { Button } from './Btn.jsx'

export function App () {

    const  wololo = async () => {
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
        
        

        console.log(data);
        // Add your functionality for enviar button here
      };

    const cleanText = () => {
        document.getElementById("search").value = "";
        
    }

     return (
        <main>
            <header>
                <h2>Inserir CEP</h2>
                <input type="text" id="search"/>
            </header>
            <botones>
                <Button 
                    text={'Enviar'} fun={wololo}
                />
                <Button
                    text={'Apagar'} fun={cleanText}
                />
            </botones>
            <div id='informacoes'>
                <div>
                    <span>Rua: </span> <span id='rua'></span>
                </div>
                <div>
                    <span>Bairro: </span> <span id='bairro'></span>
                </div>
                <div>
                    <span>Cidade: </span> <span id='cidade'></span>
                </div>
                <div>
                    <span>UF: </span> <span id='uf'></span>
                </div>
            </div>
            
        </main>
        
    )
}