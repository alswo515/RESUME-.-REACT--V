import React,{Component} from 'react';



class App_section_slide extends Component{
    render(){

        return(

        <div className="section-outer">
            <section className="section" id="aboutme">
                <div className="slide-outer">
                    <div className="slide-inner">
                            <div>
                                <img src={this.props.images} alt={this.props.name}/>
                                <span>{this.props.name}</span>
                            </div>
                    </div>
                </div>
            </section>

            

           

        </div>
           
        )
    }
}




export default App_section_slide;