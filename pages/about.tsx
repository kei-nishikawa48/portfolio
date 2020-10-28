import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/utiles.module.css";

const AboutPage = () => (
  <Layout title="About">
    <div className={styles.divcenter}>
      <img src="/images/profile.jpg" className={styles.imgcircle} />
      <h2>自己紹介</h2>
      <p>
        プログラミング大好きで、Webエンジニアになりたくて勉強している25歳です。
      </p>
        <div className={styles.divright}>
      <ul>
        <li>氏名 : 西川　慶</li>
        <li>年齢 : 25</li>
        <li>
          スキル : HTML ,CSS ,Javascript ,Typescript ,Vba ,React ,Next.js
          ,Python3 ,Firebase ,Git
        </li>
        <li>出身地 : 滋賀県</li>
        <li>
          LIKE : プログラミング ,歌 ,アニメ ,ゲーム ,猫(上の画像はうちの猫です)
        </li>
      </ul>
      </div>
      <h2>ここ数年の経歴</h2>
      <div className={styles.divright}>
        <p>
          大学は理系の大学に進学しソフトではなくハードを経験。
          <br />
          しかし、自分に合わず苦戦し鬱になりなんとか2020年3月に卒業。
          <br />
          中小企業の事務のバイトとして働かせてもらいながら、業務効率化を考えてexcelを勉強しvbaをつかい簡単なソフト作成をした。
          <br />
          pythonのtkinterを使いその職場で必要な単価計算ソフトを作成、またWebスクレイピングをつかった作業効率化ソフトの作成
          <br />
          エンジニアを真剣に目指すことを決意し、まずはフロントエンドの代表言語であるJavascriptを勉強し始める。
          <br />
          チーム開発を経験し、現在５人でチームをつくりWebアプリを制作中かつ
          Node.js expressを勉強中
          <br />
          本格的にフロントエンドを勉強し始めたのは2020年の8月からです。
        </p>
      </div>
    </div>
    <div className={styles.divr}>
      <Link href="https://github.com/kei-nishikawa48">
        <a>私のGitHub</a>
      </Link>
    </div>
  </Layout>
);

export default AboutPage;
