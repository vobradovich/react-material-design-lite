class MaterialButton extends React.Component {
    static propTypes = {
        raised: React.PropTypes.bool,
        accent: React.PropTypes.bool,
        colored: React.PropTypes.bool,
        fab: React.PropTypes.bool,
        miniFab: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        ripple: React.PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.CssClasses_ = {
            RIPPLE_EFFECT: 'mdl-js-ripple-effect',
            RIPPLE_CONTAINER: 'mdl-button__ripple-container',
            RIPPLE: 'mdl-ripple'
        }
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-button" : true,
            "mdl-js-button": true,
            "mdl-button--raised": this.props.raised,
            "mdl-button--accent": this.props.accent,
            "mdl-button--colored": this.props.colored,
            "mdl-button--fab": this.props.fab,
            "mdl-button--mini-fab": this.props.miniFab,
            "mdl-button--icon": this.props.icon,
            "mdl-js-ripple-effect": this.props.ripple
        });

        return (
            <button {...this.props} className={classList}>
            </button>
        );
    }
} 