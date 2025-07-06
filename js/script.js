document.getElementById("sipForm").addEventListener("submit", function(e){
    e.preventDefault();

    const P = parseFloat(document.getElementById("monthlyInvestment").value);
    const annualRate = parseFloat(document.getElementById("returnRate").value);
    const years = parseFloat(document.getElementById("timePeriod").value);

    const r = annualRate / 12 / 100;
    const n = years * 12;

    const futureValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const investedAmount = P * n;
    const estimatedReturns = futureValue - investedAmount;

    document.getElementById("investedAmount").textContent = investedAmount.toFixed(0);
    document.getElementById("estimatedReturns").textContent = estimatedReturns.toFixed(0);
    document.getElementById("totalValue").textContent = futureValue.toFixed(0);
});



