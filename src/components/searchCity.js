import React from "react";

class SearchCity extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }

    inputChangeHandler = (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    searchCity = (e)=>{
        e.preventDefault()
        console.log(this.state);
        this.props.onCitySearch(this.state.searchText)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.searchCity}>
                <input type="text" name="searchText" value={this.state.searchText} onChange={this.inputChangeHandler} /> <button type="submit" >Submit</button>
            
                </form>
            
            </div>
        )
    }
}
export default SearchCity;