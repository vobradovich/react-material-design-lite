/// <reference path="../typings/tsd.d.ts" />

class MaterialSwitch extends React.Component<any, any> {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-switch" : true,
            "mdl-js-switch": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "is-disabled": this.props.disabled,
            "is-checked": this.props.checked,
            "is-upgraded": this.props.isUpgraded,
        });

        var {
            children
        } = this.props;
        var props = _objectWithoutProperties(this.props, ["children"]);

        return (
            <label className={classList} htmlFor={this.props.id}>
                <input {...props} type="checkbox" className="mdl-switch__input" />
                <span className="mdl-switch__label">{children}</span>
            </label>
        );
    }
}
