import { Dispatch, createContext } from 'react'
import { IAction } from './reducer'

export enum SubscriptionEnums {
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY',
}

export enum PlanEnums {
  ARCADE = 'ARCADE',
  ADVANCE = 'ADVANCE',
  PRO = 'PRO',
}

export type PlanItem = {
  iconUrl: string
  title: string
  price: string
  extra?: string
  planEnum: PlanEnums
  priceNumber: number
}

export enum AddonEnums {
  ONLINE_SERVICES = 'ONLINE_SERVICES',
  LARGE_STORAGE = 'LARGE_STORAGE',
  CUSTOM_PROFILE = 'CUSTOM_PROFILE',
}

export enum Pages {
  PERSONAL_INFO = 'PERSONAL_INFO',
  SELECT_YOUR_PLAN = 'SELECT_YOUR_PLAN',
  PICK_ADDONS = 'PICK_ADDONS',
  FINISHING_UP =  'FINISHING_UP',
  THANK_YOU = 'THANK_YOU',
}

export type PlanItemAddOns = {
  name: string
  checked: boolean
  title: string
  desc: string
  price: string
  addonEnum: AddonEnums
  priceNumber: number
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



export const Context = createContext({} as { state: IContext; dispatch: ReducerType })
