help:
	@echo "Existing goals are: "
	@echo "clean      -> clean dependencies and generated files"
	@echo "install    -> npm install and bower install"
	@echo "dev        -> grunt, grunt watch and launch nodejs"
	@echo "prod       -> build for prod"

clean:
	grunt clean
	rm -rf bower_components/ node_modules/ 

install:
	npm install
	bower install

dev:
	grunt

prod:
	grunt buildProd




