/// <reference path="../typings/tsd.d.ts" />
class MaterialCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classList = ["mdl-card"];
        if (this.props.shadow > 0) {
            var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
            classList.push(shadowClass);
        }
        return (<div {...this.props} className={classList.join(" ")}>
            </div>);
    }
}
MaterialCard.propTypes = {
    shadow: React.PropTypes.number
};
MaterialCard.defaultProps = {
    shadow: 2
};
class MaterialCardTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classList = ["mdl-card__title"];
        if (this.props.expand) {
            classList.push("mdl-card--expand");
        }
        return (<div {...this.props} className={classList.join(" ")}>
            </div>);
    }
}
MaterialCardTitle.propTypes = {
    expand: React.PropTypes.bool
};
class MaterialCardTitleText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h2 className="mdl-card__title-text">{this.props.children}</h2>);
    }
}
class MaterialCardMedia extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classList = ["mdl-card__media"];
        return (<div {...this.props} className={classList.join(" ")}>
            </div>);
    }
}
class MaterialCardSupportingText extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classList = ["mdl-card__supporting-text"];
        return (<div {...this.props} className={classList.join(" ")}>
            </div>);
    }
}
class MaterialCardActions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var classList = ["mdl-card__actions"];
        if (this.props.border) {
            classList.push("mdl-card--border");
        }
        return (<div {...this.props} className={classList.join(" ")}>
            </div>);
    }
}
MaterialCardActions.propTypes = {
    border: React.PropTypes.bool
};
