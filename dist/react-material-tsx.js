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
    function MaterialCard(props) {
        _super.call(this, props);
    }
    MaterialCard.prototype.render = function () {
        var classList = ["mdl-card"];
        if (this.props.shadow > 0) {
            var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
            classList.push(shadowClass);
        }
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList.join(" ")})));
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
    function MaterialCardTitle(props) {
        _super.call(this, props);
    }
    MaterialCardTitle.prototype.render = function () {
        var classList = ["mdl-card__title"];
        if (this.props.expand) {
            classList.push("mdl-card--expand");
        }
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList.join(" ")})));
    };
    MaterialCardTitle.propTypes = {
        expand: React.PropTypes.bool
    };
    return MaterialCardTitle;
})(React.Component);
var MaterialCardTitleText = (function (_super) {
    __extends(MaterialCardTitleText, _super);
    function MaterialCardTitleText(props) {
        _super.call(this, props);
    }
    MaterialCardTitleText.prototype.render = function () {
        return (React.createElement("h2", {"className": "mdl-card__title-text"}, this.props.children));
    };
    return MaterialCardTitleText;
})(React.Component);
var MaterialCardMedia = (function (_super) {
    __extends(MaterialCardMedia, _super);
    function MaterialCardMedia(props) {
        _super.call(this, props);
    }
    MaterialCardMedia.prototype.render = function () {
        var classList = ["mdl-card__media"];
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList.join(" ")})));
    };
    return MaterialCardMedia;
})(React.Component);
var MaterialCardSupportingText = (function (_super) {
    __extends(MaterialCardSupportingText, _super);
    function MaterialCardSupportingText(props) {
        _super.call(this, props);
    }
    MaterialCardSupportingText.prototype.render = function () {
        var classList = ["mdl-card__supporting-text"];
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList.join(" ")})));
    };
    return MaterialCardSupportingText;
})(React.Component);
var MaterialCardActions = (function (_super) {
    __extends(MaterialCardActions, _super);
    function MaterialCardActions(props) {
        _super.call(this, props);
    }
    MaterialCardActions.prototype.render = function () {
        var classList = ["mdl-card__actions"];
        if (this.props.border) {
            classList.push("mdl-card--border");
        }
        return (React.createElement("div", React.__spread({}, this.props, {"className": classList.join(" ")})));
    };
    MaterialCardActions.propTypes = {
        border: React.PropTypes.bool
    };
    return MaterialCardActions;
})(React.Component);
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
        var _a = void 0, children = _a.children, errorMessage = _a.errorMessage;
        props,
        ;
    };
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
this.props;
var error = this.props.pattern !== "undefined" ? (React.createElement("span", {"className": "mdl-textfield__error"}, errorMessage)) : null;
return (React.createElement("div", {"className": classList}, React.createElement("input", React.__spread({}, props, {"className": "mdl-textfield__input", "type": "text", "id": this.props.id})), React.createElement("label", {"className": "mdl-textfield__label", "htmlFor": this.props.id}, children), error));
;

//# sourceMappingURL=react-material-tsx.js.map