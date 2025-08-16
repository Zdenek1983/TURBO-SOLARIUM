export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  skinType: 'svetla' | 'stredni' | 'tmava'
  recommendedMinutes: number
  totalVisits: number
  lastVisit?: Date
  notes?: string
  createdAt: Date
}

export interface Membership {
  id: string
  customerId: string
  type: '50min' | '100min' | '250min' | '350min'
  totalMinutes: number
  remainingMinutes: number
  price: number
  purchaseDate: Date
  expirationDate: Date
  isActive: boolean
  isExpired: boolean
  usageHistory: Usage[]
}

export interface Usage {
  id: string
  membershipId: string
  customerId: string
  minutesUsed: number
  date: Date
  notes?: string
}

export interface Reservation {
  id: string
  customerId: string
  date: Date
  time: string
  duration: number
  status: 'potvrzena' | 'ceka' | 'zrusena' | 'dokoncena'
  notes?: string
  createdAt: Date
}

export interface Product {
  id: string
  name: string
  type: 'krem' | 'doplnek'
  price: number
  stock: number
  minStock: number
  description?: string
  brand?: string
}

export interface Sale {
  id: string
  customerId?: string
  items: SaleItem[]
  total: number
  date: Date
  paymentMethod: 'hotovost' | 'karta' | 'online'
  type: 'produkt' | 'permanentka' | 'opalovani'
}

export interface SaleItem {
  productId?: string
  membershipType?: string
  name: string
  quantity: number
  price: number
  total: number
}

export interface BusinessHours {
  day: string
  isOpen: boolean
  openTime: string
  closeTime: string
  isHoliday?: boolean
}

export interface Settings {
  pricePerMinute: number
  membershipPrices: {
    '50min': number
    '100min': number
    '250min': number
    '350min': number
  }
  businessInfo: {
    name: string
    address: string
    phone: string
    email: string
  }
  notifications: {
    expirationWarning: number // dny před vypršením
    lowStockWarning: number // kusů na skladě
  }
}