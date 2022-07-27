.PHONY: help docs-build docs dist

CURRENT_DIR := $(shell pwd)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

docs:
	@echo "Running docs at http://localhost:8000/xiigrid/"
	docker run --rm -it -v $(CURRENT_DIR):/src -p 8000:1313 klakegg/hugo:ext-ubuntu server

docs-build:
	@echo "Generating docs"
	docker run --rm -it -v $(CURRENT_DIR):/src klakegg/hugo:ext-ubuntu
