import {
  PlanEnums,
  SubscriptionEnums,
  IContext,
  PlanItemAddOns,
} from '@/store/context'
import { addonsData } from '@/store/offersData'

interface DataFormated {
  planText: string
  subscriptionText: string
  subscriptionTextTotal: string
  personalInfoText: {
    name: string
    email: string
    phone: string
  }
  addons: (PlanItemAddOns | undefined)[]
  totalBudget: string
}

export const dataFormat = (data: IContext, budget: number) => {
  let dataFormated: DataFormated = {
    planText: '',
    subscriptionText: '',
    subscriptionTextTotal: '',
    personalInfoText: {
      name: '',
      email: '',
      phone: '',
    },
    addons: [],
    totalBudget: '',
  }

  if (data.plan == PlanEnums.ADVANCE) {
    dataFormated.planText = 'Advance'
  } else if (data.plan == PlanEnums.ARCADE) {
    dataFormated.planText = 'Arcade'
  } else {
    dataFormated.planText = 'Pro'
  }

  if (data.subscription == SubscriptionEnums.MONTHLY) {
    dataFormated.subscriptionText = 'Monthly'
    dataFormated.subscriptionTextTotal = 'per month'
    dataFormated.totalBudget = '$' + budget + '/mo'
  } else {
    dataFormated.subscriptionText = 'Yearly'
    dataFormated.subscriptionTextTotal = 'per year'
    dataFormated.totalBudget = '$' + budget + '/yo'
  }

  if (data.personalInfo) {
    dataFormated.personalInfoText = data.personalInfo
  }

  if (data.addons) {
    if (data.subscription == SubscriptionEnums.MONTHLY) {
      dataFormated.addons = addonsData.monthlyPlansAddOns.map((addon) => {
        if (data.addons.includes(addon.addonEnum)) return addon
      })
    } else {
      dataFormated.addons = addonsData.yearlyPlansAddOns.map((addon) => {
        if (data.addons.includes(addon.addonEnum)) return addon
      })
    }
  }

  return dataFormated
}
