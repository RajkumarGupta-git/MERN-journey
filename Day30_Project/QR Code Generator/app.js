let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {

    if (qrText.value.trim().length > 0) {

        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            encodeURIComponent(qrText.value);

        qrImage.onload = function () {
            imgBox.classList.add("show-img");
        };

    } else {

        imgBox.classList.remove("show-img");

        qrText.classList.add("error");

        setTimeout(function () {
            qrText.classList.remove("error");
        }, 1000);

    }

}