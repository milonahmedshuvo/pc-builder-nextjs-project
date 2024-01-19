import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
   <div className="mx-1 md:mx-2 lg:mx-3">
     <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </SessionProvider>
    </Provider>
   </div>
  );
}
