import { Layout } from "components";
import { ReactElement } from "react";

export default function RDC() {
    return (
      <div className="pt-20 text-white">
        <h1 className="text-center text-2xl mt-5 mb-10 font-bold">Règles de confidentialité</h1>

        <div className="mx-3 md:mx-20">
          <h2 className="text-lg my-3 font-medium">Règles de confidentialité</h2>
          <p className="mb-10">
            Notes est éditée par Lucas Consejo, lucas.consejo@gmail.com, 203, avenue Robert Schuman, 33110 Le Bouscat. Le terme Application s’applique à l’application pour mobile ou tablette Android nommée « Notes ».
            Nos règles de confidentialité expliquent que nous collectons aucune données depuis l’Application, comment nous utilisons / traitons ces informations.
          </p>
          <h2 className="text-lg my-3 font-medium">Données personnelles</h2>
          <p className="mb-10">
            Depuis notre Application, nous ne collectons aucune donnée personnelle (par exemple: les noms, les adresses, les numéros de téléphone, les adresses de courrier électronique ou les adresses IP complètes).
          </p>
          <h2 className="text-lg my-3 font-medium">Permissions demandées par l’Application</h2>
          <h3 className="my-3">Utilisation de la caméra</h3>
          <p className="mb-10">
            Nous utilisons uniquement l’appareil photo pour permettre aux utilisateurs d'ajouter une image de couverture pour chaque note. Ces informations sont stockés uniquement sur l'appareil de l'utilisateur. Nous ne collectons aucune information.
          </p>
          <h3 className="my-3">Utilisation du gestionnaire de fichier</h3>
          <p className="mb-10">
            Nous utilisons uniquement le gestionnaire de fichier afin de stocker chaque note (texte, fichier image) sur l'espace disque de l'appareil de l'utilisateur. Nous ne collectons aucune information.
          </p>
          <p className="mb-10">Nous ne collectons aucune information personnelle identifiable. Nous ne vendons pas, n’échangeons ni transférons ces informations à des tiers. Cependant, l'Application s’appuie sur des logiciels fournis par d’autres éditeurs. Leurs règles de confidentialité sont aussi applicables.</p>
          <p>Lucas Consejo. Tous droits réservés.</p>
        </div>
    </div>
      );
};

RDC.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};