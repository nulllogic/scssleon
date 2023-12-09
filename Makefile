.PHONY: help build docs dist watch

CURRENT_DIR := $(PWD)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

watch:
	@echo "[Watching for changes]"
	docker run --rm -it -v $(CURRENT_DIR)/:/app xiigrid npm run watch

build:
	@echo "[Building Docker image]"
	docker image prune --filter label=name=xiigrid
	docker build -t xiigrid .