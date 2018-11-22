import React from 'react';
import _ from "lodash";

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            myTraits: [],
            traits : _.shuffle(["calm", "caring", "charismatic", "clever", "cheerful", "childish", "courageous", "dedicated", "dramatic", "dutiful", "eloquent", "faithful", "forgiving", "friendly", "honest", "incorruptible", "kind", "loyal", "passionate", "patriotic", "peaceful", "rational",  "sweet", "ambitious", "aggresive", "brutal", "cold", "cowardly", "crazy", "desperate", "dirty", "disloyal", "fanatical", "gloomy", "grim", "hostile", "irresponsible",  "messy", "narcissistic", "paranoid", "troublesome", "unfriendly", "egocentric"]),
        }
    }
    choiceOfTraits=(element)=>{
        if (this.state.myTraits.indexOf(element) === -1 && this.state.counter < 6){
            this.state.myTraits.push(element);
            this.props.traits(this.state.myTraits)
        }

    };
    traitsNumber =()=>{
        this.setState({
            counter: this.state.counter +1
        })
    };
    askForMore=()=>{
        if(this.state.counter < 6){
            this.props.step(2)
        }else{
            this.props.step(3)
        }
    }
    render(){
        return (
            <div>
                <p className={'titleQuestion'}>Choose 6 traits that describe your personality, and click red button</p>
                <div className={'choiceBox'}>
                    {this.state.traits.map((element, index)=>{
                        const isActive = this.state.myTraits.indexOf(element) >= 0;
                        return <div key={index} className={`choiceElement ${isActive?"clicked":""}`} onClick={()=>{
                            this.choiceOfTraits(element);
                            this.traitsNumber();
                        }}>{element}</div>
                    })}
                </div>
                <div className={'center'}>
                    <div className={' redButton'} onClick={this.askForMore}> Confirm </div>
                </div>
            </div>
        );
    }
}
export default Quiz;