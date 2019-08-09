import { connect } from "react-redux";
import ListProjects from "../components/ListProjects";
import {deleteProject} from "../redux/actions";

const mapStateToProps = state => ({ projects: state.projects });

const mapDispatchToProps = { deleteProject: deleteProject };

export default connect(mapStateToProps, mapDispatchToProps)(ListProjects);
