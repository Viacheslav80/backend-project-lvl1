install:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
start:
	npx babel-node src/bin/brain-even.js
start1:
	npx babel-node src/bin/brain-calc.js
start2:
	npx babel-node src/bin/brain-gcd.js
start3:
	npx babel-node src/bin/brain-progression.js
start4:
	npx babel-node src/bin/brain-prime.js

publish:
	npm publish --dry-run
lint:
	npx eslint .
