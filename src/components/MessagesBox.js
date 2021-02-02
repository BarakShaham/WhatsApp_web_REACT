import React, { useRef, useEffect } from 'react'
import Message from './Message'

export default function MessagesBox({ messages }) {
    const endDiv = useRef(null)
    useEffect(() => {
        endDiv.current.scrollIntoView()
    }, [messages])

    return (
        <div className="chats">
            {messages
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((message) => (
                    <Message message={message} key={message.id} />
                ))}
            <div style={{ float: 'right', clear: 'both' }} ref={endDiv}></div>
        </div>
    )
}
