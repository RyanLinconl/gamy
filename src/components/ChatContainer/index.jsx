'use client'

import { useEffect, useRef } from 'react'
import Button from '../Button'
import ChatBubble from '../ChatBubble'
import { ChatForm } from '../ChatForm'
import { ChatHeader } from '../ChatHeader'
import { IconStop } from '../Icons'
import { Loader } from '../Loader'
import { RetryButton } from '../RetryButton'
import styles from './container.module.css'
import { useChat } from 'ai/react'

export const ChatContainer = () => {
  const {
    messages,
    setMessages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    handleRetry,
    stop,
    reload
  } = useChat()

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function removeMessage(msgId) {
    setMessages(messages.filter(m => m.id !== msgId))
  }

  return (
    <section className={styles.container}>
      <ChatHeader />

      <div className={styles.chat}>
        {messages.map(msg => (
          <ChatBubble
            key={msg.id}
            message={msg.content}
            isUser={msg.role === 'user'}
            onRemove={() => removeMessage(msg.id)}
          />
        ))}

        {isLoading && (
          <div className={styles.loaderWrapper}>
            <Loader />
            <Button variant="danger" onClick={stop}>
              <IconStop /> Parar
            </Button>
          </div>
        )}

        {error && (
          <div className={styles.errorWrapper}>
            <span>Ocorreu um erro: {error.message}</span>
            <RetryButton onClick={handleRetry} />
          </div>
        )}

        {(!isLoading && messages.length > 0) && (
          <RetryButton className="retry" onClick={reload} />
        )}

        <div ref={endRef} />
      </div>

      <ChatForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        disabled={isLoading}
      />
    </section>
  )
}
