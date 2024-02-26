const path = require('path');

const cheminComplet = path.join('ExpressJS', 'documents', 'rapport.txt');
const cheminAbsolu = path.resolve('rapport.txt');
const extension = path.extname('./documents/rapport.txt');
const nomFichier = path.basename('./documents/rapport.txt')
const repertoireDuFichier = path.dirname('./documents/rapport.txt')
const detailsChemin = path.parse('./documents/rapport.txt')
const normalize = path.normalize('./documents/rapport.txt')

console.log(cheminComplet);



const fs = require('fs');
const path = require('path');

// Création d'un répertoire
const repertoryPath = path.join(__dirname, "test")
fs.mkdir(repertoryPath, (err) => {
    if (err) throw err;
    console.log('Répertoire créé avec succès !')

    // Ecriture dans un fichier
    const filePath = path.join(repertoryPath, "nouveau_fichier.txt")
    const contenuAEcrire = "Hello world !"

    fs.writeFile(filePath, contenuAEcrire, "utf8", (err) => {
        if (err) throw err;
        console.log("Le fichier a été enregistré avec succès")

            // Lecture du contenu du fichier
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) throw err;
                console.log("Contenu du fichier: ", data)

                // Liste des fichiers du répertroire
                fs.readdir(__dirname, (err, files) => {
                    if (err) throw err;
                    console.log("Liste des fichiers et des répertoires:", files);

                    // Supprimer le fichier
                    fs.unlink(filePath, (err) => {
                        if (err) throw err;
                        console.log("Le fichier a été supprimé avec succès");

                        // Supprimer le répertoire
                        fs.rmdir(repertoryPath, (err) => {
                            if (err) throw err;
                            console.log("Répertoire supprimé avec succès")
                        })
                    })
                })
            })
    })
})

// const fs = require('fs');

// // 1. **Créer un répertoire :** Utiliser `fs.mkdir` pour créer un répertoire appelé "nouveau_repertoire".
// const newRep = path.join(__dirname, "test")
// // fs.mkdir(newRep, (err) => {
// //     if(err) throw err;
// //     console.log("Répertoire créé avec succès!")
// // });

// // 2. **Écrire dans un fichier :** Utiliser `fs.writeFile` pour écrire le texte "Contenu du fichier à écrire." dans un fichier appelé "nouveau_fichier.txt".
// const newFile = path.join(newRep, 'nouveau_fichier.txt')
// const contenuAEcrire = 'Contenue. Coucou !'

// fs.writeFile(newFile, contenuAEcrire, 'utf8', (err) => {
//     if(err) throw err;
//     console.log("Le fichier a été enregistré !")
// });

// // 3. **Lire le contenu du fichier :** Utiliser `fs.readFile` pour lire le contenu du fichier "nouveau_fichier.txt" et afficher le résultat dans la console.
// fs.readFile(newFile, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

// // 4. **Lister les fichiers du répertoire :** Utiliser `fs.readdir` pour lister tous les fichiers et répertoires dans le répertoire actuel et afficher le résultat dans la console.
// fs.readdir(newRep, (err, files) => {
//     if (err) throw err;
//     console.log("Contenu du répertoire:", files)
// })

// // 5.  **Supprimer le fichier :** Utiliser `fs.unlink` pour supprimer le fichier "nouveau_fichier.txt".

// // 6. **Supprimer le répertoire :** Utiliser `fs.rmdir` pour supprimer le répertoire "nouveau_repertoire".

// console.log(newRep);