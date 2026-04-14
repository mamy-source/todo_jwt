            REST API avec Authentification JWT
 - Guide d'installation et de lancement Prérequis Avant de démarrer, assurez-vous d’avoir installé : Node.js (version recommandée ≥ 18) npm Une base de données (ex : MySQL, PostgreSQL, etc.) Prisma ORM Configuration du projet

    Cloner le projet git clone: https://github.com/mamy-source/todo_jwt
    cd express_jwt
    Installer les dépendances: npm install
    Créer la base de données Créer une base de données nommée : jwt_express
    Configurer les variables d’environnement 
    Créer un fichier .env à la racine du projet : PORT=9000 DATABASE_URL="mysql://user:password@localhost:3306/jwt_express" 
    👉 Adapter selon votre SGBD (MySQL, PostgreSQL, etc.)
    Initialiser Prisma:
     npx prisma migrate dev --name init 
     npx prisma generate 
     🚀 Lancement du projet:
         npm run dev 
    👉 Le serveur sera accessible sur : http://localhost:9000 
    📌 Notes Vérifiez que votre base de données est bien démarrée
     Assurez-vous que les variables .env sont correctes En cas d’erreur, relancer : npx prisma generate

👨‍💻 Auteur

Projet développé par [Mamy]