// export interface ItemSectionProps {
//   name: string;
//   description: string;
//   url: string;
//   isActive: boolean;
//   onToggle?: (name: string, isActive: boolean) => void;
//   onRemove?: (name: string) => void;
//   mensajeEliminar?: string;
//   index: number;
// }

export interface ItemSectionProps {
  title: string;
  description: string;
  url: string;
  index: number;
}

export interface LinkProps {
  name: string;
  url: string;
}


