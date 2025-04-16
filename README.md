# 💸 Personal Budget API

Este proyecto consiste en una API RESTful que permite a los usuarios gestionar un presupuesto personal utilizando el enfoque de **Envelope Budgeting**. A través de esta API, los usuarios pueden crear, leer, actualizar y eliminar sobres presupuestarios, así como realizar transferencias y controlar el balance de cada sobre.

---

## 🚀 Funcionalidades

- Crear sobres de presupuesto (`POST /api/envelopes`)
- Obtener todos los sobres (`GET /api/envelopes`)
- Consultar un sobre específico (`GET /api/envelopes/:id`)
- Actualizar un sobre (`PUT /api/envelopes/:id`)
- Eliminar un sobre (`DELETE /api/envelopes/:id`)
- Transferir fondos entre sobres (`POST /api/envelopes/transfer`)
- Validación de datos para evitar gastos superiores al balance disponible

---

## 🛠 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) para pruebas de endpoints

---

## 📦 Instalación

1. Cloná el repositorio:

git clone https://github.com/tu_usuario/personal-budget-api.git
cd personal-budget-api
Instalá las dependencias:

- npm install

Ejecutá el servidor en modo desarrollo:

- npm run dev

---

## 📮 Prueba con Postman
Base URL: http://localhost:3000/api/envelopes

Usá los métodos GET, POST, PUT, DELETE para interactuar con los sobres presupuestarios.

Usá POST /api/envelopes/transfer para transferir saldo entre sobres.

---

## 📘 Objetivos del proyecto
Construir una API RESTful utilizando Node.js y Express.

Permitir el manejo completo de sobres presupuestarios.

Aplicar buenas prácticas en endpoints, códigos de respuesta y validaciones.

Utilizar Git para el control de versiones.

Usar Postman como herramienta de prueba.

---

## 🧾 Notas
La carpeta node_modules está ignorada mediante .gitignore.

Este proyecto fue desarrollado como práctica para consolidar conocimientos en backend y APIs REST con JavaScript.
