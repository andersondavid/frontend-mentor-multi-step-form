import { AddonEnums, PlanEnums, PlanItem, PlanItemAddOns } from './context'

export const plansData: { monthlyPlan: PlanItem[]; yearlyPlan: PlanItem[] } = {
  monthlyPlan: [
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-arcade.svg',
      title: 'Arcade',
      price: '$9/mo',
      planEnum: PlanEnums.ARCADE,
      priceNumber: 9,
    },
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-advanced.svg',
      title: 'Advance',
      price: '$12/mo',
      planEnum: PlanEnums.ADVANCE,
      priceNumber: 12,
    },
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-pro.svg',
      title: 'Pro',
      price: '$15/mo',
      planEnum: PlanEnums.PRO,
      priceNumber: 15,
    },
  ],
  yearlyPlan: [
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-arcade.svg',
      title: 'Arcade',
      price: '$90/yr"',
      extra: '2 months free',
      planEnum: PlanEnums.ARCADE,
      priceNumber: 90,
    },
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-advanced.svg',
      title: 'Advance',
      price: '$120/yr',
      extra: '2 months free',
      planEnum: PlanEnums.ADVANCE,
      priceNumber: 120,
    },
    {
      iconUrl: 'https://raw.githubusercontent.com/andersondavid/frontend-mentor-multi-step-form/main/public/assets/images/icon-pro.svg',
      title: 'Pro',
      price: '$150/yr',
      extra: '2 months free',
      planEnum: PlanEnums.PRO,
      priceNumber: 150,
    },
  ],
}

export const addonsData: {
  monthlyPlansAddOns: PlanItemAddOns[]
  yearlyPlansAddOns: PlanItemAddOns[]
} = {
  monthlyPlansAddOns: [
    {
      name: 'onlineServices',
      title: 'Online service',
      price: '+$1/mo',
      checked: false,
      desc: 'Access to multiplayer games',
      addonEnum: AddonEnums.ONLINE_SERVICES,
      priceNumber: 1,
    },
    {
      name: 'largerStorage',
      title: 'Larger storate',
      price: '+$2/mo',
      checked: false,
      desc: 'Extra 1TB of cloud save',
      addonEnum: AddonEnums.LARGE_STORAGE,
      priceNumber: 2,
    },
    {
      name: 'customProfile',
      title: 'Customizable profile',
      price: '+$2/mo',
      checked: false,
      desc: 'Custom theme on your profile',
      addonEnum: AddonEnums.CUSTOM_PROFILE,
      priceNumber: 2,
    },
  ],
  yearlyPlansAddOns: [
    {
      name: 'onlineServices',
      title: 'Online service',
      price: '+$10/yr',
      checked: false,
      desc: 'Access to multiplayer games',
      addonEnum: AddonEnums.ONLINE_SERVICES,
      priceNumber: 10,
    },
    {
      name: 'largerStorage',
      title: 'Larger storate',
      price: '+$20/ye',
      checked: false,
      desc: 'Extra 1TB of cloud save',
      addonEnum: AddonEnums.LARGE_STORAGE,
      priceNumber: 20,
    },
    {
      name: 'customProfile',
      title: 'Customizable profile',
      price: '+$20/yr',
      checked: false,
      desc: 'Custom theme on your profile',
      addonEnum: AddonEnums.CUSTOM_PROFILE,
      priceNumber: 20,
    },
  ],
}
