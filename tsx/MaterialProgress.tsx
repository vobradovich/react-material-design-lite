/// <reference path="../typings/tsd.d.ts" />

class MaterialProgress extends React.Component<any, any> {
    static propTypes = {
        indeterminate: React.PropTypes.bool,
        isUpgraded: React.PropTypes.bool
    }

    static defaultProps = {
        indeterminate: false
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-progress" : true,
            "mdl-js-progress" : true,
            "mdl-progress__indeterminate": this.props.indeterminate,
            "is-upgraded": this.props.isUpgraded
        });

        return (
            <div {...this.props} className={classList}>                
            </div>
        );
    };
}