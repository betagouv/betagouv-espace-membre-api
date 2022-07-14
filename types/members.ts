export enum Domaine {
    ANIMATION='Animation',
    COACHING = 'Coaching',
    DEPLOIEMENT = 'Déploiement',
    DESIGN = 'Design',
    DEVELOPPEMENT = 'Développement',
    INTRAPRENARIAT = 'Intraprenariat',
    PRODUIT = 'Produit',
    AUTRE = 'Autre',
}
  
export interface Member {
  username: string;
  fullname: string;
  communication_email: string;
  primary_email: string;
  secondary_email: string;
  startups: string[];
  primary_email_status: string;
  employer: string;
  domaine: Domaine;
}
