venv: ## create virtual environment if venv is not present
	python3 -m venv venv

dev:  ## creates a development environment, install deps
	venv/bin/pip-sync requirements.txt
