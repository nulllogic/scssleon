.PHONY: help docs-build docs-serve dist

CURRENT_DIR := $(shell pwd)

help:
	@echo "[ENV SETUP]"

dist:
	@echo "npm run css && npm run minify"

docs-build:
	@echo "Generating docs"
	docker run --rm -it -v $(CURRENT_DIR):/src klakegg/hugo:ext-alpine

docs-serve:
	@echo "Running docs at 8000"
	docker run --rm -it -v $(CURRENT_DIR):/src -p 8000:1313 klakegg/hugo:ext-alpine server