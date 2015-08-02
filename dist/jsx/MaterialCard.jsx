/// <reference path="../typings/tsd.d.ts" />
class MaterialCard extends React.Component {
    render() {
        var className = React.addons.classSet({
            "mdl-card": true
        });
        className += this.props.shadow > 0 ? " mdl-shadow--" + this.props.shadow + "dp" : "";
        return (<div {...this.props} className={className}>
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
    render() {
        var className = React.addons.classSet({
            "mdl-card__title": true,
            "mdl-card--expand": this.props.expand
        });
        return (<div {...this.props} className={className}>
            </div>);
    }
}
MaterialCardTitle.propTypes = {
    expand: React.PropTypes.bool
};
class MaterialCardTitleText extends React.Component {
    render() {
        return (<h2 className="mdl-card__title-text">{this.props.children}</h2>);
    }
}
class MaterialCardMedia extends React.Component {
    render() {
        return (<div {...this.props} className="mdl-card__media">
            </div>);
    }
}
class MaterialCardSupportingText extends React.Component {
    render() {
        return (<div {...this.props} className="mdl-card__supporting-text">
            </div>);
    }
}
class MaterialCardActions extends React.Component {
    render() {
        var className = React.addons.classSet({
            "mdl-card__actions": true,
            "mdl-card--border": this.props.border
        });
        return (<div {...this.props} className={className}>
            </div>);
    }
}
MaterialCardActions.propTypes = {
    border: React.PropTypes.bool
};
