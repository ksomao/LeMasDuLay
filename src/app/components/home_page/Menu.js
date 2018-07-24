import React, {Component} from 'react'

class Menu extends Component {

constructor(props) {
    super(props);
    this.navLink = ['Nous', 'Le gîte', 'Alentours', 'Tarifs', 'Contact']
}


render() {
    return (
        <ul className="Menu">
            {
                this.navLink.map((link) => {
                    return <li className="Menu_link">{link}</li>
                })
            }
        </ul>
    )
}
};

export default Menu
