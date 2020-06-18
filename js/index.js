/*MENU-----*/


$("#formCliente").click(abrirAltaCliente);





/*--ALTA--*/


function abrirAltaCliente()
{
    $("form:not('#formuCliente')").hide("normal");
    $("#body").hide("normal");

    if ($('#formuCliente').size() == 0) {
        $("<div>").appendTo('#formularios').load("Cliente/altaCliente.html",
            function() {
                $.getScript("Cliente/altaCliente.js");
            });

    } else {
        
        $('#formuCliente').show("normal");
    }
}


