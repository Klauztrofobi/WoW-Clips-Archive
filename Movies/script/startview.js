function startpage() {
    let html = /*html*/`
    <Center>
    <p>WoW PvP Clips</p>
    <img src="/Movies/Bilder/Bilde.jpg"style="width:900px;height:506px;">
    <br><br>
    <input type="button" onClick="startpage()" value="Home" formtarget="_blank"><br>
    <input type="button" onClick="RvR()" value="Rogue Vs Rogue" formtarget="_blank"><br>
    <input type="button" onClick="RvSP()" value="Rogue Vs Shadow Priest (Lost)" formtarget="_blank"><br>
    <input type="button" onClick="RvR2()" value="Rogue Vs Rogue Again" formtarget="_blank"><br>
    <input type="button" onClick="Muti()" value="Mutilate" formtarget="_blank"><br>
    <input type="button" onClick="pvp70()" value="Rogue Vs Warrior + Warlock" formtarget="_blank"><br>
    </Center>
    `;
    Covid.innerHTML = html;
}
