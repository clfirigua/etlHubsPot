# 🧩 ETL HubSpot → Data Warehouse

Este proyecto implementa un flujo **ETL (Extract, Transform, Load)** que extrae información desde **HubSpot** (Leads y Deals), la transforma según un modelo definido y la carga en una base de datos **PostgreSQL**.  
El entorno se ejecuta de forma automatizada usando **Docker Compose**.

---

## 🚀 Puesta en marcha rápida

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/etl-hubspot.git
cd etl-hubspot
```

---

### 2️⃣ Crear el archivo `.env`

Duplica el archivo de ejemplo:

```bash
cp .env.template .env
```

Edita el archivo `.env` con tus valores reales.

**Ejemplo:**

```bash
# Configuraciones de la ETL
PORT=3005
HOSTPG=etl_postgres
PORTPG=5432
USERNAMEPG=etl_user
PASSWORDPG=etl_password
DATABASEPG=etl_db
POSTGRES_VOLUME=./postgres_data

# Configuraciones de terceros
TOKENHUBSPOT=pat-xxxxxxxxxxxxxxxxxxxxxxxx

# pgAdmin
PGADMIN_EMAIL=admin@gmail.com
PGADMIN_PASSWORD=admin123
PGADMIN_PORT=8080

# Crontab (para ejecución automática de la ETL)
SCRAPING_CRON=*/5 * * * *
```

---

## 🔑 Generación del Token de HubSpot

📘 Consulta la [documentación oficial de HubSpot](https://developers.hubspot.com)

Sigue estos pasos para crear un token válido:

1. Ingresa a tu cuenta de **HubSpot**.  
2. Dirígete al **apartado de desarrollo**.  
3. Selecciona **Aplicaciones anteriores**.  
4. Crea una **Legacy App**.  
5. Elige la opción **Private**.  
6. Habilita los siguientes permisos:

   ```
   crm.objects.contacts.read  
   crm.objects.contacts.write  
   crm.objects.deals.highly_sensitive.read  
   crm.objects.deals.read  
   crm.objects.deals.sensitive.read  
   crm.objects.deals.write  
   crm.objects.leads.read  
   crm.schemas.deals.read  
   crm.schemas.deals.write
   ```

7. Copia el **token de acceso generado**.  
8. Guárdalo como variable de entorno en el archivo `.env` en el campo:

   ```bash
   TOKENHUBSPOT=pat-tu_token_aqui
   ```

---

## 🐳 Despliegue con Docker

Ejecuta el proyecto con:

```bash
docker-compose up -d
```

Esto iniciará los siguientes contenedores:

| Contenedor     | Descripción                                           |
|----------------|-------------------------------------------------------|
| **etl_backend** | Servicio principal que ejecuta el proceso ETL.       |
| **etl_postgres** | Base de datos PostgreSQL donde se almacenan los datos. |
| **pgadmin**     | Herramienta web para visualizar la base de datos.    |

---

## 🧠 Accesos útiles

| Servicio        | URL / Conexión            | Descripción                      |
|-----------------|--------------------------|----------------------------------|
| **ETL Backend** | [http://localhost:3005](http://localhost:3005) | API o servicio ETL principal     |
| **pgAdmin**     | [http://localhost:8080](http://localhost:8080) | Interfaz para administrar BD     |
| **PostgreSQL Host** | `etl_postgres` | Host dentro del contenedor       |
| **PostgreSQL Port** | `5432` | Puerto del servicio Postgres     |

---

## 🕒 Programación automática (Cron)

La variable `SCRAPING_CRON` permite definir la frecuencia de ejecución de la ETL.

**Ejemplos:**

| Expresión Cron | Descripción                 |
|----------------|-----------------------------|
| `* * * * *`    | Cada minuto                 |
| `*/5 * * * *`  | Cada 5 minutos              |
| `0 * * * *`    | Cada hora                   |
| `0 0 * * *`    | Una vez al día (medianoche) |

---

## 🧹 Limpieza

Para detener y eliminar los contenedores y volúmenes creados:

```bash
docker-compose down -v
```

---

## 🛠 Tecnologías utilizadas

- **Node.js** – Lógica ETL y conexión con HubSpot API  
- **PostgreSQL** – Almacenamiento estructurado de datos  
- **pgAdmin** – Gestión visual de la base de datos  
- **Docker Compose** – Orquestación de contenedores  
- **Crontab** – Automatización del proceso ETL  

---

## 👨‍💻 Autor

**Carlos Firigua**  
📧 contacto: [clfiriguadev@gmail.com](mailto:clfiriguadev@gmail.com)
