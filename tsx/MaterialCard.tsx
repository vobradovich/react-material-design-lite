/// <reference path="../typings/tsd.d.ts" />

class MaterialCard extends React.Component<any, any> {
    static propTypes = {
        shadow: React.PropTypes.number
    }

    static defaultProps = {
        shadow: 2   
    }
    
    constructor(props) {
		super(props);
	}

    render() {
        var className = React.addons.classSet({
            "mdl-card": true
        });
        className += this.props.shadow > 0 ? " mdl-shadow--" + this.props.shadow + "dp" : "";
                
        return (
            <div {...this.props} className={className}>
            </div>
        );
    }
}

class MaterialCardTitle extends React.Component<any, any> {
    static propTypes = {
        expand: React.PropTypes.bool
    }
    
    constructor(props) {
		super(props);
	}

    render() {
        var className = React.addons.classSet({
            "mdl-card__title": true,
            "mdl-card--expand": this.props.expand
        });
        
        return (
            <div {...this.props} className={className}>
            </div>
        );
    }
}

class MaterialCardTitleText extends React.Component<any, any> {
    render() {
        return (
            <h2 className="mdl-card__title-text">{this.props.children}</h2>
        );
    }
}

class MaterialCardMedia extends React.Component<any, any> {
    render() {
        return (
            <div {...this.props} className="mdl-card__media">
            </div>
        );
    }
}

class MaterialCardSupportingText extends React.Component<any, any> {
    render() {        
        return (
            <div {...this.props} className="mdl-card__supporting-text">
            </div>
        );
    }
}

class MaterialCardActions extends React.Component<any, any> {
    static propTypes = {
        border: React.PropTypes.bool
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        var className = React.addons.classSet({
            "mdl-card__actions": true,
            "mdl-card--border": this.props.border
        });

        return (
            <div {...this.props} className={className}>
            </div>
        );
    }
}

