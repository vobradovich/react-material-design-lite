class MaterialCheckBoxUpgraded extends React.Component {

    constructor(props) {
        super(props);

        this.Constant_ = {
            TINY_TIMEOUT: 1
        };
        
        this.CssClasses_ = {
            INPUT: 'mdl-checkbox__input',
            BOX_OUTLINE: 'mdl-checkbox__box-outline',
            FOCUS_HELPER: 'mdl-checkbox__focus-helper',
            TICK_OUTLINE: 'mdl-checkbox__tick-outline',
            RIPPLE_EFFECT: 'mdl-js-ripple-effect',
            RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
            RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
            RIPPLE_CENTER: 'mdl-ripple--center',
            RIPPLE: 'mdl-ripple',
            IS_FOCUSED: 'is-focused',
            IS_DISABLED: 'is-disabled',
            IS_CHECKED: 'is-checked',
            IS_UPGRADED: 'is-upgraded'
        }

        this.classList = new Set(["mdl-checkbox", "mdl-js-checkbox", this.CssClasses_.IS_UPGRADED]);

        this.onChange = function(event) {
            this.setState({
                checked: !this.state.checked
            })
        }.bind(this);

        this.onFocus = function(event) {
            this.setState({
                focused: true
            })
        }.bind(this);

        this.onMouseUp = function(event) {
            this.blur();
        }.bind(this);

        this.onBlur = function(event) {
            this.blur();
        }.bind(this);

        this.blur = function() {
            window.setTimeout(function() {
                this.setState({
                    focused: false
                });
            }.bind(this), this.Constant_.TINY_TIMEOUT);
        }

        this.state = {
            checked: this.props.checked || false,
            disabled: this.props.disabled || false,
            focused: false
        };

    }

    render() {
        if (this.state.disabled) {
            this.classList.add(this.CssClasses_.IS_DISABLED);
        } else {
            this.classList.delete(this.CssClasses_.IS_DISABLED);
        }

        if (this.state.checked) {
            this.classList.add(this.CssClasses_.IS_CHECKED);
        } else {
            this.classList.delete(this.CssClasses_.IS_CHECKED);
        }

        if (this.state.focused) {
            this.classList.add(this.CssClasses_.IS_FOCUSED);
        } else {
            this.classList.delete(this.CssClasses_.IS_FOCUSED);
        }

        if (this.props.ripple) {
            this.classList.add(this.CssClasses_.RIPPLE_EFFECT);
            this.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
        }

        var rippleSpan = this.props.ripple ?
            (
                <span className="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" onMouseUp={this.onMouseUp} onMouseDown={this.onFocus}>
                    <span className={this.CssClasses_.RIPPLE}></span>
                </span>
            ) : null;

        return (
            <label className={Array.from(this.classList).join(" ")} htmlFor={this.props.id}>
                <input {...this.props} type="checkbox" id={this.props.id} className={this.CssClasses_.INPUT} checked={this.state.checked} onChange={this.onChange} /*onFocus={this.onFocus} onBlur={this.onBlur}*/ />
                <span className="mdl-checkbox__label">{this.props.label}</span>
                <span className={this.CssClasses_.FOCUS_HELPER}></span>
                <span className={this.CssClasses_.BOX_OUTLINE}><span className={this.CssClasses_.TICK_OUTLINE}></span></span>
                {rippleSpan}
            </label>
        );
    }
}
