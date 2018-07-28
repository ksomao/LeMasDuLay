import React, {Component} from 'react'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.navLink = ['Nous', 'Le gîte', 'Tarifs', 'Alentours', 'Contact']
    }

    render() {
        return (
            <div className={"d-flex bg-white justify-content-lg-center fixed-top"}>
                <nav className="navbar navbar-expand-lg navbar-light bg-white menu">
                    <button className="navbar-toggler ml-sm-4" type="button" data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={"./images/favicon/favicon-32x32.png"}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                this.navLink.map((link) => {
                                    return <li className="nav-item ">
                                        <a className="nav-link link ml-4"
                                           href="#" id={link.split(" ").join("_").toLowerCase() + "_link"}>
                                            {link}
                                        </a>
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
