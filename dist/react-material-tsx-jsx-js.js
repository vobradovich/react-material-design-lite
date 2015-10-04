/// <reference path="../typings/tsd.d.ts" />
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialButton = (function (_React$Component) {
    _inherits(MaterialButton, _React$Component);

    function MaterialButton(props) {
        _classCallCheck(this, MaterialButton);

        _get(Object.getPrototypeOf(MaterialButton.prototype), "constructor", this).call(this, props);
    }

    _createClass(MaterialButton, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-button": true,
                "mdl-js-button": true,
                "mdl-button--raised": this.props.raised,
                "mdl-button--accent": this.props.accent,
                "mdl-button--colored": this.props.colored,
                "mdl-button--fab": this.props.fab,
                "mdl-button--mini-fab": this.props.miniFab,
                "mdl-button--icon": this.props.icon,
                "mdl-js-ripple-effect": this.props.ripple
            });
            return React.createElement("button", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialButton;
})(React.Component);

MaterialButton.propTypes = {
    raised: React.PropTypes.bool,
    accent: React.PropTypes.bool,
    colored: React.PropTypes.bool,
    fab: React.PropTypes.bool,
    miniFab: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    ripple: React.PropTypes.bool
};
MaterialButton.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialCard = (function (_React$Component2) {
    _inherits(MaterialCard, _React$Component2);

    function MaterialCard(props) {
        _classCallCheck(this, MaterialCard);

        _get(Object.getPrototypeOf(MaterialCard.prototype), "constructor", this).call(this, props);
    }

    _createClass(MaterialCard, [{
        key: "render",
        value: function render() {
            var className = React.addons.classSet({
                "mdl-card": true
            });
            className += this.props.shadow > 0 ? " mdl-shadow--" + this.props.shadow + "dp" : "";
            return React.createElement("div", _extends({}, this.props, { className: className }));
        }
    }]);

    return MaterialCard;
})(React.Component);

MaterialCard.propTypes = {
    shadow: React.PropTypes.number
};
MaterialCard.defaultProps = {
    shadow: 2
};

var MaterialCardTitle = (function (_React$Component3) {
    _inherits(MaterialCardTitle, _React$Component3);

    function MaterialCardTitle(props) {
        _classCallCheck(this, MaterialCardTitle);

        _get(Object.getPrototypeOf(MaterialCardTitle.prototype), "constructor", this).call(this, props);
    }

    _createClass(MaterialCardTitle, [{
        key: "render",
        value: function render() {
            var className = React.addons.classSet({
                "mdl-card__title": true,
                "mdl-card--expand": this.props.expand
            });
            return React.createElement("div", _extends({}, this.props, { className: className }));
        }
    }]);

    return MaterialCardTitle;
})(React.Component);

MaterialCardTitle.propTypes = {
    expand: React.PropTypes.bool
};

var MaterialCardTitleText = (function (_React$Component4) {
    _inherits(MaterialCardTitleText, _React$Component4);

    function MaterialCardTitleText() {
        _classCallCheck(this, MaterialCardTitleText);

        _get(Object.getPrototypeOf(MaterialCardTitleText.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialCardTitleText, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h2",
                { className: "mdl-card__title-text" },
                this.props.children
            );
        }
    }]);

    return MaterialCardTitleText;
})(React.Component);

