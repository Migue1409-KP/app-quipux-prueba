# Prueba Técnica - Frontend

Este es el proyecto frontend para la prueba técnica, desarrollado en **Angular 19**. Su objetivo principal es consumir la API desarrollada en el backend y demostrar la capacidad de integración entre ambos sistemas.

---

## 🚀 Tecnologías Utilizadas

- **Framework:** Angular 19
- **CLI:** Angular CLI 19.1.6
- **Lenguaje:** TypeScript 5.7.2
- **Manejo de Cookies:** ngx-cookie-service
- **Estilos:** CSS básico
- **HTTP Requests:** HttpClient de Angular
- **Módulo de Rutas:** Angular Router

---

## 📌 Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- **Node.js** (versión recomendada: 18.x o superior)
- **Angular CLI** (`npm install -g @angular/cli`)
- **Backend corriendo en el puerto `8080`**

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el Repositorio
```sh
 git clone https://github.com/usuario/pruebatecnicafront.git
 cd pruebatecnicafront
```

### 2️⃣ Instalar Dependencias
```sh
 npm install
```

### 3️⃣ Ejecutar el Proyecto
```sh
 ng serve
```
> Esto iniciará el servidor en `http://localhost:4200/`.

### 4️⃣ **¡Importante!** Backend en Ejecución
Para que el frontend funcione correctamente, asegúrate de tener **el backend corriendo en el puerto `8080`**.

---

## 🌍 Rutas de la Aplicación

El frontend cuenta con las siguientes rutas:

| Ruta                  | Componente                | Descripción |
|-----------------------|--------------------------|-------------|
| `/`                   | Redirección a `/login`   | Página de inicio redirige al login |
| `/login`              | LoginComponent           | Formulario de inicio de sesión |
| `/register`           | RegisterComponent        | Registro de usuario |
| `/create-tracklist`   | CreateTrackListComponent | Creación de listas de reproducción |
| `/find-all-tracklists` | FindAllTrackListsComponent | Visualización y eliminación de listas |

---

## 🎨 Estilo y Diseño

> **⚠️ Nota:** Este frontend tiene un diseño **muy básico**, ya que su propósito es demostrar la capacidad de consumo del backend, **no evaluar habilidades en diseño UI/UX**.

Las interfaces contienen formularios simples y tablas para visualizar los datos devueltos por el backend. Se ha priorizado la funcionalidad sobre la apariencia.

---

## 🔑 Autenticación y Seguridad

- **Inicio de Sesión:** Se requiere un usuario registrado para acceder a los endpoints protegidos.
- **Manejo de Tokens:**
  - Al iniciar sesión, el token JWT se almacena en **cookies**.
  - Se usa `ngx-cookie-service` para manejar las cookies.
  - Todas las solicitudes a endpoints protegidos incluyen el token en el header `Authorization`.
- **Endpoints Públicos:**
  - `login` y `register` no requieren autenticación.
- **Endpoints Protegidos:**
  - `create-tracklist` y `find-all-tracklists` requieren autenticación.

---

## 📩 API Backend

El frontend consume los siguientes endpoints del backend (`http://localhost:8080/api/v1/`):

- **`POST /users/login`** → Inicia sesión y recibe un token.
- **`POST /users/register`** → Crea un nuevo usuario.
- **`POST /lists`** → Crea una nueva lista de reproducción.
- **`GET /lists`** → Obtiene todas las listas de reproducción.
- **`DELETE /lists/{nombre}`** → Elimina una lista (requiere token).

---

## 📌 Contacto

Si tienes alguna duda o sugerencia, no dudes en contactarme.

