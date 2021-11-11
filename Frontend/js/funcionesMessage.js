/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoMessage()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
            console.log(respuesta);
            pintarRMessage(respuesta);
         }
 
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRMessage(respuesta)
 {
     let myTable="<table>";
     for(i=0;i<respuesta.length;i++)
     {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].client+"</td>";
        myTable+="<td>"+respuesta[i].boat+"</td>";
        myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoM").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoMessage()
 {
     let myData=
     {
        messagetext:$("#messagetextM").val(),
        client:$("#clientM").val(),
        boat:$("#boatM").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/save",
         type:"POST",
         data:myData,
         datatype:"JSON",
         
         contentType:'application/json; charset=utf-8',
         
         success:function(response)
         {
            console.log(response)
            console.log("exitoso")
 
            //alert("Su entrada ha sido registrada")
         },
         
         error:function(jqXHR,textStatus,errorThrown)
         {
             window.location.reload()
             alert("fail");
         }
     });
 }
 
 /**
  * Plantilla PUT + Botón
  */
 function actualizarInfoMessage()
 {
     let myData=
     {
        messagetext:$("#messagetextM").val(),
        client:$("#clientM").val(),
        boat:$("#boatM").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoM").empty();
            $("#messagetextM").val("");
            $("#clientM").val("");
            $("#boatM").val("");
            traerInfoMessage();
            alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoMessage(idElemento)
 {
     let myData=
     {
         id:idElemento
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Message/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoM").empty();
             traerInfoMessage();
             alert("Su entrada se ha eliminada")
         }
     });
 }