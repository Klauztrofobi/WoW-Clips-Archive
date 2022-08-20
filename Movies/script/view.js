let Covid = document.getElementById('app');

function changePage(side) {
    model.app.currentpage = side;
    updateView();
}
updateView();

function updateView() {
    const side = model.app.currentpage;
    if (side == "login") login();
    if (side == "startpage") startpage();
    if (side == "pvp70") pvp70();
    if (side == "RvR") RvR();
    if (side == "RvR2") RvR2();
    if (side == "RvSP") RvSP();

}

function login() {
    let html =/*html*/ ` 
    <center>
    <br>
    <br>
    <input type = "text" onchange="model.inputs.startpage.login = this.value" placeholder ="User Name">
    <br>
    <input type = "password" onchange="model.inputs.startpage.pwd = this.value" placeholder ="Password">
    <br>
    <input type="submit" name="" value="Login" onclick="loggpå()">
    </center>
    `;
    Covid.innerHTML = html;
}
