import { Dispatch, createContext } from 'react'
import { IAction } from './reducer'

enum SubscriptionEnums {
  YEARLY,
  MONTHLY,
}

enum PlanEnums {
  ARCADE,
  ADVANCE,
  PRO,
}

enum AddonEnums {
  ONLINE_SERVICES,
  LARGE_STORAGE,
  CUSTOM_PROFILE,
}

export enum Pages {
  PERSONAL_INFO,
  SELECT_YOUR_PLAN,
  PICK_ADDONS,
  FINISHING_UP,
  THANK_YOU,
}

export interface IContext {
  personalInfo: {
    name: string
    email: string
    phone: string
  }
  subscription: SubscriptionEnums
  plan: PlanEnums
  addons: AddonEnums[]
  currentPage: Pages
}

type ReducerType = Dispatch<IAction>

const Context = createContext({} as { state: IContext; dispatch: ReducerType })

export { SubscriptionEnums, PlanEnums, AddonEnums, Context }
