/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoBoat()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRBoat(respuesta);
         }
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRBoat(respuesta)
 {
     let myTable="<table>";
     for(i=0;i<respuesta.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+respuesta[i].brand+"</td>";
         myTable+="<td>"+respuesta[i].years+"</td>";
         myTable+="<td>"+respuesta[i].description+"</td>";
         myTable+="<td>"+respuesta[i].name+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoB").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoBoat()
 {
     let myData=
     {
         brand:$("#brandB").val(),
         years:$("#yearB").val(),
         description:$("#descriptionB").val(),
         name:$("#nameB").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/save",
         type:"POST",
         data:myData,
         contentType:'application/json; charset=utf-8',

         datatype:"JSON",
         data:JSON.stringify(myData),

         success:function(response)
         {
            console.log(response)
            console.log("exitoso")


            traerInfoBoat();
            alert("Su entrada ha sido registrada")
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
 function actualizarInfoBoat()
 {
     let myData=
     {
        brand:$("#brandB").val(),
        years:$("#yearB").val(),
        description:$("#descriptionB").val(),
        name:$("#nameB").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
            $("#resultadoB").empty();
            $("#brandB").val("");
            $("#yearB").val("");
            $("#descriptionB").val("");
            $("#nameB").val("");
            traerInfoBoat();
            alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoBoat(idElemento)
 {
     let myData=
     {
         id:idBoat
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Boat/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoB").empty();
             traerInfoBoat();
             alert("Su entrada se ha eliminada")
         }
     });
 }