var MaterialCardMedia = (function (_React$Component5) {
    _inherits(MaterialCardMedia, _React$Component5);

    function MaterialCardMedia() {
        _classCallCheck(this, MaterialCardMedia);

        _get(Object.getPrototypeOf(MaterialCardMedia.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialCardMedia, [{
        key: "render",
        value: function render() {
            return React.createElement("div", _extends({}, this.props, { className: "mdl-card__media" }));
        }
    }]);

    return MaterialCardMedia;
})(React.Component);

var MaterialCardSupportingText = (function (_React$Component6) {
    _inherits(MaterialCardSupportingText, _React$Component6);

    function MaterialCardSupportingText() {
        _classCallCheck(this, MaterialCardSupportingText);

        _get(Object.getPrototypeOf(MaterialCardSupportingText.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialCardSupportingText, [{
        key: "render",
        value: function render() {
            return React.createElement("div", _extends({}, this.props, { className: "mdl-card__supporting-text" }));
        }
    }]);

    return MaterialCardSupportingText;
})(React.Component);

var MaterialCardActions = (function (_React$Component7) {
    _inherits(MaterialCardActions, _React$Component7);

    function MaterialCardActions(props) {
        _classCallCheck(this, MaterialCardActions);

        _get(Object.getPrototypeOf(MaterialCardActions.prototype), "constructor", this).call(this, props);
    }

    _createClass(MaterialCardActions, [{
        key: "render",
        value: function render() {
            var className = React.addons.classSet({
                "mdl-card__actions": true,
                "mdl-card--border": this.props.border
            });
            return React.createElement("div", _extends({}, this.props, { className: className }));
        }
    }]);

    return MaterialCardActions;
})(React.Component);

MaterialCardActions.propTypes = {
    border: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./util.tsx" />

var MaterialCheckBox = (function (_React$Component8) {
    _inherits(MaterialCheckBox, _React$Component8);

    function MaterialCheckBox() {
        _classCallCheck(this, MaterialCheckBox);

        _get(Object.getPrototypeOf(MaterialCheckBox.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialCheckBox, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-checkbox": true,
                "mdl-js-checkbox": true,
                "mdl-js-ripple-effect": this.props.ripple,
                "is-disabled": this.props.disabled,
                "is-checked": this.props.checked,
                "is-upgraded": this.props.isUpgraded
            });
            var children = this.props.children;

            var props = _objectWithoutProperties(this.props, ["children"]);
            return React.createElement(
                "label",
                { className: classList, htmlFor: this.props.id },
                React.createElement("input", _extends({}, props, { type: "checkbox", className: "mdl-checkbox__input" })),
                React.createElement(
                    "span",
                    { className: "mdl-checkbox__label" },
                    children
                )
            );
        }
    }]);

    return MaterialCheckBox;
})(React.Component);

MaterialCheckBox.propTypes = {
    id: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialTable = (function (_React$Component9) {
    _inherits(MaterialTable, _React$Component9);

    function MaterialTable() {
        _classCallCheck(this, MaterialTable);

        _get(Object.getPrototypeOf(MaterialTable.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTable, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-data-table": true,
                "mdl-js-data-table": !this.props.isUpgraded,
                "mdl-data-table--selectable": this.props.selectable,
                "is-upgraded": this.props.isUpgraded
            });
            if (this.props.shadow > 0) {
                var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
                classList = React.addons.classSet(classList, shadowClass);
            }
            return React.createElement("table", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTable;
})(React.Component);

MaterialTable.propTypes = {
    selectable: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool,
    shadow: React.PropTypes.number
};
MaterialTable.defaultProps = {
    shadow: 2
};

var MaterialTableColumn = (function (_React$Component10) {
    _inherits(MaterialTableColumn, _React$Component10);

    function MaterialTableColumn() {
        _classCallCheck(this, MaterialTableColumn);

        _get(Object.getPrototypeOf(MaterialTableColumn.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTableColumn, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-data-table__cell--non-numeric": this.props.nonNumeric
            });
            return React.createElement("th", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTableColumn;
})(React.Component);

MaterialTableColumn.propTypes = {
    nonNumeric: React.PropTypes.bool,
    valueRender: React.PropTypes.func
};

var MaterialTableCell = (function (_React$Component11) {
    _inherits(MaterialTableCell, _React$Component11);

    function MaterialTableCell() {
        _classCallCheck(this, MaterialTableCell);

        _get(Object.getPrototypeOf(MaterialTableCell.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTableCell, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-data-table__cell--non-numeric": this.props.nonNumeric
            });
            return React.createElement("td", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTableCell;
})(React.Component);

MaterialTableCell.propTypes = {
    nonNumeric: React.PropTypes.bool
};

var MaterialTableRow = (function (_React$Component12) {
    _inherits(MaterialTableRow, _React$Component12);

    function MaterialTableRow() {
        _classCallCheck(this, MaterialTableRow);

        _get(Object.getPrototypeOf(MaterialTableRow.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTableRow, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "is-selected": this.props.selected
            });
            return React.createElement("tr", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTableRow;
})(React.Component);

MaterialTableRow.propTypes = {
    selected: React.PropTypes.bool
};
// class MaterialDataTable extends React.Component<any, any> {
//     static propTypes = {
//         nonNumeric: React.PropTypes.bool,
// 		keySelector: React.PropTypes.func,
//         rowSelector: React.PropTypes.func
//     }
//
//     render() {
//         var {
//             children,
//             data,
//             rowSelector,
// 			keySelector
//         } = this.props;
// 		data = data || [];
//         rowSelector = rowSelector || ((item, rowIndex) => false);
// 		keySelector = keySelector || ((item, rowIndex) => rowIndex);
//
//         var rows = data.map((item, rowIndex) => {
//             var cells = React.Children.map(children, (column) => {
//                 var {
//                     valueRender
//                 } = column.props;
//                 valueRender = valueRender || ((item, column, rowIndex) => item[column.props.dataField]);
//                
//                 var value = valueRender(item, column, rowIndex);
//                 return (<MaterialTableCell {...column.props}>{value}</MaterialTableCell>);
//             });
// 			return (<MaterialTableRow key={keySelector(item, rowIndex)} selected={rowSelector(item, rowIndex)}>{cells}</MaterialTableRow>);
//         });
//
//         return (
//             <MaterialTable {...this.props}>
//                 <thead>
//                     <tr>
//                         {children}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </MaterialTable>
//         );
//     }
// }

/// <reference path="../typings/tsd.d.ts" />

var MaterialGrid = (function (_React$Component13) {
    _inherits(MaterialGrid, _React$Component13);

    function MaterialGrid() {
        _classCallCheck(this, MaterialGrid);

        _get(Object.getPrototypeOf(MaterialGrid.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialGrid, [{
        key: "render",
        value: function render() {
            return React.createElement("div", _extends({}, this.props, { className: "mdl-grid" }));
        }
    }]);

    return MaterialGrid;
})(React.Component);

var MaterialGridCell = (function (_React$Component14) {
    _inherits(MaterialGridCell, _React$Component14);

    function MaterialGridCell() {
        _classCallCheck(this, MaterialGridCell);

        _get(Object.getPrototypeOf(MaterialGridCell.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialGridCell, [{
        key: "render",
        value: function render() {
            var cellClass = "mdl-cell--" + this.props.col + "-col";
            var classList = React.addons.classSet({
                "mdl-cell": true,
                "mdl-cell--top": this.props.align === "top",
                "mdl-cell--middle": this.props.align === "middle",
                "mdl-cell--bottom": this.props.align === "bottom"
            });
            classList = React.addons.classSet(classList, cellClass);
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialGridCell;
})(React.Component);

MaterialGridCell.propTypes = {
    col: React.PropTypes.number.isRequired,
    align: React.PropTypes.oneOf(["top", "middle", "bottom"])
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialIconToggle = (function (_React$Component15) {
    _inherits(MaterialIconToggle, _React$Component15);

    function MaterialIconToggle() {
        _classCallCheck(this, MaterialIconToggle);

        _get(Object.getPrototypeOf(MaterialIconToggle.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialIconToggle, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-icon-toggle": true,
                "mdl-js-icon-toggle": true,
                "mdl-js-ripple-effect": this.props.ripple,
                "is-disabled": this.props.disabled,
                "is-checked": this.props.checked,
                "is-upgraded": this.props.isUpgraded
            });
            var children = this.props.children;

            var props = _objectWithoutProperties(this.props, ["children"]);
            return React.createElement(
                "label",
                { className: classList, htmlFor: this.props.id },
                React.createElement("input", _extends({}, props, { type: "checkbox", className: "mdl-icon-toggle__input" })),
                React.createElement(
                    "i",
                    { className: "mdl-icon-toggle__label material-icons" },
                    children
                )
            );
        }
    }]);

    return MaterialIconToggle;
})(React.Component);

MaterialIconToggle.propTypes = {
    id: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialMenu = (function (_React$Component16) {
    _inherits(MaterialMenu, _React$Component16);

    function MaterialMenu() {
        _classCallCheck(this, MaterialMenu);

        _get(Object.getPrototypeOf(MaterialMenu.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialMenu, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-menu": true,
                "mdl-js-menu": true,
                "mdl-js-ripple-effect": this.props.ripple,
                "mdl-menu--top-left": this.props.align === "top-left",
                "mdl-menu--top-rigth": this.props.align === "top-rigth",
                "mdl-menu--bottom-left": this.props.align === "bottom-left",
                "mdl-menu--bottom-rigth": this.props.align === "bottom-rigth"
            });
            return React.createElement("ul", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialMenu;
})(React.Component);

MaterialMenu.propTypes = {
    htmlFor: React.PropTypes.string.isRequired,
    ripple: React.PropTypes.bool,
    align: React.PropTypes.oneOf(["top-left", "top-rigth", "bottom-left", "bottom-rigth"])
};

var MaterialMenuItem = (function (_React$Component17) {
    _inherits(MaterialMenuItem, _React$Component17);

    function MaterialMenuItem() {
        _classCallCheck(this, MaterialMenuItem);

        _get(Object.getPrototypeOf(MaterialMenuItem.prototype), "constructor", this).apply(this, arguments);
    }

    /// <reference path="../typings/tsd.d.ts" />

    _createClass(MaterialMenuItem, [{
        key: "render",
        value: function render() {
            return React.createElement("li", _extends({}, this.props, { className: "mdl-menu__item" }));
        }
    }]);

    return MaterialMenuItem;
})(React.Component);

var MaterialProgress = (function (_React$Component18) {
    _inherits(MaterialProgress, _React$Component18);

    function MaterialProgress() {
        _classCallCheck(this, MaterialProgress);

        _get(Object.getPrototypeOf(MaterialProgress.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialProgress, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-progress": true,
                "mdl-js-progress": true,
                "mdl-progress__indeterminate": this.props.indeterminate,
                "is-upgraded": this.props.isUpgraded
            });
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialProgress;
})(React.Component);

MaterialProgress.propTypes = {
    indeterminate: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};
MaterialProgress.defaultProps = {
    indeterminate: false
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialRadio = (function (_React$Component19) {
    _inherits(MaterialRadio, _React$Component19);

    function MaterialRadio() {
        _classCallCheck(this, MaterialRadio);

        _get(Object.getPrototypeOf(MaterialRadio.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialRadio, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-radio": true,
                "mdl-js-radio": true,
                "mdl-js-ripple-effect": this.props.ripple,
                "is-disabled": this.props.disabled,
                "is-checked": this.props.checked,
                "is-upgraded": this.props.isUpgraded
            });
            var children = this.props.children;

            var props = _objectWithoutProperties(this.props, ["children"]);
            return React.createElement(
                "label",
                { className: classList, htmlFor: this.props.id },
                React.createElement("input", _extends({}, props, { type: "radio", className: "mdl-radio__button" })),
                React.createElement(
                    "span",
                    { className: "mdl-radio__label" },
                    children
                )
            );
        }
    }]);

    return MaterialRadio;
})(React.Component);

MaterialRadio.propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialSpinner = (function (_React$Component20) {
    _inherits(MaterialSpinner, _React$Component20);

    function MaterialSpinner() {
        _classCallCheck(this, MaterialSpinner);

        _get(Object.getPrototypeOf(MaterialSpinner.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialSpinner, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-spinner": true,
                "mdl-js-spinner": true,
                "is-active": this.props.isActive,
                "is-upgraded": this.props.isUpgraded,
                "mdl-spinner--single-color": this.props.singleColor
            });
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialSpinner;
})(React.Component);

MaterialSpinner.propTypes = {
    isActive: React.PropTypes.bool,
    singleColor: React.PropTypes.bool
};
MaterialSpinner.defaultProps = {
    isActive: true
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialSwitch = (function (_React$Component21) {
    _inherits(MaterialSwitch, _React$Component21);

    function MaterialSwitch() {
        _classCallCheck(this, MaterialSwitch);

        _get(Object.getPrototypeOf(MaterialSwitch.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialSwitch, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-switch": true,
                "mdl-js-switch": true,
                "mdl-js-ripple-effect": this.props.ripple,
                "is-disabled": this.props.disabled,
                "is-checked": this.props.checked,
                "is-upgraded": this.props.isUpgraded
            });
            var children = this.props.children;

            var props = _objectWithoutProperties(this.props, ["children"]);
            return React.createElement(
                "label",
                { className: classList, htmlFor: this.props.id },
                React.createElement("input", _extends({}, props, { type: "checkbox", className: "mdl-switch__input" })),
                React.createElement(
                    "span",
                    { className: "mdl-switch__label" },
                    children
                )
            );
        }
    }]);

    return MaterialSwitch;
})(React.Component);

MaterialSwitch.propTypes = {
    id: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialTabs = (function (_React$Component22) {
    _inherits(MaterialTabs, _React$Component22);

    function MaterialTabs() {
        _classCallCheck(this, MaterialTabs);

        _get(Object.getPrototypeOf(MaterialTabs.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTabs, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-tabs": true,
                "mdl-js-tabs": true,
                "mdl-js-ripple-effect": this.props.ripple
            });
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTabs;
})(React.Component);

MaterialTabs.propTypes = {
    ripple: React.PropTypes.bool
};

var MaterialTabsBar = (function (_React$Component23) {
    _inherits(MaterialTabsBar, _React$Component23);

    function MaterialTabsBar() {
        _classCallCheck(this, MaterialTabsBar);

        _get(Object.getPrototypeOf(MaterialTabsBar.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTabsBar, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-tabs__tab-bar": true
            });
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTabsBar;
})(React.Component);

var MaterialTabsTab = (function (_React$Component24) {
    _inherits(MaterialTabsTab, _React$Component24);

    function MaterialTabsTab() {
        _classCallCheck(this, MaterialTabsTab);

        _get(Object.getPrototypeOf(MaterialTabsTab.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTabsTab, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-tabs__tab": true,
                "is-active": this.props.isActive
            });
            return React.createElement("a", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTabsTab;
})(React.Component);

MaterialTabsTab.propTypes = {
    isActive: React.PropTypes.bool
};

var MaterialTabsPanel = (function (_React$Component25) {
    _inherits(MaterialTabsPanel, _React$Component25);

    function MaterialTabsPanel() {
        _classCallCheck(this, MaterialTabsPanel);

        _get(Object.getPrototypeOf(MaterialTabsPanel.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTabsPanel, [{
        key: "render",
        value: function render() {
            var classList = React.addons.classSet({
                "mdl-tabs__panel": true,
                "is-active": this.props.isActive
            });
            return React.createElement("div", _extends({}, this.props, { className: classList }));
        }
    }]);

    return MaterialTabsPanel;
})(React.Component);

MaterialTabsPanel.propTypes = {
    isActive: React.PropTypes.bool
};

/// <reference path="../typings/tsd.d.ts" />

var MaterialTextField = (function (_React$Component26) {
    _inherits(MaterialTextField, _React$Component26);

    function MaterialTextField() {
        _classCallCheck(this, MaterialTextField);

        _get(Object.getPrototypeOf(MaterialTextField.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(MaterialTextField, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var errorMessage = _props.errorMessage;

            var props = _objectWithoutProperties(this.props, ["children", "errorMessage"]);
            var classList = React.addons.classSet({
                "mdl-textfield": true,
                "mdl-js-textfield": true,
                "mdl-textfield--floating-label": this.props.floatingLabel,
                "is-invalid": !!errorMessage,
                "is-upgraded": this.props.isUpgraded
            });
            var error = !!errorMessage ? React.createElement(
                "span",
                { className: "mdl-textfield__error" },
                errorMessage
            ) : null;
            return React.createElement(
                "div",
                { className: classList },
                React.createElement("input", _extends({}, props, { className: "mdl-textfield__input", type: "text", id: this.props.id })),
                React.createElement(
                    "label",
                    { className: "mdl-textfield__label", htmlFor: this.props.id },
                    children
                ),
                error
            );
        }
    }]);

    return MaterialTextField;
})(React.Component);

MaterialTextField.propTypes = {
    id: React.PropTypes.string.isRequired,
    pattern: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    floatingLabel: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};
MaterialTextField.defaultProps = {};

function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
}
//# sourceMappingURL=react-material-tsx-jsx-js.js.map