export default function auth(state=null, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
