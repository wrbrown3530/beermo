//get one user
function getMyAccount(id){
  return axios.get(`transactions/${id}`)
}

function getMyInfo(id){
  return axios.get(`users/${id}`)
}


function getMyFavoriteBeer(id){
  return axios.get(`favorites/${id}`)
}

function createNewUser(user){
  return axios.post('signup/', user)
}

function populateFavorTable(){
  return axios.get('favors/')
}

function deleteUser(id){
  return axios.delete(`users/${id}`)
}

function login(user){
  return axios.post(`token/`, user)
}

function verifyUser(){
  return axios.get('token/')
}
