.PHONY: help build docs dist watch

CURRENT_DIR := $(PWD)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

watch:
	@echo "[Watching for changes]"
	docker run --rm -it -v $(CURRENT_DIR)/:/app xiigrid --watch ./scss/xiigrid.scss ./dist/css/xiigrid.css

build:
	@echo "[Building Docker image]"
	docker image prune --filter label=name=xiigrid
	docker build --build-arg SASS_VERSION=1.69.5 -t xiigrid .