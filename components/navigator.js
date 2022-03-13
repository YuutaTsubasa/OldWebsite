import styles from './navigator.module.css';
import Link from 'next/link';

export default function Navigator() {
    return (<nav className={styles.navigator}>
        <div className={styles.leftGroup}>
            <Link href="/">
                <img src="images/logo.png" alt="Logo" className={styles.logo75} />
            </Link>
        </div>
        <div className={styles.rightGroup}>
            <button onClick={OpenNav}><i className="fas fa-bars"></i></button>
            <ul id="navList">
                <li><Link href="/">MAIN</Link></li>
                <li><Link href="/history">HISTORY</Link></li>
                <li><Link href="/creation">FANS' ART</Link></li>
                <li className={styles.close} onClick={CloseNav}><a href="#">CLOSE</a></li>
            </ul>
        </div>
    </nav>);
}

function OpenNav(){
    let navList = document.querySelector("#navList");
    navList.classList.add(styles["display-flex"]);
}

function CloseNav(event){
    event.preventDefault();
    event.stopPropagation();
    let navList = document.querySelector("#navList");
    navList.classList.remove(styles["display-flex"]);
}