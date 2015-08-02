/// <reference path="../typings/tsd.d.ts" />

class MaterialSpinner extends React.Component<any, any> {
    static propTypes = {
        isActive: React.PropTypes.bool,
        singleColor: React.PropTypes.bool
    }

    static defaultProps = {
        isActive: true
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-spinner" : true,
            "mdl-js-spinner" : true,
            "is-active": this.props.isActive,
			"is-upgraded": this.props.isUpgraded,
            "mdl-spinner--single-color": this.props.singleColor
        });

        return (
            <div {...this.props} className={classList}>
            </div>
        );
    };
}