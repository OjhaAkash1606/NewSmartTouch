import {
  CallVolatility,
  CallPrice,
  CallDelta,
  CallGamma,
  CallTheta,
  CallVega,
  CallRho
} from './deltaFunction';

const Calc = isCalc => {
  var SpotPrice = 0,
    IntrestRate = 0,
    StrikePrice = 0,
    TimeToExpiry = 0,
    DividentYield = 0,
    ActualValue = 0,
    Volatility = 0;

  var Delta = 0,
    Gamma = 0,
    Theta = 0,
    Vega = 0,
    Rho = 0,
    Theory = 0;

  //SpotPrice = parseFloat();
  SpotPrice = 42942.2;
  // IntrestRate = parseFloat();
  IntrestRate = 2.5;
  // StrikePrice = parseFloat();
  StrikePrice = 42200.0;
  //TimeToExpiry = parseInt() / 365;
  TimeToExpiry = 4 / 365;
  //DividentYield = parseFloat();
  DividentYield = 2;
  // ActualValue = parseFloat();
  ActualValue = 761.4;

  var objVar = {
    SpotPrice: SpotPrice,
    StrikePrice: StrikePrice,
    _TimeToExpiry: TimeToExpiry,
    _IntrestRate: IntrestRate,
    _Volatility: Volatility,
    _DividentYield: DividentYield,
    ActualValue: ActualValue
  };

  if (!isCalc) {
    Volatility = CallVolatility(objVar);
  } else {
    Volatility = 2;
  }

  objVar._Volatility = Volatility / 100;
  Theory = parseFloat(CallPrice(objVar)).toFixed(4);
  Delta = parseFloat(CallDelta(objVar)).toFixed(4);
  Gamma = parseFloat(CallGamma(objVar)).toFixed(4);
  Theta = parseFloat(CallTheta(objVar)).toFixed(4);
  Vega = parseFloat(CallVega(objVar)).toFixed(4);
  Rho = parseFloat(CallRho(objVar)).toFixed(4);
  console.log(Theory, Delta, Gamma, Theta, Vega, Rho);
};

Calc();

//Day Calculation
const CalculateDay = ExpiryDate => {
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
const GetDay = ExpiryDate => {
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

