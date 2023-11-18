import { CryptocurrencyMarket } from "react-tradingview-embed";


const Market = () => {
    return(
        <CryptocurrencyMarket 
            widgetProps={{ 
                "width": "100%",
                "height": 747,
                "defaultColumn": "overview",
                "screener_type": "crypto_mkt",
                "displayCurrency": "USD",
                "colorTheme": "dark",
                "locale": "en"
                }}
        />
    );
}

export default Market;