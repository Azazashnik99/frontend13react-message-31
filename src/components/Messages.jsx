import { useState } from "react";

function Messages() {


    let [messages, setMessages] = useState([
        {
            id: 1,
            content:'hello',
            author:'Khamzat',
            side:'left',
        },
        {
            id: 2,
            content:'hi',
            author:'Admin',
            side:'right',
        },
        {
            id: 3,
            content:'how are u?',
            author:'Khamzat',
            side:'left',
        },
        {
            id: 4,
            content:'I am fine',
            author:'Admin',
            side:'right',
        },
    ])

    function deleteMess(id) {
        setMessages(messages.filter(item => {
            if(item.id === id){
                return false
            }else{
                return true
            }
        }))
    }

    return (
        <div className="flex">
            <div className="container">
            {messages.map(message => {
                return(
                    <div className={`row mb-3 ${ message.side === 'right' ? 'justify-content-end': '' }`}>
                        <div className="col-3">
                            <div className={message.side}>
                                <button onClick={() => deleteMess(message.id)} className="btn btn-danger">X</button>
                                <p>{message.content}</p>
                                <span>{message.author}</span>
                            </div>
                        </div>
                    </div>
                )
            })
            }

            </div>
        </div>
    );
  }
  
  export default Messages;
  