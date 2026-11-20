# Site personnel : Barbaro Mahougnon BOSSOU

Site statique (HTML5 / CSS3 / JavaScript), sans framework ni étape de build.

## Structure
- `index.html` : page unique (SEO, JSON-LD, contenu)
- `css/style.css`, `js/main.js` : styles et scripts
- `assets/img/` : favicon, icône mobile, image de partage (`og-image.png`) et **la photo à ajouter**
- `robots.txt`, `sitemap.xml`, `vercel.json` (Vercel), `.htaccess` (Apache)

## À compléter avant la mise en ligne
1. **Photo** : exporter la vraie photo en WebP (ratio 4:5, ex. 640×800, moins de 150 Ko) et la nommer `assets/img/barbaro-bossou.webp`. Tant qu'elle est absente, le monogramme « BB » s'affiche à la place.
2. **Domaine** : remplacer `https://VOTRE-DOMAINE.com` dans `index.html`, `robots.txt` et `sitemap.xml` :
   `grep -rl VOTRE-DOMAINE.com . | xargs sed -i 's#https://VOTRE-DOMAINE.com#https://le-vrai-domaine.com#g'`
3. **E-mail et GitHub** : renseigner `CONFIG` en haut de `js/main.js`. Tant que c'est vide, ces boutons restent masqués. Ajouter aussi le lien GitHub dans `sameAs` du JSON-LD.
4. **Parcours et réalisations** : ajouter uniquement des éléments vérifiés ; supprimer les deux cartes « Exemple conceptuel ».
5. **Image de partage** : `og-image.png` est un visuel provisoire, à remplacer par un visuel 1200×630 avec la vraie photo.

## Déploiement sur Vercel
1. Mettre le dossier sur GitHub, puis Vercel > *Add New Project* > importer le dépôt.
2. Framework : *Other*, aucune commande de build, dossier de sortie : racine. Déployer.
3. *Settings > Domains* : ajouter le domaine et appliquer les DNS indiqués.

## Hébergement classique
Envoyer tout le contenu du dossier (fichier `.htaccess` inclus) à la racine du site par FTP ou le gestionnaire de fichiers.

## Google Search Console
1. Ajouter la propriété (préfixe d'URL) et choisir la vérification par balise HTML.
2. Coller la balise dans `index.html` à l'emplacement commenté `google-site-verification`, redéployer, puis valider.
3. Soumettre `https://le-vrai-domaine.com/sitemap.xml` et demander l'indexation de la page d'accueil.
4. Tester les données structurées avec le test des résultats enrichis de Google.

## Pour renforcer le référencement du nom
Le site seul ne garantit pas un classement : relier le profil LinkedIn et le site de BMB vers ce site, utiliser exactement « Barbaro Mahougnon BOSSOU » partout et obtenir quelques mentions externes.
