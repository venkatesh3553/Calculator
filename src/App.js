import { Component } from "react";
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus , faDivide , faBackspace , faPercentage  , faMultiply , faHistory, faCancel, faTrash} from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  state = { input: "", subresult: "" , historylist:[] , showList:true };

componentDidMount() {
  const storedHistory = localStorage.getItem("calc_history");
  if (storedHistory) {
    this.setState({ historylist: JSON.parse(storedHistory) });
  }
}

 updateSubResult = (expression) => {
  try {
    const sanitized = expression
      .replace(/x/g, "*")
      .replace(/%/g, "/100");

    const safeToEvaluate = sanitized.replace(/[\+\-\*\/\.%]+$/, "");

    if (safeToEvaluate === "") {
      this.setState({ subresult: "" });
      return;
    }

    const result = eval(safeToEvaluate); 
    this.setState({ subresult: "= " + result.toString() , });
  } catch {
    this.setState({ subresult: "" });
  }
};

  handleClick = (value) => {
    this.setState(
      (prevState) => ({ input: prevState.input + value }),
      () => this.updateSubResult(this.state.input)
    );
  };

  handleClear = () => {
    this.setState({ input: "", subresult: "" });
  };
   handleClearSub = () => {
    this.setState({  subresult: "" });
  };

  handleBackspace = () => {
    this.setState(
      (prevState) => ({ input: prevState.input.slice(0, -1) }),
      () => this.updateSubResult(this.state.input)
    );
  };

  handleEvaluate = () => {
  const { input, historylist } = this.state;
  try {
    const sanitized = input.replace(/x/g, "*").replace(/%/g, "/100");
    const result = eval(sanitized);
    const newHistoryItem = `${input} = ${result}`;
    const updatedHistory = [...historylist, newHistoryItem];

   
    localStorage.setItem("calc_history", JSON.stringify(updatedHistory));

    this.setState({
      input: result.toString(),
      subresult: '',
      historylist: updatedHistory,
    });
  } catch {
    this.setState({ input: "Error", subresult: "" });
  }
  };
 onClear = () => {
  this.setState({ historylist: [] });
  localStorage.removeItem("calc_history"); // optional: also clear localStorage
 };
  onChangeList=()=>{
    this.setState(prevState=>({showList : !prevState.showList}))
  }
  render() {
    const { input, subresult  , historylist, showList} = this.state;
    // console.log(historylist , showList)
    return (
      <div className="bg-container">

        <div className="all-button-container">

          
          
          <div className="input-container">
            <input type="text" className="input-box" value={input} readOnly />
            <p className="subresult">{subresult}</p>
          </div>
            <button onClick={this.onChangeList} className="history-button">              
              {!showList && <FontAwesomeIcon icon={faHistory}/>}
              {showList && <FontAwesomeIcon icon={faCancel}/>}
              </button> 
              
              {!showList && 
                <div className="resent-list-container">
                  <ul>
                    <p className="pera">Resent History</p>
                    <button onClick={this.onClear} className="history-button"><FontAwesomeIcon icon={faTrash}/></button>
                    {historylist.map(eachItem=>(
                      <li className="li">{eachItem}
                      <hr className="hr"/>
                      </li>
                      
                ))}
              </ul>
          </div>
          }
          {showList &&
          <>
            <div className="buttons-contaienr">
              <button onClick={() => this.handleClick("%")} className="buttton"><FontAwesomeIcon icon={faPercentage}/></button>
              <button onClick={this.handleClearSub} className="buttton">CE</button>
              <button onClick={this.handleClear} className="buttton">C</button>
              <button onClick={this.handleBackspace} className="buttton"><FontAwesomeIcon icon={faBackspace}/></button>
            </div>

            <div className="buttons-contaienr">
              <button onClick={() => this.handleClick("7")} className="buttton">7</button>
              <button onClick={() => this.handleClick("8")} className="buttton">8</button>
              <button onClick={() => this.handleClick("9")} className="buttton">9</button>
              <button onClick={() => this.handleClick("/")} className="buttton"><FontAwesomeIcon icon={faDivide}/></button>
            </div>

            <div className="buttons-contaienr">
              <button onClick={() => this.handleClick("4")} className="buttton">4</button>
              <button onClick={() => this.handleClick("5")} className="buttton">5</button>
              <button onClick={() => this.handleClick("6")} className="buttton">6</button>
              <button onClick={() => this.handleClick("*")} className="buttton"><FontAwesomeIcon icon={faMultiply}/></button>
            </div>

            <div className="buttons-contaienr">
              <button onClick={() => this.handleClick("1")} className="buttton">1</button>
              <button onClick={() => this.handleClick("2")} className="buttton">2</button>
              <button onClick={() => this.handleClick("3")} className="buttton">3</button>
              <button onClick={() => this.handleClick("-")} className="buttton"><FontAwesomeIcon icon={faMinus} /></button>
            </div>

            <div className="buttons-contaienr">
            <button onClick={() => this.handleClick("0")} className="buttton">0</button>
            <button onClick={() => this.handleClick(".")} className="buttton">.</button>
            <button onClick={() => this.handleClick("+")} className="buttton"><FontAwesomeIcon icon={faPlus} /></button>
            <button onClick={this.handleEvaluate} className="buttton-result">=</button>
            </div>
          </>
          }
            

        </div>
      </div>
    );
  }
}

export default App;
