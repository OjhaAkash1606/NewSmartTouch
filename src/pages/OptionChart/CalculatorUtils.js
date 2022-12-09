function CalculatorUtils() {
  //Day Calculation
  this.CalculateDay = function(ExpiryDate) {
    var onlydate = ExpiryDate.split(' ');

    var date1 = new Date();
    if (onlydate.length > 1) {
      var datearray = onlydate[0].split('/');
      if (parseInt(datearray[0]) > 12) {
        var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
        var datewithtime = newdate + ' ' + onlydate[1];
        date1 = new Date(datewithtime);
      } else {
        date1 = new Date(ExpiryDate);
      }
    } else {
      date1 = new Date(ExpiryDate);
    }

    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays / 365;
  };

  //Day Calculation
  this.GetDay = function(ExpiryDate) {
    var onlydate = ExpiryDate.split(' ');

    var date1 = new Date();
    if (onlydate.length > 1) {
      var datearray = onlydate[0].split('/');
      if (parseInt(datearray[0]) > 12) {
        var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
        var datewithtime = newdate + ' ' + onlydate[1];
        date1 = new Date(datewithtime);
      } else {
        date1 = new Date(ExpiryDate);
      }
    } else {
      date1 = new Date(ExpiryDate);
    }

    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  };

  //#endregion

  // Call

  this.CallVolatility = function(ObjGreeksVar) {
    var Price = 0.0;
    return (Price = this.MuicImpliedCallVolatility(ObjGreeksVar));
  };

  this.MuicImpliedCallVolatility = function(ObjGreeksVar) {
    var high = 5;
    var low = 0;
    var SpotPrice = parseFloat(ObjGreeksVar.SpotPrice);
    var StrikePrice = parseFloat(ObjGreeksVar.StrikePrice);
    var _TimeToExpiry = parseFloat(ObjGreeksVar._TimeToExpiry);
    var _IntrestRate = parseFloat(ObjGreeksVar._IntrestRate);
    var volatility = (high + low) / 2;
    var _DividentYield = parseFloat(ObjGreeksVar._DividentYield);

    do {
      if (
        this.MuicCallOption(
          SpotPrice,
          StrikePrice,
          _TimeToExpiry,
          _IntrestRate,
          (high + low) / 2,
          _DividentYield
        ) > ObjGreeksVar.ActualValue
      )
        high = (high + low) / 2;
      else low = (high + low) / 2;
    } while (high - low > 0.0001);
    return (high + low) / 2 * 100;
  };

  this.MuicCallOption = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var CallOption =
      Math.exp(-dividend * time) *
        underlyingPrice *
        this.Cnd(
          this.dOne(
            underlyingPrice,
            exercisePrice,
            time,
            interest,
            volatility,
            dividend
          )
        ) -
      exercisePrice *
        Math.pow(Math.E, -interest * time) *
        this.Cnd(
          this.dOne(
            underlyingPrice,
            exercisePrice,
            time,
            interest,
            volatility,
            dividend
          ) -
            volatility * Math.sqrt(time)
        );

    return CallOption;
  };

  this.Cnd = function(x) {
    var a1 = 0.31938153;
    var a2 = -0.356563782;
    var a3 = 1.781477937;
    var a4 = -1.821255978;
    var a5 = 1.330274429;

    var l = Math.abs(x);
    var k = 1.0 / (1.0 + 0.2316419 * l);

    var dCnd =
      1.0 -
      1.0 /
        Math.sqrt(2 * parseFloat(Math.PI.toString())) *
        Math.exp(-l * l / 2.0) *
        (a1 * k +
          a2 * k * k +
          a3 * Math.pow(k, 3.0) +
          a4 * Math.pow(k, 4.0) +
          a5 * Math.pow(k, 5.0));

    if (x < 0) {
      return 1.0 - dCnd;
    }

    return dCnd;
  };

  this.dOne = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var dOne =
      (Math.log(underlyingPrice / exercisePrice) +
        (interest - dividend + 0.5 * Math.pow(volatility, 2)) * time) /
      (volatility * Math.sqrt(time));
    return dOne;
  };

  //End Call

  // Put

  this.PutVolatility = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicImpliedPutVolatility(ObjGreeksVar));
  };

  this.MuicImpliedPutVolatility = function(ObjGreeksVar) {
    var high = 5;
    var low = 0;
    var SpotPrice = parseFloat(ObjGreeksVar.SpotPrice);
    var StrikePrice = parseFloat(ObjGreeksVar.StrikePrice);
    var _TimeToExpiry = parseFloat(ObjGreeksVar._TimeToExpiry);
    var _IntrestRate = parseFloat(ObjGreeksVar._IntrestRate);
    var volatility = (high + low) / 2;
    var _DividentYield = parseFloat(ObjGreeksVar._DividentYield);

    do {
      if (
        this.MuicPutOption(
          SpotPrice,
          StrikePrice,
          _TimeToExpiry,
          _IntrestRate,
          (high + low) / 2,
          _DividentYield
        ) > ObjGreeksVar.ActualValue
      )
        high = (high + low) / 2;
      else low = (high + low) / 2;
    } while (high - low > 0.0001);
    return (high + low) / 2 * 100;
  };

  this.MuicPutOption = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var PutOption =
      exercisePrice *
        Math.exp(-interest * time) *
        this.Cnd(
          -this.dTwo(
            underlyingPrice,
            exercisePrice,
            time,
            interest,
            volatility,
            dividend
          )
        ) -
      Math.exp(-dividend * time) *
        underlyingPrice *
        this.Cnd(
          -this.dOne(
            underlyingPrice,
            exercisePrice,
            time,
            interest,
            volatility,
            dividend
          )
        );

    return PutOption;
  };

  this.dTwo = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var dTwo =
      this.dOne(
        underlyingPrice,
        exercisePrice,
        time,
        interest,
        volatility,
        dividend
      ) -
      volatility * Math.sqrt(time);
    return dTwo;
  };

  // End Put

  // Call Price and MuicActualcall

  this.CallPrice = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicActualCall(ObjGreeksVar));
  };

  this.MuicActualCall = function(ObjGreeksVar) {
    var firstPart =
      ObjGreeksVar.SpotPrice *
      Math.exp(-1 * ObjGreeksVar._DividentYield * ObjGreeksVar._TimeToExpiry) *
      this.Cnd(this.MuicFirstDist(ObjGreeksVar));
    var secondPart =
      ObjGreeksVar.StrikePrice *
      Math.exp(-1 * ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
      this.Cnd(this.MuicSecondDist(ObjGreeksVar));
    var actualValue = firstPart - secondPart;
    return actualValue;
  };

  // End Call Price and MuicActualcall

  //  MuicFirstDict and MuicSecondDist

  this.MuicFirstDist = function(ObjGreeksVar) {
    var d1 = this.dOne(
      ObjGreeksVar.SpotPrice,
      ObjGreeksVar.StrikePrice,
      ObjGreeksVar._TimeToExpiry,
      ObjGreeksVar._IntrestRate,
      ObjGreeksVar._Volatility,
      ObjGreeksVar._DividentYield
    );
    return d1;
  };

  this.MuicSecondDist = function(ObjGreeksVar) {
    var d2 = this.dTwo(
      ObjGreeksVar.SpotPrice,
      ObjGreeksVar.StrikePrice,
      ObjGreeksVar._TimeToExpiry,
      ObjGreeksVar._IntrestRate,
      ObjGreeksVar._Volatility,
      ObjGreeksVar._DividentYield
    );
    return d2;
  };

  // End  MuicFirstDict and MuicSecondDist

  // Delta Calc

  this.CallDelta = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicDeltaCall(ObjGreeksVar));
  };

  this.MuicDeltaCall = function(ObjGreeksVar) {
    var CallDelta = this.Cnd(
      this.dOne(
        ObjGreeksVar.SpotPrice,
        ObjGreeksVar.StrikePrice,
        ObjGreeksVar._TimeToExpiry,
        ObjGreeksVar._IntrestRate,
        ObjGreeksVar._Volatility,
        ObjGreeksVar._DividentYield
      )
    );
    return CallDelta;
  };

  // End Delta Calc

  // Gamma Calc

  this.CallGamma = function(ObjGreeksVar) {
    var dPrice = 0.0;
    return (dPrice = this.MuicGamma(ObjGreeksVar));
  };

  this.MuicGamma = function(ObjGreeksVar) {
    var Gamma =
      this.NdOne(
        ObjGreeksVar.SpotPrice,
        ObjGreeksVar.StrikePrice,
        ObjGreeksVar._TimeToExpiry,
        ObjGreeksVar._IntrestRate,
        ObjGreeksVar._Volatility,
        ObjGreeksVar._DividentYield
      ) /
      (ObjGreeksVar.SpotPrice *
        (ObjGreeksVar._Volatility * Math.sqrt(ObjGreeksVar._TimeToExpiry)));
    if (Gamma == 'NaN') Gamma = 0;
    return Gamma;
  };

  this.NdOne = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var NdOne =
      Math.exp(
        -Math.pow(
          this.dOne(
            underlyingPrice,
            exercisePrice,
            time,
            interest,
            volatility,
            dividend
          ),
          2
        ) / 2
      ) / Math.sqrt(2 * 3.14159265358979);
    return NdOne;
  };
  // End Gamma Calc

  //Theta Calc

  this.CallTheta = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicThetaCall(ObjGreeksVar));
  };

  this.MuicThetaCall = function(ObjGreeksVar) {
    var CT =
      -(
        ObjGreeksVar.SpotPrice *
        ObjGreeksVar._Volatility *
        this.NdOne(
          ObjGreeksVar.SpotPrice,
          ObjGreeksVar.StrikePrice,
          ObjGreeksVar._TimeToExpiry,
          ObjGreeksVar._IntrestRate,
          ObjGreeksVar._Volatility,
          ObjGreeksVar._DividentYield
        )
      ) /
        (2 * Math.sqrt(ObjGreeksVar._TimeToExpiry)) -
      ObjGreeksVar._IntrestRate *
        ObjGreeksVar.StrikePrice *
        Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
        this.NdTwo(
          ObjGreeksVar.SpotPrice,
          ObjGreeksVar.StrikePrice,
          ObjGreeksVar._TimeToExpiry,
          ObjGreeksVar._IntrestRate,
          ObjGreeksVar._Volatility,
          ObjGreeksVar._DividentYield
        );

    var CallTheta = CT / 365;
    return CallTheta;
  };

  this.NdTwo = function(
    underlyingPrice,
    exercisePrice,
    time,
    interest,
    volatility,
    dividend
  ) {
    var NdTwo = this.Cnd(
      this.dTwo(
        underlyingPrice,
        exercisePrice,
        time,
        interest,
        volatility,
        dividend
      )
    );
    return NdTwo;
  };
  //End Theta Calc

  // Vega Calc

  this.CallVega = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicVega(ObjGreeksVar));
  };

  this.MuicVega = function(ObjGreeksVar) {
    var Vega =
      0.01 *
      ObjGreeksVar.SpotPrice *
      Math.sqrt(ObjGreeksVar._TimeToExpiry) *
      this.NdOne(
        ObjGreeksVar.SpotPrice,
        ObjGreeksVar.StrikePrice,
        ObjGreeksVar._TimeToExpiry,
        ObjGreeksVar._IntrestRate,
        ObjGreeksVar._Volatility,
        ObjGreeksVar._DividentYield
      );
    return Vega;
  };
  //End Vega Calc

  // Rho Calc

  this.CallRho = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicRhoCall(ObjGreeksVar));
  };

  this.MuicRhoCall = function(ObjGreeksVar) {
    var CallRho =
      0.01 *
      ObjGreeksVar.StrikePrice *
      ObjGreeksVar._TimeToExpiry *
      Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
      this.Cnd(
        this.dTwo(
          ObjGreeksVar.SpotPrice,
          ObjGreeksVar.StrikePrice,
          ObjGreeksVar._TimeToExpiry,
          ObjGreeksVar._IntrestRate,
          ObjGreeksVar._Volatility,
          ObjGreeksVar._DividentYield
        )
      );
    return CallRho;
  };

  // End Rho Calc

  // Put price and MuicActualprice

  this.PutPrice = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicActualPut(ObjGreeksVar));
  };

  this.MuicActualPut = function(ObjGreeksVar) {
    var firstPart =
      ObjGreeksVar.SpotPrice *
      Math.exp(-1 * ObjGreeksVar._DividentYield * ObjGreeksVar._TimeToExpiry) *
      this.Cnd(-1 * this.MuicFirstDist(ObjGreeksVar));
    var secondPart =
      ObjGreeksVar.StrikePrice *
      Math.exp(-1 * ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
      this.Cnd(-1 * this.MuicSecondDist(ObjGreeksVar));
    var actualValue = secondPart - firstPart;
    return actualValue;
  };
  // End Put price and MuicActualprice

  //  Delta Put Calc

  this.PutDelta = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicDeltaPut(ObjGreeksVar));
  };

  this.MuicDeltaPut = function(ObjGreeksVar) {
    var PutDelta =
      this.Cnd(
        this.dOne(
          ObjGreeksVar.SpotPrice,
          ObjGreeksVar.StrikePrice,
          ObjGreeksVar._TimeToExpiry,
          ObjGreeksVar._IntrestRate,
          ObjGreeksVar._Volatility,
          ObjGreeksVar._DividentYield
        )
      ) - 1;
    return PutDelta;
  };

  // End  Delta Put Calc

  //  Gamma Put Calc

  this.PutGamma = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicGamma(ObjGreeksVar));
  };

  // End  Gamma Put Calc

  // Theta Put Calc

  this.PutTheta = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicThetaPut(ObjGreeksVar));
  };

  this.MuicThetaPut = function(ObjGreeksVar) {
    var PT =
      -(
        ObjGreeksVar.SpotPrice *
        ObjGreeksVar._Volatility *
        this.NdOne(
          ObjGreeksVar.SpotPrice,
          ObjGreeksVar.StrikePrice,
          ObjGreeksVar._TimeToExpiry,
          ObjGreeksVar._IntrestRate,
          ObjGreeksVar._Volatility,
          ObjGreeksVar._DividentYield
        )
      ) /
        (2 * Math.sqrt(ObjGreeksVar._TimeToExpiry)) +
      ObjGreeksVar._IntrestRate *
        ObjGreeksVar.StrikePrice *
        Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
        (1 -
          this.NdTwo(
            ObjGreeksVar.SpotPrice,
            ObjGreeksVar.StrikePrice,
            ObjGreeksVar._TimeToExpiry,
            ObjGreeksVar._IntrestRate,
            ObjGreeksVar._Volatility,
            ObjGreeksVar._DividentYield
          ));
    var PutTheta = PT / 365;
    return PutTheta;
  };

  // End Theta Put Calc

  // Vega Put Calc

  this.PutVega = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicVega(ObjGreeksVar));
  };

  // End Vega Put Calc

  // Rho Put Calc

  this.PutRho = function(ObjGreeksVar) {
    var price = 0.0;
    return (price = this.MuicRhoPut(ObjGreeksVar));
  };

  this.MuicRhoPut = function(ObjGreeksVar) {
    var PutRho =
      -0.01 *
      ObjGreeksVar.StrikePrice *
      ObjGreeksVar._TimeToExpiry *
      Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
      (1 -
        this.Cnd(
          this.dTwo(
            ObjGreeksVar.SpotPrice,
            ObjGreeksVar.StrikePrice,
            ObjGreeksVar._TimeToExpiry,
            ObjGreeksVar._IntrestRate,
            ObjGreeksVar._Volatility,
            ObjGreeksVar._DividentYield
          )
        ));
    return PutRho;
  };

  // End Rho Put Calc
}

var calculatorutils = new CalculatorUtils();
