# Front end linters setup

* Install the dependencies: 
```
yarn add husky lint-staged prettier prettier-plugin-twig-melody stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-scss --dev
```

* Add following sections to your **package.json**:
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{css,scss}": [
    "prettier --write",
    "stylelint --fix --config ./.stylelintrc-format"
  ],
  "*.{js,jsx,json}": "prettier --write"
}
```
  
* Also add these commands to **scripts** section of your **package.json**:
```
"format": "prettier --write \"**/*.{js,jsx,json,css,scss,twig}\"",
"lint-styles": "stylelint \"**/*.{css,scss}\" --fix --config ./.stylelintrc-format"
```

* Copy files `.prettierignore`, `.prettierrc`, `.stylelintrc` and `.stylelintrc-format` to root of your project.

Now you have configured linting & formatting of staged .css & .scss files and formatting of staged .js, .jsx & .json 
files on pre-commit hook.

You can also format & lint all project .css, .scss, .js, .jsx & .json files using commands `yarn format` 
& `yarn lint-styles`.
