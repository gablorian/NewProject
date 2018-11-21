import React from "react";

class MainPage extends React.Component{

    render(){
        return (
            <div>
                <div>
                    <p className={'titleQuestion'}>Which</p>
                </div>
                <img src={"./images/LeagueLogo.png"}/>
                <div>
                    <p className={'titleQuestion'}>champion are YOU?</p>
                </div>
                <div className={'center'}>
                    <div className={'btn start'} onClick={()=>{
                        this.props.step(1)
                    }}>
                        <p>START</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainPage;