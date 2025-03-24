import {Component} from 'react'
import './index.css'

class Home extends Component{
    state={userInput:'' , result:"" }

    onChangeInput=(e)=>{
        this.setState({userInput : e.target.value})
        
    }
    onResult =()=>{
        const{userInput }=this.state
       
        
        try{
            this.setState({result : eval(userInput)})

         }catch{
            alert("Enter Valid Number")
        }
       
    }

    onAcButton=()=>{
        this.setState({userInput : '' , result:''})
        console.log("OM")
    }
    onDelButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput.slice(0 , -1)}))
    }
    onDividButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "/"}))
    }
    onMultiButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "*"}))
    }
    onSevenButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "7"}))
    }
    onEightButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "8"}))
    }
    onNineButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "9"}))
    }
    onMinusButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "-"}))
    }
    onFourButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "4"}))
    }
    onFiveButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "5"}))
    }
    onSixButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "6"}))
    }
    onPlusButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "+"}))
    }
    onOneButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "1"}))
    }
    onTwoButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "2"}))
    }
    onThreeButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "3"}))
    }
    onPresentButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "%"}))
    }
    onZeroButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "0"}))
    }
    onDOtButton=()=>{
        this.setState(prevState =>({userInput :prevState.userInput + "."}))
    }

    render(){
        const{userInput , result }=this.state
        // console.log(historyList)
        return(
            <div className='bg-container'>
            
                <h1>Calculator</h1>
                <input value={userInput} type='text' onChange={this.onChangeInput} className='input-bar'/>
                <p className='result '>{result}</p>
                

                <div className='first-line'>
                    <button className='button' onClick={this.onAcButton}>AC</button>
                    <button className='button' onClick={this.onDelButton}>del</button>
                    <button className='button' onClick={this.onDividButton}>/</button>
                    <button className='button' onClick={this.onMultiButton}>*</button>
                </div>
                <div className='first-line'>
                    <button className='buttons-num' onClick={this.onSevenButton}>7</button>
                    <button className='buttons-num' onClick={this.onEightButton}>8</button>
                    <button className='buttons-num' onClick={this.onNineButton}>9</button>
                    <button className='button' onClick={this.onMinusButton}>-</button>
                </div>
                <div className='first-line'>
                    <button className='buttons-num' onClick={this.onFourButton}>4</button>
                    <button className='buttons-num' onClick={this.onFiveButton}>5</button>
                    <button className='buttons-num' onClick={this.onSixButton}>6</button>
                    <button  className='button' onClick={this.onPlusButton}>+</button>
                </div>
                <div className='first-line'>
                    <button className='buttons-num' onClick={this.onOneButton}>1</button>
                    <button className='buttons-num' onClick={this.onTwoButton}>2</button>
                    <button className='buttons-num' onClick={this.onThreeButton}>3</button>
                    <button  className='button' onClick={this.onPresentButton}>%</button>
                    
                </div>
                <div className='first-line'>
                    
                    <button className='buttons-num'  onClick={this.onZeroButton}>0</button>
                    <button  className='button'  onClick={this.onDOtButton}>.</button>
                    <button onClick={this.onResult}  className='button-result'>=</button>
                </div>
                
            </div>
        )
    }
}
export default Home