/// <reference path="../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MaterialButton = (function (_super) {
    __extends(MaterialButton, _super);
    function MaterialButton(props) {
        _super.call(this, props);
    }
    MaterialButton.prototype.render = function () {
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
        return (React.createElement("button", React.__spread({}, this.props, {"className": classList})));
    };
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
    return MaterialButton;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialCard = (function (_super) {
    __extends(MaterialCard, _super);
    function MaterialCard() {
        _super.apply(this, arguments);
    }
    MaterialCard.prototype.render = function () {
        var className = React.addons.classSet({
            "mdl-card": true
        });
        className += this.props.shadow > 0 ? " mdl-shadow--" + this.props.shadow + "dp" : "";
        return (React.createElement("div", React.__spread({}, this.props, {"className": className})));
    };
    MaterialCard.propTypes = {
        shadow: React.PropTypes.number
    };
    MaterialCard.defaultProps = {
        shadow: 2
    };
    return MaterialCard;
})(React.Component);
var MaterialCardTitle = (function (_super) {
    __extends(MaterialCardTitle, _super);
    function MaterialCardTitle() {
        _super.apply(this, arguments);
    }
    MaterialCardTitle.prototype.render = function () {
        var className = React.addons.classSet({
            "mdl-card__title": true,
            "mdl-card--expand": this.props.expand
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": className})));
    };
    MaterialCardTitle.propTypes = {
        expand: React.PropTypes.bool
    };
    return MaterialCardTitle;
})(React.Component);
var MaterialCardTitleText = (function (_super) {
    __extends(MaterialCardTitleText, _super);
    function MaterialCardTitleText() {
        _super.apply(this, arguments);
    }
    MaterialCardTitleText.prototype.render = function () {
        return (React.createElement("h2", {"className": "mdl-card__title-text"}, this.props.children));
    };
    return MaterialCardTitleText;
})(React.Component);
var MaterialCardMedia = (function (_super) {
    __extends(MaterialCardMedia, _super);
    function MaterialCardMedia() {
        _super.apply(this, arguments);
    }
    MaterialCardMedia.prototype.render = function () {
        return (React.createElement("div", React.__spread({}, this.props, {"className": "mdl-card__media"})));
    };
    return MaterialCardMedia;
})(React.Component);
var MaterialCardSupportingText = (function (_super) {
    __extends(MaterialCardSupportingText, _super);
    function MaterialCardSupportingText() {
        _super.apply(this, arguments);
    }
    MaterialCardSupportingText.prototype.render = function () {
        return (React.createElement("div", React.__spread({}, this.props, {"className": "mdl-card__supporting-text"})));
    };
    return MaterialCardSupportingText;
})(React.Component);
var MaterialCardActions = (function (_super) {
    __extends(MaterialCardActions, _super);
    function MaterialCardActions() {
        _super.apply(this, arguments);
    }
    MaterialCardActions.prototype.render = function () {
        var className = React.addons.classSet({
            "mdl-card__actions": true,
            "mdl-card--border": this.props.border
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": className})));
    };
    MaterialCardActions.propTypes = {
        border: React.PropTypes.bool
    };
    return MaterialCardActions;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./util.tsx" />
var MaterialCheckBox = (function (_super) {
    __extends(MaterialCheckBox, _super);
    function MaterialCheckBox() {
        _super.apply(this, arguments);
    }
    MaterialCheckBox.prototype.render = function () {
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
        return (React.createElement("label", {"className": classList, "htmlFor": this.props.id}, React.createElement("input", React.__spread({}, props, {"type": "checkbox", "className": "mdl-checkbox__input"})), React.createElement("span", {"className": "mdl-checkbox__label"}, children)));
    };
    MaterialCheckBox.propTypes = {
        id: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    return MaterialCheckBox;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialTable = (function (_super) {
    __extends(MaterialTable, _super);
    function MaterialTable() {
        _super.apply(this, arguments);
    }
    MaterialTable.prototype.render = function () {
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
        return (React.createElement("table", React.__spread({}, this.props, {"className": classList})));
    };
    MaterialTable.propTypes = {
        selectable: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool,
        shadow: React.PropTypes.number
    };
    MaterialTable.defaultProps = {
        shadow: 2
    };
    return MaterialTable;
})(React.Component);
var MaterialTableColumn = (function (_super) {
    __extends(MaterialTableColumn, _super);
    function MaterialTableColumn() {
        _super.apply(this, arguments);
    }
    MaterialTableColumn.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });
        return (React.createElement("th", React.__spread({}, this.props, {"className": classList})));
    };
    MaterialTableColumn.propTypes = {
        nonNumeric: React.PropTypes.bool,
        valueRender: React.PropTypes.func
    };
    return MaterialTableColumn;
})(React.Component);
var MaterialTableCell = (function (_super) {
    __extends(MaterialTableCell, _super);
    function MaterialTableCell() {
        _super.apply(this, arguments);
    }
    MaterialTableCell.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });
        return (React.createElement("td", React.__spread({}, this.props, {"className": classList})));
    };
    MaterialTableCell.propTypes = {
        nonNumeric: React.PropTypes.bool
    };
    return MaterialTableCell;
})(React.Component);
var MaterialTableRow = (function (_super) {
    __extends(MaterialTableRow, _super);
    function MaterialTableRow() {
        _super.apply(this, arguments);
    }
    MaterialTableRow.prototype.render = function () {
        var classList = React.addons.classSet({
            "is-selected": this.props.selected
        });
        return (React.createElement("tr", React.__spread({}, this.props, {"className": classList})));
    };
    MaterialTableRow.propTypes = {
        selected: React.PropTypes.bool
    };
    return MaterialTableRow;
})(React.Component);
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
var MaterialGrid = (function (_super) {
    __extends(MaterialGrid, _super);
    function MaterialGrid() {
        _super.apply(this, arguments);
    }
    MaterialGrid.prototype.render = function () {
        return (React.createElement("div", React.__spread({}, this.props, {"className": "mdl-grid"})));
    };
    ;
    return MaterialGrid;
})(React.Component);
var MaterialGridCell = (function (_super) {
    __extends(MaterialGridCell, _super);
    function MaterialGridCell() {
        _super.apply(this, arguments);
    }
    MaterialGridCell.prototype.render = function () {
        var cellClass = "mdl-cell--" + this.props.col + "-col";
        var classList = React.addons.classSet({
            "mdl-cell": true,
            "mdl-cell--top": this.props.align === "top",
            "mdl-cell--middle": this.props.align === "middle",
            "mdl-cell--bottom": this.props.align === "bottom"
        });
        classList = React.addons.classSet(classList, cellClass);
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialGridCell.propTypes = {
        col: React.PropTypes.number.isRequired,
        align: React.PropTypes.oneOf(["top", "middle", "bottom"])
    };
    return MaterialGridCell;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialIconToggle = (function (_super) {
    __extends(MaterialIconToggle, _super);
    function MaterialIconToggle() {
        _super.apply(this, arguments);
    }
    MaterialIconToggle.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-icon-toggle": true,
            "mdl-js-icon-toggle": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "is-disabled": this.props.disabled,
            "is-checked": this.props.checked,
            "is-upgraded": this.props.isUpgraded,
        });
        var children = this.props.children;
        var props = _objectWithoutProperties(this.props, ["children"]);
        return (React.createElement("label", {"className": classList, "htmlFor": this.props.id}, React.createElement("input", React.__spread({}, props, {"type": "checkbox", "className": "mdl-icon-toggle__input"})), React.createElement("i", {"className": "mdl-icon-toggle__label material-icons"}, children)));
    };
    MaterialIconToggle.propTypes = {
        id: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    return MaterialIconToggle;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialMenu = (function (_super) {
    __extends(MaterialMenu, _super);
    function MaterialMenu() {
        _super.apply(this, arguments);
    }
    MaterialMenu.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-menu": true,
            "mdl-js-menu": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "mdl-menu--top-left": this.props.align === "top-left",
            "mdl-menu--top-rigth": this.props.align === "top-rigth",
            "mdl-menu--bottom-left": this.props.align === "bottom-left",
            "mdl-menu--bottom-rigth": this.props.align === "bottom-rigth"
        });
        return (React.createElement("ul", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialMenu.propTypes = {
        htmlFor: React.PropTypes.string.isRequired,
        ripple: React.PropTypes.bool,
        align: React.PropTypes.oneOf(["top-left", "top-rigth", "bottom-left", "bottom-rigth"])
    };
    return MaterialMenu;
})(React.Component);
var MaterialMenuItem = (function (_super) {
    __extends(MaterialMenuItem, _super);
    function MaterialMenuItem() {
        _super.apply(this, arguments);
    }
    MaterialMenuItem.prototype.render = function () {
        return (React.createElement("li", React.__spread({}, this.props, {"className": "mdl-menu__item"})));
    };
    ;
    return MaterialMenuItem;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialProgress = (function (_super) {
    __extends(MaterialProgress, _super);
    function MaterialProgress() {
        _super.apply(this, arguments);
    }
    MaterialProgress.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-progress": true,
            "mdl-js-progress": true,
            "mdl-progress__indeterminate": this.props.indeterminate,
            "is-upgraded": this.props.isUpgraded
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialProgress.propTypes = {
        indeterminate: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    MaterialProgress.defaultProps = {
        indeterminate: false
    };
    return MaterialProgress;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialRadio = (function (_super) {
    __extends(MaterialRadio, _super);
    function MaterialRadio() {
        _super.apply(this, arguments);
    }
    MaterialRadio.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-radio": true,
            "mdl-js-radio": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "is-disabled": this.props.disabled,
            "is-checked": this.props.checked,
            "is-upgraded": this.props.isUpgraded,
        });
        var children = this.props.children;
        var props = _objectWithoutProperties(this.props, ["children"]);
        return (React.createElement("label", {"className": classList, "htmlFor": this.props.id}, React.createElement("input", React.__spread({}, props, {"type": "radio", "className": "mdl-radio__button"})), React.createElement("span", {"className": "mdl-radio__label"}, children)));
    };
    MaterialRadio.propTypes = {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        value: React.PropTypes.string,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    return MaterialRadio;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialSpinner = (function (_super) {
    __extends(MaterialSpinner, _super);
    function MaterialSpinner() {
        _super.apply(this, arguments);
    }
    MaterialSpinner.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-spinner": true,
            "mdl-js-spinner": true,
            "is-active": this.props.isActive,
            "is-upgraded": this.props.isUpgraded,
            "mdl-spinner--single-color": this.props.singleColor
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialSpinner.propTypes = {
        isActive: React.PropTypes.bool,
        singleColor: React.PropTypes.bool
    };
    MaterialSpinner.defaultProps = {
        isActive: true
    };
    return MaterialSpinner;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialSwitch = (function (_super) {
    __extends(MaterialSwitch, _super);
    function MaterialSwitch() {
        _super.apply(this, arguments);
    }
    MaterialSwitch.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-switch": true,
            "mdl-js-switch": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "is-disabled": this.props.disabled,
            "is-checked": this.props.checked,
            "is-upgraded": this.props.isUpgraded,
        });
        var children = this.props.children;
        var props = _objectWithoutProperties(this.props, ["children"]);
        return (React.createElement("label", {"className": classList, "htmlFor": this.props.id}, React.createElement("input", React.__spread({}, props, {"type": "checkbox", "className": "mdl-switch__input"})), React.createElement("span", {"className": "mdl-switch__label"}, children)));
    };
    MaterialSwitch.propTypes = {
        id: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    return MaterialSwitch;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialTabs = (function (_super) {
    __extends(MaterialTabs, _super);
    function MaterialTabs() {
        _super.apply(this, arguments);
    }
    MaterialTabs.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-tabs": true,
            "mdl-js-tabs": true,
            "mdl-js-ripple-effect": this.props.ripple
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialTabs.propTypes = {
        ripple: React.PropTypes.bool
    };
    return MaterialTabs;
})(React.Component);
var MaterialTabsBar = (function (_super) {
    __extends(MaterialTabsBar, _super);
    function MaterialTabsBar() {
        _super.apply(this, arguments);
    }
    MaterialTabsBar.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-tabs__tab-bar": true
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    return MaterialTabsBar;
})(React.Component);
var MaterialTabsTab = (function (_super) {
    __extends(MaterialTabsTab, _super);
    function MaterialTabsTab() {
        _super.apply(this, arguments);
    }
    MaterialTabsTab.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-tabs__tab": true,
            "is-active": this.props.isActive
        });
        return (React.createElement("a", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialTabsTab.propTypes = {
        isActive: React.PropTypes.bool
    };
    return MaterialTabsTab;
})(React.Component);
var MaterialTabsPanel = (function (_super) {
    __extends(MaterialTabsPanel, _super);
    function MaterialTabsPanel() {
        _super.apply(this, arguments);
    }
    MaterialTabsPanel.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-tabs__panel": true,
            "is-active": this.props.isActive
        });
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList})));
    };
    ;
    MaterialTabsPanel.propTypes = {
        isActive: React.PropTypes.bool
    };
    return MaterialTabsPanel;
})(React.Component);
/// <reference path="../typings/tsd.d.ts" />
var MaterialTextField = (function (_super) {
    __extends(MaterialTextField, _super);
    function MaterialTextField() {
        _super.apply(this, arguments);
    }
    MaterialTextField.prototype.render = function () {
        var classList = React.addons.classSet({
            "mdl-textfield": true,
            "mdl-js-textfield": true,
            "mdl-textfield--floating-label": this.props.floatingLabel,
            "is-upgraded": this.props.isUpgraded
        });
        var _a = this.props, children = _a.children, errorMessage = _a.errorMessage;
        var props = _objectWithoutProperties(this.props, ["children", "errorMessage"]);
        var error = this.props.pattern !== "undefined" ? (React.createElement("span", {"className": "mdl-textfield__error"}, errorMessage)) : null;
        return (React.createElement("div", {"className": classList}, React.createElement("input", React.__spread({}, props, {"className": "mdl-textfield__input", "type": "text", "id": this.props.id})), React.createElement("label", {"className": "mdl-textfield__label", "htmlFor": this.props.id}, children), error));
    };
    ;
    MaterialTextField.propTypes = {
        id: React.PropTypes.string.isRequired,
        pattern: React.PropTypes.string,
        errorMessage: React.PropTypes.string,
        floatingLabel: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    };
    MaterialTextField.defaultProps = {};
    return MaterialTextField;
})(React.Component);
function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
        if (keys.indexOf(i) >= 0)
            continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
        target[i] = obj[i];
    }
    return target;
}

//# sourceMappingURL=react-material-tsx.js.map