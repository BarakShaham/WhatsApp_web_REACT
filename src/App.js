import React, {useState, useEffect} from 'react'
import avatar from './assets/avatar.jpg'

import {mainUser, secondUser, contactsMessages, Message} from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessagesBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import Search from './components/Search'
import Welcome from './components/Welcome'

import './App.css'


function App() {
    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [filteredContacts, setFilterContacts] = useState([])
    const [myTurn, setMyTurn] = useState(true)

    useEffect(() => {
        // store the current contact's data when clicked
        const currContact = data.find(({contact}) => contact.id === contactSelected.id)
        // set current messages to the selected user messages. if not user is selected value is undefined
        setCurrentMessages((currContact && currContact.messages) || [])
        // helper functions to filter contacts when searching
        filterContacts(data, search)
    }, [contactSelected, data, search])

    useEffect(()=>{
        setMyTurn(true)
    },[contactSelected])

    const pushMessage = () => {
        // gets index of current contact
        const index = data.findIndex(({contact}) => contact.id === contactSelected.id)
        // add the new message to this user's messages array
        const newData = Object.assign(
            [],
            data,
            {
                [index]: {
                    contact: contactSelected,
                    messages: [...data[index].messages, new Message(myTurn, message, new Date())],
                },
            })
        setMyTurn(!myTurn)
        setData(newData)
        setMessage('')
    }

    /* returns an array of filtered conatct names that include "search" value.
        if "search" is empty - returns the original data */
    const filterContacts = (data, search) => {
        const result = data.filter(({contact}) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        })
        setFilterContacts(result)
    }

    return (
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser} showName/>
                </header>
                <Search search={search} setSearch={setSearch}/>
                <div className="contact-boxes">
                    {filteredContacts.map(({contact, messages}) => (
                        <ContactBox
                            contact={contact}
                            key={contact.id}
                            setContactSelected={setContactSelected}
                            messages={messages}
                        />
                    ))}
                </div>
            </aside>
            {contactSelected.id ? (
                <main>
                    <header>
                        <Avatar user={contactSelected} showName={true}/>
                        {/*<Avatar user={!myTurn ? mainUser : contactSelected} showName={true}/>*/}
                    </header>
                    <MessagesBox messages={currentMessages}/>
                    <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage}/>
                </main>
            ) : (
                <Welcome/>
            )}
        </div>
    )
}

export default App
