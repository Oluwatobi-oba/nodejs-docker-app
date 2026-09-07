# Node.js & Docker Deployment Assignment

A simple Node.js web application prepared for deployment using GitHub, Linux, Docker, and Docker Hub.

## Application

The application listens on port `3000`.

## Files

- `app.js` - Node.js HTTP server
- `package.json` - Node.js project configuration
- `Dockerfile` - Instructions for building the Docker image
- `.dockerignore` - Files excluded from the Docker build context
- `.gitignore` - Files excluded from Git

## Run locally

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Docker

Build the image:

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0 .
```

Push the image:

```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

Pull the image:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

Run the container:

```bash
docker run -d -p 3000:3000 YOUR_DOCKERHUB_USERNAME/nodejs-app:1.0
```

Verify:

```bash
docker ps
```

## Required Assignment Screenshots

Add your own screenshots below after completing the deployment:

### 1. Docker Build Command

Screenshot showing the successful `docker build` command.

### 2. Docker Hub Image

Screenshot showing the image and `1.0` tag in your own Docker Hub repository.

### 3. Running Docker Container

Screenshot showing the container running with `docker ps`.

### 4. Live Application

Screenshot showing the application successfully running in a browser.

> Important: Replace `YOUR_DOCKERHUB_USERNAME` with your actual Docker Hub username. The screenshots must be your own and must show your completed deployment.
