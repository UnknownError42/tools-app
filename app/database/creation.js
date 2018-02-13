var db = db.getSiblingDB('tools');
db.tools.insertOne( { name: "WebStorm" } );
db.tools.insertOne( { name: "Eclipse" } );
db.categories.insertOne( { name: "Développement, IDE" } );
db.profils.insertOne( { name: "Utilisateurs" } );

