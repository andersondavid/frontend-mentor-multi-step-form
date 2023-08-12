import { IContext } from "./context"

let defaultInitialState: IContext
export interface IAction {
  type: 'PERSONAL_INFO' | 'SUBSCRIPTION' | 'PLAN' | 'ADDON' | 'NAVIGATION'
  payload?: any
}

export const reducer = (
  state = defaultInitialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case 'PERSONAL_INFO':
      return { ...state, personalInfo: payload  }
    case 'SUBSCRIPTION':
      return { ...state, subscription: payload }
    case 'ADDON':
      return { ...state, addons: payload }
    case 'PLAN':
      return { ...state, plan: payload }
    case 'NAVIGATION':
      return { ...state, currentPage: payload }

    default:
      return state
  }
}
