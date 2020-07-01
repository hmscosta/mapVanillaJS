
var numeroDeMunicipios = municipios.lista.length;
//console.log(data);
var cidade = "Contagem";
var codIbge = "12345";
var popUpCidade =   "Cidade: " + cidade + "<br>" +
                    "Codigo IBGE: " + codIbge;


var map = L.map('map').setView([-19.9162, -44.0809], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

setTimeout(function(){ map.invalidateSize()}, 500);
/*
for(cont=0; cont < municipios.lista.length; cont++){
    //console.log(municipios.lista[cont].nome);
    cidade = municipios.lista[cont].nome;
    codIbge =  municipios.lista[cont].codigo_ibge;
    popUpCidade = atualizarPopUp(cidade, codIbge);
    L.marker([municipios.lista[cont].latitude, municipios.lista[cont].longitude]).addTo(map)
    .bindPopup(popUpCidade);
}  */

function atualizarPopUp(cidade, codIbge){
    return  "Cidade: " + cidade + "<br>" +
            "Codigo IBGE: " + codIbge;
}

function adicionarLayers(){
    console.log('Botao clicado!!');
    console.log('Zoom atual: ' + map.getZoom());
    console.log('Size atual: ' + map.getSize());
    console.log('Has layer? ' +  map.hasLayer());
 
for(cont=0; cont < municipios.lista.length; cont++){
    //console.log(municipios.lista[cont].nome);
    cidade = municipios.lista[cont].nome;
    codIbge =  municipios.lista[cont].codigo_ibge;
    popUpCidade = atualizarPopUp(cidade, codIbge);
    L.marker([municipios.lista[cont].latitude, municipios.lista[cont].longitude]).addTo(map)
    .bindPopup(popUpCidade);
}  
}

function removerLayers(){
    for(cont=0; cont < municipios.lista.length; cont++){
        //console.log(municipios.lista[cont].nome);
        cidade = municipios.lista[cont].nome;
        codIbge =  municipios.lista[cont].codigo_ibge;
        popUpCidade = atualizarPopUp(cidade, codIbge);
        L.marker([municipios.lista[cont].latitude, municipios.lista[cont].longitude]).removeFrom(map);
        
    }  
}



