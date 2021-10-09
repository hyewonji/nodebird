import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

// combineReducers로 나눠져있는 리듀서들을 합쳐준다.
// HYDRATE를 사용하기 위해 index 리듀서를 추가한다.
const rootReducer = combineReducers({
  index: (state={}, action) => {
    switch (action.type){
      case HYDRATE:
        console.log('HYDRATE', action)
        return { ...state, ...action.payload}
      default: 
        return state;
    }
  },
  user,
  post,
})

export default rootReducer;