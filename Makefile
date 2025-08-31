.PHONY: build docs dist watch clean publish help

CURRENT_DIR := $(PWD)
SASS_VERSION := 1.91.0

dist:
	@echo "[Compiling SCSS files and minifying]"
	npm run css && npm run minify

clean: ## Remove docker images
	@echo "[Cleaning old Docker images]"
	docker rmi -f $(docker images -f "dangling=true" -q)

watch: ## Watch changes
	@echo "[Watching for changes]"
	docker run --init --rm -it -v $(CURRENT_DIR)/:/app --name scssleon \
	    nulllogic/scssleon --watch ./scss/scssleon.scss ./dist/css/scssleon.css

build: ## Build container
	@echo "[Building Docker image]"
	docker build --build-arg SASS_VERSION=$(SASS_VERSION) -t nulllogic/scssleon .

publish:
	@echo "[Publishing Docker images]"
	docker buildx build --platform linux/amd64,linux/arm64 --build-arg SASS_VERSION=$(SASS_VERSION) -t nulllogic/scssleon:latest --push .

help: ## Display this help
	@echo "--HELP--"
	@grep -E '^[a-zA-Z_-]+:\s+##' Makefile | awk 'BEGIN {FS = ":"}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$3}'
	@echo "--END--"