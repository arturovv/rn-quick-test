import "./i18n"
import React from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { AppNavigator } from "./navigators"
import { ErrorBoundary } from "./screens/error/error-boundary"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={"always"}>
          <AppNavigator />
        </ErrorBoundary>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
