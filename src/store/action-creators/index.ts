import * as userActionCreators from "../action-creators/user"
import * as todoActionCreators from "../action-creators/todo"

export default {
    ...todoActionCreators,
    ...userActionCreators
}