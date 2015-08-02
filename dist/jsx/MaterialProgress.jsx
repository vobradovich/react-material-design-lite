/// <reference path="../typings/tsd.d.ts" />
class MaterialProgress extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "mdl-progress": true,
            "mdl-js-progress": true,
            "mdl-progress__indeterminate": this.props.indeterminate,
            "is-upgraded": this.props.isUpgraded
        });
        return (<div {...this.props} className={classList}>                
            </div>);
    }
    ;
}
MaterialProgress.propTypes = {
    indeterminate: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool
};
MaterialProgress.defaultProps = {
    indeterminate: false
};
