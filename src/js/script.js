const btnEnviar = document.querySelector("#enviar");

btnEnviar.addEventListener("click", ()=>{
    console.log("O botão foi pressionado");
    sendApiRequest();
})

async function sendApiRequest(){
    let API_KEY = "nzBLbeJQErwnqPDVhVImQD31bMSr8bCa4Ooa3TDB";
    let input = document.querySelector("#inputData").value;
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${input}`);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data){
    // document.querySelector("#receiveImg").innerHTML = data.explanation
    document.querySelector("#receiveImg").innerHTML = `<img height="90%" border="2px solid" src="${data.url}">`
    document.querySelector("#pNasa").innerHTML = data.explanation;
}




