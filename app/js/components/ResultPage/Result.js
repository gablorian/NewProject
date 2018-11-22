import React from 'react';
import males from "../maleChampions";
import females from "../femaleChampions";
import _ from "lodash";
import Slider from 'react-animated-slider';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            character:{skins:[]}
        }
    }

    componentDidMount() {
        let chooseArray;
        if (this.props.gender === "male") {
            chooseArray = males;
        } else {
            chooseArray = females;
        }
        let min;
        let character;
        for (var i = 0; i < chooseArray.length; i++) {
            const diffArray = _.difference(chooseArray[i].traits, this.props.traits);
            if (i === 0 || diffArray.length < min) {
                min = diffArray.length;
                character = chooseArray[i];
            }

        }
        this.setState({
            character: character,
        });
        console.log(character, min);
    }

    render() {
        return (
            <div className={'column'}>
                <div>
                    <p className={'resultText'}> You're like a:</p>
                </div>
                <div className={'bigBorder'}>
                    <div className={'name'}>
                        <p className={'text'}>{this.state.character.name}</p>
                    </div>
                    <div className={'title'}>
                        <p className={'text'}>{this.state.character.title}</p>
                    </div>
                </div>
                <div>
                    <Slider>
                        {this.state.character.skins.map((article, index) => <div key={index} style={{backgroundImage:`url(/images/${article}.jpg)`}}></div>)}
                    </Slider>
                </div>
                <div className={'trivia bigBorder text'}>
                    {this.state.character.description}
                </div>
                <div className={'again text'} onClick={()=>{
                    this.props.step(4)}}>
                    Again
                </div>
            </div>
        );
    }
}
export default Result;