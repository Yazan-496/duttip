"use client";
import { persistor, store } from "store";
import { Provider } from "react-redux";
// import i18n from "../i18n";
// import ability from "core/config/acl/ability";
// import { I18nextProvider } from "react-i18next";

import { PersistGate } from "redux-persist/integration/react";

// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { AbilityContext } from "core/config/acl/Can";

export default function App({ user, children }) {  
  // useEffect(() => {
  //   if (user?.permissions.length > 0) {
  //     const userAbility = user.permissions.map((permission) => {
  //       return {
  //         subject: permission,
  //         action: "call",
  //       };
  //     });
  //     ability.update(userAbility);
  //   }
  // }, [user]);

  return (
    <Provider store={store}>
      {/*<AbilityProvider user={user}>*/}
      <PersistGate loading={null} persistor={persistor}>
        {/* <I18nextProvider i18n={i18n}> */}
        {/* <AbilityContext.Provider value={ability}> */}
        {children}
        {/* </AbilityContext.Provider> */}
        {/* </I18nextProvider> */}
        {/* <ToastContainer /> */}
      </PersistGate>
      {/*</AbilityProvider>*/}
    </Provider>
  );
}
