    import React, { useState, useEffect } from 'react';
    import { useLocation } from 'react-router';
    import LZString from 'lz-string';

    const PaymentHalyk = ({ halykConfig }) => {
        const { pageUrl, origin } = halykConfig;
        const [accessToken, setAccessToken] = useState('');
    
        const mesto = useLocation()

        function halyk (halyk) {
    
        var isTest = true;

        var testConfig = {
            pageUrL : "https://test-epay.homebank.kz/payform/",
            origin: "https://test-epay.homebank.kz",
            TokenAPIConfig : {
                url: "https://testoauth.homebank.kz/epay2/oauth2/token",
                clientId: "test"
            }
        };

        var prodConfig = {
            pageUrL : "https://epay.homebank.kz/payform/",
            origin: "https://epay.homebank.kz",
            TokenAPIConfig : {
                url: "https://epay-oauth.homebank.kz/oauth2/token",
                clientId: "uberflower"
            }
        };

        halyk.Config = function Config() {
            if (isTest)
                return testConfig;
            else
                return prodConfig;
        }

        var pageUrl = halyk.Config().pageUrL;

        var paymentPageOrigin = halyk.Config().origin;

        function pay(params) {
            mesto.location.href = pageUrl + "?params=" + LZString.compressToEncodedURIComponent(encodeParams(params));
        }
        var paymentWidgedCallBack = undefined;
        var widgetNode = undefined;
        // eslint-disable-next-line no-unused-expressions
        function encodeParams(params) {

            if (params === undefined || params === null) { return ""; }

            if (typeof params !== "object") { return "" + params; }

            var result = [];

            for (var name in params) {
                if(name){
                result.push(name + "=" + encodeURIComponent(encodeParams(params[name])));
                }
            }

            return result.join("&");
        }


        function addCssClass() {
            var style = document.createElement("style");
            style.type = "text/css";
            var styleClasses = ".widgetScreen {position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; background-color: rgba(5, 5, 5, 0.5); display: flex; justify-content: center; align-items: center;}";
            styleClasses += ".iframeBox{border-radius: 4px; position: relative; width: 400px; z-index: 1010; background-color: #fff; -ms-overflow-style: none; scrollbar-width: none;}";
            styleClasses += `.iframeHolder::-webkit-scrollbar {display: none;}`;
            styleClasses += ".iframeBoxHeader{padding: 0px;}";
            styleClasses += ".iframeBoxHeaderCloseButton{border-radius: 8px; cursor: pointer; width: 15px; height: 15px; content: 'X'; text-align: center; float: right; background-color: #ccc; font-family: Arial;}";
            styleClasses += ".iframeBoxHeaderCloseButtonText{font-size: 10px; font-family: sans-serif; font-weight: bold; color: #fff; padding-top: 2px;}";
            styleClasses += ".iframeBoxHeaderLabel{height:30px; text-align: center; float: left;}";
            styleClasses += ".iframeClass{ width: 100%; height: 90vh; border: none; }";
            //styleClasses += ".iframeHolder{ width: 100%; height: 100%; }";
            style.innerHTML = styleClasses;
            document.getElementsByTagName("head")[0].appendChild(style);
        };

        function onCloseDialog(result) {
            paymentWidgedCallBack({success: result});
            document.getElementsByTagName("body")[0].removeChild(widgetNode);
            widgetNode = undefined;
        }
        
        function onCommandRecieved(evnt) {
        if (evnt.origin.indexOf(paymentPageOrigin) === 0) {
                const resultObject = JSON.parse(evnt.data);
                onCloseDialog(resultObject.success === true);
            }
        }

        function showPaymentWidget(params, callBack) {
            paymentWidgedCallBack = callBack;
            const { accessToken } = params;
            if (!widgetNode) {
                addCssClass();
                widgetNode = document.createElement("DIV");
                widgetNode.className = "widgetScreen";
                var iframeBox = document.createElement("DIV");
                //var iframeBoxHeader = document.createElement("DIV");
                //var iframeBoxLabel = document.createElement("DIV");
                //var iframeBoxCloseButton = document.createElement("DIV");
                //iframeBoxLabel.className = "iframeBoxHeaderLabel";
                //iframeBoxCloseButton.className = "iframeBoxHeaderCloseButton";
                //iframeBoxLabel.innerHTML = "";
                //var iframeBoxHeaderCloseButtonText = document.createElement("DIV");
                //iframeBoxHeaderCloseButtonText.innerHTML = "X";
                //iframeBoxHeaderCloseButtonText.className = "iframeBoxHeaderCloseButtonText";
                //iframeBoxCloseButton.appendChild(iframeBoxHeaderCloseButtonText);
                // iframeBoxCloseButton.addEventListener("click", function(){
                //     onCloseDialog(false)
                // });
                //iframeBoxHeader.appendChild(iframeBoxLabel);
                //iframeBoxHeader.appendChild(iframeBoxCloseButton);
                //iframeBoxHeader.className = "iframeBoxHeader";
                iframeBox.className = "iframeBox";
                var iframe = document.createElement("IFRAME");
                var iframeHolder = document.createElement("DIV");
                iframeHolder.className = "iframeHolder";
                iframeHolder.appendChild(iframe);
                //iframeBox.appendChild(iframeBoxHeader);
                iframeBox.appendChild(iframeHolder);
                iframe.src = halyk.Config().pageUrL + "?params=" + LZString.compressToEncodedURIComponent(encodeParams(params)) + '&isShortForm=true';
                iframe.className = "iframeClass";
                window.addEventListener("message", onCommandRecieved, false);
                widgetNode.appendChild(iframeBox);
                document.getElementsByTagName("body")[0].appendChild(widgetNode);
            }
        }
    

        function p2p(params) { 
                mesto.location.href = pageUrl + "?params=" + LZString.compressToEncodedURIComponent(encodeParams(params)) + '&isTransfer=true'; 
            }
        function aft(params) {  
                mesto.location.href = pageUrl + "?params=" + LZString.compressToEncodedURIComponent(encodeParams(params)) + '&isAFT=true';  
            }
        function oct(params) {  
                mesto.location.href = pageUrl + "?params=" + LZString.compressToEncodedURIComponent(encodeParams(params)) + '&isOCT=true';  
            }
        halyk.p2p = p2p;
        halyk.aft = aft;
        halyk.oct = oct;

            halyk.pay = pay;
            halyk.showPaymentWidget = showPaymentWidget;
            return {
                pay: pay,
                showPaymentWidget: showPaymentWidget
                // Добавьте другие методы, если необходимо
            };

        }
        const halykInstance = halyk({});

        useEffect(() => {
            const fetchToken = async () => {
                try {
                    const auth = new URLSearchParams({
                        grant_type: "client_credentials",
                        scope: "webapi usermanagement email_send verification statement statistics payment",
                        client_id: "test",
                        client_secret: "yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG",
                        invoiceID: "Номер заказа",
                        amount: 100,
                        currency: "KZT",
                        terminal: "98339891",
                        postLink:       "",
                        failurePostLink: ""
                    });

                    const response = await fetch('https://testoauth.homebank.kz/epay2/oauth2/token', {
                        method: 'POST', 
                        body: auth,
                    });

                    const data = await response.json();
                    setAccessToken(data.access_token);
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching token:', error);
                }   
            };

            fetchToken();

            return () => {
                // Cleanup code if needed
            };
        }, []);

        const makePayment = async () => {
            halykInstance.showPaymentWidget({ accessToken: accessToken })

    
        };

        return (
            <div>
                <button onClick={makePayment}>Make Payment</button>
            </div>
        );
    };

    export default PaymentHalyk;
