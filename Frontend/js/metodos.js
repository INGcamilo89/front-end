
function ver(){

    var variable=document.getElementById("select");
    
    if(variable.value=="clientes"){
        document.getElementById("clientes").style.display="block";
        document.getElementById("barcos").style.display="none";                        
        document.getElementById("categoria").style.display="none";                                
        document.getElementById("mensaj").style.display="none";
        document.getElementById("reservas").style.display="none";
     
    }
    else if(variable.value=="barcos"){
        document.getElementById("clientes").style.display="none";
        document.getElementById("barcos").style.display="block";                        
        document.getElementById("categoria").style.display="none";                                
        document.getElementById("mensaj").style.display="none";
        document.getElementById("reservas").style.display="none";
     
    }

    else if(variable.value=="categoria"){
        document.getElementById("clientes").style.display="none";
        document.getElementById("barcos").style.display="none";                        
        document.getElementById("categoria").style.display="block";                                
        document.getElementById("mensaj").style.display="none";
        document.getElementById("reservas").style.display="none";
     
    }

    else if(variable.value=="mensaj"){
        document.getElementById("clientes").style.display="none";
        document.getElementById("barcos").style.display="none";                        
        document.getElementById("categoria").style.display="none";                                
        document.getElementById("mensaj").style.display="block";
        document.getElementById("reservas").style.display="none";
     
    }
    else{
        document.getElementById("clientes").style.display="none";
        document.getElementById("barcos").style.display="none";                        
        document.getElementById("categoria").style.display="none";                                
        document.getElementById("mensaj").style.display="none";
        document.getElementById("reservas").style.display="block";
     
    }
    
            }