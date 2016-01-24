var countColumns = 1;
var widthColumn = 200;
var heightColumn = 400;

var dataContaiter = [
    {
        text: 'Buildings and Land',
        value: 104,
        backgroundColor: '#789440',
        textColor: '#FFFFFF'
    },
    {
        text: 'Structures',
        value: 90,
        backgroundColor: '#789440'
    },
    {
        text: 'Capital Equipment',
        value: 45,
        backgroundColor: '#789440'
    }
];

function configureBodyData(data, containerHeight) {
    var maxElementHeight = getMaxHeight(containerHeight, data.length);
    var configure = [];
    var ignoreList = [];
    var dataMaxValue = 0;
    var rest = 0;
    for (var index = 0;index < data.length; index++) {
        var currentMaxValue = maxValue (data, ignoreList);
        if(index == 0) {
            dataMaxValue = currentMaxValue.max;
        }
        ignoreList[ignoreList.length] = currentMaxValue.index;

        var currentHeight = (currentMaxValue.max / dataMaxValue) * maxElementHeight;
        rest += maxElementHeight - currentHeight;

        configure[index] = {};
        configure[index].backgroundColor = data[index].backgroundColor;
        configure[index].color = data[index].textColor;
        configure[index].heigth = currentHeight;
        configure[index].text = data[index].text;
    }
    rest /=3;
    for (var index = 0;index < configure.length; index++) {
        configure[index].heigth += rest;
    }

    for(var index = 0; index < configure.length; index++) {
        var positionY = 55;
        for (var j =0; j < index; j++) {
            positionY += configure[j].heigth;
        }
        configure[index].positionY = positionY;
    }
    return configure;
}

var dataHeader=[{
    name: [
        {
            text: 'Infrastructure'
        }, {
            text: 'Net Worth'
        }, {
            text: 'actual and projectd for year',
            fontSize: 9
        }],
    value: '320'
}];

var dataLeftElement = [
    {text: 'End balances'}
];

function configureHeaderData (data) {
    var configure = {};
    configure.name = data.name;
    configure.value = data.value;

    configure.width = 700;
    configure.height = 50;

    configure.x = 0;
    configure.y = 0;
    return configure;
}

function getMaxHeight (containerHeight, lengthData) {
    return containerHeight / lengthData;
}

function maxValue (data, ignore) {
    var max = 0;
    var index = -1;
    for (var i=0;i<data.length;i++) {
        if (!isIgnoreData(i, ignore) && max < data[i].value) {
            max = data[i].value;
            index = i;
        }
    }
    return { max: max, index: index };
}

function isIgnoreData (index, ignore) {
    var result = false;
    for (var i=0;i<ignore.length;i++) {
        if(index == ignore[i]) {
            result = true;
            break;
        }
    }
    return result;
}


var mainContainer = d3.select('#container');

var main = mainContainer.append("svg").attr({
    width: 300,
    height: 500
});

var header = main.append("g");
header.selectAll("rect").data(dataHeader).enter().append("rect"). attr({
    x: 0,
    y: 0,
    width: 700,
    height: 50,
    fill: '#649423'
});

header.selectAll('text')
    .data(dataHeader)
    .enter().append('text')
    .attr({
        x: 10,
        y: 20,
        'text-anchor': 'start'
    })
    .text(function(data) {
        return data.name[0].text;
    });


var leftElement = main.append("g");

leftElement.selectAll("rect")
    .data(dataLeftElement)
    .enter().append("rect"). attr({
        height: heightColumn,
        width: 300 - widthColumn - 10,
        x: 0,
        y: 55,
        fill: '#649423',
        stroke: '#000',
        'stroke-width': '0.5px'
    });

var dataBody = configureBodyData(dataContaiter,heightColumn);
var rightElement = main.append("g");
rightElement.selectAll("rect")
    .data(dataBody)
    .enter().append("rect"). attr({
        height: function (data) {
            return data.heigth;
        },
        width: widthColumn,
        x: 100,
        y: function (data) {
            return data.positionY;
        },
        fill: function (data) {
            return data.backgroundColor
        },
        stroke: '#000',
        'stroke-width': '0.5px'
    });
rightElement.selectAll('text')
    .data(dataBody)
    .enter().append("text")
    .attr({
        x: widthColumn - 10 + 100,
        y: function (data) {
            return data.positionY + 20;
        },
        'text-anchor': 'end'
    })
    .text(function(data) {
        return data.text;
    });

