import React,{Component} from 'react';



class App_section_contact extends Component{
    render(){

        return(

        <div className="section-outer">
            <section className="section" id="contact">
                <dl>
                    <dt>이름</dt>
                    <dd>
                        <input id="idtxt" type="text" name="name" />
                    </dd>
                    <dt>핸드폰번호</dt>
                    <dd><input id="birth" type="text" name="birth" /></dd>

                    <dt>이메일</dt>
                    <dd>
                        <input type="text" id="email" />
                    </dd>
                    <div className="textarea">
                        <dt>코멘트</dt>
                        <dd>
                            <textarea name="comment" maxlength="10" placeholder="메모를 남겨주세요."></textarea>
                        </dd>
                    </div>
                    <input type="submit"/>
                </dl>
            </section>

            <div className="gotop">
                <img src="images/ico_totop_mo.png" alt="맨위로"/>
            </div>

        </div>
           
        )
    }
}




export default App_section_contact;