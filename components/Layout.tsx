import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Kei's Porfolio" }: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <h1>Kei's Portfolio</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/myapp">
          <a>Myapp</a>
        </Link>{" "}
        |{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
      </nav>
    </header>
    {children}
    <footer className={styles.footer}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/myapp">
          <a>Myapp</a>
        </Link>{" "}
        |{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
      </nav>
    </footer>
  </div>
);

export default Layout;
