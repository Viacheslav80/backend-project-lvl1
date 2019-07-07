install:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
start:
	npx babel-node src/bin/brain-calc.js
start1:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
