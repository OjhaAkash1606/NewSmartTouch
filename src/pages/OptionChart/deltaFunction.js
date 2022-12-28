// =================================CallVolatility==================================

export const CallVolatility = ObjGreeksVar => {
  //console.log(ObjGreeksVar);
  var Price = 0.0;
  //console.log(Price);
  return (Price = MuicImpliedCallVolatility(ObjGreeksVar));
};

// ===========================MuicImpliedCallVolatility================================

export const MuicImpliedCallVolatility = ObjGreeksVar => {
  //console.log(ObjGreeksVar);
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
      MuicCallOption(
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

// =======================MuicCallOption===============================

const MuicCallOption = (
  underlyingPrice,
  exercisePrice,
  time,
  interest,
  volatility,
  dividend
) => {
  // console.log(
  //   underlyingPrice,
  //   exercisePrice,
  //   time,
  //   interest,
  //   volatility,
  //   dividend
  // );
  var CallOption =
    Math.exp(-dividend * time) *
      underlyingPrice *
      Cnd(
        dOne(
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
      Cnd(
        dOne(
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

// =========================================Cnd==================================

const Cnd = x => {
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

// ===================================dOne====================================

const dOne = (
  underlyingPrice,
  exercisePrice,
  time,
  interest,
  volatility,
  dividend
) => {
  var dOne =
    (Math.log(underlyingPrice / exercisePrice) +
      (interest - dividend + 0.5 * Math.pow(volatility, 2)) * time) /
    (volatility * Math.sqrt(time));
  return dOne;
};

// ============================CallPrice===============================

export const CallPrice = ObjGreeksVar => {
  var price = 0.0;
  return (price = MuicActualCall(ObjGreeksVar));
};

// =========================MuicActualCall=============================

export const MuicActualCall = ObjGreeksVar => {
  var firstPart =
    ObjGreeksVar.SpotPrice *
    Math.exp(-1 * ObjGreeksVar._DividentYield * ObjGreeksVar._TimeToExpiry) *
    Cnd(MuicFirstDist(ObjGreeksVar));
  var secondPart =
    ObjGreeksVar.StrikePrice *
    Math.exp(-1 * ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
    Cnd(MuicSecondDist(ObjGreeksVar));
  var actualValue = firstPart - secondPart;
  return actualValue;
};

// ================================= MuicFirstDist==================================

const MuicFirstDist = ObjGreeksVar => {
  var d1 = dOne(
    ObjGreeksVar.SpotPrice,
    ObjGreeksVar.StrikePrice,
    ObjGreeksVar._TimeToExpiry,
    ObjGreeksVar._IntrestRate,
    ObjGreeksVar._Volatility,
    ObjGreeksVar._DividentYield
  );
  return d1;
};

// ==============================MuicSecondDist=================================

const MuicSecondDist = ObjGreeksVar => {
  var d2 = dTwo(
    ObjGreeksVar.SpotPrice,
    ObjGreeksVar.StrikePrice,
    ObjGreeksVar._TimeToExpiry,
    ObjGreeksVar._IntrestRate,
    ObjGreeksVar._Volatility,
    ObjGreeksVar._DividentYield
  );
  return d2;
};

// =============================================dTwo=======================================================

const dTwo = (
  underlyingPrice,
  exercisePrice,
  time,
  interest,
  volatility,
  dividend
) => {
  var dTwo =
    dOne(underlyingPrice, exercisePrice, time, interest, volatility, dividend) -
    volatility * Math.sqrt(time);
  return dTwo;
};

// ==================================CallDelta================================================

export const CallDelta = ObjGreeksVar => {
  var price = 0.0;
  return (price = MuicDeltaCall(ObjGreeksVar));
};

// ==========================================MuicDeltaCall=========================================

export const MuicDeltaCall = ObjGreeksVar => {
  var CallDelta = Cnd(
    dOne(
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

// =====================================CallGamma===============================================

export const CallGamma = ObjGreeksVar => {
  var dPrice = 0.0;
  return (dPrice = MuicGamma(ObjGreeksVar));
};

// =================================MuicGamma==============================================

export const MuicGamma = ObjGreeksVar => {
  var Gamma =
    NdOne(
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

// =================================NdOne=======================================

const NdOne = (
  underlyingPrice,
  exercisePrice,
  time,
  interest,
  volatility,
  dividend
) => {
  var NdOne =
    Math.exp(
      -Math.pow(
        dOne(
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

// =========================CallTheta===============================

export const CallTheta = ObjGreeksVar => {
  var price = 0.0;
  return (price = MuicThetaCall(ObjGreeksVar));
};

// ============================MuicThetaCall================================

export const MuicThetaCall = ObjGreeksVar => {
  var CT =
    -(
      ObjGreeksVar.SpotPrice *
      ObjGreeksVar._Volatility *
      NdOne(
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
      NdTwo(
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

// ======================================NdTwo=====================================

const NdTwo = (
  underlyingPrice,
  exercisePrice,
  time,
  interest,
  volatility,
  dividend
) => {
  var NdTwo = Cnd(
    dTwo(underlyingPrice, exercisePrice, time, interest, volatility, dividend)
  );
  return NdTwo;
};

// ============================CallVega=======================================

export const CallVega = ObjGreeksVar => {
  var price = 0.0;
  return (price = MuicVega(ObjGreeksVar));
};

// ================================MuicVega===============================

export const MuicVega = ObjGreeksVar => {
  var Vega =
    0.01 *
    ObjGreeksVar.SpotPrice *
    Math.sqrt(ObjGreeksVar._TimeToExpiry) *
    NdOne(
      ObjGreeksVar.SpotPrice,
      ObjGreeksVar.StrikePrice,
      ObjGreeksVar._TimeToExpiry,
      ObjGreeksVar._IntrestRate,
      ObjGreeksVar._Volatility,
      ObjGreeksVar._DividentYield
    );
  return Vega;
};

// ==================================CallRho====================================

export const CallRho = ObjGreeksVar => {
  var price = 0.0;
  return (price = MuicRhoCall(ObjGreeksVar));
};

// ==========================================MuicRhoCall================================

export const MuicRhoCall = ObjGreeksVar => {
  var CallRho =
    0.01 *
    ObjGreeksVar.StrikePrice *
    ObjGreeksVar._TimeToExpiry *
    Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
    Cnd(
      dTwo(
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

// =================================PutVolatility====================================

export const PutVolatility = function(ObjGreeksVar) {
  let price = 0.0;
  return (price = MuicImpliedPutVolatility(ObjGreeksVar));
};

// ====================MuicImpliedPutVolatility=========================
const MuicImpliedPutVolatility = function(ObjGreeksVar) {
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
      MuicPutOption(
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

const MuicPutOption = function(
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
      Cnd(
        dTwo(
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
      Cnd(
        dOne(
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

// Put price and MuicActualprice

export const PutPrice = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicActualPut(ObjGreeksVar));
};

const MuicActualPut = function(ObjGreeksVar) {
  var firstPart =
    ObjGreeksVar.SpotPrice *
    Math.exp(-1 * ObjGreeksVar._DividentYield * ObjGreeksVar._TimeToExpiry) *
    Cnd(-1 * MuicFirstDist(ObjGreeksVar));
  var secondPart =
    ObjGreeksVar.StrikePrice *
    Math.exp(-1 * ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
    Cnd(-1 * MuicSecondDist(ObjGreeksVar));
  var actualValue = secondPart - firstPart;
  return actualValue;
};

// End Put price and MuicActualprice

// Delta Put Calc

export const PutDelta = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicDeltaPut(ObjGreeksVar));
};

const MuicDeltaPut = function(ObjGreeksVar) {
  var PutDelta =
    Cnd(
      dOne(
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

export const PutGamma = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicGamma(ObjGreeksVar));
};

// End  Gamma Put Calc

// Theta Put Calc

export const PutTheta = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicThetaPut(ObjGreeksVar));
};

const MuicThetaPut = function(ObjGreeksVar) {
  var PT =
    -(
      ObjGreeksVar.SpotPrice *
      ObjGreeksVar._Volatility *
      NdOne(
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
        NdTwo(
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

export const PutVega = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicVega(ObjGreeksVar));
};

// End Vega Put Calc

// Rho Put Calc

export const PutRho = function(ObjGreeksVar) {
  var price = 0.0;
  return (price = MuicRhoPut(ObjGreeksVar));
};

const MuicRhoPut = function(ObjGreeksVar) {
  var PutRho =
    -0.01 *
    ObjGreeksVar.StrikePrice *
    ObjGreeksVar._TimeToExpiry *
    Math.exp(-ObjGreeksVar._IntrestRate * ObjGreeksVar._TimeToExpiry) *
    (1 -
      Cnd(
        dTwo(
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
