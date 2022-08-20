function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("startpage")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
}

function Movie1(){
    changePage("pvp70")
}