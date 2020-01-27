# Front end linters setup

* Installation: 
```
yarn add husky lint-staged git+ssh://git@gitlab.fac.im:bolotin/front-linters-setup --dev
```

* Add following scripts to your **package.json**:
```json
"scripts": {
  "format": "prettier \"**/*.{js,jsx,json,css,scss}\" --write --config node_modules/front-linters-setup/configs/prettier/config.json --ignore-path node_modules/front-linters-setup/configs/.ignore",
  "lint-styles": "stylelint \"**/*.{css,scss}\" --fix --config node_modules/front-linters-setup/configs/stylelint/formatConfig.json --ignore-path node_modules/front-linters-setup/configs/.ignore"
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
  "*.{js,jsx,json,css,scss}": "prettier --write --config node_modules/front-linters-setup/configs/prettier/config.json --ignore-path node_modules/front-linters-setup/configs/.ignore",
  "*.{css,scss}": "stylelint --fix --config node_modules/front-linters-setup/configs/stylelint/formatConfig.json --ignore-path node_modules/front-linters-setup/configs/.ignore"
}
```

* Provide stylelint configuration for your editor:
```json
"stylelint": {
  "extends": "./node_modules/front-linters-setup/configs/stylelint/baseConfig.json"
}
``` 

Now you have configured linting & formatting of staged .css & .scss files and formatting of staged .js, .jsx & .json 
files on pre-commit hook.

You can also format & lint all project .css, .scss, .js, .jsx & .json files using commands `yarn format` 
& `yarn lint-styles`.
