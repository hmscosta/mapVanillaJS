
var numeroDeMunicipios = municipios.lista.length;
//console.log(data);
var cidade = "Contagem";
var codIbge = "12345";
var popUpCidade =   "Cidade: " + cidade + "<br>" +
                    "Codigo IBGE: " + codIbge;


var map = L.map('map').setView([-19.9162, -44.0809], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



for(cont=0; cont < municipios.lista.length; cont++){
    //console.log(municipios.lista[cont].nome);
    cidade = municipios.lista[cont].nome;
    codIbge =  municipios.lista[cont].codigo_ibge;
    popUpCidade = atualizarPopUp(cidade, codIbge);
    L.marker([municipios.lista[cont].latitude, municipios.lista[cont].longitude]).addTo(map)
    .bindPopup(popUpCidade);
} 
/*
L.marker([-19.9162, -44.0809]).addTo(map)
    .bindPopup(popUpCidade)
  

L.marker([-20.9162, -44.0809]).addTo(map)
L.marker([-18.9162, -44.0809]).addTo(map)
*/
function atualizarPopUp(cidade, codIbge){
    return  "Cidade: " + cidade + "<br>" +
            "Codigo IBGE: " + codIbge;
}