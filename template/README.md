# React Native Starter Pack

### node -v 16.16.0

## Запуск

```shell script
yarn start
yarn run ios
yarn run android
```

## Store

### Как работать со **стором**

> #### Структура директории **store**
>
> - Директория **_[feature]_**
>   > - actions.ts
>   > - selectors.ts
>   > - slice.ts
>   > - types.ts
> - Типы
>   > - index.ts
> - Enums
>   > - index.ts

### Старт работ

Перед началом работы с redux, запускаем скрипт **scripts/createToolkitDir.sh** командой
`sh scripts/createToolkitDir.sh`и указываем имя фичи.
В директории **store** создается папка с указанным именем.

**thunk'и** описываем в `action.ts` директории, а **actions** описываем в `slice.ts` и импортируем в `action.ts` и заново экспортируем. В дальнейшем импорт экшенов делаем именно из `action.ts` директории.

Логику запросов к **апи** из санки выносим в отдельный сервис **app/services/[feature]/[featureName].ts**. После этого подключаем его к классу сервису. **app/services/[feature]/index.ts**

## Иерархия директории app

```
|—— common
|    |—— constants
|        |—— mockDate.ts
|    |—— types
|        |—— index.ts
|—— components
|    |—— Spinner
|        |—— index.tsx
|    |—— WIPComponent
|        |—— index.tsx
|—— navigation
|    |—— RootNavigation.tsx
|    |—— services
|        |—— getBaseStackOptions.ts
|    |—— types
|        |—— StackScreenOption.ts
|        |—— StackTypes.ts
|—— screens
|    |—— ExampleScreen
|        |—— componets
|        |—— constants
|        |—— index.tsx
|        |—— services
|        |—— types
|            |—— index.ts
|—— services
|    |—— example
        |—— example.ts
        |—— index.ts
|—— store
|    |—— example
|        |—— actions.ts
|        |—— selectors.ts
|        |—— slice.ts
|        |—— types.ts
|    |—— index.ts
|    |—— types
|        |—— index.ts
|—— ui
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
