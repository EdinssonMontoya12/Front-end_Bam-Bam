const helpers = {}

//El producto esta disponible o No
helpers.disponible=(activo) => { 
    if(activo>0){
    return activo > 0 ? 'disponible':'1' 
}
else{
    return activo == 0 ? 'No disponible':'0' 
}
}

helpers.format=(fecha) => { 
    const mes = fecha;
   
     const newmes = mes.slice(0, 10);
     console.log(newmes)
    return newmes;
    

}



helpers.disponibleBox=(activo) => { 
    if(activo>0){
    return activo > 0 ? 'badge badge-success':'1' 
}
else{
    return activo == 0 ? 'badge badge-warning':'0' 
}
}



//El Tipo de Tercero
helpers.clasif=(tipoterid) => { 
    if(tipoterid==1){
    return tipoterid ==1 ? 'Cliente':'1' 
}
else{
    if(tipoterid==2){
    return tipoterid == 2 ? 'Proveedor':'2' 
}
else{
    return tipoterid == 3? 'Gerente':'3' 
}
}
}


helpers.clasifBox=(tipoterid) => { 
    if(tipoterid==1){
    return tipoterid ==1 ? 'badge badge-success':'1' 
}
else{
    if(tipoterid==2){
    return tipoterid == 2 ? 'badge badge-secondary':'2' 
}
else{
    return tipoterid == 3? 'badge badge-primary':'3' 
}
}
}




module.exports = helpers