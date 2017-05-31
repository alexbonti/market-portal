DOCKER_IMAGE_NAME ?= alexbonti/market-portal

build:
	docker build -t $(DOCKER_IMAGE_NAME) .