# Projet_Cloud_of_things_SmartGreenHouse
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

_Une solution intelligente pour les serres dite "Smart Greenhouse'" permettant d'assurer une productivité optimale._
#
![This is an image ](/Frontend/src/assets/icon/crée-par.svg)
- Chaima Beldi
- Hassine Chahed 
##

Notre solution SmartGreenhouse offre un contrôle avancé du microclimat et une optimisation énergétique.
Les producteurs peuvent surveiller et contrôler les paramètres mentionnés ci-dessous pour assurer un meilleur taux de croissance de la culture :
- Gestion de la pression au sein de la serre.
- Acquisition de la température. 
- Gestion de l’humidité du sol.
- Déverrouiller la porte de la serre en se basant sur la localisation de mobile et la technologie NFC.
## Pour commencer

- _Architecture_ : Ce système d'irrigation de serre intelligent est l'un des systèmes basés sur des capteurs qui peuvent fonctionner confortablement 
et amicalement dans l'agriculture en chaque serre. Il contient les différents types de capteurs pour différents potentiels comme :
capteur de pression atmosphérique, capteur d'humidité du sol et capteur de température du sol.                  
Notre architecture prend le modèle suivant décrit ci-dessous :

![This is an image ](/Frontend/src/assets/icon/architecture.PNG)

## Technologies

- Angular : v13.0.0
- Ionic: v6
- Capacitor
- Node.js : v16
- Express: 4.17.1
- Node-Red
- Mosquitto Broker
### Installation

Les étapes pour installer et exécuter l'application :
- Exécutez npm install à l’intérieur du backend (smartgreenhouseapp) ainsi que le dossier Frontend afin d’installer les dépendances nécessaires.
- Allez dans Backend (smartgreenhouseapp) et créez votre propre fichier .env à l’intérieur du dossier principal pour ajouter votre configuration plus spécifiquement les 
credentials nécessaires(les cerificats, port, credentials du base de données).
- Utilisez votre propre certificat personnalisé pour activer HTTPS.
- Utilisez la commande "npm start" dans le dossier Backend (smartgreenhouseapp) pour lancer votre serveur principal.
- Utilisez la commande "Ionic Serve "pour exécuter le site Web sur votre machine locale.
### Cetificats

Nous avons activé HTTPS en utilisant Let’s Encrypt’s Certbot, ce qui nous permet de vérifier la propriété de notre domaine et de sécuriser les connexions à notre site Web.
Nous avons également généré des paramètres Dephi-Helman plus forts pour la connexion TLS avec une longueur de 4096 bits. Grâce à cela, et aussi grâce à certains paramètres de Node.js, nous avons pu désactiver TLS 1.2 et renforcer la communication avec notre solution. Nous avons été en mesure de noter une validation de SSLLabs.
![This is an image ](/Frontend/src/assets/icon/certficat.png)
### Des captures d'écran des interfaces 
#
-  Interface Login:
#
 ![This is an image ](/Frontend/src/assets/icon/loginpage.png)

#
- Interface Sign Up:
#

![This is an image ](/Frontend/src/assets/icon/signup.png)

![This is an image ](/Frontend/src/assets/icon/signup1.png)

#
- Interface Mysensors:
#
![This is an image ](/Frontend/src/assets/icon/homepage.png)


![This is an image ](/Frontend/src/assets/icon/temperature.png)


![This is an image ](/Frontend/src/assets/icon/light.png)

![This is an image ](/Frontend/src/assets/icon/humidity.png)



