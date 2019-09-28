function LiveReports1()
        {
            $("#Ggraff").hide();
            info = JSON.parse(localStorage.info);
            let options = {
                    backgroundColor: "#faebd7",
                    interactivityEnabled: true,
                    animationEnabled: true,
                    axisX: {
                        valueFormatString: "HH:mm:ss",
                        titleFontFamily: "-apple-system, sans-serif",
                        labelFontFamily: "-apple-system, sans-serif"
                    },
                    toolTip: {
                        shared: true
                    },
                    legend: {
                        cursor: "pointer",
                        verticalAlign: "bottom",
                        fontFamily: "-apple-system, sans-serif",
                        itemclick: toggleDataSeries
                    },
                    data: []
                };

                let chart = "";
                setTimeout(function(){
                    chart = new CanvasJS.Chart("chartContainer", options);
                    chart.render();
                },2000)
            
            StartUpReports();
            let MyCoins=[];
                 for(i=0;i<info.length;i++)
                    if(info[i].toggle1==true)
                        MyCoins.push(info[i].symbol);
        function StartUpReports()
        {
            let MyCoins=[];
                 for(i=0;i<info.length;i++)
                    if(info[i].toggle1==true)
                        MyCoins.push(info[i].symbol);
            options.title = {
                text:`${MyCoins.join(",").toUpperCase()} to EUR`,
                fontFamily: "-apple-system, sans-serif"
            };

            $.each(MyCoins, function (i, Coin) 
                   {
            const Number = i + 1;

            if (Number == 1) {
                options[`axisY`] = {
                    title: "Coin Value",
                    titleFontFamily: "-apple-system, sans-serif",
                    labelFontFamily: "-apple-system, sans-serif",
                    valueFormatString: "#,###.###$",
                    includeZero: false
                }
            } else {
                options[`axisY${Number}`] = {
                    titleFontFamily: "-apple-system, sans-serif",
                    labelFontFamily: "-apple-system, sans-serif",
                    valueFormatString: "#,###.###€",
                    includeZero: false
                }
                }
            

            options.data.push({
                type: "spline",
                name: Coin.toUpperCase(),
                titleFontFamily: "-apple-system, sans-serif",
                labelFontFamily: "-apple-system, sans-serif",
                xValueFormatString: "HH:mm:ss",
                yValueFormatString: "#,###.###€",
                showInLegend: true,
                dataPoints: []
            });
        })

        setIntervalReports = setInterval(UpdateMyReports, 2000);         
        }
            
        function UpdateMyReports()
            {
                //------------------------------>
                let MyDataCoins=GetMyDataToreport(MyCoins);
                $.each(options.data, function (i, CurCoins) {
                const MyCoinName = MyCoins[i].toUpperCase();
                let y = MyDataCoins[MyCoinName]["EUR"];
                let x = new Date();
                CurCoins.dataPoints.push({
                    x: x,
                    y: y
                });
                    });
                console.log("this my Currect ",MyDataCoins);
                    console.log("this my options :",options);

                    chart.render();
            }
        function GetMyDataToreport(MyCoins1)
            {
                const MyURL = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=;;;MyCoins;;;&tsyms=EUR`;
                const Lastpoint = MyURL.replace(";;;MyCoins;;;", MyCoins1.join(",").toUpperCase());


                let MyPriceToCoins;

                $.ajax({
                    type: 'GET',
                    datatype: 'json',
                    url: Lastpoint,
                    async: false,
                    success: (data) => {
                        console.log("report call response: ", data);
                        MyPriceToCoins = data;
                    },
                    error: (error) => {
                        console.log("report call error: ", error);
                    }
                });

                return MyPriceToCoins;
          }
            
            
            
        function toggleDataSeries(e)
            {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else{
                    e.dataSeries.visible = true;
                    }
                    chart.render();
            }
        }