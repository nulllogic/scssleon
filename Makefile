.PHONY: help docs-build docs dist

CURRENT_DIR := $(shell pwd)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

watch:
	@echo "[Watching SCSS files for changes]"
	npm run watch

docs:
	@echo "Running docs at http://localhost:8000/xiigrid/"
	docker run --rm -it -v $(CURRENT_DIR):/src -p 8000:3000 klakegg/hugo:ext-ubuntu server

docs-build:
	@echo "Generating docs"
	docker run --rm -it -v $(CURRENT_DIR):/src klakegg/hugo:ext-ubuntu
