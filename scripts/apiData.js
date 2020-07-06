
//Setter of map variable
function setMap(_mapa){
    this.map = _mapa;
}

//Getter of map variable
function getMap(){
    return this.map;
}

//Function that runs after the page loads, has all the basic declarations for the map
function inicializeApp(){
    mapboxUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    mapboxAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    var capitalsArray = getCapitals();
    var brazilianCapitals = [];
    var brazilianCities = [];
    for(i = 0; i < capitalsArray.length; i++){
        city = capitalsArray[i].nome;
        codIbge =  capitalsArray[i].codigo_ibge;
        popUpCidade = updatePopUp(city, codIbge);
        brazilianCapitals[i] = L.marker([capitalsArray[i].latitude, capitalsArray[i].longitude])
        .bindPopup(popUpCidade);
    }
    for(i = 0; i < municipios.lista.length; i++){
        city = municipios.lista[i].nome;
        codIbge =  municipios.lista[i].codigo_ibge;
        popUpCidade = updatePopUp(city, codIbge);
        brazilianCities[i] = L.marker([municipios.lista[i].latitude, municipios.lista[i].longitude])
        .bindPopup(popUpCidade);
    }
       
    var capitais =  L.layerGroup(brazilianCapitals);
    var cities =    L.layerGroup(brazilianCities);
    var grayscale = L.tileLayer(mapboxUrl, {id: 'map', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   =     L.tileLayer(mapboxUrl, {id: 'map', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});
    var map =       L.map('map', {
        center: [-19.9162, -44.0809],
        zoom: 10,
        layers: [grayscale]
    });
    setMap(map);
    var baseMaps = {
       "Base": streets
    };
    var overlayMaps = {
        "Capitais": capitais,
        "Cidades": cities
        
    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    setTimeout(function(){ map.invalidateSize()}, 500);
/*
    setMap(L.map('map').setView([-19.9162, -44.0809], 10));
    L.tileLayer(mapboxUrl, { attribution: mapboxAttribution }).addTo(getMap());
      */
}

//Function that updates the popup that is on the markers
function updatePopUp(city, codIbge){
    return  "Cidade: " + city + "<br>" +
            "Codigo IBGE: " + codIbge;
}

//Funtion that returns a array with all the Brazilian capitals
function getCapitals(){
    var capitals = [];
    var j = 0;
    for(i=0; i < municipios.lista.length; i++){
        if(municipios.lista[i].capital){
            capitals[j] = municipios.lista[i];
            j++;
        }
        else{
           // console.log(capitals.lista[i]);
        } 
    }  
    return capitals;
}


function createLayerCapitals(){

}

function addLayers(){
   
    console.log('Has layer? ' +  getMap().hasLayer());
   
   
   
    /*
    console.log('Botao clicado!!');
    console.log('Zoom atual: ' + getMap().getZoom());
    console.log('Size atual: ' + getMap().getSize());
    console.log('Has layer? ' +  getMap().hasLayer());
    for(i=0; i < municipios.lista.length; i++){
        city = municipios.lista[i].nome;
        codIbge =  municipios.lista[i].codigo_ibge;
        popUpCidade = updatePopUp(city, codIbge);
        if(municipios.lista[i].capital === true){
            L.marker([municipios.lista[i].latitude, municipios.lista[i].longitude]).addTo(getMap())
            .bindPopup(popUpCidade);
        }
    }  */
}

function removerLayers(){
    for(i=0; i < municipios.lista.length; i++){
        city = municipios.lista[i].nome;
        codIbge =  municipios.lista[i].codigo_ibge;
        popUpCidade = atualizarPopUp(cidade, codIbge);
        L.marker([municipios.lista[i].latitude, municipios.lista[i].longitude]).removeFrom(getMap());
    }  
}

