.PHONY: help build docs dist watch

CURRENT_DIR := $(shell pwd)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

watch:
	@echo "[Watching for changes]"
	docker run --rm -it -v $(CURRENT_DIR)/:/app xiigrid

build:
	@echo "[Building Docker image]"
	docker build -t xiigrid .
