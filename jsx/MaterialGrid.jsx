class MaterialGrid extends React.Component {
    render() {
        return (
            <div {...this.props} className= "mdl-grid">
            </div>
        );
    };
}

class MaterialGridCell extends React.Component {
    static propTypes = {
        col: React.PropTypes.number.isRequired,
        align: React.PropTypes.oneOf(["top", "middle", "bottom"])
    }

    render() {
        var cellClass = "mdl-cell--" + this.props.col + "-col";
        var classList = React.addons.classSet({
            "mdl-cell" : true,
            "mdl-cell--top": this.props.align === "top",
            "mdl-cell--middle": this.props.align === "middle",
            "mdl-cell--bottom": this.props.align === "bottom"           
        });
        classList = React.addons.classSet(classList, cellClass);

        return (
            <div {...this.props} className={classList}>
            </div>
        );

    };
}
