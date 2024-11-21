/* eslint-disable prettier/prettier */
import 'dotenv/config'
export default{
  "expo": {
    "name": "CRIOS",
    "slug": "CRIOS",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      package: "com.proyecto.crios", // Aquí agregas el nombre del paquete
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/icon.png"
    },
    "plugins": [
      "expo-font"
    ],
    extra: {
        "eas": {
          "projectId": "2a6d22e0-299c-4c03-becb-3c4100b33a80"
      }
    }
  }
}

