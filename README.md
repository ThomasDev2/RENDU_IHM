# RENDU_IHM
Ce repository sert uniquement à rendre le projet IHM de BOSTON Thomas et LUIS Flavien 

## A propos du projet 
Nous n'avons pas utilisé ce git pour le code; nous avons avancé chacun sur nos machines et nous sommes échangé des bouts de codes par message, le repo sert uniquement car le rendu est trop gros pour mootse.

## Installation
Une fois téléchargé le projet est pret à run dans son environnement de production avec ng serve.

## Architecture et choix techniques
Nous avons définis des classes model représentant les différents éléments présents dans les listes JSON situé dans /assets/mock_back_end.

Pour avoir un fonctionnement plus proche d'un fonctionnement réel le json est servi grâce à http client dans les classe services en passant en url du get son chemin d'accès.

Une fois chargé le json est stocké dans un observable qui n'est pas nécessaire mais nous avons souhaité utiliser au maximum les éléments du cours.

De même nous avons essayé de faire en sorte que le routing des composant suive une architecture rest.