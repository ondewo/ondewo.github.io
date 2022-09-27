setup_local_development:
	@npm i -g sass
	@make run_sass
	@make run_server

run_server:
	@echo "Starting HTTP Server"
	x-terminal-emulator -e "npx http-server ./"

run_sass:
	@echo "Starting SASS compiler"
	x-terminal-emulator -e "sass --watch style/index.scss style/index.css"

REPO_NAME="NLU"

run_mock_arp: ## Run Mock of an Automated Release Process command
	$(eval VERSION_LINE:=$(shell cat -n data.js | sed -n "/name\: '${REPO_NAME}'/,/end\: ''/p" | grep "versions: " -A 1 | tail -1 | grep -o -E '[0-9]+' | head -1 | sed -e 's/^0\+//'))
	$(eval TEMP_TEXT:= $(shell cat script_object.txt | sed -e "s/VERSION/99\.99\.99/g" -e "s/TECHNOLOGY/NLU/g"))
	@sed -i "${VERSION_LINE} i ${TEMP_TEXT}" data.js
	@npx prettier -w --single-quote data.js