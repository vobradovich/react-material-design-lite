/// <reference path="../typings/tsd.d.ts" />
class MaterialTable extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "mdl-data-table": true,
            "mdl-js-data-table": !this.props.isUpgraded,
            "mdl-data-table--selectable": this.props.selectable,
            "is-upgraded": this.props.isUpgraded
        });
        if (this.props.shadow > 0) {
            var shadowClass = "mdl-shadow--" + this.props.shadow + "dp";
            classList = React.addons.classSet(classList, shadowClass);
        }
        return (<table {...this.props} className={classList}>
            </table>);
    }
}
MaterialTable.propTypes = {
    selectable: React.PropTypes.bool,
    isUpgraded: React.PropTypes.bool,
    shadow: React.PropTypes.number
};
MaterialTable.defaultProps = {
    shadow: 2
};
class MaterialTableColumn extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });
        return (<th {...this.props} className={classList}>
            </th>);
    }
}
MaterialTableColumn.propTypes = {
    nonNumeric: React.PropTypes.bool,
    valueRender: React.PropTypes.func
};
class MaterialTableCell extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "mdl-data-table__cell--non-numeric": this.props.nonNumeric
        });
        return (<td {...this.props} className={classList}>
            </td>);
    }
}
MaterialTableCell.propTypes = {
    nonNumeric: React.PropTypes.bool
};
class MaterialTableRow extends React.Component {
    render() {
        var classList = React.addons.classSet({
            "is-selected": this.props.selected
        });
        return (<tr {...this.props} className={classList}>
			</tr>);
    }
}
MaterialTableRow.propTypes = {
    selected: React.PropTypes.bool
};
// class MaterialDataTable extends React.Component<any, any> {
//     static propTypes = {
//         nonNumeric: React.PropTypes.bool,
// 		keySelector: React.PropTypes.func,
//         rowSelector: React.PropTypes.func
//     }
// 
//     render() {
//         var {
//             children,
//             data,
//             rowSelector,
// 			keySelector
//         } = this.props;
// 		data = data || [];
//         rowSelector = rowSelector || ((item, rowIndex) => false);
// 		keySelector = keySelector || ((item, rowIndex) => rowIndex);
// 
//         var rows = data.map((item, rowIndex) => {
//             var cells = React.Children.map(children, (column) => {
//                 var {
//                     valueRender
//                 } = column.props;
//                 valueRender = valueRender || ((item, column, rowIndex) => item[column.props.dataField]);
//                 
//                 var value = valueRender(item, column, rowIndex);
//                 return (<MaterialTableCell {...column.props}>{value}</MaterialTableCell>);
//             });
// 			return (<MaterialTableRow key={keySelector(item, rowIndex)} selected={rowSelector(item, rowIndex)}>{cells}</MaterialTableRow>);
//         });
// 
//         return (
//             <MaterialTable {...this.props}>
//                 <thead>
//                     <tr>
//                         {children}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                 </tbody>
//             </MaterialTable>
//         );
//     }
// }
