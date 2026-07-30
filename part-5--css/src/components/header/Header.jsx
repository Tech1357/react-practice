import styles from "./Header.module.css"
function Header(){
    return (
        <div className={styles.head}>
            <h1>Ramya's Coding Arena</h1>
            <button className={styles.btn}>Click Me</button> 
        </div>
    )
}

export default Header;