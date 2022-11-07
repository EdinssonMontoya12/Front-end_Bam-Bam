
   
        function cargar_lote()
        {
            var array = ["Ninguno", "Lote023", "Lote026", "Lote029", "Lote032"];
            for(var i in array)
            { 
                document.getElementById("lote").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 

            }
    }

    cargar_lote();

   