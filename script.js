function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            // Guardamos la imagen en el sessionStorage
            sessionStorage.setItem('uploadedImage', event.target.result);

            // Redireccionamos a la página de visualización de la imagen
            window.location.href = 'view-image.html';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Por favor selecciona una imagen.');
    }
}
