import React, {Component} from "react";
import { newProject } from '../redux/actions'


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
onSubmitHandler(e){
    e.preventDefault()
    newProject(this.state)
}
    render(){
        return(
            <div className="NewProjectDiv" >
                <h3>New Project</h3>
                <div className="inputDiv" style={style}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                if (this.props.newProject) {
                    this.props.newProject(this.state);
                    }
                }}>

                <div>
                    <div>Client:</div>
                    <div>
                     <input onChange={(e) => {
                        this.setState({
                            client: e.target.value
                        });
                     }} />
                    </div>
                </div>

                <div>
                    <div>Title:</div>
                    <div>
                     <input onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        });
                     }} />
                    </div> 
                </div>

                <div>
                    <div>Description:</div>
                    <div>
                     <input onChange={(e) => {
                        this.setState({
                            description: e.target.value
                        });
                     }} />
                    </div> 
                </div>

                <div>
                    <div>Charge:</div>
                    <div>
                     <input onChange={(e) => {
                        this.setState({
                            charge: e.target.value
                        });
                     }} />
                    </div> 
                </div>

                <div>
                    <div>Due:</div>
                    <div>
                     <input onChange={(e) => {
                        this.setState({
                            due: e.target.value
                        });
                     }} />
                    </div> 
                </div>
                <button onclick={(e)=>this.onSubmitHandler(e)} type="submit">Create</button>
                </form>
                </div>
            </div>
        )
    }
}

const style = {
    display: 'flex'
}

export default NewProject;