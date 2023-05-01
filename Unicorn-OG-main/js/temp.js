L.control.polylineMeasure().addTo(map);
var options = {
    position: 'topleft',
    unit: 'landmiles',
    clearMeasurementsOnStop: true,
    measureControlTitleOn: 'Turn on',
    measureControlTitleOff: 'Turn off',
    fixedLine: {
        color: '#006',
        weight: 2
    },
}
L.control.polylineMeasure(options).addTo(map);

