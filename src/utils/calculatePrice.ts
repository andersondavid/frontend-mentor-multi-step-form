import { SubscriptionEnums, IContext, PlanItemAddOns } from '@/store/context'
import { addonsData, plansData } from '@/store/offersData'

const calculateAddons = (planKind: PlanItemAddOns[], data: IContext) => {
  return (
    planKind
      .map((addon) => {
        if (data.addons.includes(addon.addonEnum)) return addon.priceNumber
      })
      .reduce((prev = 0, curr = 0) => prev + curr, 0) || 0
  )
}

export const calculatePrice = (data: IContext) => {
  let totalPrice = 0

  if (data.subscription == SubscriptionEnums.MONTHLY) {
    totalPrice +=
      plansData.monthlyPlan.find((plan) => plan.planEnum === data.plan)
        ?.priceNumber || 0
    totalPrice += calculateAddons(addonsData.monthlyPlansAddOns, data)
  } else {
    totalPrice +=
      plansData.yearlyPlan.find((plan) => plan.planEnum === data.plan)
        ?.priceNumber || 0
    totalPrice += calculateAddons(addonsData.yearlyPlansAddOns, data)
  }

  return totalPrice
}
