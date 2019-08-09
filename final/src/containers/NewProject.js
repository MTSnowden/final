import { connect } from "react-redux";
import NewProject from "../components/NewProject";
import { newProject } from "../redux/actions";


const mapDispatchToProps = { newProject: newProject };

export default connect(null, mapDispatchToProps)(NewProject);
