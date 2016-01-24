costAnalysisMapData = {
    container: 'container',
    height: 900,
    columnWidth: 300,
    body: [
        {
            minHeight: 60,
            header: {
                name: 'Net Worth:',
                backgroundColor: '#649423',
                textColor: '#FFFFFF'
            },
            body: [
                {
                    name: 'End Balances for Fiscal Year',
                    boxes: [
                        {
                            text: 'Buildings and Land',
                            value: 104,
                            backgroundColor: '#789440',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Structures',
                            value: 90,
                            backgroundColor: '#789440',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Capital Equipment',
                            value: 45,
                            backgroundColor: '#789440',
                            textColor: '#FFFFFF'
                        }
                    ]
                },
                {
                    name: 'Projections for This Fiscal Year',
                    boxes: [
                        {
                            text: 'Outlays for Capital Projects',
                            value: 120,
                            backgroundColor: '#c4d6a0',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Appreciation',
                            value: 80,
                            backgroundColor: '#c4d6a0',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Depreciation',
                            value: 50,
                            backgroundColor: '#c4d6a0',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Balance Sheet Liability',
                            value: 80,
                            backgroundColor: '#ebf1df',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Off-Balance Sheet Liability',
                            value: 50,
                            backgroundColor: '#ffffcc',
                            textColor: '#FFFFFF'
                        }
                    ]
                }
            ]
        },
        {
            minHeight: 60,
            header: {
                name: 'Expense:',
                backgroundColor: '#31859b',
                textColor: '#FFFFFF'
            },
            body: [
                {
                    name: 'Operating Expenses',
                    boxes: [
                        {
                            text: 'Indirect Services',
                            value: 104,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Maintenance',
                            value: 90,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Custodial',
                            value: 45,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Security',
                            value: 45,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Other',
                            value: 45,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Energy & Utilities',
                            value: 45,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Property Taxes',
                            value: 45,
                            backgroundColor: '#92cddc',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Rent Expenses',
                            value: 45,
                            backgroundColor: '#92cddc',
                            textColor: '#FFFFFF'
                        }

                    ]
                },
                {
                    name: 'Income',
                    boxes: [
                        {
                            text: 'Income',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#FFFFFF'
                        }
                    ]
                },
                {
                    name: 'Additional Expenses',
                    boxes: [
                        {
                            text: 'Fit out Depreciation',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Other PP & Depreciation',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Mortgage Interest',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#FFFFFF'
                        }
                    ]
                },
                {
                    name: 'Analysis',
                    boxes: [
                        {
                            text: 'Internal Cost of Capital',
                            value: 104,
                            backgroundColor: '#5880b3',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Mortgage Principal Payments',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#FFFFFF'
                        }
                    ]
                },
                {
                    name: 'Cash',
                    boxes: [
                        {
                            text: 'Mortgage Principal Payments',
                            value: 104,
                            backgroundColor: '#8db1e2',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Outlays for Capital Projects',
                            value: 104,
                            backgroundColor: '#8db1e2',
                            textColor: '#FFFFFF'
                        }
                    ]
                }
            ]
        }
    ]
} ;

