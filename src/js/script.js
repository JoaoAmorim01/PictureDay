const btnEnviar = document.querySelector("#enviar");
const botao = document.querySelector("#btnTxt");
const paragrafo = document.querySelector("#paragrafoNasa");
const botaoFechar = document.querySelector(".semTexto");

btnEnviar.addEventListener("click", ()=>{
    sendApiRequest();
})

async function sendApiRequest(){
    let API_KEY = "nzBLbeJQErwnqPDVhVImQD31bMSr8bCa4Ooa3TDB";
    let input = document.querySelector("#inputData").value;
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${input}`);
    let data = await response.json();
    useApiData(data);
}

function useApiData(data){
    // document.querySelector("#receiveImg").innerHTML = data.explanation
    document.querySelector("#receiveImg").innerHTML = `<img height="90%" border="2px solid" src="${data.url}">`
    document.querySelector("#paragrafoNasa").innerHTML = data.explanation;
}

botao.addEventListener("click", () => {
    mostraTexto();
});

botaoFechar.addEventListener("click", () => {
    paragrafo.classList.remove("visivel");
});

function mostraTexto () {
    paragrafo.classList.toggle("visivel");
}