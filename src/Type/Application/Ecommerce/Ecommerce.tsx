export interface ProductPropsType {
  activeTab: number;
}

export interface ServiceType {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ProductListTableDataColumnType {
  image: string;
  name: string;
  date: string;
  price: string;
  status: string;
  detail:string
}

export interface ProductListTableProduct {
  images?: string;
  productName?:string
  productDetail ?:string
  status?:string
}

export interface InvoicePrintType {
  handlePrint?: () => void;
}