costAnalysisMap = {
    ui: function (config) {
        this.columnsWidth  = this._configureHeader.width = config.columnWidth;
        this.columnsHeight = config.height;
        var mainContainer = this._createMainContainer(config);
        this._createColumns(mainContainer, config.body);
    },
    _createMainContainer: function (config) {
        return d3.select('#' + config.container)
            .append('svg').attr({
                width: 700,//config.width,
                height: config.height
            })
    },
    _createColumns: function (mainContainer, columnsList) {
        for(var index = 0; index < columnsList.length; index++) {
            var columnContainer = this._createGroupContainer(mainContainer);
            this._createColumn(index, columnContainer, columnsList[index]);
        }
    },
    _createColumn: function (index, mainContainer, configColumn) {
        var startPositionY = this._configureHeader.y;
        var startPositionX = (this.columnsWidth + 20) * index;

        this._createColumnHeader (mainContainer, configColumn.header,
            {
                x: startPositionX,
                y: startPositionY
            }
        );


        startPositionY = this._configureHeader.height + this._configureColumn.gapHeaderColumnAndGroups;
        //startPositionX = (this.columnsWidth + 20) * index;

        this._createGroups(
            {
                x: startPositionX,
                y: startPositionY,
                container: mainContainer
            },
            configColumn
        );
    },
    _createColumnHeader: function (columnContainer, configHeader, position) {
        var data = [];
        data[0] = configHeader;
        var headerContainer = this._createGroupContainer(columnContainer);
        this._addContainer('rect', headerContainer, data, {
            x: position.x,
            y: position.y,
            width: this._configureHeader.width,
            height: this._configureHeader.height,
            fill: function (data) {
                return data.backgroundColor;
            }
        });
        this._addContainerText(headerContainer, data, {
            x: position.x + this._configureHeader.positionXText,
            y: position.y + this._configureHeader.positionYText,
            'text-anchor': 'start',
            fill: function (data) {
                return data.textColor;
            }
        });
    },
    _createGroups: function (configGroup, configColumn) {
        var height = this.columnsHeight - this._configureHeader.height - this._configureColumn.gapHeaderColumnAndGroups;
        var countGroup = configColumn.body.length;
        var heightContainer = (height - this._configureColumn.gapSectionsColumn * (countGroup - 1))  / countGroup;

        var startPositionX = configGroup.x;
        var startPositionY = configGroup.y;
        var bodyContainer = this._createGroupContainer(configGroup.container);

        for (var index = 0; index < countGroup; index++) {
            this._createGroupHeader(
                index,
                heightContainer,
                bodyContainer,
                configColumn,
                {
                    x: startPositionX,
                    y: startPositionY
                }
            );

            var data = this._getContainersHeight(configColumn.body[index].boxes, heightContainer);
            data = this._getContainersPosition(data,startPositionY);
            var element = this._createGroupContainer(bodyContainer);
            var width =  this.columnsWidth - this.columnsWidth * 0.15 - 5;
            startPositionX += this.columnsWidth * 0.15 + 5;


            element.selectAll("rect")
                .data(data)
                .enter().append("rect"). attr({
                    height: function (data) {
                        return data.heigth;
                    },
                    width: width,
                    x: startPositionX,
                    y: function (data) {
                        return data.positionY;
                    },
                    fill: function (data) {
                        return data.backgroundColor
                    },
                    stroke: '#000',
                    'stroke-width': '0.5px'
                });

            startPositionY += heightContainer + this._configureColumn.gapSectionsColumn;
            startPositionX = configGroup.x;
        }
    },
    _createGroupHeader: function (index, heightContainer, container, configColumn, position) {
        var headerContainer = this._createGroupContainer(container);
        var data = [];
        data[0] = configColumn.body[index];
        this._addContainer('rect', headerContainer, data, {
            x: position.x,
            y: position.y,
            width: this.columnsWidth * 0.15,
            height: heightContainer,
            fill: configColumn.header.backgroundColor,
            stroke: '#000',
            'stroke-width': '0.5px'
        });
    },
    _createGroup: function () {

    },
    _createGroupContainer: function (container) {
        return container.append('g');
    },
    _addContainer: function (type, mainContainer, data, config) {
        mainContainer.selectAll(type)
            .data(data).enter()
            .append(type).attr(config);
    },
    _addContainerText: function (mainContainer, data, config) {
        mainContainer.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr(config)
            .text(function(data) {
                return data.name;
            }
        );
    },
    _getContainersHeight: function (data, containerHeight) {
        var maxElementHeight = this.tools._getMaxHeight(containerHeight, data.length);
        var ignoreList = [];
        var dataMaxValue = 0;
        var rest = 0;
        for (var index = 0; index < data.length; index++) {
            var currentMaxValue = this.tools._getMax(data, ignoreList);
            if (index == 0) {
                dataMaxValue = currentMaxValue.max;
            }
            ignoreList[ignoreList.length] = currentMaxValue.index;

            var currentHeight = Math.floor((currentMaxValue.max / dataMaxValue) * maxElementHeight);
            rest += maxElementHeight - currentHeight;
            data[index].heigth = currentHeight;
        }
        rest /= data.length;

        for (var index = 0; index < data.length; index++) {
            data[index].heigth += rest;
        }
        return data;
    },
    _getContainersPosition: function (configure, startPosition) {
        for(var index = 0; index < configure.length; index++) {
            var positionY = startPosition;
            for (var j =0; j < index; j++) {
                positionY += configure[j].heigth;
            }
            configure[index].positionY = positionY;
        }
        return configure;
    },
    _configureHeader: {
        height: 50,
        y: 0,
        positionXText: 10,
        positionYText: 20
    },
    _configureColumn: {
        gapSectionsColumn: 5,
        gapHeaderColumnAndGroups: 10,
        gapHeaderGroupAndGroup: 10
    }

};
costAnalysisMap.tools = {
    _getMax: function (data, ignore) {
        var max = 0;
        var index = -1;
        for (var i=0;i<data.length;i++) {
            if (!this._isIgnoreData(i, ignore) && max < data[i].value) {
                max = data[i].value;
                index = i;
            }
        }
        return { max: max, index: index };
    },
    _isIgnoreData: function (index, ignore) {
        var result = false;
        for (var i=0;i<ignore.length;i++) {
            if(index == ignore[i]) {
                result = true;
                break;
            }
        }
        return result;
    },
    _getMaxHeight: function (containerHeight, lengthData) {
        return containerHeight / lengthData;
    }
};


costAnalysisMap.ui(costAnalysisMapData);

