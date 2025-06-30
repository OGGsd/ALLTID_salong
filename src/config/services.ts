// Services Configuration for [ALL:TID] salong
// Complete service catalog including Trainee, Elev, and Professional services

export interface Service {
  name: string;
  duration: string;
  price: string;
  bookingUrl: string;
  description?: string;
  stylist?: string;
  category?: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

// All salon services organized by category and stylist
export const serviceCategories: ServiceCategory[] = [
  // TRAINEE STYLIST - MARINA
  {
    title: "Trainee Stylist - Marina - Barnklippning",
    services: [
      {
        name: "Marina Trainee barnklipp 0–6 år",
        duration: "45 min",
        price: "Från 325 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-barnklipp-0-6-ar-3106843",
        description: "Professionell barnklippning för de minsta",
        stylist: "Marina",
        category: "barnklippning"
      },
      {
        name: "Marina Trainee barnklipp 6–12 år",
        duration: "45 min",
        price: "370 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-barnklipp-6-12-ar-3106844",
        description: "Barnklippning för skolåldern",
        stylist: "Marina",
        category: "barnklippning"
      },
      {
        name: "Marina Trainee barnklipp 6–12 år, inkl. tvätt",
        duration: "60 min",
        price: "Från 465 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-barnklipp-6-12-ar-inkl-tvatt-3106841",
        description: "Barnklippning med tvätt och styling",
        stylist: "Marina",
        category: "barnklippning"
      }
    ]
  },
  {
    title: "Trainee Stylist - Marina - Färg & Klippning",
    services: [
      {
        name: "Marina Trainee bottenfärg",
        duration: "75 min",
        price: "Från 950 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-bottenfarg-3109530",
        description: "Professionell bottenfärgning",
        stylist: "Marina",
        category: "färg"
      },
      {
        name: "Marina Trainee bottenfärg och klipp",
        duration: "105 min",
        price: "Från 1 180 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-bottenfarg-och-klipp-3106890",
        description: "Bottenfärgning kombinerat med klippning",
        stylist: "Marina",
        category: "färg"
      },
      {
        name: "Marina Trainee färg (kort hår, över axlarna)",
        duration: "120 min",
        price: "Från 1 280 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-farg-kort-har-over-axlarna-3109585",
        description: "Färgning för kort hår",
        stylist: "Marina",
        category: "färg"
      },
      {
        name: "Marina Trainee färg (långt hår)",
        duration: "135 min",
        price: "Från 1 480 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-farg-langt-har-3106885",
        description: "Färgning för långt hår",
        stylist: "Marina",
        category: "färg"
      },
      {
        name: "Marina Trainee färgbehandling och klipp",
        duration: "150 min",
        price: "Från 1 780 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-fargbehandling-och-klipp-3106887",
        description: "Komplett färgbehandling med klippning",
        stylist: "Marina",
        category: "färg"
      }
    ]
  },
  {
    title: "Trainee Stylist - Marina - Klippning",
    services: [
      {
        name: "Marina Trainee klippning (kort hår)",
        duration: "45 min",
        price: "Från 550 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-klippning-kort-har-3106849",
        description: "Professionell klippning för kort hår",
        stylist: "Marina",
        category: "klippning"
      },
      {
        name: "Marina Trainee klippning (långt hår)",
        duration: "60 min",
        price: "Från 570 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-klippning-langt-har-3106842",
        description: "Professionell klippning för långt hår",
        stylist: "Marina",
        category: "klippning"
      }
    ]
  },
  {
    title: "Trainee Stylist - Marina - Slingor",
    services: [
      {
        name: "Marina Trainee slingor (kort hår)",
        duration: "150 min",
        price: "Från 1 650 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-slingor-kort-har-3110216",
        description: "Slingor för kort hår",
        stylist: "Marina",
        category: "slingor"
      },
      {
        name: "Marina Trainee slingor (långt hår)",
        duration: "165 min",
        price: "Från 1 850 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-slingor-langt-har-3106878",
        description: "Slingor för långt hår",
        stylist: "Marina",
        category: "slingor"
      },
      {
        name: "Marina Trainee slingor och klipp (kort hår)",
        duration: "165 min",
        price: "Från 1 750 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-slingor-och-klipp-kort-har-3106881",
        description: "Slingor kombinerat med klippning för kort hår",
        stylist: "Marina",
        category: "slingor"
      },
      {
        name: "Marina Trainee slingor och klipp (långt hår)",
        duration: "180 min",
        price: "2 200 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-slingor-och-klipp-langt-har-3110222",
        description: "Slingor kombinerat med klippning för långt hår",
        stylist: "Marina",
        category: "slingor"
      }
    ]
  },
  {
    title: "Trainee Stylist - Marina - Nyansering",
    services: [
      {
        name: "Marina Trainee Nyansering",
        duration: "45 min",
        price: "580 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-nyansering-3140896",
        description: "Professionell nyansering av håret",
        stylist: "Marina",
        category: "nyansering"
      },
      {
        name: "Marina Trainee Klipp och nyansering",
        duration: "85 min",
        price: "890 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-klipp-och-nyansering-3140890",
        description: "Klippning kombinerat med nyansering",
        stylist: "Marina",
        category: "nyansering"
      }
    ]
  },
  {
    title: "Trainee Stylist - Marina - Styling",
    services: [
      {
        name: "Marina Trainee styling med fön",
        duration: "35 min",
        price: "Från 410 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-styling-med-fon-3106854",
        description: "Professionell styling med fön",
        stylist: "Marina",
        category: "styling"
      },
      {
        name: "Marina Trainee styling med värmeverktyg",
        duration: "35 min",
        price: "Från 410 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-styling-med-varmeverktyg-3106898",
        description: "Styling med värmeverktyg för perfekt finish",
        stylist: "Marina",
        category: "styling"
      }
    ]
  },

  // ELEV - ISABELLE
  {
    title: "Elev - Isabelle - Barnklippning",
    services: [
      {
        name: "Isabell Elev Barn klippning",
        duration: "45 min",
        price: "350 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-barn-klippning-3179983",
        description: "Professionell barnklippning med Isabelle",
        stylist: "Isabelle",
        category: "barnklippning"
      },
      {
        name: "Isabell Elev Barn klippning, inklusive tvätt",
        duration: "60 min",
        price: "350 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-barn-klippning-inklusive-tvatt-3179984",
        description: "Barnklippning med tvätt och styling",
        stylist: "Isabelle",
        category: "barnklippning"
      }
    ]
  },
  {
    title: "Elev - Isabelle - Klippning",
    services: [
      {
        name: "Isabell Elev klippning",
        duration: "60 min",
        price: "470 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-klippning-3179978",
        description: "Professionell klippning med Isabelle",
        stylist: "Isabelle",
        category: "klippning"
      },
      {
        name: "Isabell Elev klipp och utväxt färg (max 3cm)",
        duration: "120 min",
        price: "950 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-klipp-och-utvaxt-farg-max-3m-3179981",
        description: "Klippning kombinerat med utväxtfärgning",
        stylist: "Isabelle",
        category: "klippning"
      },
      {
        name: "Isabell Elev klipp/folieslingor",
        duration: "210 min",
        price: "1 670 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-klipp-folieslingor-3179979",
        description: "Klippning kombinerat med folieslingor",
        stylist: "Isabelle",
        category: "klippning"
      }
    ]
  },
  {
    title: "Elev - Isabelle - Färg & Slingor",
    services: [
      {
        name: "Isabell Elev Utväxt färg (max 3cm)",
        duration: "75 min",
        price: "670 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-utvaxt-farg-max-3cm-3179980",
        description: "Utväxtfärgning för naturligt resultat",
        stylist: "Isabelle",
        category: "färg"
      },
      {
        name: "Isabell Elev Färgbehandling Kort hår (ovanför axeln)",
        duration: "120 min",
        price: "820 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-fargbehandling-kort-har-ovanfor-axeln-3179985",
        description: "Färgbehandling för kort hår",
        stylist: "Isabelle",
        category: "färg"
      },
      {
        name: "Isabell Elev Färgbehandling Långt hår",
        duration: "150 min",
        price: "1 220 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-fargbehandling-langt-har-3179987",
        description: "Färgbehandling för långt hår",
        stylist: "Isabelle",
        category: "färg"
      },
      {
        name: "Isabell Elev Folieslingor (kort hår)",
        duration: "150 min",
        price: "1 470 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-folieslingor-kort-har-3179990",
        description: "Folieslingor för kort hår",
        stylist: "Isabelle",
        category: "slingor"
      },
      {
        name: "Isabell Elev Folieslingor (långt hår)",
        duration: "165 min",
        price: "1 550 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-folieslingor-langt-har-3179993",
        description: "Folieslingor för långt hår",
        stylist: "Isabelle",
        category: "slingor"
      }
    ]
  },

  // PROFESSIONAL SALON SERVICES - KLIPP
  {
    title: "Klipp",
    services: [
      {
        name: "Barn klippning 0–5 år",
        duration: "30 min",
        price: "365 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/barn-klippning-0-5-ar-3070191",
        description: "Professionell barnklippning för de minsta",
        category: "klipp"
      },
      {
        name: "Barn klippning 6–12 år",
        duration: "30 min",
        price: "425 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/barn-klippning-6-12-ar-3070196",
        description: "Barnklippning för skolåldern",
        category: "klipp"
      },
      {
        name: "Barn klippning 6–12 år inkl. tvätt",
        duration: "45 min",
        price: "485 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/barn-klippning-6-12-ar-inkl-tvatt-3070197",
        description: "Barnklippning med tvätt och styling",
        category: "klipp"
      },
      {
        name: "Klippning 30 min",
        duration: "30 min",
        price: "489 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klippning-30-min-3069538",
        description: "Snabb och effektiv klippning",
        category: "klipp"
      },
      {
        name: "Klipp 45 min",
        duration: "45 min",
        price: "Från 620 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-45-min-3069534",
        description: "Standard klippning med styling",
        category: "klipp"
      },
      {
        name: "Klipp 60 min",
        duration: "60 min",
        price: "Från 810 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-60-min-3069541",
        description: "Omfattande klippning med konsultation",
        category: "klipp"
      },
      {
        name: "Lugg klipp",
        duration: "15 min",
        price: "Från 250 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/lugg-klipp-3069562",
        description: "Snabb luggklippning",
        category: "klipp"
      },
      {
        name: "Puts klipp",
        duration: "15 min",
        price: "Från 270 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/puts-klipp-3069564",
        description: "Puts och trimning",
        category: "klipp"
      }
    ]
  },

  // FÄRG/FOLIESLINGOR
  {
    title: "Färg/Folieslingor",
    services: [
      {
        name: "Folieslingor (kort hår)",
        duration: "120 min",
        price: "Från 1 775 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/folieslingor-kort-har-3076876",
        description: "Professionella folieslingor för kort hår",
        category: "färg"
      },
      {
        name: "Hårkonsultation färg",
        duration: "15 min",
        price: "Varierande pris",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/harkonsultation-farg-3153378",
        description: "Personlig konsultation för färgval",
        category: "konsultation"
      },
      {
        name: "Folieslingor (långt hår, nedanför axlarna)",
        duration: "150 min",
        price: "Från 2 050 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/folieslingor-langt-har-nedanfor-axlarna-3107222",
        description: "Folieslingor för långt hår",
        category: "färg"
      },
      {
        name: "Färg utväxt 2 cm (ej folieslingor)",
        duration: "75 min",
        price: "Från 989 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/farg-utvaxt-2-cm-ej-folieslingor-3077479",
        description: "Utväxtfärgning för naturligt resultat",
        category: "färg"
      },
      {
        name: "Färgbehandling (kort hår)",
        duration: "90 min",
        price: "Från 1 230 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/fargbehandling-kort-har-3076874",
        description: "Komplett färgbehandling för kort hår",
        category: "färg"
      },
      {
        name: "Färgbehandling (långt hår, över axlarna)",
        duration: "105 min",
        price: "Från 1 435 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/fargbehandling-langt-har-over-axlarna-3107221",
        description: "Färgbehandling för långt hår",
        category: "färg"
      },
      {
        name: "Klipp och färg (tjockt hår)",
        duration: "150 min",
        price: "Från 1 890 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-farg-tjockt-har-3112831",
        description: "Specialbehandling för tjockt hår",
        category: "färg"
      },
      {
        name: "Kreativ färg (kort hår)",
        duration: "135 min",
        price: "Från 1 875 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/kreativ-farg-kort-har-3069571",
        description: "Kreativa färgtekniker för kort hår",
        category: "färg"
      },
      {
        name: "Kreativ färg (långt hår)",
        duration: "150 min",
        price: "Från 2 090 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/kreativ-farg-langt-har-3107224",
        description: "Kreativa färgtekniker för långt hår",
        category: "färg"
      },
      {
        name: "Nyansering",
        duration: "45 min",
        price: "Från 720 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/nyansering-3069557",
        description: "Subtil nyansering av håret",
        category: "färg"
      }
    ]
  },

  // KLIPP OCH FÄRG/FOLIESLINGOR
  {
    title: "Klipp och färg/Folieslingor",
    services: [
      {
        name: "Klipp och färg (kort hår)",
        duration: "120 min",
        price: "Från 1 650 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-farg-kort-har-3069550",
        description: "Klippning kombinerat med färgning för kort hår",
        category: "kombinerad"
      },
      {
        name: "Klipp och folieslingor/färg tjockt hår",
        duration: "210 min",
        price: "2 900 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-folieslingor-farg-tjockt-har-3216755",
        description: "Komplett behandling för tjockt hår",
        category: "kombinerad"
      },
      {
        name: "Klipp och färg (långt hår)",
        duration: "135 min",
        price: "Från 1 730 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-farg-langt-har-3107275",
        description: "Klippning och färgning för långt hår",
        category: "kombinerad"
      },
      {
        name: "Klipp och färg makeover",
        duration: "270 min",
        price: "3 700 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-farg-makeover-3069554",
        description: "Komplett makeover med klipp och färg",
        category: "kombinerad"
      },
      {
        name: "Klipp och färg utväxt max 2cm (ej folieslingor)",
        duration: "105 min",
        price: "Från 1 375 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-farg-utvaxt-max-2cm-ej-folieslingor-3069561",
        description: "Klipp med utväxtfärgning",
        category: "kombinerad"
      },
      {
        name: "Klipp och kreativ färg (kort hår)",
        duration: "150 min",
        price: "Från 2 190 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-kreativ-farg-kort-har-3110142",
        description: "Klipp med kreativa färgtekniker för kort hår",
        category: "kombinerad"
      },
      {
        name: "Klipp och kreativ färg (långt hår)",
        duration: "180 min",
        price: "Från 2 560 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-kreativ-farg-langt-har-3069555",
        description: "Klipp med kreativa färgtekniker för långt hår",
        category: "kombinerad"
      },
      {
        name: "Klipp och nyansering",
        duration: "75 min",
        price: "Från 1 050 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/klipp-och-nyansering-3077476",
        description: "Klippning med nyansering",
        category: "kombinerad"
      },
      {
        name: "Folieslingor och klipp (kort hår)",
        duration: "150 min",
        price: "Från 2 100 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/folieslingor-och-klipp-kort-har-3110141",
        description: "Folieslingor kombinerat med klippning för kort hår",
        category: "kombinerad"
      },
      {
        name: "Isabell Elev Klipp och Färgbehandling (ej folieslingor)",
        duration: "150 min",
        price: "1 670 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/isabell-elev-klipp-och-fargbehandling-ej-folieslingor-3179988",
        description: "Klipp och färgbehandling med Isabelle",
        category: "kombinerad"
      },
      {
        name: "Folieslingor och klipp (långt hår)",
        duration: "165 min",
        price: "Från 2 475 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/folieslingor-och-klipp-langt-har-3110139",
        description: "Folieslingor kombinerat med klippning för långt hår",
        category: "kombinerad"
      }
    ]
  },

  // FRANS OCH BRYN
  {
    title: "Frans och bryn",
    services: [
      {
        name: "Frans och bryn färg inkl form",
        duration: "30 min",
        price: "Från 410 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/frans-och-bryn-farg-inkl-form-3077775",
        description: "Komplett behandling av fransar och bryn",
        category: "skönhet"
      },
      {
        name: "Bryn färg och form",
        duration: "15 min",
        price: "Från 270 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/bryn-farg-och-form-3077771",
        description: "Färgning och formning av ögonbryn",
        category: "skönhet"
      },
      {
        name: "Bryn färg",
        duration: "15 min",
        price: "Från 225 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/bryn-farg-3077772",
        description: "Professionell brynnfärgning",
        category: "skönhet"
      },
      {
        name: "Bryn form",
        duration: "15 min",
        price: "Från 225 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/bryn-form-3077770",
        description: "Formning och trimning av ögonbryn",
        category: "skönhet"
      },
      {
        name: "Frans färg",
        duration: "15 min",
        price: "Från 225 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/frans-farg-3077779",
        description: "Professionell fransfärgning",
        category: "skönhet"
      },
      {
        name: "Lashlift och browlift",
        duration: "60 min",
        price: "Från 900 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/lashlift-och-browlift-3112211",
        description: "Lyft för både fransar och bryn",
        category: "skönhet"
      },
      {
        name: "Lashlift",
        duration: "60 min",
        price: "Från 690 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/lashlift-3112212",
        description: "Professionell franslyft",
        category: "skönhet"
      },
      {
        name: "Browlift",
        duration: "45 min",
        price: "Från 690 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/browlift-3112213",
        description: "Lyft och formning av ögonbryn",
        category: "skönhet"
      }
    ]
  },

  // LÖSHÅR
  {
    title: "Löshår",
    services: [
      // Marina Trainee Löshår
      {
        name: "Marina Trainee - 1 paket (60 min)",
        duration: "60 min",
        price: "550 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-trainee-hairtalk-bhbd-omsattning-1-paket-3122657",
        description: "Löshårspaket med Marina Trainee",
        stylist: "Marina",
        category: "löshår"
      },
      {
        name: "Marina Trainee - 1 paket (45 min)",
        duration: "45 min",
        price: "570 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-traniee-omsattning-1paket-hairtalk-bhbd-3165098",
        description: "Snabb löshårsbehandling med Marina",
        stylist: "Marina",
        category: "löshår"
      },
      {
        name: "Marina Trainee - 2 paket",
        duration: "75 min",
        price: "980 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-traniee-hairtalk-bhbd-omsattning-2-pak-3132055",
        description: "2 paket löshår med Marina",
        stylist: "Marina",
        category: "löshår"
      },
      {
        name: "Marina Trainee - 3 paket",
        duration: "105 min",
        price: "1 200 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-traniee-hairtalk-bhbd-omsattning-3-paket-3132064",
        description: "3 paket löshår med Marina",
        stylist: "Marina",
        category: "löshår"
      },
      {
        name: "Marina Trainee - 4 paket",
        duration: "135 min",
        price: "1 600 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-traniee-hairtalk-bhbd-omsattning-4-paket-3132066",
        description: "4 paket löshår med Marina",
        stylist: "Marina",
        category: "löshår"
      },
      {
        name: "Marina Trainee - 5 paket",
        duration: "165 min",
        price: "1 900 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/marina-traniee-hairtalk-bhbd-omsattning-5-paket-3132068",
        description: "5 paket löshår med Marina",
        stylist: "Marina",
        category: "löshår"
      },
      // Ordinarie Löshår
      {
        name: "Hairtalk/BHBD - 1 pak",
        duration: "45 min",
        price: "Från 680 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/hairtalk-bhbd-omsattning-1-pak-3069818",
        description: "Professionell löshårsbehandling",
        category: "löshår"
      },
      {
        name: "Hairtalk/BHBD - 2 pak",
        duration: "75 min",
        price: "Från 1 200 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/hairtalk-bhbd-omsattning-2-pak-3070200",
        description: "2 paket löshår",
        category: "löshår"
      },
      {
        name: "Hairtalk/BHBD - 3 pak",
        duration: "90 min",
        price: "Från 1 550 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/hairtalk-bhbd-omsattning-3-pak-3070210",
        description: "3 paket löshår",
        category: "löshår"
      },
      {
        name: "Hairtalk/BHBD - 4 pak",
        duration: "120 min",
        price: "Från 1 950 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/hairtalk-bhbd-omsattning-4-pak-3070209",
        description: "4 paket löshår",
        category: "löshår"
      },
      {
        name: "Hairtalk/BHBD - 5 pak",
        duration: "135 min",
        price: "Från 2 300 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/hairtalk-bhbd-omsattning-5-pak-3070211",
        description: "5 paket löshår",
        category: "löshår"
      },
      {
        name: "Konsultation löshår",
        duration: "15 min",
        price: "300 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/konsultation-loshar-3076812",
        description: "Personlig konsultation för löshår",
        category: "konsultation"
      }
    ]
  },

  // STYLING
  {
    title: "Styling",
    services: [
      {
        name: "Styling med fön",
        duration: "30 min",
        price: "Från 540 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/styling-med-fon-3076817",
        description: "Professionell styling med fön",
        category: "styling"
      },
      {
        name: "Styling med värmevertyg",
        duration: "30 min",
        price: "Från 540 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/styling-med-varmevertyg-3076818",
        description: "Styling med värmeverktyg",
        category: "styling"
      }
    ]
  },

  // ÖRONHÅLTAGNING
  {
    title: "Öronhåltagning",
    services: [
      {
        name: "Öronhåltagning, 1 st öronsnibb",
        duration: "15 min",
        price: "299 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/oronhaltagning-1-st-oronsnibb-3112216",
        description: "Professionell öronhåltagning",
        category: "piercing"
      },
      {
        name: "Öronhåltagning, 2 st öronsnibb",
        duration: "30 min",
        price: "499 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/oronhaltagning-2-st-oronsnibb-3112214",
        description: "Öronhåltagning för båda öronen",
        category: "piercing"
      }
    ]
  },

  // SALONGSKUR
  {
    title: "Salongskur",
    services: [
      {
        name: "Salongskur",
        duration: "30 min",
        price: "Från 540 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/salongskur-3076813",
        description: "Intensiv hårvård och behandling",
        category: "behandling"
      }
    ]
  },

  // UPPSÄTTNING
  {
    title: "Uppsättning",
    services: [
      {
        name: "Konsultation Brudfrisyr",
        duration: "30 min",
        price: "Varierande pris",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/konsultation-brudfrisyr-3076825",
        description: "Personlig konsultation för brudfrisyr",
        category: "konsultation"
      },
      {
        name: "Uppsättning Brud",
        duration: "120 min",
        price: "Från 2 900 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/uppsattning-brud-3076819",
        description: "Exklusiv brudfrisyr för din stora dag",
        category: "uppsättning"
      },
      {
        name: "Uppsättning enkel",
        duration: "60 min",
        price: "Från 895 kr",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/all-tid-salong-57795/uppsattning-enkel-3076822",
        description: "Elegant uppsättning för speciella tillfällen",
        category: "uppsättning"
      }
    ]
  }
];