# Docker API & React App Example

This repository demonstrates how to containerize a full-stack application using Docker Compose. The project consists of two main services:

- **API Service:** A Node.js API (using [nodemon](https://nodemon.io/) for development hot-reloading) running on port `4000`.
- **React App:** A React front-end application.

Both services are orchestrated with Docker Compose for easy setup and deployment.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Stopping the Services](#stopping-the-services)
- [Notes](#notes)
- [License](#license)

## Prerequisites

- Docker (v20+ recommended)
- Docker Compose (v2+ recommended)

## Project Structure

```plaintext
.
├── api
│   ├── Dockerfile
│   ├── package.json
│   ├── index.js
│   └── ... (other API files)
├── react
│   ├── Dockerfile
│   ├── package.json
│   ├── public
│   ├── src
│   └── ... (other React files)
├── docker-compose.yaml
└── README.md
```

- The **API** lives in the `./api` directory.
- The **React app** lives in the `./react` directory.
- The `docker-compose.yaml` file orchestrates the multi-container application.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. **Build and start the containers:**

   ```bash
   docker compose up --build
   ```

   This command will build the Docker images for both services and start the containers.

3. **Access the services:**

   - **API Service:** [http://localhost:4000](http://localhost:4000)
   - **React App:** [http://localhost:3000](http://localhost:3000)  
     _(Ensure the port mapping in your Dockerfile or docker-compose file for the React app matches this.)_

## Stopping the Services

To stop and remove the containers, networks, images, and volumes, run:

```bash
docker compose down --rmi all -v
```

## Notes

- **Obsolete `version` field:**  
  Docker Compose v2+ no longer requires the `version` field in `docker-compose.yaml`. Remove it if you see warnings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
