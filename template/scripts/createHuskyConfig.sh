rm -rf .husky
npx husky install
npx husky add .husky/pre-commit "yarn run husky"