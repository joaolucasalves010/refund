import foodSvg from "../assets/food.svg"
import othersSvg from "../assets/others.svg"
import servicesSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accomodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
  others: {
    name: "Outros",
    icon: othersSvg
  },
  food: {
    name: "Alimentação",
    icon: foodSvg
  },
  services: {
    name: "Serviços",
    icon: servicesSvg
  },
  transport: {
    name: "Transporte",
    icon: transportSvg
  },
  accomodation: {
    name: "Acomodações",
    icon: accomodationSvg
  }
  
}


export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>