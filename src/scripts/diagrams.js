costAnalysisMapData = {
    container: 'container',
    height: 960,
    columnWidth: 400,
    body: [
        {
            type: 'infrastructure',
            minHeight: 60,
            header: {
                name: 'Net Worth:',
                backgroundColor: '#649423',
                textColor: '#FFFFFF',
                value: '320',
                additionalInfo: 'actual and projected for this fiscal year'
            },
            body: [
                {
                    name: 'End Balances for Fiscal Year',
                    boxes: [
                        {
                            text: 'Buildings and Land',
                            value: 104,
                            info: 29,
                            backgroundColor: '#789440',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Structures',
                            value: 90,
                            info: 12,
                            backgroundColor: '#789440',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Capital Equipment',
                            value: 45,
                            info: 4,
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
                            info: 22,
                            backgroundColor: '#c4d6a0',
                            textColor: '#133100'
                        },
                        {
                            text: 'Appreciation',
                            value: 80,
                            info: 24,
                            backgroundColor: '#c4d6a0',
                            textColor: '#133100'
                        },
                        {
                            text: 'Depreciation',
                            value: 50,
                            info: 12,
                            backgroundColor: '#c4d6a0',
                            textColor: '#133100'
                        },
                        {
                            text: 'Balance Sheet Liability',
                            value: 80,
                            info: 34,
                            backgroundColor: '#ebf1df',
                            textColor: '#133100'
                        },
                        {
                            text: 'Off-Balance Sheet Liability',
                            value: 50,
                            info: 4,
                            backgroundColor: '#ffffcc',
                            textColor: '#133100'
                        }
                    ]
                }
            ]
        },
        {
            type: 'expenses',
            minHeight: 60,
            header: {
                name: 'Expense:',
                backgroundColor: '#31859b',
                textColor: '#FFFFFF',
                value: '142',
                additionalInfo: 'actual and projected for this fiscal year'
            },
            body: [
                {
                    name: 'Operating Expenses',
                    value: '107',
                    additionalInfo: 'on P&L',
                    boxes: [
                        {
                            text: 'Indirect Services',
                            value: 104,
                            info: 29,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Maintenance',
                            value: 90,
                            info: 12,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Custodial',
                            value: 45,
                            info: 4,
                            backgroundColor: '#31859b',
                            textColor: '#FFFFFF'
                        },
                        {
                            text: 'Security',
                            value: 45,
                            info: 22,
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
                            textColor: '#133100'
                        },
                        {
                            text: 'Rent Expenses',
                            value: 100,
                            backgroundColor: '#92cddc',
                            textColor: '#133100'
                        }

                    ]
                },
                {
                    name: 'Income',
                    value: '65',
                    additionalInfo: 'on P&L',
                    boxes: [
                        {
                            text: 'Income',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#133100'
                        }
                    ]
                },
                {
                    name: 'Additional Expenses',
                    value: '80',
                    additionalInfo: 'on P&L',
                    boxes: [
                        {
                            text: 'Fit out Depreciation',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#133100'
                        },
                        {
                            text: 'Other PP & Depreciation',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#133100'
                        },
                        {
                            text: 'Mortgage Interest',
                            value: 104,
                            backgroundColor: '#b7dde8',
                            textColor: '#133100'
                        }
                    ]
                },
                {
                    name: 'Analysis',
                    value: '60',
                    additionalInfo: 'on P&L',
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
                            textColor: '#133100'
                        }
                    ]
                },
                {
                    name: 'Cash',
                    value: '64',
                    additionalInfo: 'on P&L',
                    boxes: [
                        {
                            text: 'Mortgage Principal Payments',
                            value: 104,
                            backgroundColor: '#8db1e2',
                            textColor: '#133100'
                        },
                        {
                            text: 'Outlays for Capital Projects',
                            value: 104,
                            backgroundColor: '#8db1e2',
                            textColor: '#133100'
                        }
                    ]
                }
            ]
        }
    ]
} ;

