/**
 * @author Paula Cárdenas
 */

/**
 * Plantilla GET
 */
 function traerInfoCategory()
 {
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/all",
         type:"GET",
         datatype:"JSON",
         success:function(respuesta)
         {
             console.log(respuesta);
             pintarRCategory(respuesta);
         }
     });
 }
 
 /**
  * Función de "print"
  */
 function pintarRCategory(respuesta)
 {
     let myTable="<table>";
     for(i=0;i<respuesta.length;i++)
     {
         myTable+="<tr>";
         myTable+="<td>"+respuesta[i].name+"</td>";
         myTable+="<td>"+respuesta[i].description+"</td>";
         myTable+="</tr>";
     }
     myTable+="</table>";
     $("#resultadoCT").append(myTable);
 }
 
 /**
  * Plantilla POST + Botón
  */
 function guardarInfoCategory()
 {
     let var2={
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
     };
     console.log(var2);
     let dataToSend=JSON.stringify(var2);
     $.ajax(
     {  url:"http://localhost:8080/api/Category/save",
         
         type:"POST",
         data:var2,
         datatype:"JSON",
         contentType:'application/json; charset=utf-8',
         data:JSON.stringify(var2),
         
         success:function(response)
         {
            console.log(response)
            console.log("exitoso")


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
 function actualizarInfoCategory()
 {
     let myData=
     {
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/update",
         type:"PUT",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoCT").empty();
             $("#Cname").val("");
             $("#Cdescripotion").val("");
             traerInfoCategory();
             alert("La información se ha actualizado")
         }
     });
 }
 
 /**
  * Plantilla DELETE + Botón
  */
 function borrarInfoCategory(idElemento)
 {
     let myData=
     {
        id:idCategory
     };
     console.log(myData);
     let dataToSend=JSON.stringify(myData);
     $.ajax(
     {
         url:"http://localhost:8080/api/Category/{id}",
         type:"DELETE",
         data:dataToSend,
         contentType:"application/JSON",
         datatype:"JSON",
         success:function(respuesta)
         {
             $("#resultadoCT").empty();
             traerInfoCategory();
             alert("Su entrada se ha eliminada");
         }
     });
 }