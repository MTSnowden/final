export function login(user) {
    return {
      type: 'LOGIN',
      value: user
    }
  }
  
  export function logout(user) {
    return {
      type: 'LOGOUT',
      value: user
    }
  }