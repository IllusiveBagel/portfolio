import Scrollspy from 'react-scrollspy';
import React from 'react';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            overlayMenu: false
        }
    }

    handleMenuClick = () => {
        if (this.state.overlayMenu === true) {
            this.setState({
                overlayMenu: false
            })
        } else {
            this.setState({
                overlayMenu: true
            })
        }
    }

    render() {
        return (
            <>
                <nav className={this.props.Class}>
                    <div className="Nav-Wrapper">
                        <div className="Logo">
                            <a href="#Home">Logan Young</a>
                        </div>
                        <Scrollspy items={ ['About', 'Skills', 'Projects', 'Blog', 'Contact'] } className="Menu" currentClassName="Active">
                            <li><a href="#About">About</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Blog">Blog</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </Scrollspy>
                    </div>

                    <div className={this.state.overlayMenu? "menuIcon toggle": "menuIcon"} onClick={this.handleMenuClick}>
                        <span className="icon icon-bars"></span>
                        <span className="icon icon-bars overlay"></span>
                    </div>

                    <div className={this.state.overlayMenu? "overlay-menu open" : "overlay-menu"}>
                        <Scrollspy items={ ['About', 'Skills', 'Projects', 'Blog', 'Contact'] } id="Menu" currentClassName="Active">
                            <li><a href="#About" onClick={this.handleMenuClick}>About</a></li>
                            <li><a href="#Skills" onClick={this.handleMenuClick}>Skills</a></li>
                            <li><a href="#Projects" onClick={this.handleMenuClick}>Projects</a></li>
                            <li><a href="#Blog" onClick={this.handleMenuClick}>Blog</a></li>
                            <li><a href="#Contact" onClick={this.handleMenuClick}>Contact</a></li>
                        </Scrollspy>
                    </div>
                </nav>
            </>
        );
    }
    
}