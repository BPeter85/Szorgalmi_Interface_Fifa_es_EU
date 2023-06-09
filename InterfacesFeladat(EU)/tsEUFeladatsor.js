var EuropaiUnio = [{
        orszag: "Ausztria",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
        csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
        csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
        csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
        csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
        csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
        csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
        csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
        csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
        csatlakozas: "2004.05.01"
    }
];
//1. feladat: Hány tagja van az európai UNIO-nak
function TagallamokSzama(eu) {
    var orszagokSzama = eu.length;
    console.log("".concat(orszagokSzama, " tag\u00E1llam van az EU-ban."));
}
TagallamokSzama(EuropaiUnio);
//2. feladat: Hány ország csatlakozott 2007-ben
function csatlakozas2007(eu) {
    var ev = 0;
    for (var i = 0; i < eu.length; i++) {
        if (eu[i].csatlakozas.includes("2007")) {
            ev++;
        }
    }
    console.log("".concat(ev, " tag\u00E1llam csatlaozott az EU-hoz 2007-ben."));
}
csatlakozas2007(EuropaiUnio);
//3. feladat: Csatlakozott-e magyarország, az európai uniohoz?
function magyarorszagCsatlaozottE(eu) {
    var bentvanE = false;
    for (var i = 0; i < eu.length; i++) {
        if (eu[i].orszag == "Magyarország") {
            bentvanE = true;
        }
    }
    return bentvanE;
}
function eredmeny(logikaiEredmeny, igazValasz, hamisValasz) {
    if (logikaiEredmeny == true) {
        console.log(igazValasz);
    }
    else {
        console.log(hamisValasz);
    }
}
eredmeny(magyarorszagCsatlaozottE(EuropaiUnio), "Magyarország csatlakozott", "Magyarország NEM csatlakozott");
//4. feladat: Volt-e májusban csatlakozó az európai unióhoz?
function majusiCsatlakozo(eu) {
    var voltE = false;
    for (var i = 0; i < eu.length; i++) {
        if (eu[i].csatlakozas.includes(".05.")) {
            voltE = true;
        }
    }
    return voltE;
}
function eredmenyMajus(logikaiEredmeny, igazValasz, hamisValasz) {
    if (logikaiEredmeny == true) {
        console.log(igazValasz);
    }
    else {
        console.log(hamisValasz);
    }
}
eredmeny(majusiCsatlakozo(EuropaiUnio), "Volt csatlakozó májusban.", "Nem volt csatlakozó májusban.");
//5. feladat: Legutolsó csatlakozó ország neve
function utolsoCsatlakozoOrszag(eu) {
    var maxIndex = 0;
    for (var i = 0; i < EuropaiUnio.length; i++) {
        var aktualisEv = Number(eu[i].csatlakozas.substr(0, 4));
        var maxEv = Number(eu[maxIndex].csatlakozas.substr(0, 4));
        if (aktualisEv > maxEv) {
            maxIndex = i;
        }
    }
    return eu[maxIndex].orszag;
}
console.log("Legutolsó ország aki csatlakozott: " + utolsoCsatlakozoOrszag(EuropaiUnio));
//6. feladat: Statisztika csatlakozási dátumokról
