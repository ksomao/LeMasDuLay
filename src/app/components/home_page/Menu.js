import React, {Component} from 'react'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.navLink = ['Nous', 'Le gîte', 'Alentours', 'Tarifs', 'Contact']
    }

    render() {
        return (
            <div className={"d-flex bg-white justify-content-lg-center fixed-top"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-white menu">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                this.navLink.map((link) => {
                                    return <li className="nav-item">
                                        <a className="nav-link link" href="#">{link}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu
