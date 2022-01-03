import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.box}>
        <div className={styles.brand}>
          <span className={styles.in}>In</span>Pskov
        </div>
        <div className={styles.caption}>Спасибо, что были с нами</div>
      </div>
    </Layout>
  );
};

export default Home;
