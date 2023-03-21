### Steps

1. `npm init -y` - create empty package.json for the project
2. `npm install eslint eslint-config-prettier eslint-plugin-prettier --save-dev` - install prettier and eslint
3. `npm init @eslint/config` - create preconfigured eslint file
4. `touch .prettierrc.yml`
5. `touch .prettierignore .eslintignore`

### Use

1. `npm run lint`
2. `npm run lint:fix`
