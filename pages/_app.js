// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const opensans = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={opensans.className}>
      <Component {...pageProps} />
    </div>
  );
}
