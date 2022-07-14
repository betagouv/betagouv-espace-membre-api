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
  id: string;
  fullname: string;
  communication_email: string;
  startups: string[];
  active: Boolean;
  employer: string;
  domaine: Domaine;
}
