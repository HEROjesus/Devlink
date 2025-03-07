import styles from './container.module.css'


export default function Container() {

    const links = [
        "Veja meu portifólio",
         "Saiba mais sobre mim", 
         "Entre em contato",
          "Veja meu currículo"
        ]

  return (  
      <ul className={styles.list}>
      {links.map((text, index) => (
          <li className={styles.box}><a className={styles.link} href="#"key={index}>{text}</a></li>
        ))}
      </ul>
  )
}