import React,{Component} from 'react';
import './reset (1).css';
import './App.scss';
import App_header from './App_header';
import App_section_slide from './App_section_slide'
import App_section_portfolio from './App_section_portfolio';
import App_section_skils from './App_section_skils'

class App extends Component{
  render(){

    class App_top extends Component {
      render(){
        return(
          <div className="gotop">
            <img src="images/ico_totop_mo.png" alt="맨위로"/>
          </div>
        );
      }
    }

    const slide = [
        {
            id:1,
            name:'옷입은 사진',
            images:"images/전신사진.png"
        },
        {
            id:2,
            name: '포트폴리오 외부광고판 일러스트',
            images :"images/외부광고판.jpg"
        },
        {
            id:3,
            name:'홈페이지리뉴얼',
            images:"images/우산리뉴얼.jpg"
        }
      ]
    return(
    <body>
        <App_header />

        {
          slide.map( (slide_date) => (
            <App_section_slide key={slide_date.id} name={slide_date.name} images={slide_date.images}/>
          ) )
        }

          <App_section_portfolio />
          <App_section_skils />
          <App_top />
    </body>
    );
  }
}






export default App;
