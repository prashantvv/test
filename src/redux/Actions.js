
  export const action_Login = (payload) => ({
    type: "login",
    payload: payload
})

  export const action_nameChange = (payload) => ({
    type: "CHANGE_NAME",
    payload: payload
})


export const action_ageChange = (payload) => ({
  type: "CHANGE_AGE",
  payload: payload
})


export  const action_getData=()=> {

  return function(dispatch) {
    
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
      console.log('res===',json)
      dispatch ({ type: "DATA_LOADED", payload: json });
    });
  }
}