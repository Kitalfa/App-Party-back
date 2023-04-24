# Fonctionnement upload image front to back en mode API

## Côté front

-  Je récupère la valeur de mon champ d'upload
-  Je la transforme en base64 (qui est juste une chaine de caractère très très longue)
-  Je l'envoi à l'API comme pour toutes les autres données (pas de multipart/form-data) mais bien du application/json

## Côté back

-  Je récupère les données envoyées par le front, dont l'image en base64
-  Je créé une image à partir de la base64 en la stockant dans un dossier public à la racine (attention, première partir de la base64= type genre png,jpg et tout) : deuxième partie = vraie base64 contenant toutes les données de l'image
-  Je stock le chemin vers l'image dans la base de données (par exemple : '/public/images/monimage.png')

## Côté back, quand j'envoi l'image

-  je dois envoyer l'url du serveur + le chemin vers l'image

## Côté front pour l'affichage

-  Par exemple, je recup un event. Je récupère en même temps le chemin vers l'image.
-  Donc le front doit concatener l'url serveur + chemin vers l'image.

```js
// methode de controller back
const url = "http://localhost:3000";
let event = {
   id: 1,
   name: "event1",
   image: "/public/images/monimage.png",
};

event.image = url + event.image;

res.json(event);
```

```js
//dans un component react
<img src={event.image} />
```
