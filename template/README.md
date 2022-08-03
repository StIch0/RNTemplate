# React Native Starter Pack

### node -v 16.16.0

## Запуск

```shell script
yarn start
yarn run ios
yarn run android
```

## Скрипты

Для создания директории и файлов Redux Tookit

```shell script
yarn run create-toolkit-dir
```

## Иерархия директории app

```
|—— .DS_Store
|—— common
|    |—— .DS_Store
|    |—— constants
|        |—— mockDate.ts
|    |—— types
|        |—— index.ts
|—— components
|    |—— .DS_Store
|    |—— Spinner
|        |—— index.tsx
|    |—— WIPComponent
|        |—— index.tsx
|—— navigation
|    |—— .DS_Store
|    |—— RootNavigation.tsx
|    |—— services
|        |—— getBaseStackOptions.ts
|    |—— types
|        |—— StackScreenOption.ts
|        |—— StackTypes.ts
|—— screens
|    |—— .DS_Store
|    |—— ExampleScreen
|        |—— .DS_Store
|        |—— componets
|        |—— constants
|        |—— index.tsx
|        |—— services
|        |—— types
|            |—— index.ts
|—— services
|    |—— example.ts
|—— store
|    |—— .DS_Store
|    |—— example
|        |—— actions.ts
|        |—— selectors.ts
|        |—— slice.ts
|        |—— types.ts
|    |—— index.ts
|    |—— types
|        |—— index.ts
|—— ui
|    |—— .DS_Store
|    |—— components
|        |—— Button.tsx
|        |—— Container.tsx
|        |—— Input.tsx
|        |—— Text.tsx
|    |—— constants
|        |—— index.ts
|    |—— types
|        |—— index.ts
```
