const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovačević",
    godina_rodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 3,
      biologija: 4,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrović",
    godina_rodjenja: 2006,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanović",
    godina_rodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popović",
    godina_rodjenja: 2007,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolić",
    godina_rodjenja: 2006,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanović",
    godina_rodjenja: 2007,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 3,
      likovna_kultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simić",
    godina_rodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 5,
      engleski_jezik: 4,
      biologija: 3,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlović",
    godina_rodjenja: 2006,
    pol: "muski",
    ocjene: {
      matematika: 3,
      maternji_jezik: 4,
      engleski_jezik: 5,
      biologija: 5,
      likovna_kultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilić",
    godina_rodjenja: 2007,
    pol: "zenski",
    ocjene: {
      matematika: 5,
      maternji_jezik: 3,
      engleski_jezik: 5,
      biologija: 4,
      likovna_kultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Đorđević",
    godina_rodjenja: 2005,
    pol: "muski",
    ocjene: {
      matematika: 4,
      maternji_jezik: 4,
      engleski_jezik: 4,
      biologija: 5,
      likovna_kultura: 5,
    },
  },
];

ucenici.forEach((ucenik) => {
  ucenik.izracunajProsjek = function () {
    let sumaOcjena = 0;
    for (const [key, value] of Object.entries(ucenik.ocjene)) {
      sumaOcjena += value;
    }

    let prosjek = sumaOcjena / Object.keys(this.ocjene).length;
    return (ucenik.prosjek = prosjek);
  };

  ucenik.uspjeh = uspjeh(ucenik.izracunajProsjek(), this.pol);
  console.log(
    `${ucenik.ime} ${ucenik.prezime} je ${uspjeh(ucenik.prosjek, ucenik.pol)}`
  );
});
console.log(ucenici);
function uspjeh(prosjek, pol) {
  if (prosjek >= 4.5) {
    if (pol === "muski") {
      return "Odlican";
    } else {
      return "Odlicna";
    }
  } else if (prosjek < 4.5 && prosjek >= 3.5) {
    if (pol === "muski") {
      return "Vrlodobar";
    } else {
      return "Vrlodobra";
    }
  } else if (prosjek < 3.5 && prosjek > 2.5) {
    if (pol === "muski") {
      return "Dobar";
    } else {
      return "Dobra";
    }
  } else if (prosjek <= 2.5 && prosjek >= 2) {
    if (pol === "muski") {
      return "Dovoljan";
    } else {
      return "Dovoljna";
    }
  } else {
    if (pol === "muski") {
      return "Nedovoljan";
    } else {
      return "Nedovoljna";
    }
  }
}

function statistikaUspjeha(niz) {
  const noviObjekat = {
    odlican: 0,
    vrlodobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };
  niz.forEach((ucenik) => {
    ucenik.prosjek >= 4.5 && ucenik.prosjek <= 5
      ? noviObjekat.odlican++
      : ucenik.prosjek < 4.5 && ucenik.prosjek >= 3.5
      ? noviObjekat.vrlodobar++
      : ucenik.prosjek < 3.5 && ucenik.prosjek > 2.5
      ? noviObjekat.dobar++
      : ucenik.prosjek <= 2.5 && ucenik.prosjek >= 2
      ? noviObjekat.dovoljan++
      : noviObjekat.nedovoljan++;
  });
  return noviObjekat;
}
console.log(statistikaUspjeha(ucenici));

function sortirajUcenike(niz) {
  return niz.sort((a, b) => a.prezime.localeCompare(b.prezime));
}
console.log(sortirajUcenike(ucenici));
