const covid19ImpactEstimator = (data) => {
    const output = {
        data: { ...data },
        impact: {},
        severeImpact: {}
    }

    const { reportedCases,
        timeToElapse,
        periodType,
        population,
        totalHospitalBeds,
        region } = data;

    function normalise() {
        if (periodType == 'days') {
            return timeToElapse
        }
        if (periodType == "weeks") {
            return timeToElapse *= 7
        }
        if (periodType == "months") {
            return timeToElapse *= 30
        }
    }
    impact.currentlyInfected = reportedCases * 10
    severeImpact.currentlyInfected = reportedCases * 50
    const impactinfectionsByRequestedTime = impact.currentlyInfected * 2 **Math.trunc(normalise() / 3);
    const severeinfectionsByRequestedTime = severeImpact.currentlyInfected * 2 **Math.trunc(normalise() / 3)

    // challenge 2
    
};

export default covid19ImpactEstimator;
