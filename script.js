function checkWebsiteStatus() {
    var url = document.getElementById("url").value;
    var statusElement = document.getElementById("status");

    fetch(`https://your-backend-service.com/check?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            statusElement.innerText = "Estado: " + data.status;
        })
        .catch(error => {
            statusElement.innerText = "Error al verificar el estado.";
        });
}
