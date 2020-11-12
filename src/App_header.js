import React,{Component} from 'react';



class App_header extends Component{
    render(){
        return(
            <div className="header-outer">
            <header id="header" className="row">
                <h1>
                    <a href="#">김민재 포트폴리오</a>
                </h1>

                <p className="open-gnb">
                    <a href="#none">
                        <strong className="blind">메뉴열기</strong>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </p>
                <nav className="nav">
                    <ul className="depth1 cf">
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#skills2">Skills2</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        );
    }
}




export default App_header;