'use client'

import styles from './chat.module.css'
import { IconSend } from "../Icons"

export const ChatForm = ({ input, handleInputChange, handleSubmit }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="chat-input" className={styles.srOnly}>
        Mensagem
      </label>
      <input
        id='chat-input'
        name='message'
        className={styles.input}
        placeholder="Escreva uma mensagem..."
        required
        onChange={handleInputChange}
        value={input}
      />
      <button
        className={styles.btn}
        type="submit"
        aria-label="Enviar mensagem"
        disabled={!input.trim()}
      >
        <IconSend />
      </button>
    </form>
  )
}
