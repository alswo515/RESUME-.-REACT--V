import React,{Component} from 'react';

class App_tt extends Component{
  render(){
    
    return(
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
    );
  }
}






export default App_tt;
