# React Native Starter Pack

### node -v 20.4.0

После установки шаблона может не инициализироваться директория husky. Для этого введите в терминале команду
`npx husky init` затем в `.husky/pre-commit` необходимо прописать `yarn run husky`

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

## Navigation

#### В директории `navigation` лежат

📂navigation - Директория для сущностей навигации (stack/bottom/top навигаторы) и их типов и сервисов
┣━ 📂constants - Директория для переменных, используемых в навигации
┣━ 📂types - Директория для типов
┗━ 📜RootStackNavigator.tsx - Главный навигатор, который собирает другие навигаторы

#### Нейминг навигаторов

[**_Feature_**][stack/bottom/top][Navigator].ts

#### Example

> ##### RootStackNavigator.ts
>
> ##### AuthBottomNavigator.ts

`RootStackNavigator.ts` - является главным навигатором, в котором собираются другие навигаторы.

### Старт работ c Redux

Перед началом работы с redux, запускаем скрипт **scripts/createToolkitDir.sh** командой
`sh scripts/createToolkitDir.sh`и указываем имя фичи.
В директории **store** создается папка с указанным именем.

**thunk'и** описываем в `action.ts` директории, а **actions** описываем в `slice.ts`.

Логику запросов к **апи** из санки выносим в отдельный сервис **app/services/[feature]/[featureName].ts**. После этого подключаем его к классу сервису. **app/services/[feature]/index.ts**
