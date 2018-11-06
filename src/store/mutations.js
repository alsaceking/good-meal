import * as types from './mutation-types'

const mutations = {
  [types.SET_CURRENT_DATE_INDEX](state, currentdateindex) {
    state.currentDateIndex = currentdateindex
  }
}

export default mutations