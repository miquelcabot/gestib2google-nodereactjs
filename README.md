# gestib2google-mern
Conversió de fitxer XML del GestIB al domini de Google amb arquitectura MERN (Mongo-Express-ReactJS-NodeJS)

## Requisits
Requisits per executar aquesta aplicació:
* Docker ([https://docs.docker.com/install/](https://docs.docker.com/install/))
* Per desplegar to Heroku: Heroku CLI ([https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli))

## Engegar i aturar els contenidors
Per engegar els contenidors:
```
docker-compose up
```
o
```
docker-compose up -d
```

Per aturar els contenidors i eliminar contenidors, xarxes, volums i imatges creades:
```
docker-compose down
```

## Veure l'aplicació web
Ver veure l'aplicació web s'ha d'obrir la URL [http://localhost:3000](http://localhost:3000)

## Bash shell
Per executar un bash shell interactiu als contenidors `backend`, o `frontend`:
```
docker-compose exec backend bash
docker-compose exec frontend bash
```

## Desplegar a Heroku
[https://devcenter.heroku.com/categories/deploying-with-docker](https://devcenter.heroku.com/categories/deploying-with-docker)

## Credits
Basat en el tema Start Bootstrap SB Admin. [Link](https://github.com/BlackrockDigital/startbootstrap-sb-admin/)