## Docker-Node-Express-Mongo Skeleton

##### Overview

This is a super basic skeleton for running an Express API with Mongo in Docker.
Code is mapped into the Node container with a volume and hot code reloading is enabled.
 MongoDB data is not persisted to the host.

##### Requirements:
* Docker
* Docker Compose

##### Build images
```bash
docker-compose build
```

##### Install NPM dependencies 
**Note:** This step creates ./node_modules on the host.
```bash
docker-compose run --rm api npm install
```

##### Run it!
```bash
docker-compose up -d
```

Visit [http://localhost:8080/api](http://localhost:8080/api)

##### Get the logs
```bash
docker-compose logs -f
```


##### Stop and remove all containers
```bash
docker-compose down
```