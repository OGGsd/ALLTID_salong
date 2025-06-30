# [ALL:TID] salong - Modern Skönhet & Välmående

En modern, responsiv bokningssystem för [ALL:TID] salong. Byggd med React, TypeScript och Tailwind CSS.

## Funktioner

- 🎨 Modern, responsiv design med elegant svart-vit färgschema
- 📱 Mobil-först approach med PWA-stöd
- 🔒 Säker iframe-bokningsintegration med BokaDirekt
- 🌐 Svenskt språkstöd
- ⚡ Snabb laddning med optimerad prestanda
- 🎭 Mjuka animationer med Framer Motion
- 💇 Komplett salongshanteringssystem
- 👥 Stylistvisning med specialiteter (Emma, Sofia & Lisa)
- ⭐ Kundrecensioner
- 📍 Plats- och kontaktinformation
- 🔐 Integritetspolicy och användarvillkor

## Snabb installation

1. **Uppdatera företagskonfiguration**
   
   Redigera `src/config/business.ts` med dina företagsdetaljer:
   
   ```typescript
   export const businessConfig: BusinessConfig = {
     name: "[ALL:TID] salong",
     tagline: "Modern Skönhet & Välmående",
     description: "Din beskrivning...",
     phone: "+46 8 123 45 67",
     email: "info@alltidsalong.se",
     address: {
       street: "Skönhetsgatan 25",
       postalCode: "114 32",
       city: "Stockholm",
       country: "Sverige"
     },
     // ... mer konfiguration
   };
   ```

2. **Uppdatera tjänster**
   
   Alla salongstjänster är konfigurerade med BokaDirekt-länkar för Emma, Sofia och Lisa.

3. **Lägg till din logotyp**
   
   Ersätt `/public/logo.png` med din salongslogotyp.

4. **Uppdatera stylistinformation**
   
   Redigera `staff`-arrayen i `business.ts` och lägg till stylistfoton i `/public/staff/`.

5. **Anpassa recensioner**
   
   Uppdatera `reviews`-arrayen med riktiga kundrecensioner.

## Filstruktur

```
src/
├── components/          # React-komponenter
├── config/
│   └── business.ts     # Huvudkonfigurationsfil
├── utils/              # Hjälpfunktioner
└── ...

public/
├── logo.png           # Din salongslogotyp
├── staff/             # Stylistfoton
└── ...
```

## Konfigurerade tjänster

Alla salongstjänster är konfigurerade:

### Hårbehandlingar
- Klippning & Styling - 60 min, 650 kr
- Färgning - 120 min, 1200 kr
- Slingor/Highlights - 150 min, 1500 kr
- Behandling & Mask - 45 min, 450 kr

### Skönhetsbehandlingar
- Ansiktsbehandling - 75 min, 850 kr
- Ögonbrynsplock & Form - 30 min, 350 kr
- Fransar & Bryn - 45 min, 550 kr
- Manikyr - 60 min, 450 kr

### Specialbehandlingar
- Brudpaket - 180 min, 2500 kr
- Makeup - 60 min, 750 kr
- Styling för Event - 90 min, 950 kr

## Anpassning

### Färger och tema

Uppdatera temafärgerna i `src/config/business.ts`:

```typescript
theme: {
  primaryColor: "#1a1a1a",    // Deep black
  secondaryColor: "#2d2d2d",  // Charcoal gray
  accentColor: "#f5f5f5"      // Light gray/white
}
```

### Öppettider

Konfigurera dina öppettider i `openingHours`-objektet.

## BokaDirekt-integration

Systemet stöder iframe-integration med BokaDirekt. Alla boknings-URL:er kan konfigureras med dina riktiga länkar.

## Deployment

Systemet är redo för deployment på:
- Netlify (konfiguration inkluderad)
- Vercel (konfiguration inkluderad)
- Vilken statisk hosting-tjänst som helst

## Utveckling

```bash
# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build
```

## Webbläsarstöd

- Moderna webbläsare (Chrome, Firefox, Safari, Edge)
- Mobila webbläsare (iOS Safari, Chrome Mobile)
- PWA-stöd för app-liknande upplevelse

## Säkerhetsfunktioner

- Content Security Policy (CSP)
- Säker iframe-sandboxing
- XSS-skydd
- Konsolskydd (valfritt)

## Licens

Detta system tillhandahålls som det är för kommersiell och personlig användning. Anpassa det för dina affärsbehov.

## Support

För anpassningshjälp eller frågor, se komponentdokumentationen i koden.