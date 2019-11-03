# gestib2google-nodereactjs
Conversió de fitxer XML del GestIB al domini de Google amb NodeJS i ReactJS

## Requisits
Requisits per executar aquesta aplicació:
* [Node.js 10 LTS](https://nodejs.org/).
* Crear credencials d'autorització (authorization credentials) seguint [aquest enllaç](https://console.developers.google.com) i copiar el fitxer generat **client_secret.json** a la carpeta arrel de l'aplicació.

Per instal·lar totes les dependències del projecte, executar:
```
$ npm install
```

## Execució
Per executar:
```
$ npm start
```

# Execució amb docker
Requisits per executar aquesta aplicació:
* [Docker](https://docs.docker.com/install/)
* Crear credencials d'autorització (authorization credentials) seguint [aquest enllaç](https://console.developers.google.com) i copiar el fitxer generat **client_secret.json** a la carpeta arrel de l'aplicació.

Executar l'entorn de desenvolupament:
```
$ docker-compose up -d
```

Executar l'entorn de producció:
```
$ docker-compose -f docker-compose-prod.yml up -d
```

Aturar el contenidor
```
$ docker-compose stop
```

## Veure l'aplicació web
Ver veure l'aplicació web s'ha d'obrir la URL [http://localhost:3000](http://localhost:3000)

## Credits
Basat en el tema Start Bootstrap SB Admin. [Link](https://github.com/BlackrockDigital/startbootstrap-sb-admin/)