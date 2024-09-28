# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia todos los archivos de la aplicación al contenedor
COPY . /app

# Instala http-server para servir tu aplicación
RUN npm install -g http-server

# Expone el puerto 8080
EXPOSE 8080

# Comando para ejecutar el servidor cuando el contenedor inicie
CMD [ "http-server", "/app", "-p", "8080" ]

