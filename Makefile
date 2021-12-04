.PHONY: help docs-build docs-serve

CURRENT_DIR := $(shell pwd)

help:
	@echo "[ENV SETUP]"

docs-build:
	@echo "Generating docs"
	docker run --rm -it -v $(CURRENT_DIR):/src klakegg/hugo:ext-alpine

docs-serve:
	@echo "Running docs at 8000"
	docker run --rm -it -v $(CURRENT_DIR):/src -p 8000:1313 klakegg/hugo:ext-alpine server