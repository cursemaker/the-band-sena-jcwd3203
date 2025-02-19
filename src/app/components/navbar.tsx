import Link from "next/link"
import styles from "../page.module.css"


export const NavBar = () => {
    return(
        <nav
        style={{
            background: "black",
            color: "white",
            display: "flex",
            width: "100%",
            gap: 25,
            padding: 10,
            position: "fixed",
            zIndex: 10
          }}>
            <Link href="/" className={styles.navItem}>Home</Link>
            <Link href="/about" className={styles.navItem}>About</Link>
            <Link href="/members" className={styles.navItem}>Members</Link>
            <Link href="/contact" className={styles.navItem}>Contact</Link>
        </nav>
        
    )
    
}