costAnalysisMap = {
    ui: function (config) {
        var mainContainer = this._createMainContainer(config);
        this.columns.create(mainContainer, config);
    },
    _createMainContainer: function (config) {
        var width = config.body.length * (config.columnWidth + this.configureGap.gapColumns);
        return d3.select('#' + config.container)
            .append('svg').attr({
                width: width,
                height: config.height
            })
    },
    configureGap: {
        gapColumns: 10,
        gapSectionsColumn: 5,
        gapColumnHeaderAndGroups: 10,
        gapGroupHeaderAndGroup: 10
    }

};
costAnalysisMap.tools = {
    createGroupContainer: function (container, classContainer) {
        return container.append('g').attr({
            class: classContainer
        });
    },
    addContainer: function (type, mainContainer, data, config) {
        mainContainer.selectAll(type)
            .data(data).enter()
            .append(type).attr(config);
    },
    addText: function (mainContainer, data, config, renderText) {
        mainContainer.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr(config)
            .text(renderText);
    },
    getMax: function (data, ignore) {
        var max = 0;
        var index = -1;
        for (var i=0;i<data.length;i++) {
            if (!this.isIgnoreData(i, ignore) && max < data[i].value) {
                max = data[i].value;
                index = i;
            }
        }
        return { max: max, index: index };
    },
    isIgnoreData: function (index, ignore) {
        var result = false;
        for (var i=0;i<ignore.length;i++) {
            if(index == ignore[i]) {
                result = true;
                break;
            }
        }
        return result;
    },
    getMaxHeight: function (containerHeight, lengthData) {
        return containerHeight / lengthData;
    },
    clone: function (object) {
        return Object.assign({}, object);
    }
};
costAnalysisMap.columns = {
    create: function (mainContainer, config) {
        this.columnWidth  = this._configureHeader.width = config.columnWidth;
        this.columnsHeight = config.height;
        var columnsList = config.body;
        for(var index = 0; index < columnsList.length; index++) {
            var columnContainer = costAnalysisMap.tools.createGroupContainer(mainContainer, 'column');
            this._createColumn(index, columnContainer, columnsList[index]);
        }
    },
    _createColumn: function (index, mainContainer, configColumn) {
        var startPosition = this._calculateStartPosition(index);
        this._createColumnHeader (mainContainer, configColumn.header, startPosition);
        startPosition.y = this._configureHeader.height + costAnalysisMap.configureGap.gapColumnHeaderAndGroups;

        switch (configColumn.type) {
            case 'infrastructure':
                this.groupInfrastructure.create(mainContainer, configColumn, startPosition, this._calculateGroupsSize());
                break;
            case 'expenses':
                this.groupExpenses.create(mainContainer, configColumn, startPosition, this._calculateGroupsSize());
                break;
            case '':
                break;
        }
    },
    _createColumnHeader: function (columnContainer, configHeader, position) {
        var data = [];
        data[0] = configHeader;
        var headerContainer = costAnalysisMap.tools.createGroupContainer(columnContainer, 'headerColumn');
        this._renderTitleHeader(headerContainer, data, position);
        this._renderValueHeader(headerContainer, data, position);
        this._renderAdditionalInfoHeader(headerContainer, data, position);
    },
    _renderTitleHeader: function (mainContainer, data, position) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'titleHeader');
        costAnalysisMap.tools.addContainer('rect', container, data, {
            x: position.x,
            y: position.y,
            width: this._configureHeader.width,
            height: this._configureHeader.height,
            fill: function (data) {
                return data.backgroundColor;
            }
        });
        costAnalysisMap.tools.addText(container, data,
            {
                x: position.x + this._configureHeader.positionXTitleText,
                y: position.y + this._configureHeader.positionYTitleText,
                'text-anchor': 'start',
                fill: function (data) {
                    return data.textColor;
                }
            },
            function (data) {
                return data.name;
            }
        );
    },
    _renderValueHeader: function (mainContainer, data, position) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'valueHeader');
        costAnalysisMap.tools.addText(container, data,
            {
                x: position.x + this._configureHeader.width - this._configureHeader.positionXTitleText,
                y: position.y + this._configureHeader.positionYValueText,
                'text-anchor': 'end',
                fill: function (data) {
                    return data.textColor;
                }
            },
            function (data) {
                return '$ ' + data.value + 'M';
            }
        );
    },
    _renderAdditionalInfoHeader: function (mainContainer, data, position) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'additionalInfoHeader');
        costAnalysisMap.tools.addText(container, data,
            {
                x: position.x + this._configureHeader.positionXTitleText,
                y: position.y +  this._configureHeader.height - this._configureHeader.positionYAdditionalInfoText,
                'text-anchor': 'start',
                fill: function (data) {
                    return data.textColor;
                }
            },
            function (data) {
                return '(' + data.additionalInfo + ')';
            }
        );
    },
    _calculateStartPosition: function (index) {
        return {
            x: (this.columnWidth + costAnalysisMap.configureGap.gapColumns) * index,
            y: this._configureHeader.y
        };
    },
    _calculateGroupsSize: function () {
        return {
            width: this.columnWidth,
            height: this.columnsHeight - this._configureHeader.height - costAnalysisMap.configureGap.gapColumnHeaderAndGroups
        };
    },
    _configureHeader: {
        height: 50,
        y: 0,
        positionXTitleText: 10,
        positionYTitleText: 20,
        positionYValueText: 25,
        positionYAdditionalInfoText: 5
    }
};
costAnalysisMap.columns.groupInfrastructure = {
    create: function (columnContainer, configColumn, position, size) {
        this.configureGroup.minHeight = configColumn.minHeight;
        var data = this._calculateSizeGroups(configColumn.body, size);
        data = this._calculatePositionGroup(configColumn.body, position);
        var groupsContainer = costAnalysisMap.tools.createGroupContainer(columnContainer, 'columnGroups');
        for (var index = 0; index < data.length; index++) {
            var container = costAnalysisMap.tools.createGroupContainer(groupsContainer, 'group');
            var headerColor = {
                backgroundColor: configColumn.header.backgroundColor,
                textColor: configColumn.header.textColor
            };
            this.renderGroupHeader(container, data[index], headerColor);
            this.renderGroup(container, data[index]);
        }
    },
    _calculateSizeGroups: function (data, size) {
        var count = data.length;
        var heightContainer = (size.height - costAnalysisMap.configureGap.gapSectionsColumn * (count - 1));
        var maxElementHeight = costAnalysisMap.tools.getMaxHeight(heightContainer, count);
        var ignoreList = [];
        var dataMaxValue = 0;
        var rest = 0;
        var countOnly = 0;
        for (var index = 0; index < count; index++) {
            var currentMaxValue = this._getMaxCountGroup(data, ignoreList);
            if (index == 0) {
                dataMaxValue = currentMaxValue.max;
            }
            ignoreList[ignoreList.length] = currentMaxValue.index;
            var currentHeight = Math.floor((currentMaxValue.max / dataMaxValue) * maxElementHeight);

            if (currentMaxValue.max == 1) {
                currentHeight = this.configureGroup.minHeight;
                countOnly++;
            }
            rest += maxElementHeight - currentHeight;
            data[currentMaxValue.index].heigth = currentHeight;
            data[currentMaxValue.index].width = size.width * this.configureGroup.proportionGroupHeader;
        }
        rest /= (count - countOnly);

        for (var index = 0; index < data.length; index++) {
            if(data[index].heigth !=  this.configureGroup.minHeight) {
                data[index].heigth += rest;
            }

        }
        return data;
    },
    _calculatePositionGroup: function (data, position) {
        for(var index = 0; index < data.length; index++) {
            var positionY = position.y;
            for (var j = 0; j < index; j++) {
                positionY += data[j].heigth + costAnalysisMap.configureGap.gapSectionsColumn;
            }
            data[index].positionY = positionY;
            data[index].positionX = position.x;
        }
        return data;
    },
    _getMaxCountGroup: function (data, ignore) {
        var max = 0;
        var index = -1;
        for (var i = 0; i < data.length; i++) {
            if (!costAnalysisMap.tools.isIgnoreData(i, ignore) && max < data[i].boxes.length) {
                max = data[i].boxes.length;
                index = i;
            }
        }
        return { max: max, index: index };
    },
    renderGroupHeader: function (mainContainer, data, headerColor) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupHeader');
        var groupData = [];
        groupData[0] = data;
        costAnalysisMap.tools.addContainer('rect', container, groupData, {
            x: data.positionX,
            y: data.positionY,
            width: data.width,
            height: data.heigth,
            fill: headerColor.backgroundColor,
            stroke: '#000',
            'stroke-width': '0.5px'
        });
        var textPositionX = data.positionX + (data.width/2) + 5;
        var textPositionY = data.positionY + data.heigth /2;
        costAnalysisMap.tools.addText(container, groupData,
            {
                x: textPositionX,
                y: textPositionY,
                'text-anchor': 'middle',
                fill: headerColor.textColor,
                //'writing-mode': 'tb-rl'
                'transform': 'rotate(-90 ' + textPositionX +' '+ textPositionY +')'
            },
            function (data) {
                return data.name;
            }
        );
    },
    renderGroup: function (mainContainer, data) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupBody');
        var boxes = this._calculateSizeElements(data.boxes, {
                height: data.heigth,
                width: (data.width / this.configureGroup.proportionGroupHeader) - data.width - costAnalysisMap.configureGap.gapGroupHeaderAndGroup
            }
        ) ;
        boxes = this._calculatePositionElements(data.boxes, {
                y: data.positionY,
                x: data.positionX + data.width + costAnalysisMap.configureGap.gapGroupHeaderAndGroup
        });
        for (var index = 0; index < boxes.length; index++) {
            this._renderElement(container, boxes[index]);
        }
    },
    _calculateSizeElements: function (data, size) {
        var height = size.height;
        var maxElementHeight = costAnalysisMap.tools.getMaxHeight(height, data.length);
        var ignoreList = [];
        var dataMaxValue = 0;
        var rest = 0;
        for (var index = 0; index < data.length; index++) {
            var currentMaxValue = costAnalysisMap.tools.getMax(data, ignoreList);
            if (index == 0) {
                dataMaxValue = currentMaxValue.max;
            }
            ignoreList[ignoreList.length] = currentMaxValue.index;

            var currentHeight = Math.floor((currentMaxValue.max / dataMaxValue) * maxElementHeight);
            rest += maxElementHeight - currentHeight;
            data[currentMaxValue.index].heigth = currentHeight;
            data[currentMaxValue.index].width = size.width;
        }
        rest /= data.length;

        for (var index = 0; index < data.length; index++) {
            data[index].heigth += rest;
        }
        return data;
    },
    _calculatePositionElements: function (data, position) {
        for(var index = 0; index < data.length; index++) {
            var positionY = position.y;
            for (var j = 0; j < index; j++) {
                positionY += data[j].heigth;
            }
            data[index].positionY = positionY;
            data[index].positionX = position.x;
        }
        return data;
    },
    _renderElement: function (mainContainer, data) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupElement');
        var dataElement = [];
        dataElement[0] = data;
        this._renderBodyElement(container, dataElement,
            {
                x: data.positionX,
                y: data.positionY
            },
            {
                width: data.width,
                height: data.heigth
            }
        )

    },
    _renderBodyElement: function (mainContainer, data, position, size) {
        costAnalysisMap.tools.addContainer('rect', mainContainer, data, {
            x: position.x,
            y: position.y,
            width: size.width,
            height: size.height,
            fill: function (data) {
                return data.backgroundColor;
            },
            stroke: '#000',
            'stroke-width': '0.5px'
        });
        var textPositionX = position.x + (size.width) - 10;
        var textPositionY = position.y + 20;
        costAnalysisMap.tools.addText(mainContainer, data,
            {
                x: textPositionX,
                y: textPositionY,
                'text-anchor': 'end',
                fill: function (data) {
                    return data.textColor;
                }
            },
            function (data) {
                return data.text;
            }
        );
        if (size.height > 40) {
            this._renderValueBodyElement(mainContainer, data, {
                x: textPositionX,
                y: textPositionY + 20
            });
        }
        if (size.height > 55) {
            this._renderInfoBodyElement(mainContainer, data, position);
        }

    },
    _renderValueBodyElement: function (mainContainer, data, position) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupElementValue');
        costAnalysisMap.tools.addText(container, data,
            {
                x: position.x,
                y: position.y,
                'text-anchor': 'end',
                fill: function (data) {
                    return data.textColor;
                }
            },
            function (data) {
                if (data.value) {
                    return '$' + data.value + 'M';
                } else {
                    return '';
                }

            }
        );
    },
    _renderInfoBodyElement: function (mainContainer, data, position) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupElementInfo');
        container.selectAll('circle')
            .data(data).enter()
            .append('circle')
            .filter(function(data) {
                if (data.info) {
                    return true;
                }
                return false;
            })
            .attr({
                cx: position.x + 30,
                cy: position.y + 30,
                r: 25,
                fill: function (data) {
                    return '#EEFF92';
                },
                stroke: '#000',
                'stroke-width': '0.5px'
            });
        container.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .filter(function(data) {
                if (data.info) {
                    return true;
                }
                return false;
            })
            .attr({
                x: position.x + 33,
                y: position.y + 35,
                'text-anchor': 'middle',
                fill: function (data) {
                    return 'black';
                }
            })
            .text(function (data) {
                return data.info + '%';
            });

    },
    configureGroup: {
        proportionGroupHeader: 0.15
    }
};
costAnalysisMap.columns.groupExpenses = {
    create: costAnalysisMap.columns.groupInfrastructure.create,
    _calculateSizeGroups: costAnalysisMap.columns.groupInfrastructure._calculateSizeGroups,
    _calculatePositionGroup: costAnalysisMap.columns.groupInfrastructure._calculatePositionGroup,
    _getMaxCountGroup: costAnalysisMap.columns.groupInfrastructure._getMaxCountGroup,
    renderGroupHeader: function (mainContainer, data, headerColor) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupHeader');
        var groupData = [];
        var groupWidth = (data.width / this.configureGroup.proportionGroupHeader) - data.width;
        groupData[0] = data;
        this._renderTitleHeader(container, groupData, headerColor, groupWidth);
        if (data.value) {
            this._renderValueHeader(container, groupData, headerColor, groupWidth);
        }
        if (data.additionalInfo) {
            this._renderAdditionalInfoHeader(container, groupData, headerColor, groupWidth);
        }
    },
    _renderTitleHeader: function (mainContainer, groupData, headerColor, groupWidth) {
        var data = groupData[0];
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupHeaderTitle');
        costAnalysisMap.tools.addContainer('rect', container, groupData, {
            x: groupWidth + data.positionX,
            y: data.positionY,
            width: data.width,
            height: data.heigth,
            fill: headerColor.backgroundColor,
            stroke: '#000',
            'stroke-width': '0.5px'
        });
        var textPositionX = groupWidth + data.positionX + (data.width/2) - 10;
        var textPositionY = data.positionY + data.heigth /2;
        costAnalysisMap.tools.addText(container, groupData,
            {
                x: textPositionX,
                y: textPositionY,
                'text-anchor': 'middle',
                fill: headerColor.textColor,
                'transform': 'rotate(-90 ' + textPositionX +' '+ textPositionY +')'
            },
            function (data) {
                return data.name;
            }
        );
    },
    _renderValueHeader: function (mainContainer, groupData, headerColor, groupWidth) {
        var data = groupData[0];
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupHeaderValue');
        var textPositionX = groupWidth + data.positionX + (data.width/2) + 10;
        var textPositionY = data.positionY + data.heigth /2;
        costAnalysisMap.tools.addText(container, groupData,
            {
                x: textPositionX,
                y: textPositionY,
                'text-anchor': 'middle',
                fill: headerColor.textColor,
                'transform': 'rotate(-90 ' + textPositionX +' '+ textPositionY +')'
            },
            function (data) {
                return '$' + data.value + 'M';
            }
        );
    },
    _renderAdditionalInfoHeader: function (mainContainer, groupData, headerColor, groupWidth) {
        var data = groupData[0];
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupHeaderAdditionalInfo');
        var textPositionX = groupWidth + data.positionX + (data.width/2) + 23;
        var textPositionY = data.positionY + data.heigth /2;
        costAnalysisMap.tools.addText(container, groupData,
            {
                x: textPositionX,
                y: textPositionY,
                'text-anchor': 'middle',
                fill: headerColor.textColor,
                'transform': 'rotate(-90 ' + textPositionX +' '+ textPositionY +')'
            },
            function (data) {
                return '(' + data.additionalInfo + ')';
            }
        );
    },
    renderGroup: function (mainContainer, data) {
        var container = costAnalysisMap.tools.createGroupContainer(mainContainer, 'groupBody');
        var boxes = this._calculateSizeElements(data.boxes, {
                height: data.heigth,
                width: (data.width / this.configureGroup.proportionGroupHeader) - data.width
            }
        ) ;
        boxes = this._calculatePositionElements(data.boxes, {
            y: data.positionY,
            x: data.positionX
        });
        for (var index = 0; index < boxes.length; index++) {
            this._renderElement(container, boxes[index]);
        }
    },
    _calculateSizeElements: costAnalysisMap.columns.groupInfrastructure._calculateSizeElements,
    _calculatePositionElements: costAnalysisMap.columns.groupInfrastructure._calculatePositionElements,
    _renderElement: costAnalysisMap.columns.groupInfrastructure._renderElement,
    _renderBodyElement: costAnalysisMap.columns.groupInfrastructure._renderBodyElement,
    _renderValueBodyElement: costAnalysisMap.columns.groupInfrastructure._renderValueBodyElement,
    _renderInfoBodyElement: costAnalysisMap.columns.groupInfrastructure._renderInfoBodyElement,
    configureGroup: {
        proportionGroupHeader: 0.25
    }
};

costAnalysisMap.ui(costAnalysisMapData);

