Una vez clonado el proyecto, dentro de la terminal ingresar los siguientes comandos:

npm cache clean --forcé      

npm install react-native-web react-dom

____________________________________________________________________________________
Pasos para subir una rama al repositorio remoto
git init
git branch 'nombreRama'
git checkout -b 'nombreRama'
git add  .
git commit -m 'Creacion de rama'
git remote -v (es para ver  el origin de la url de proyecto)
git remote add origin <<url>> (en caso de que no tengamos añadido el origin)

git push -u origin "branch" (listo ya se creo tu rama al repositorio del proyecto)
____________________________________________________________________________________