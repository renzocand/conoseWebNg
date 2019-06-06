$(document).ready(function() {

    $("form").submit(function () {
        //limpiar
        $("#resultado").text('');
        var validator = $("form").validate();
        validator.resetForm();

        //validar numero de documento
        var res = ""; 
        var v = $("#TipoDocReceptor").val();
        switch (v) {
            case "2": //11 caracteres
                res = $("#DocumentoReceptor").val().length === 11 ? "": "Documento debe tener 11 dígitos";
                break;
            case "3": //08 caracteres
                res = $("#DocumentoReceptor").val().length === 8 ? "" : "Documento debe tener 8 dígitos";
                break;
            case "1": //ignorar
                break;
            default: //mayor a 03 caracteres
                res = $("#DocumentoReceptor").val().length > 3 ? "": "Documento debe tener mas de 3 dígitos";
        }
        if (res.length>0) {
            validator.showErrors({
                "DocumentoReceptor": res
            });
            return false;
        } else
            return true;
    });


    $("#cancelar-id").on("click", function (e) {
        document.getElementById("NumeroRucEmisor").value = '';
        document.getElementById("TipoDocReceptor").value = 1;
        document.getElementById("TipoComprobante").value = 1;
        document.getElementById("DocumentoReceptor").value = '';
        document.getElementById("SerieComprobante").value = '';
        document.getElementById("NumeroComprobante").value = '';
        document.getElementById("FechaEmision").value = '';
        document.getElementById("ImporteTotal").value = '';
    });

    $("#TipoDocReceptor").change(function (e) {
        var v = $(this).val();
        switch (v) {
            case "1":
                $(".DocumentoReceptor").hide();
                break;
            default:
                $(".DocumentoReceptor").show();
        }
    });

    $("#TipoComprobante").change(function (e) {
        var v = $(this).val();
        switch (v) {
            case "10":
            case "11":
            case "12":
                $(".Receptor").hide();
                break;
            default:
                $(".Receptor").show();
        }
    });
    


    // grecaptcha.ready(function () {
    //     grecaptcha.execute('6LeTTogUAAAAABUaPW4bPnsyy70p8ZU8c8X5l92f', { action: 'consultaComprobante' })
    //         .then(function (token) {
    //             // Verify the token on the server.
    //             console.log(token)
    //             document.getElementById('human').value = token;
    //         });
    // });
    
});