class Pokemon {
    constructor(nom, pdv, pda) {
        this.nom = nom
        this.pdv = pdv
        this.pda = pda
    }
}
let but = document.querySelectorAll('button')
let draco = new Pokemon("dracofeu", 120, [40, 20])
let arti = new Pokemon("articodin", 140, [30, 30])
let bare = document.querySelectorAll('progress')

    let x = Math.floor(Math.random() * 2)
    function laser() {
        if (draco.pdv > 0 && arti.pdv > 0) {
        draco.pdv = draco.pdv - arti.pda[0]
        bare[0].value = bare[0].value - arti.pda[0]
        if(x==0){
            arti.pdv = arti.pdv - draco.pda[0]
            bare[1].value = bare[1].value - draco.pda[0]
        }
        if(x==1){
            arti.pdv = arti.pdv - draco.pda[1]
            bare[1].value = bare[1].value - draco.pda[1]
        }}
        if (arti.pdv <=0) {
            alert("Articodin est KO, vous avez perdu")
        }
        else if (draco.pdv <=0) {
            alert("Dracofeu est KO, vous avez gagné")
        }
    }
    function bliz() {
        if (draco.pdv > 0 && arti.pdv > 0) {
        draco.pdv = draco.pdv - arti.pda[1]
        bare[0].value = bare[0].value - arti.pda[1]
        if(x==0){
            arti.pdv = arti.pdv - draco.pda[0]
            bare[1].value = bare[1].value - draco.pda[0]
        }
        if(x==1){
            arti.pdv = arti.pdv - draco.pda[1]
            bare[1].value = bare[1].value - draco.pda[1]
        }}
        if (arti.pdv <=0) {
            alert("Articodin est KO, vous avez perdu")
        }
        else if (draco.pdv <=0) {
            alert("Dracofeu est KO, vous avez gagné")
        }
    }
    

