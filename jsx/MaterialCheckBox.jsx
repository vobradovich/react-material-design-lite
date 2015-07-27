class MaterialCheckBox extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-checkbox" : true,
            "mdl-js-checkbox": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "is-disabled": this.props.disabled,
            "is-checked": this.props.checked,
            "is-upgraded": this.props.isUpgraded
        });

        var {
            children,
            ...props,
        } = this.props;

        return (
            <label className={classList} htmlFor={this.props.id}>
                <input {...props} type="checkbox" className="mdl-checkbox__input" />
                <span className="mdl-checkbox__label">{children}</span>
            </label>
        );
    }
}
