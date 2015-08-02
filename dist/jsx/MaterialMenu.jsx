/// <reference path="../typings/tsd.d.ts" />
class MaterialMenu extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "mdl-menu": true,
            "mdl-js-menu": true,
            "mdl-js-ripple-effect": this.props.ripple,
            "mdl-menu--top-left": this.props.align === "top-left",
            "mdl-menu--top-rigth": this.props.align === "top-rigth",
            "mdl-menu--bottom-left": this.props.align === "bottom-left",
            "mdl-menu--bottom-rigth": this.props.align === "bottom-rigth"
        });
        return (<ul {...this.props} className={classList}>
            </ul>);
    }
    ;
}
MaterialMenu.propTypes = {
    htmlFor: React.PropTypes.string.isRequired,
    ripple: React.PropTypes.bool,
    align: React.PropTypes.oneOf(["top-left", "top-rigth", "bottom-left", "bottom-rigth"])
};
class MaterialMenuItem extends React.Component {
    render() {
        return (<li {...this.props} className="mdl-menu__item">
            </li>);
    }
    ;
}
