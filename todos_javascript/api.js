document.querySelector('#dolar').addEventListener('click', function(){
      obtenerDatos('dolar')
});
document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf')
});



function obtenerDatos(valor){

    let url = `https://mindicador.cl/api/${valor} `;

    const api = new XMLHttpRequest();
    api.open('Get', url, true);
    api.send();

    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = "";


            let i = 0;

            for(let item of datos.serie){
                i++;
                resultado.innerHTML += `<li>${item.fecha.substr(0, 10)} | $ ${item.valor} </li>` ;

                if (i>2){
                    break;
                }
            }
        }
    }
};


//Access-Control-Allow-Origin : = 'https://api.estadisticasbcra.com/usd'

const url = "https://pokeapi.co/api/v2/pokemon/2/";
fetch(url)
.then(response => response.json() )
.then(data => {

    let element = document.getElementById('elem')
    .innerHTML = `<p>${data.name}</p> 
       <p>${data.order}</p>
       <p>${data.weight}</p>
       <img src="${data.sprites.back_default}"/>`

    console.log(data);
})
.catch(err=>console.log(err));



/*const url = "https://apis.datos.gob.ar/series/api/series?ids=168.1_T_CAMBIOR_D_0_0_26,103.1_I2N_2016_M_15&format=json&metadata=full";
fetch(url)
.then(response => response.json() )
.then(data => {

    let element = document.getElementById('elem')
    .innerHTML = `<p>${data.65}</p> 
       `

    console.log(data);
})
.catch(err=>console.log(err));




      
//const API_ENDPOINT = "https://api.fixer.io/latest?base=USD";*/


//----------------------------------------------------
/*fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

  const data = { username: 'https://api.estadisticasbcra.com/usd' };
  Access-Control-Allow-Origin: 'https://api.estadisticasbcra.com';
  
fetch('https://api.estadisticasbcra.com/usd', {
  method: 'PUT', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjkxMzQxMzAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJEb2Nlc3R5QHByb3Rvbm1haWwuY29tIn0.gLVqTw3beSN2RcyCv-tmRCojPjUhpS20-6C1GGArWPEQZepK2wKBTOEdQjPUoT-R19ZExhOYOGNuoOziOY5iBw';
    
  },
  body: JSON.stringify(data),
})

headers.values() {
    Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjkxMzQxMzAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJEb2Nlc3R5QHByb3Rvbm1haWwuY29tIn0.gLVqTw3beSN2RcyCv-tmRCojPjUhpS20-6C1GGArWPEQZepK2wKBTOEdQjPUoT-R19ZExhOYOGNuoOziOY5iBw'
}
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});*/