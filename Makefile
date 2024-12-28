.PHONY: help build docs dist watch clear

CURRENT_DIR := $(PWD)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

clear:
	@echo "[Cleaning old Docker images]"
	docker rmi -f $(docker images -f "dangling=true" -q)

watch:
	@echo "[Watching for changes]"
	docker run --init --rm -it -v $(CURRENT_DIR)/:/app scssleon --watch ./scss/scssleon.scss ./dist/css/scssleon.css

build:
	@echo "[Building Docker image]"
	docker build --build-arg SASS_VERSION=1.83.0 -t scssleon .