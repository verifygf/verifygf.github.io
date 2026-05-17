(function () {
    var path = window.location.pathname;
    if (!path.startsWith("/app/scan")) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var barcode = (params.get("barcode") || "").trim();
    var message = document.getElementById("scan-message");
    var button = document.getElementById("open-button");
    var chip = document.getElementById("barcode-chip");

    if (!message || !button) {
        return;
    }

    if (!barcode) {
        message.textContent = "No barcode was included in this link. Open VerifyGF and scan the package again.";
        button.setAttribute("href", "verifygf://scan");
        return;
    }

    var deepLink = "verifygf://scan?barcode=" + encodeURIComponent(barcode);
    message.textContent = "This link includes barcode " + barcode + ". Open it in VerifyGF to view the full result.";
    button.setAttribute("href", deepLink);

    if (chip) {
        chip.hidden = false;
        chip.textContent = barcode;
    }
})();
