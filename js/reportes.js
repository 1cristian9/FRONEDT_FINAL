function traerReporteStatus(){
    $.ajax({
        url:"http://138.2.225.157:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaStatus(respuesta);
        }

    });
}
////////////////////////////////////////
function pintarRespuestaStatus(items){
    console.log(items);
    let myTable="<table>";
 
        myTable+="<tr>";
        myTable+="<td>"+items.completed+"</td>";
        myTable+="<td>"+items.cancelled+"</td>";
        myTable+="</tr>";

    myTable+="</table>";
    $("#resultado1").append(myTable);
}


function trearReporteFechas(){

}

function traerReporteClientes(){
    $.ajax({
        url:"http://138.2.225.157:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           
            pintarRespuestaClientes(respuesta);
        }

    });
}

function pintarRespuestaClientes(items){
    console.log(items);
    let myTable="<table>";
 for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].client.name+"</td>";
        myTable+="<td>"+items[i].total+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}



