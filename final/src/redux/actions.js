import axios from 'axios'
import jwt from 'jsonwebtoken'

export function login({ userName, password }) {
  return dispatch => {
    return axios({
      url: '/auth/login',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password })
    })
    .then(res => {
      document.cookie = `id_token=${res.data};max-age=300;`
      const payload = jwt.verify(res.data, 'secret')
      dispatch({
        type: 'LOGIN',
        value: payload._doc
      })
    })
    .catch(err => Promise.reject(err))
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}

export function signUp({ userName, password }) {
  console.log("ACTIONS:", userName, password)
  return dispatch => {
    return axios({
      url: '/auth/signup',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password })
    })
    .then((res) => dispatch(login({ userName, password })))
    .catch(err => Promise.reject(err))
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    value: user
  }
}

export function updateUser(userName) {
  return dispatch => {
    return axios({
      url: '/auth/user',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}

export function updatePassword(password) {
  return dispatch => {
    return axios({
      url: '/auth/password',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ password }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}




export const fetchProjects = dispatch =>{
  fetch("/projects")
  .then(res => res.json())
  .then(projects => {
     dispatch(projectsFetched(projects));
 });
}

export function projectsFetched(projects) {
  return {
    type: "PROJECTS_FETCHED",
    value: projects
  };
}

export function newProject() {
    return function dispatch(){
      return{
      type: "PROJECTS_FETCHED",
      value:{ test: 'testing'}
      }
//   fetch("/projects", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(project)
// }).then(() => dispatch(fetchProjects(project)))  

        // }).then((projects) => {
        //   dispatch(fetchProjects(projects));
        // });
  }
}

export function deleteProject(id) {
  return function (dispatch) {
        
    fetch(`/projects/${id}`, {
      method: "DELETE"
    }
 )
        .then( (response) => {
          return response.json();
        }).then(() => {
          dispatch(fetchProjects());
        });
  
  };

}
