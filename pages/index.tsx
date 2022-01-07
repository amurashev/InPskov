import Image from "next/image";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.box}>
        <Image src="/images/krom.jpg" layout="fill" objectFit="cover" />
        <div className={styles.fader}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Псков</h1>
            <p className={styles.description}>
              Город в России, административный центр Псковской области, в
              Северо-Западном федеральном округе. Является городом областного
              подчинения; образует самостоятельное муниципальное образование
              город Псков в статусе городского округа. Расположен на реке
              Великой при слиянии её с рекой Псковой. Население - 209426 чел.
            </p>
            <ul  className={styles.list}>
              <li className={styles.item}>
                <span className={styles.itemLabel}>Погода</span>
                <span className={styles.itemValue}>+5</span>
              </li>

              <li className={styles.item}>
                <span className={styles.itemLabel}>Год Основания</span>
                <span className={styles.itemValue}>903</span>
              </li>

              <li className={styles.item}>
                <span className={styles.itemLabel}>Население</span>
                <span className={styles.itemValue}>200 000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
