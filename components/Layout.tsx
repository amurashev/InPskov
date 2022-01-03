import Head from "next/head";

import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>InPskov</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
