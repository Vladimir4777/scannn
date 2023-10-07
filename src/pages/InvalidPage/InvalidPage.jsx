import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./InvalidPage.module.scss";
import CheckToken from "../../components/CheckToken";

export default function InvalidPage() {
    return (
        <>
            <CheckToken unauthRedirect="/" />

            <Header />
            <main className={styles.content}>
                <h1>Увы :(</h1>
                <br />
                <h1>Такой страницы у нас нет.</h1>
            </main>
            <Footer />
        </>
    );
}