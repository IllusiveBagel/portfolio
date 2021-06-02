import Scrollspy from 'react-scrollspy';
import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
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
            </nav>
        );
    }
    
}