const defaultInitialState = {}

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
      return console.log({ ...state, ...payload })
    case 'SUBSCRIPTION':
      return { ...state, ...payload }
    case 'ADDON':
      return { ...state, ...payload }
    case 'PLAN':
      return { ...state, ...payload }
    case 'NAVIGATION':
      return { ...state, currentPage: payload }

    default:
      return state
  }
}
