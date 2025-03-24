document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("whatsappLink");

    link.addEventListener("click", function (event) {
        event.preventDefault(); 

        const numero = "75 98112-9824"; 
        navigator.clipboard.writeText(numero).then(() => {
            alert("Número copiado: " + numero); 
            window.location.href = link.href; 
        });
    });
});



