/// <reference path="../typings/tsd.d.ts" />

interface IMaterialTextFieldProps {
    children: any;
    id: string;
    pattern?: string;
    errorMessage?: string;
    floatingLabel?: boolean;
    isUpgraded?: boolean;
}

class MaterialTextField extends React.Component<any, any> {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        pattern: React.PropTypes.string,
        errorMessage: React.PropTypes.string,
        floatingLabel: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    static defaultProps = {
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-textfield" : true,
            "mdl-js-textfield" : true,
            "mdl-textfield--floating-label": this.props.floatingLabel,
            "is-upgraded": this.props.isUpgraded
        });

        var {
            children,
            errorMessage
        } = this.props;
        var props = _objectWithoutProperties(this.props, ["children", "errorMessage"]);

        var error = this.props.pattern !== "undefined" ? (<span className="mdl-textfield__error">{errorMessage}</span>) : null;

        return (            
            <div className={classList}>
                <input {...props} className="mdl-textfield__input" type="text" id={this.props.id} />
                <label className="mdl-textfield__label" htmlFor={this.props.id}>{children}</label>
                {error}
            </div>
        );
    };
}