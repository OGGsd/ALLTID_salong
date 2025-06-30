import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone, Heart, Users } from 'lucide-react';
import { businessConfig } from '../config/business';

const PrivacyPolicy: React.FC = () => {
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
            Integritetspolicy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-4xl mx-auto space-y-6">
        
        {/* Header section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mr-4 border-2 border-brand-accent">
              <Shield size={24} className="text-brand-accent" />
            </div>
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold text-brand-primary">
                Integritetspolicy
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
              <Eye size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Inledning</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {businessConfig.name} ("vi", "oss", "vårt") respekterar din integritet och är engagerade i att skydda dina personuppgifter. 
            Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar din information när du använder våra tjänster 
            eller besöker vår massageklinik. Som vårdgivare inom massage och välmående följer vi strikta riktlinjer för hantering av 
            hälsorelaterad information.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Database size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Information vi samlar in</h3>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Personuppgifter</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Namn och kontaktuppgifter (telefonnummer, e-postadress)</li>
                <li>Bokningsinformation och behandlingshistorik</li>
                <li>Hälsoinformation relevant för massagebehandling (skador, allergier, mediciner)</li>
                <li>Graviditetsstatus (för gravidmassage)</li>
                <li>Betalningsinformation (hanteras säkert via tredjepartstjänster som Benify, Benifit, Epassi)</li>
                <li>Kommunikation med oss via telefon, e-post eller i person</li>
                <li>Studentstatus (för studentrabatt)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Teknisk information</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-adress och enhetsidentifierare</li>
                <li>Webbläsarinformation och användningsdata</li>
                <li>Cookies och liknande teknologier</li>
                <li>Bokningssystem-data från BokaDirekt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-brand-primary mb-2">Hälsoinformation</h4>
              <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
                <p className="text-sm">
                  Som massageterapeuter samlar vi in hälsoinformation som är nödvändig för att ge säkra och effektiva behandlingar. 
                  Detta inkluderar information om skador, smärta, mediciner, allergier och andra hälsotillstånd som kan påverka behandlingen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Heart size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Hur vi använder din information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Hantera bokningar och tillhandahålla våra massagebehandlingar</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Anpassa behandlingar baserat på dina hälsobehov och preferenser</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Kommunicera med dig om dina bokningar, behandlingar och våra tjänster</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Säkerställa säkra behandlingar genom att dokumentera hälsoinformation</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Förbättra våra tjänster och kundupplevelse</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Hantera betalningar via Benify, Benifit, Epassi och andra system</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Skicka information om våra tjänster (endast med ditt samtycke)</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Uppfylla juridiska förpliktelser inom hälso- och sjukvård</span>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Users size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Delning av information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <p>Vi delar aldrig din hälsoinformation med tredje part utan ditt uttryckliga samtycke, förutom i följande fall:</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Med våra massageterapeuter (Ingmar och Tobias) för att ge dig bästa möjliga behandling</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Med BokaDirekt för bokningshantering</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Med betalningsleverantörer (Benify, Benifit, Epassi) för att hantera betalningar</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>När det krävs enligt lag eller för att skydda säkerheten</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Shield size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Dataskydd och säkerhet</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <p>Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller missbruk. Som vårdgivare följer vi särskilt strikta säkerhetsrutiner för hälsoinformation.</p>
            
            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary mb-2">Säkerhetsåtgärder</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Krypterad lagring av känslig information</li>
                <li>Begränsad åtkomst endast för behörig personal</li>
                <li>Regelbunden säkerhetsutbildning för personal</li>
                <li>Säkra kommunikationskanaler</li>
                <li>Regelbundna säkerhetskontroller</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg p-4">
              <h4 className="font-semibold text-brand-primary mb-2">Dina rättigheter enligt GDPR</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Rätt till information om behandling av dina personuppgifter</li>
                <li>Rätt till rättelse av felaktiga uppgifter</li>
                <li>Rätt till radering ("rätten att bli glömd") - med undantag för hälsoinformation som krävs enligt lag</li>
                <li>Rätt till begränsning av behandling</li>
                <li>Rätt till dataportabilitet</li>
                <li>Rätt att invända mot behandling</li>
                <li>Rätt att lämna in klagomål till Datainspektionen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Lock size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Lagring av information</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <p>Vi lagrar dina personuppgifter endast så länge det är nödvändigt för de ändamål de samlades in för:</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Bokningsinformation:</strong> 2 år efter senaste besök</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Hälsoinformation:</strong> 10 år enligt Patientdatalagen</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Betalningsinformation:</strong> 7 år enligt bokföringslagen</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Marknadsföringsinformation:</strong> Tills du återkallar ditt samtycke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-brand-accent border-opacity-20">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <Mail size={20} className="text-brand-accent" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-primary">Kontakta oss</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
            Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center">
              <Phone size={16} className="mr-3 text-brand-primary" />
              <span className="text-sm md:text-base">{businessConfig.phone}</span>
            </div>
            <div className="flex items-start">
              <Mail size={16} className="mr-3 text-brand-primary mt-1" />
              <div className="text-sm md:text-base">
                <div className="font-semibold text-brand-primary">{businessConfig.name}</div>
                <div>Organisationsnummer: 559123-4567</div>
                <div>{businessConfig.address.street}</div>
                <div>{businessConfig.address.postalCode} {businessConfig.address.city}</div>
                <div>{businessConfig.email}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-brand-accent to-brand-secondary bg-opacity-10 rounded-lg">
            <h4 className="font-semibold text-brand-primary mb-2">Personuppgiftsansvarig</h4>
            <p className="text-sm text-gray-700">
              {businessConfig.name} är personuppgiftsansvarig för behandlingen av dina personuppgifter. 
              Vid frågor om hur vi hanterar dina personuppgifter, kontakta oss på ovanstående kontaktuppgifter.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;