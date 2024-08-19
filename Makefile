IMAGE_NAME = gpx-builder-api

docker-build:
	docker build -t i-${IMAGE_NAME} -f api/Dockerfile .
	docker tag i-${IMAGE_NAME}:latest ${IMAGE_NAME}

docker-run: docker-build
	docker compose -f ops/docker-compose.yml -p gpx-builder up

docker-run-daemon: docker-build
	docker compose -f ops/docker-compose.yml -p gpx-builder up --detach

docker-stop-daemon:
	docker compose -f ops/docker-compose.yml -p gpx-builder down
