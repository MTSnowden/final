import React, {Component} from "react";


class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: "",
            title: "",
            description: "",
            charge: "",
            due: ""
        };
    }

    render(){
        return(
            <div>
                <h1>New Project</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                if (this.props.newProject) {
                    this.props.newProject(this.state);
                    }
                }}>
                <div>
                Client: <input onChange={(e) => {
                    this.setState({
                        title: e.target.value
                    });
                }} />
                </div>
                <div>
                Title: <input onChange={(e) => {
                    this.setState({
                        director: e.target.value
                    });
                }} />
                </div>
                <div>
                Description: <input onChange={(e) => {
                    this.setState({
                        genre: e.target.value
                    });
                }} />
                </div>
                <div>
                Charge: <input onChange={(e) => {
                    this.setState({
                        year: e.target.value
                    });
                }} /> 
                </div>
                <div>
                Due: <input onChange={(e) => {
                    this.setState({
                        year: e.target.value
                    });
                }} /> 
                </div>
                <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default NewProject;