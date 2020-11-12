import React,{Component} from 'react';
import './Section_skils.scss'


class App_section_portfolio extends Component{
    render(){

        return(
        <div className="section-outer">
            <section className="section" id="skills">
                <div className="skillContainer row">
                    <h2>SKILL</h2>
                    <div className="html">
                        <div className="score">
                            <div className="myscore">
                                <p>
                                    90%
                                </p>
                                <p>HTML5</p>
                            </div>
                        </div>
                    </div>
                    <div className="css">
                        <div className="score">
                            <div className="myscore">
                                <p>
                                    80%
                                </p>
                                <p>CSS3</p>
                            </div>
                        </div>
                    </div>
                    <div className="js">
                        <div className="score">
                            <div className="myscore">
                                <p>
                                    70%
                                </p>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className="jq">
                        <div className="score">
                            <div className="myscore">
                                <p>
                                    60%
                                </p>
                                <p>jQuery</p>
                            </div>
                        </div>
                    </div>
                    <div className="react">
                        <div className="score">
                            <div className="myscore">
                                <p>
                                    50%
                                </p>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section" id ="skills2" >
                <canvas height="70%" id = "myChart" class = "skill_chart">
                </canvas>
            </section>

        </div>
           
        )
    }
}




export default App_section_portfolio;