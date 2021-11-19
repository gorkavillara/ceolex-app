import Link from "next/link"
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import { IoDownloadOutline, IoChatbubbleOutline, IoPerson, IoHeartOutline, IoSearch } from 'react-icons/io5'

const Footer = () => {
    const router = useRouter();
    return (
        <div className={styles.footer}>
            <Link href="/">
                <div className={`${styles["footer-icon"]} ${router.pathname === "/" && styles["active"]}`}>
                    <IoSearch className={router.pathname === "/" ? styles["icon-active"] : styles["icon"]} />
                    <span>Explorar</span>
                </div>
            </Link>
            <Link href="/fav">
                <div className={`${styles["footer-icon"]} ${router.pathname === "/fav" && styles["active"]}`}>
                    <IoHeartOutline className={router.pathname === "/fav" ? styles["icon-active"] : styles["icon"]} />
                    <span>Favoritos</span>
                </div>
            </Link>
            <Link href="/reclamaciones">
                <div className={`${styles["footer-icon"]} ${router.pathname === "/reclamaciones" && styles["active"]}`}>
                    <IoDownloadOutline className={router.pathname === "/reclamaciones" ? styles["icon-active"] : styles["icon"]} />
                    <span>Reclamaciones</span>
                </div>
            </Link>
            <Link href="/mensajes">
                <div className={`${styles["footer-icon"]} ${router.pathname === "/mensajes" && styles["active"]}`}>
                    <IoChatbubbleOutline className={router.pathname === "/mensajes" ? styles["icon-active"] : styles["icon"]} />
                    <span>Mensajes</span>
                </div>
            </Link>
            <Link href="/perfil">
                <div className={`${styles["footer-icon"]} ${router.pathname === "/perfil" && styles["active"]}`}>
                    <IoPerson className={router.pathname === "/perfil" ? styles["icon-active"] : styles["icon"]} />
                    <span>Perfil</span>
                </div>
            </Link>
        </div>
    );
}

export default Footer;
