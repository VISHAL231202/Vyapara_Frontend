export interface TotalSaleBodyType {
    title: string;
    icon: string;
    percentage: string;
    amount: string;
    svgIcon: string;
    color: string;
    detail: string;
    colorBadges: string;
    chart: ApexCharts.ApexOptions;
}[]

export interface TotalSaleBodyPropsType {
    item : TotalSaleBodyType
}