# Front end linters setup
* NPM update: 
  Caution! You should manually update package in npm after making changes in repo.

* Installation: 
```
yarn add husky lint-staged @taptima/front-linters-setup --dev
```

* Add following scripts to your **package.json**:
```json
"scripts": {
  "format": "prettier \"**/*.{js,jsx,json,css,scss}\" --write --config node_modules/front-linters-setup/configs/prettier/config.json --ignore-path node_modules/front-linters-setup/configs/.ignore",
  "lint-styles": "stylelint \"**/*.{css,scss}\" --fix --config node_modules/front-linters-setup/configs/stylelint/formatConfig.json --ignore-path node_modules/front-linters-setup/configs/.ignore",
  "lint-js": "eslint \"**/*.{js,jsx}\" --fix --ignore-path node_modules/front-linters-setup/configs/.ignore"
}
```

* Also add these lines to your **package.json** to enable pre-commit hooks
```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
"*.{js,jsx}": [
  "yarn run lint-js",
  "yarn run format"
],
"*.{css,scss}": [
  "yarn run lint-styles",
  "yarn run format"
],
".json": "yarn run format"
}
```

* Provide stylelint configuration for your editor:
```json
"stylelint": {
  "extends": "./node_modules/front-linters-setup/configs/stylelint/baseConfig.json"
}
``` 

* Provide eslint configuration (use `reactConfig.json` for React.js based projects):
```json
"eslintConfig": {
  "extends": "./node_modules/front-linters-setup/configs/eslint/baseConfig.json"
}
``` 

Now you have configured linting & formatting of staged .css, .scss, .js, .jsx & .json files on pre-commit hook.

You can also format & lint all project .css, .scss, .js, .jsx & .json files using commands `yarn format`, 
`yarn lint-styles` & `yarn lint-js`.
