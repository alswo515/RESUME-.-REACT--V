import React,{Component} from 'react';



class App_section_portfolio extends Component{
    render(){

        return(
        <div className="section-outer">
            
            <section className="section" id="portfolio">
                <div className="portfolio row">
                    <h2>PORTFOLIO</h2>
                    <ul className="gallery cf">
                        <li><a href="http://www.daum.net"><img src="images/광일축제 2차.jpg" alt="프로젝트1"/></a></li>
                        <li><a href="http://www.naver.com"><img src="images/권하지도-받지도-마세요.jpg" alt="프로젝트2"/></a></li>
                        <li><a href="http://www.daum.net"><img className="webdesign" src="images/웹디.jpg" alt="프로젝트3"/></a></li>
                        <li><a href="http://www.naver.com"><img src="images/방사능-인포-그라피2안--1.jpg" alt="프로젝트4"/></a></li>
                        <li><a href="http://www.daum.net"><img src="images/1234123.jpg" alt="프로젝트5"/></a></li>
                        <li><a href="http://www.naver.com"><img src="images/초정탄산수21334.jpg" alt="프로젝트6"/></a></li>
                        <li><a href="http://www.daum.net"><img src="images/aveanges.JPG" alt="프로젝트7"/></a></li>
                        <li><a href="http://www.naver.com"><img src="images/벌 느낌수정.jpg" alt="프로젝트8"/></a></li>
                    </ul>
                    <div className="galleryPopup">
                        <div className="popupList">
                            <div>
                                <a href="" target="_blank"></a>
                            </div>
                            <button type="button" className="close">
                                <span className="blind">닫기</span>
                                <i className="fas fa-times-circle"></i>
                            </button>
                            <button className="arrow prev">
                                <i className="fas fa-angle-left"></i>
                            </button>
                            <button className="arrow next">
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
           
        )
    }
}




export default App_section_portfolio;