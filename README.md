# Event Pro

## Descripción

Event Pro es un sistema web para la gestión de eventos y espectáculos.
La plataforma permitirá gestionar usuarios, eventos y reservas, facilitando la
organización de eventos y la participación de los clientes.

El sistema contará con diferentes perfiles de usuario: Cliente, Agente y
Administrador, cada uno con funcionalidades específicas.

## Objetivo general

Desarrollar un sistema web para la gestión de eventos y espectáculos que
permita administrar usuarios, eventos y reservas mediante una base de datos
relacional, facilitando la consulta y gestión de la información.

## Integrantes

- Samuel Tascon Duque
- Harrynson Moreno Campo
- Santiago Santamaria Jimenez

## Roles

- Samuel Tascon Duque — Diseñador / Desarrollador
- Harrynson Moreno Campo — Scrum Master / Desarrollador
- Santiago Santamaria Jimenez — Product Owner / Desarrollador

## Tecnologías

### Frontend

- HTML5
- CSS
- Bootstrap
- JavaScript
- TypeScript

### Arquitectura

- Patrón Modelo–Vista–Controlador (MVC)

### Backend

- Backend para la gestión de operaciones CRUD
- Comunicación entre la aplicación web y la base de datos

### Base de datos

- PostgreSQL

### Control de versiones

- Git
- GitHub

## Perfiles de usuario

### Cliente

El cliente podrá:

- Visualizar los eventos disponibles.
- Consultar la información de los eventos.
- Realizar reservas.
- Visualizar sus reservas.
- Consultar el estado de sus reservas.

### Agente

El agente podrá:

- Registrar eventos.
- Visualizar los eventos registrados.
- Visualizar las reservas solicitadas.
- Administrar reservas.
- Actualizar el estado de las reservas.

### Administrador

El administrador podrá:

- Consultar reportes generales del sistema.
- Visualizar información mediante gráficas y tablas.
- Consultar información relacionada con clientes, agentes,
  reservas y eventos.

## Funcionalidades principales

### Autenticación

- Inicio de sesión mediante correo electrónico y contraseña.
- Registro de clientes.
- Registro de agentes.

### Gestión de eventos

- Registrar eventos.
- Consultar eventos.
- Modificar eventos.
- Eliminar eventos.
- Administrar el estado de los eventos.

### Gestión de reservas

- Registrar reservas.
- Consultar reservas.
- Modificar reservas.
- Eliminar reservas.
- Administrar el estado de las reservas.

### Gestión de personas

- Registrar personas.
- Consultar personas.
- Modificar personas.
- Eliminar personas.

### Gestión de clientes

- Registrar clientes.
- Consultar clientes.
- Modificar clientes.
- Eliminar clientes.

### Gestión de agentes

- Registrar agentes.
- Consultar agentes.
- Modificar agentes.
- Eliminar agentes.

### Gestión de administradores

- Registrar administradores.
- Consultar administradores.
- Modificar administradores.
- Eliminar administradores.

### Gestión geográfica

- Gestión de países.
- Gestión de departamentos.
- Gestión de ciudades.

## Estados

### Estados de eventos

- Programado
- En Boletería
- En Vivo
- Finalizado
- Cancelado

### Estados de reservas

- Reservada
- Confirmada
- Cancelada

## Base de datos

La aplicación utilizará PostgreSQL como sistema de gestión de base de datos
relacional.

La base de datos contempla información relacionada con:

- Personas
- Clientes
- Agentes
- Administradores
- Países
- Departamentos
- Ciudades
- Eventos
- Reservas

## Arquitectura del proyecto

El proyecto será desarrollado utilizando el patrón de arquitectura
Modelo–Vista–Controlador (MVC).

### Modelo

Responsable de la gestión de los datos y la comunicación con la base de datos.

### Vista

Responsable de la interfaz gráfica y la interacción con el usuario.

### Controlador

Responsable de procesar las solicitudes y coordinar la comunicación entre
las vistas y los modelos.

## Reportes

El sistema contará con un módulo de reportes para el perfil Administrador.

Entre los reportes contemplados se encuentran:

- Número de clientes registrados.
- Número de agentes registrados.
- Número de administradores registrados.
- Número de reservas registradas.
- Número de eventos registrados.
- Promedio de ingresos por agente.
- Promedio de ingresos por cliente.
- Ingresos totales de los eventos por mes durante 2026.
- Número de reservas por evento y por mes durante 2026.
- Número de eventos creados por agente y ciudad.
- Eventos por país, departamento y ciudad.
- Historial de reservas por cliente.
- Reservas canceladas y su causa.
- Eventos cancelados y su causa.

## Diseño UI/UX

El diseño inicial de la plataforma fue desarrollado en Figma.

Las principales pantallas contempladas son:

- Inicio
- Iniciar sesión
- Registro
- Eventos
- Detalle del evento
- Reserva
- Compra de entradas
- Mis reservas
- Gestión de eventos
- Administración de reservas
- Dashboard del administrador

## Documentación

La documentación del proyecto incluirá:

- Modelo Entidad-Relación.
- Diagramas UML.
- Modelo de base de datos.
- Requerimientos funcionales.
- Requerimientos del sistema.
- Diseño de interfaces.
- Evidencias del proceso de desarrollo.

## Metodología de trabajo

El proyecto será gestionado mediante la metodología Scrum.

### Sprint 1

Durante el primer Sprint se realizará el análisis, planificación,
diseño y desarrollo inicial del sistema.

Las actividades serán gestionadas mediante Jira.

## Control de versiones

El código fuente será gestionado mediante Git y GitHub.

Cada integrante del equipo participará en el desarrollo mediante commits y
ramas de trabajo, permitiendo realizar seguimiento de la participación
individual.

## Estado del proyecto

Proyecto en etapa de análisis, planificación y diseño correspondiente al
primer corte.
