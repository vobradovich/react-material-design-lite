class MaterialTabs extends React.Component {
    static propTypes = {
        ripple: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-tabs" : true,
            "mdl-js-tabs": true,
            "mdl-js-ripple-effect": this.props.ripple
        });

        return (
            <div {...this.props} className={classList}>
            </div>
        );
    };
}

class MaterialTabsBar extends React.Component { 
    render() {
        var classList = React.addons.classSet({
            "mdl-tabs__tab-bar" : true
        });

        return (
            <div {...this.props} className={classList}>
            </div>
        );
    };
}

class MaterialTabsTab extends React.Component {
    static propTypes = {
        isActive: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-tabs__tab" : true,
            "is-active": this.props.isActive
        });

        return (
            <a {...this.props} className={classList}>
            </a>
        );
    };
}

class MaterialTabsPanel extends React.Component {
    static propTypes = {
        isActive: React.PropTypes.bool
    }

    render() {
        var classList = React.addons.classSet({
            "mdl-tabs__panel" : true,
            "is-active": this.props.isActive
        });

        return (
            <div {...this.props} className={classList}>
            </div>
        );
    };
}