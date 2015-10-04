/// <reference path="../typings/tsd.d.ts" />
class MaterialTextField extends React.Component {
    render() {
        var { children, errorMessage } = this.props;
        var props = _objectWithoutProperties(this.props, ["children", "errorMessage"]);
        var classList = React.addons.classSet({
            "mdl-textfield": true,
            "mdl-js-textfield": true,
            "mdl-textfield--floating-label": this.props.floatingLabel,
            "is-invalid": !!errorMessage,
            "is-upgraded": this.props.isUpgraded
        });
        var error = !!errorMessage ? (<span className="mdl-textfield__error">{errorMessage}</span>) : null;
        return (<div className={classList}>
                <input {...props} className="mdl-textfield__input" type="text" id={this.props.id}/>
                <label className="mdl-textfield__label" htmlFor={this.props.id}>{children}</label>
                {error}
            </div>);
    }
    ;
}
MaterialTextField.propTypes = {
    id: React.PropTypes.string.isRequired,
    pattern: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    floatingLabel: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};
MaterialTextField.defaultProps = {};
