import React from "react";

class MaleFemale extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            gender:[]
        }
    }
    chooseMale(){
        this.state.gender.push("male");
        this.props.step(2);
        this.props.gender("male")
    }
    chooseFemale(){
        this.state.gender.push("female");
        this.props.step(2);
        this.props.gender("female")
    }
    render() {
        return (
            <div>
                <div>
                    <p className={'titleQuestion'}>Are you:</p>
                </div>
                <div className={'choicebox'}>
                    <div className={'center'}>
                        <div className={'btn boyOrGirl'} onClick={() => {
                            this.chooseMale()
                        }}>
                            <p className={'text'}>BOY</p>
                        </div>
                    </div>
                    <p className={'titleQuestion'}>or</p>
                    <div className={'center'}>
                        <div className={'btn  boyOrGirl'} onClick={() => {
                            this.chooseFemale()
                        }}>
                            <p className={'text'}>GIRL</p>
                        </div>
                    </div>
                </div>
            </div>
        )}}
export default MaleFemale;