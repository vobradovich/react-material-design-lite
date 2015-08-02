/// <reference path="../typings/tsd.d.ts" />

class MaterialRadio extends React.Component<any, any> {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        value: React.PropTypes.string,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-radio" : true,
            "mdl-js-radio": true,
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
                <input {...props} type="radio" className="mdl-radio__button" />
                <span className="mdl-radio__label">{children}</span>
            </label>
        );
    }
}
