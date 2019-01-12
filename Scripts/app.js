/// Self -executing annonymous function
// IIFF -- Immmediatly Invoked Function Expression
(function() {
    let myFunctionalVariable = 0;

    function Start() {
        let myFunctionalVariable = 0;
        //console.log('App Started ...${myFunctionalVariable}');
        console.log("App Started---");
    }
    window.addEventListener("load", start);
});