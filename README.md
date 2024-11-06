Una vez clonado el proyecto, dentro de la terminal ingresar los siguientes comandos:

npm cache clean --force (es solo un comando situacional) 

npm install react-native-web react-dom

npx expo install expo-system-ui

npm install @react-navigation/native

npm install @react-navigation/bottom-tabs

npm install react-native-screens react-native-safe-area-context

expo install expo-splash-screen

expo install expo-font

expo install @expo-google-fonts/rubik expo-font expo-app-loading

npm install react-native-vector-icons

npm install firebase

npm install @react-native-picker/picker

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