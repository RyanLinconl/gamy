import Image from "next/image"

import gamy from './gamy.svg'

import styles from './header.module.css'

export const ChatHeader = () => {
    return (<div>
        <header className={styles.header}>
            <Image alt="Logo do Assistente Virtual" src={gamy} width={150}/>
            <h1 className={styles.heading}>
                Olá!
                <br />
                Eu sou o Gamy, seu assistente que sabe sobre jogos!
            </h1>
        </header>
    </div>)
}