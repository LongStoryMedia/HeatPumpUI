.SILENT:
.ONESHELL:
.EXPORT_ALL_VARIABLES:

default: start

install:
	npm install --prepend-node-path
	
start:
	rm -rf dist
	npm run start --prepend-node-path

build:
	rm -rf umd
	rm -rf build
	npm run build --prepend-node-path

test:
	npm test --prepend-node-path

lint:
	npm run lint --prepend-node-path

test-watch:
	npm run test-watch --prepend-node-path
	
upload-%: build
	if [[ $* == "dev" ]]; then\
		az account set -s $$(az account show -s "EHP - CSP - DEV" --query="id" -o tsv);\
	else\
		az account set -s $$(az account show -s "EHP - CSP" --query="id" -o tsv);\
	fi && \
	AUTH_KEY=$(shell az storage account keys list --account-name domesauidev --query="[0].value" -o tsv) && \
	az storage blob delete-batch --account-name domesaui$* --source "dome-ui-lib" --pattern "*" --connection-string "DefaultEndpointsProtocol=https;AccountName=domesauidev;AccountKey=$$AUTH_KEY;EndpointSuffix=core.windows.net" && \
	az storage blob upload-batch -d "dome-ui-lib" -s "umd/" --pattern "*.js" --account-name domesaui$* --connection-string "DefaultEndpointsProtocol=https;AccountName=domesauidev;AccountKey=$$AUTH_KEY;EndpointSuffix=core.windows.net" && \
	az cdn endpoint purge -n dome-ui-endpoint-$* --profile-name dome-ui-profile-$* --content-paths "/*" --resource-group EHP-EUS-DOME-$*-RG


.PHONY: test build umd

