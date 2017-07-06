export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    //用户管理模块
    case types.userEditSuccess:
      return {
        ...state,
        userEditRes: action.res
      }
  }
}
