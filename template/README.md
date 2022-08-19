# React Native Starter Pack

### node -v 16.16.0

## Запуск

```shell script
yarn start
yarn run ios
yarn run android
```

## Иерархия директории app

```
📦app
 ┣━ 📂common Директория для сущностей (константы, компоненты, типы и тд) используемые в более чем 1 месте
 ┃ ┣━ 📂components
 ┃ ┃ ┣━ 📂Spinner
 ┃ ┃ ┃ ┗━ 📜index.tsx
 ┃ ┃ ┗━ 📂WIPSComponent
 ┃ ┃ ┃ ┗━ 📜index.tsx
 ┃ ┣━ 📂constants
 ┃ ┃ ┗━ 📜mockDate.ts
 ┃ ┗━ 📂types
 ┃ ┃ ┗━ 📜index.ts
 ┣━ 📂navigation
 ┃ ┣━ 📂services
 ┃ ┃ ┗━ 📜getBaseStackOptions.ts
 ┃ ┣━ 📂types
 ┃ ┃ ┣━ 📜StackScreenOption.ts
 ┃ ┃ ┗━ 📜StackTypes.ts
 ┃ ┗━ 📜RootNavigation.tsx
 ┣━ 📂screens
 ┃ ┗━ 📂ExampleScreen
 ┃ ┃ ┣━ 📂components
 ┃ ┃ ┣━ 📂constants
 ┃ ┃ ┣━ 📂services
 ┃ ┃ ┣━ 📂types
 ┃ ┃ ┃ ┗━ 📜index.ts
 ┃ ┃ ┗━ 📜index.tsx
 ┣━ 📂services
 ┃ ┗━ 📜example.ts
 ┣━ 📂store
 ┃ ┣━ 📂example
 ┃ ┃ ┣━ 📜actions.ts
 ┃ ┃ ┣━ 📜selectors.ts
 ┃ ┃ ┣━ 📜slice.ts
 ┃ ┃ ┗━ 📜types.ts
 ┃ ┣━ 📂types
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┗━ 📜index.ts
 ┗━ 📂ui
 ┃ ┣━ 📂components
 ┃ ┃ ┣━ 📜Button.tsx
 ┃ ┃ ┣━ 📜Container.tsx
 ┃ ┃ ┣━ 📜Input.tsx
 ┃ ┃ ┗━ 📜Text.tsx
 ┃ ┣━ 📂constants
 ┃ ┃ ┗━ 📜index.ts
 ┃ ┗━ 📂types
 ┃ ┃ ┗━ 📜index.ts

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

