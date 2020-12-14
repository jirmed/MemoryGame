sap.ui.define([], function () {
    $.when($.ajax("../keys/responsivevoice.key"))
        .then(apiKey => {
            const script = document.createElement("script");
            script.src = "https://code.responsivevoice.org/responsivevoice.js?key="+apiKey;
            script.id = "responsivevoice";
            document.body.appendChild(script);
            script.onload = () => responsiveVoice.init();
        });
});
