import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Table extends Component {
	constructor(props) {
		super(props)

		this.state = {
			people: [
				{
					name: "John Sina",
					birth: "11/30/2011"
				}, {
					name: "Barcy Washington",
					birth: "09/16/1992"
				}, {
					name: "Peter Parker",
					birth: "01/16/1992"
				}, {
					name: "Jimmy Shergil",
					birth: "12/12/2001"
				}, {
					name: "Alexander Alfred",
					birth: "02/09/1891"
				}, {
					name: "Krishna Gupta",
					birth: "12/01/1982"
				}, {
					name: "Sania Mirza",
					birth: "11/30/2011"
				}, {
					name: "Lata Pathak",
					birth: "10/31/1999"
				}
			]
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.sortParameter !== prevProps.sortParameter) {
			let newPeopleArr = [];
			switch (this.props.sortParameter) {
				case 'age':
					newPeopleArr = this.state.people.sort(this.compareDates);
					break;
				case 'name':
					newPeopleArr = this.state.people.sort(this.compareNames);
					break;
				default:
					newPeopleArr = this.state.people.sort(this.compareNames);
					break;
			}
			this.setState({
				people: newPeopleArr
			});
		}
	}

	//TODO: this should be extracted from the class to an utilitary
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		let date1 = new Date(person1.birth);
		let date2 = new Date(person2.birth);
		if (date1 === date2) {
			return 0;
		}
		return date1 < date2 ? -1 : 1;
	}

	//TODO: this should be extracted from the class to an utilitary
	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		if (person1.name === person2.name) {
			return 0;
		}
		return person1.name < person2.name ? -1 : 1;
	}

	renderPersonRow = (person, index) => {
		// early exit for invalid persons
		if (!person.name || !person.birth) {
			return null;
		}

		return (<tr key={index}>
			<td>{person.name}</td>
			<td>{person.birth}</td>
		</tr>)
	}

	render() {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{this.state.people.map((person, index) => {
							return this.renderPersonRow(person, index)
						})}
					</tbody>
				</table>
			</div>
		);

	}
}

// Uncomment the snippet below
Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;
