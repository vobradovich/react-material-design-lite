class MaterialCard extends React.Component {
    static propTypes = {
        shadow: React.PropTypes.number
    }

    static defaultProps = {
        shadow: 2   
    }

    constructor(props) {
        super(props);

        this.classList = ["mdl-card"];
    }

    render() {
        if (this.props.shadow > 0) {
            var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
            this.classList.push(shadowClass);
        }
        
        return (
            <div {...this.props} className={this.classList.join(" ")}>
            </div>
        );
    }
}

class MaterialCardTitle extends React.Component {
    static propTypes = {
        expand: React.PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.classList = ["mdl-card__title"];
    }

    render() {
        if (this.props.expand) {
            this.classList.push("mdl-card--expand");
        }

        return (
            <div {...this.props} className={this.classList.join(" ")}>
            </div>
        );
    }
}

class MaterialCardTitleText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className="mdl-card__title-text">{this.props.children}</h2>
        );
    }
}

class MaterialCardMedia extends React.Component {
    constructor(props) {
        super(props);

        this.classList = ["mdl-card__media"];
    }

    render() {
        return (
            <div {...this.props} className={this.classList.join(" ")}>
            </div>
        );
    }
}

class MaterialCardSupportingText extends React.Component {
    constructor(props) {
        super(props);

        this.classList = ["mdl-card__supporting-text"];
    }

    render() {
        return (
            <div {...this.props} className={this.classList.join(" ")}>
            </div>
        );
    }
}

class MaterialCardActions extends React.Component {
    static propTypes = {
        border: React.PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.classList = ["mdl-card__actions"];
    }

    render() {
        if(this.props.border) {
            this.classList.push("mdl-card--border");
        }

        return (
            <div {...this.props} className={this.classList.join(" ")}>
            </div>
        );
    }
}

