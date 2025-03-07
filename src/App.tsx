import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

import styles from "./App.module.css";
import Container from "./components/container";

export default function App() {
  const icons = [
    <GithubLogo size={32} color="white" />,
    <InstagramLogo size={32} color="white" />,
    <YoutubeLogo size={32} color="white" />,
    <LinkedinLogo size={32} color="white" />,

  ]
  return (
    <div className={styles.container}>
      <div className={styles.avatarbox}>
        <img src="https://github.com/Herojesus.png" className={styles.avatar} />
        <h4>@Herojesus</h4>
      </div>
      <Container />
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <div key={index} className={styles.icon}>
           <a href="#">{icon}</a> 
          </div>
        ))}
      </div>
    </div>
  );
}
