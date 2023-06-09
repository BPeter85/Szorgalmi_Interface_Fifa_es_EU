var csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
// 0) Adja meg aktuálisan hány csapat szerepel a ranglistán
function fifaObjektum(elemek) {
    var beolvasottAdatok = [];
    for (var i = 0; i < elemek.length; i++) {
        var daraboltSor = elemek[i].split(";");
        var objektum = {
            csapat: daraboltSor[0],
            helyezes: Number(daraboltSor[1]),
            valtozas: Number(daraboltSor[2]),
            pontszam: Number(daraboltSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var fifaAdatok = fifaObjektum(csapatAdat);
function adatokKiirasa(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        console.log((i + 1) + "." + adatok[i].csapat + ": " + adatok[i].pontszam + " pontszam.");
    }
}
console.log("0.feladat: ");
adatokKiirasa(fifaAdatok);
console.log(" ");
//1) Adja meg aktuálisan hány csapat szerepel a ranglistán 
function csapotokSzama(adatok) {
    console.log("A listán " + adatok.length + " csapat szerepel.");
}
console.log("1.feladat: ");
csapotokSzama(fifaAdatok);
console.log(" ");
// 2) Írja ki mennyi a résztvevő csapatok átlagpontszáma
function atlagPontszam(adatok) {
    var pontSzam = 0;
    for (var i = 0; i < adatok.length; i++) {
        pontSzam += adatok[i].pontszam;
    }
    return pontSzam / adatok.length;
}
console.log("2.feladat:");
console.log("A listán szereplő csapatok átlagpontszáma: " + atlagPontszam(fifaAdatok));
console.log(" ");
// 3) Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
console.log("3.feladat:");
function atlagnalTobbPont(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].pontszam > atlagPontszam(fifaAdatok)) {
            console.log((i + 1) + "." + adatok[i].csapat);
        }
    }
}
atlagnalTobbPont(fifaAdatok);
console.log(" ");
// 4) Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
// pl.:
// Helyezés: 13
// Csapat: Hollandia
// Pontszáma: 1586
function legtobbetJavito(adatok) {
    var javitoIndex = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].valtozas > adatok[javitoIndex].valtozas) {
            javitoIndex = i;
        }
    }
    console.log("4. feladat:");
    console.log("\tHelyezés: " + adatok[javitoIndex].helyezes);
    console.log("\tCsapat: " + adatok[javitoIndex].csapat);
    console.log("\tPontszam: " + adatok[javitoIndex].pontszam);
}
legtobbetJavito(fifaAdatok);
console.log(" ");
// 5) Határozza meg a adatok között megtalálható - e Magyarország csapata!
// pl.:
// "A csapatok között nincs Magyarország"
// illetve
// "A csapatok között szerepel Magyarország"
function magyarorszagBentVanE(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].csapat == "Magyarország") {
            return true;
        }
    }
    return false;
}
function eredmenyKiiro(eredmeny, igazUzenet, hamisUzenet) {
    if (eredmeny == true) {
        console.log(igazUzenet);
    }
    else {
        console.log(hamisUzenet);
    }
}
console.log("5. feladat:");
eredmenyKiiro(magyarorszagBentVanE(fifaAdatok), "A csapatok között szerepel Magyarország.", "A csapatok között nincs Magyarország.");
console.log(" ");
// 6) Készítsen statisztikát a helyezések változása(Valtozas) alapján csoportosítva a
// csapatok számáról a minta szerint! Csak azok a helyezésváltozások jelenjenek meg a
// képenyőn, amelyek esetében a csapatok száma több mint egy volt! A megjelenő
// csoportok sorrendje tetszőleges.
//     pl.:
//       0 helyet változott: 8 csapat
//     - 1 helyet változott: 6 csapat
//       1 helyet változott: 3 csapat
