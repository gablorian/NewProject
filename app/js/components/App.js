import React from 'react';
import MainPage from './MainPage/MainPage';
import Quiz from './QuizPage/Quiz';
import Result from './ResultPage/Result';
import MaleFemale from "./MainPage/MaleFemale";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            step: 0
        }
    }
    changeStep=(number)=>{
        this.setState({
            step: number
            }
        )
    };
    changeGender=(gender)=>{
        this.setState({
            gender: gender
            }
        )
    };
    chosenTraits=(myTraits)=>{
        this.setState({
            myTraits: myTraits
            }
        )
    };
    render(){
        if (this.state.step === 0){
            return <MainPage step={this.changeStep}/>
        }else if (this.state.step === 1){
            return <MaleFemale step={this.changeStep} gender={this.changeGender}/>
        }else if (this.state.step === 2){
            return <Quiz step={this.changeStep} traits={this.chosenTraits}/>
        }else if (this.state.step === 3){
            return <Result step={this.changeStep} gender={this.state.gender} traits={this.state.myTraits}/>
        }else if (this.state.step === 4){
            return <MainPage step={this.changeStep}/>
        }
    }
}
export default App;