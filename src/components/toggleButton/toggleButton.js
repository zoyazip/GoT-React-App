import React, {Component} from "react";
import RandomChar from "../randomChar";
export default class ButtonToggle extends Component{
    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }
    render(){
        const char = this.state.showRandomChar ? <RandomChar/> : null;
    return <>
                {char}
                <button className = "toggle-btn" onClick={this.toggleRandomChar}>Toggle Random Character</button>
            </>
    
}
}
