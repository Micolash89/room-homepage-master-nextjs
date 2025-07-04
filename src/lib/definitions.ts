

export interface LinkProps {
  name: string;
  url: string;
}

export interface ItemArr {
  title: string;
  description: string;
  urlDesktop: string;
  urlMobile: string;
}

export interface ItemHeaderProps {
  title: string;
  url: string;
  index:number
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ItemSectionProps extends ItemArr {
  onNext?: () => void;
  onPrev?: () => void;
}

export interface AnimatedNumberProps {
  value: number;
  className?: string;
}