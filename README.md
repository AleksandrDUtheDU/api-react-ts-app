### Запуск проекта

npm install
npm start

# Реализованы следующие требования к функциональности:

## 1 уровень

### React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты.
- Есть рендеринг списков [MainPage](./src/pages/MainPage/MainPage.tsx).
- Реализована хотя бы одна форма [AuthSingIn](./src/widgets/AuthForm/ui/AuthSingIn/AuthSingIn.tsx), [AuthReg](./src//widgets/AuthForm/ui/AuthReg/AuthReg.tsx).
- Есть применение Контекст API [AppThemeProvider](./src/shared/theme/model/AppThemeProvider/AppThemeProvider.tsx) [AppAuthProvider](./src/shared/firebase/model/AppAuthProvider/AppAuthProvider.tsx).
- Есть применение предохранителя [errorElement={<ErrorPage />](./src/app/AppRouter/AppRouter.tsx) , [ErrorBoundary](./src/app/AppRouter/ErrorBoundary.tsx).
- Есть хотя бы один кастомный хук [useAppDispatch,useAppSelector,useDebounce,useCurrentPathArr](./src/shared/hooks), [useUserAuth](./src/shared/firebase/hooks/useUserAuth.ts) .
- Хотя бы несколько компонентов используют PropTypes [AppAuthProvider](./src/shared/firebase/model/AppAuthProvider/AppAuthProvider.tsx).
- Поиск не должен триггерить много запросов к серверу [SearchPage](./src/pages/SearchPage/SearchPage.tsx).
- Есть применение lazy + Suspense [AppRouter](./src/app/AppRouter/AppRouter.tsx).

### Redux

- Используем Modern Redux with Redux Toolkit [store](./src/shared/api/store/store.ts).
- Используем слайсы [FilmsSlise](./src/shared/api/store/redusers/FilmsSlise.ts).
- Есть хотя бы одна кастомная мидлвара [customMiddleware](./src/shared/api/middleware/customMiddleware.ts).
- Используется RTK Query [filmApi](./src/shared/api/services).
- Используется Transforming Responses [filmApi](./src/shared/api/services/filmAPIFilm.ts).

## 2 уровень

- Использование TypeScript.
