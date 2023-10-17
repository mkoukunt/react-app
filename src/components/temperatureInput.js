import React from "react";

const scaleNames = {  c: 'Celsius',  f: 'Fahrenheit'};

class TemperatureInput extends React.Component{
constructor(props){
super(props);
this.handleChange=this.handleChange.bind(this);
}
handleChange(e){
   /// this.setState({temperature:e.target.value});
   this.props.onTemperatureChange(e.target.value);
}
render(){
    const temp=this.props.temperature;
    return(
        <fieldset>
            <legend>Enter temp in {scaleNames[this.props.scale]}</legend>
            <input value={temp} onChange={this.handleChange}>
            </input>
            
        </fieldset>
    );
}
}


export default TemperatureInput;