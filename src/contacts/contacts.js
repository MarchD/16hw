import React, {Component} from 'react';
import './contacts.css';
import Contact from "./contact";

const contacts = [{
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

export default class Contacts extends Component{

    state = {
        contacts: [...contacts],
        search: 'search...',
        contactsAreFiltered: [...contacts]
    }

    handleSearchChange = (symbols) => {
        const value = symbols.target.value.toLowerCase();
    
        this.setState({
          search: value,
          contactsAreFiltered: contacts.filter(
            (contact) =>
            contact.firstName.toLowerCase().includes(value.toLowerCase()) || contact.lastName.toLowerCase().includes(value.toLowerCase()) ||
            contact.phone.includes(value)
          ),
        });

        // return {
        //     contactsAreFiltered: [...contacts]
        // }
      };
   

    render(){
        
        return (
           
            
            <div className='container'>
                {/* <h2>{this.state.title}</h2> */}
                <input placeholder={this.state.search} onChange={this.handleSearchChange} />
                <div className='contacts-container'>
                    {this.state.contactsAreFiltered.map((contact) => {
                        return <Contact firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} gender={contact.gender} time={10} key={contact.id}/>
                    })}

                </div>
            </div>



        );
    }
}