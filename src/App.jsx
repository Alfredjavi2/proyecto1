import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "@layout/Main";
import { paths } from "@navigation/_exports";
import { ErrorWrapper, AuthWrapper } from "@wrappers/_exports";

// Public view components
export const LoginView = lazy(() => import("@resources/Auth/views/Login.view"));
export const ForgetPasswordView = lazy(() =>
  import("@resources/Auth/views/ForgotPassword.view")
);
export const SendCodeView = lazy(() =>
  import("@resources/Auth/views/SendCode.view")
);

export const NewPasswordView = lazy(() =>
  import("@resources/Auth/views/NewPassword.view")
);
// Routes controller
function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        {/* TODO programmatically create public routes */}

        {/* Public routes */}
        <Route path={paths.error} name="Error" render={() => <>Error view</>} />

        <Route
          path={paths.login}
          name="Login"
          render={() => (
            <ErrorWrapper>
              <LoginView />
            </ErrorWrapper>
          )}
        />

        <Route
          path={paths.forget}
          name="Forget password"
          render={() => (
            <ErrorWrapper>
              <ForgetPasswordView />
            </ErrorWrapper>
          )}
        />

        <Route
          path={paths.sendcode}
          name="Send Code"
          render={() => (
            <ErrorWrapper>
              <SendCodeView />
            </ErrorWrapper>
          )}
        />

        <Route
          path={paths.newPassword}
          name="New Password"
          render={() => (
            <ErrorWrapper>
              <NewPasswordView />
            </ErrorWrapper>
          )}
        />

        {/* Private routes */}
        <Route
          path="/"
          render={() => (
            <ErrorWrapper>
              <AuthWrapper>
                <Main />
              </AuthWrapper>
            </ErrorWrapper>
          )}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
