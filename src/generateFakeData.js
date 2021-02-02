// faker API: https://www.npmjs.com/package/faker
const faker = require('faker')

class User {
    constructor() {
        this.id = faker.random.uuid()
        this.name = faker.name.findName()
        this.avatar = faker.internet.avatar()
    }
}

export class Message {
    constructor(isMainUser, msg, date) {
        this.id = faker.random.uuid()
        this.msg = msg || faker.lorem.words(faker.helpers.randomize([...Array(20).keys()]))
        this.isMainUser = isMainUser
        this.date = date || faker.date.recent()
    }
}

export const mainUser = new User()
export const secondUser = new User()

// create a contacts array user Users in given size
export const contacts = [...Array(15).keys()].map(() => new User())

// return an array with a contact and messages properties
export const contactsMessages = contacts.map((contact) => {
    return {
        contact,
        messages: [...Array(50).keys()]
            .map((val, index) => {
                return (index + 1) % 2 === 0 ? new Message(true) : new Message(false)
            })
            .filter((m) => m.msg),
    }
})

/* contactsMessages data sample:
[{
    contact: {
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vitor376/128.jpg"
        id: "a248e7f1-66da-44c1-96d9-da7267159b72"
        name: "Antonina Gerhold"
    }
    messages: [
        {
        date: Mon Feb 01 2021 14:35:27 GMT+0200 (Israel Standard Time) {}
        id: "98514c96-8a51-4e5b-a3da-a7dd8ab89f5c"
        isMainUser: false
        msg: "occaecati ut"
        },
    ]

}, {...}]
 */
