import { deliveryChartData, orderChartChartData, totalSaleChartData } from "../WidgetsChartData";

export const totalSaleData = [
    {
        title:"Total Sale",
        icon:"arrow-up-right",
        percentage: "3.4%",
        amount:"12,463",
        svgIcon:"Product-discount",
        color:"primary",
        detail:"20% since Last Month",
        colorBadges:"danger",
        chart:totalSaleChartData
    },
    {
        title:"New Orders",
        icon:"arrow-down-right",
        percentage: "4.5%",
        amount:"51,325",
        svgIcon:"order-product",
        color:"secondary",
        detail:"14% since Last Month",
        colorBadges:"success",
        chart:orderChartChartData
    },
    {
        title:"Order Delivery",
        icon:"arrow-up-right",
        percentage: "2.3%",
        amount:"32,587",
        svgIcon:"delivery-van",
        color:"tertiary",
        detail:"10% since Last Month",
        colorBadges:"danger",
        chart:deliveryChartData
    }
]