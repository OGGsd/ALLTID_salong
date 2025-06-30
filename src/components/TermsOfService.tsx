import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, CreditCard, Clock, AlertTriangle, Heart, Award } from 'lucide-react';
import { businessConfig } from '../config/business';

const TermsOfService: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to Om Oss page
      navigate('/om-oss');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-primary text-white py-4 px-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={handleBackClick}
            className="mr-4 p-2 hover:bg-black hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Gå tillbaka"
          >
            <ArrowLeft size={20} />
          </button>
          <img 
            src={businessConfig.logo} 
            alt={`${businessConfig.name} Logo`} 
            className="w-8 h-8 mr-3 rounded-full object-cover border border-brand-accent"
          />
          <h1 className="text-lg md:text-xl font-bold text-brand-accent">
            Användarvillkor
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mr-4 border-2 border-brand-accent">
              <FileText size={24} className="text-brand-accent" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
                Användarvillkor
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileText size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Allmänna villkor</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Välkommen till {businessConfig.name}! Dessa användarvillkor ("Villkor") reglerar din användning av våra tjänster, 
            webbplats och besök på vår massageklinik. Genom att använda våra tjänster accepterar du dessa villkor i sin helhet. 
            Som vårdgivare inom massage och välmående följer vi professionella standarder och etiska riktlinjer.
          </p>
        </div>

        {/* Booking Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Calendar size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Bokningsvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Bokning och bekräftelse</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Alla bokningar måste bekräftas av oss för att vara giltiga</li>
                <li>Du kommer att få en bekräftelse via SMS eller e-post</li>
                <li>Bokningar kan göras online via BokaDirekt, via telefon eller på kliniken</li>
                <li>Vi förbehåller oss rätten att avböja bokningar av medicinska eller säkerhetsskäl</li>
                <li>Första besök kan kräva en hälsokonsultation innan behandling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Avbokning och ändring</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Avbokning eller ändring måste göras minst 24 timmar i förväg</li>
                <li>Sen avbokning (mindre än 24 timmar) kan medföra en avgift på 50% av behandlingspriset</li>
                <li>Utebliven tid utan avbokning debiteras fullt pris</li>
                <li>Kontakta oss på {businessConfig.phone} för avbokning eller ändring</li>
                <li>Vid sjukdom accepteras avbokning samma dag utan avgift (med läkarintyg vid behov)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Specialbokningar</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Gravidmassage:</strong> Kräver läkarintyg efter vecka 12</li>
                  <li><strong>Kurser i massage:</strong> Särskilda avbokningsregler gäller, se kursvillkor</li>
                  <li><strong>Hälsoresursbehandlingar:</strong> Kräver förhandsbetalning via Hälsoresurs</li>
                  <li><strong>Helgöppet sommaren 2025:</strong> Särskilda tider och priser kan gälla</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <CreditCard size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Betalningsvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Betalningsmetoder</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Betalning sker efter utförd behandling på kliniken</li>
                <li>Vi accepterar kontanter, kort och Swish</li>
                <li>Benify, Benifit och Epassi fungerar utmärkt</li>
                <li>Hälsoresursbehandlingar betalas via Hälsoresurs-systemet</li>
                <li>Presentkort och mervärdeskort kan köpas på plats</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Priser och rabatter</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>10% studentrabatt med giltig studentlegitimation</li>
                <li>Priser kan ändras utan föregående meddelande</li>
                <li>Aktuella priser finns på vår webbplats och i kliniken</li>
                <li>Grupprabatter kan erbjudas för kurser</li>
                <li>Återkommande kunder kan erbjudas lojalitetsrabatter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Fakturering och kvitton</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Kvitto utfärdas alltid efter behandling</li>
                  <li>För företagskunder kan fakturering arrangeras</li>
                  <li>Hälsoresurskvitton skickas automatiskt via systemet</li>
                  <li>Kvitton kan begäras i efterhand inom 30 dagar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Heart size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Behandlingsvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Hälsa och säkerhet</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Informera oss om eventuella hälsoproblem, skador eller mediciner före behandling</li>
                <li>Vi anpassar behandlingen efter dina behov och önskemål</li>
                <li>Behandlingen kan avbrytas av säkerhetsskäl utan återbetalning</li>
                <li>Vi ansvarar inte för allergiska reaktioner på produkter</li>
                <li>Gravida kunder måste informera oss om graviditeten</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Behandlingstyper och specialiteter</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-brand-primary mb-2">Ingmar Apéll specialiteter:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Klassisk svensk massage</li>
                      <li>Terapeutisk massage</li>
                      <li>Kursverksamhet</li>
                      <li>Utbildning i massagetekniker</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-brand-primary mb-2">Tobias Ahlstedt specialiteter:</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Fibromassage</li>
                      <li>Lotorpsmetoden (andningsmassage)</li>
                      <li>Myofascialrelease</li>
                      <li>Hälsoresursbehandlingar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Behandlingsgaranti</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vi strävar efter högsta kvalitet i alla våra behandlingar</li>
                <li>Eventuella klagomål måste framföras inom 7 dagar efter behandling</li>
                <li>Vi erbjuder kompletterande behandling vid berättigade klagomål</li>
                <li>Återbetalning sker endast i undantagsfall efter individuell bedömning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conduct Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Award size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Uppförande och etik</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Uppförande på kliniken</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Respektfull behandling av personal och andra kunder förväntas</li>
                <li>Mobiltelefoner ska vara på tyst läge under behandling</li>
                <li>Rökning och alkohol är förbjudet i hela lokalen</li>
                <li>Vi förbehåller oss rätten att neka service vid olämpligt beteende</li>
                <li>Sexuella anspelningar eller olämpligt beteende tolereras inte</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Professionella gränser</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Våra massageterapeuter följer strikta professionella och etiska riktlinjer</li>
                  <li>All massage sker i terapeutiskt syfte för hälsa och välmående</li>
                  <li>Kunden har alltid rätt att avbryta behandlingen</li>
                  <li>Integritet och värdighet respekteras alltid</li>
                  <li>Behandling sker endast på de områden som överenskommits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Course Terms */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Kursvillkor</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Kurser i massage med Ingmar</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kurser måste betalas i förväg för att säkra platsen</li>
                <li>Avbokning måste ske minst 7 dagar före kursstart för full återbetalning</li>
                <li>Avbokning 3-7 dagar före start: 50% återbetalning</li>
                <li>Avbokning mindre än 3 dagar före start: ingen återbetalning</li>
                <li>Kurser kan ställas in vid för få deltagare</li>
                <li>Deltagare ansvarar för egen försäkring under kursen</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Kursinnehåll och ansvar</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Kursmaterial och tekniker är skyddade av upphovsrätt</li>
                  <li>Deltagare får inte undervisa eller sälja de tekniker som lärs ut utan tillstånd</li>
                  <li>Kurscertifikat utfärdas endast vid fullständig närvaro</li>
                  <li>Vi ansvarar inte för skador som uppstår under praktiska övningar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Disputes */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Clock size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Kontakt och tvister</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Klagomål och reklamationer</h4>
              <p className="mb-2">
                Vid klagomål eller reklamationer, kontakta oss omedelbart:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Telefon: {businessConfig.phone}</li>
                <li>E-post: {businessConfig.email}</li>
                <li>Besök vår klinik på {businessConfig.address.street}, {businessConfig.address.city}</li>
                <li>Öppettider: Se vår webbplats för aktuella tider</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Ansvar och begränsningar</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Vårt ansvar begränsas till värdet av den aktuella behandlingen</li>
                <li>Vi ansvarar inte för indirekta skador eller följdskador</li>
                <li>Behandling sker på egen risk för kunder med allvarliga hälsoproblem</li>
                <li>Läkarkonsultation rekommenderas vid osäkerhet om behandlingens lämplighet</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary mb-2">Tvistlösning</h4>
              <p className="text-sm">
                Eventuella tvister ska i första hand lösas genom dialog. Om detta inte är möjligt 
                kan tvisten hänskjutas till Allmänna reklamationsnämnden (ARN) eller domstol. 
                Svensk lag gäller för alla avtal och tvister.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <FileText size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Juridisk information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-brand-primary mb-2">Företagsinformation</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Företag:</strong> {businessConfig.name}</li>
                  <li><strong>Organisationsnummer:</strong> 559123-4567</li>
                  <li><strong>Adress:</strong> {businessConfig.address.street}</li>
                  <li><strong>Postnummer:</strong> {businessConfig.address.postalCode} {businessConfig.address.city}</li>
                  <li><strong>Telefon:</strong> {businessConfig.phone}</li>
                  <li><strong>E-post:</strong> {businessConfig.email}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-primary mb-2">Tillstånd och certifieringar</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Ingmar Apéll:</strong> Diplomerad Massör</li>
                  <li><strong>Tobias Ahlstedt:</strong> Certifierad Massör</li>
                  <li><strong>Specialutbildningar:</strong> Fibromassage, Lotorpsmetoden, Myofascialrelease</li>
                  <li><strong>Verksamhetstillstånd:</strong> Enligt Socialstyrelsen</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg">
              <h4 className="font-semibold text-brand-primary mb-2">Ändringar av villkor</h4>
              <p className="text-sm">
                Vi förbehåller oss rätten att ändra dessa villkor. Ändringar träder i kraft när de publiceras på vår webbplats. 
                Fortsatt användning av våra tjänster efter ändringar innebär att du accepterar de nya villkoren.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsOfService;