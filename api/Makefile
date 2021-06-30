TAG=$(shell date '+%Y-%m-%d')
DOCKER_PASSWORD=${{ secrets.DOCKER_PASSWORD }}
DOCKER_USERNAME=${{ secrets.DOCKER_USERNAME }}
IMAGE_NAME=${{ secrets.IMAGE_NAME }}

build:
	docker build -t $(IMAGE_NAME) ../
login:
	docker login -u "$(DOCKER_USERNAME)" -p "$(DOCKER_PASSWORD)"
tag: login
	docker tag $(IMAGE_NAME) $(DOCKER_USERNAME)/$(IMAGE_NAME):$(TAG)
push: tag
	docker push $(DOCKER_USERNAME)/$(IMAGE_NAME):$(TAG)
