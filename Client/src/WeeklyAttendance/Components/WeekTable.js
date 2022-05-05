import "../WeekTable-style.css";
function WeekTable() {
	return (
		<div className='App'>
			<table>
				<tr>
					<th>Name</th>
					<th>Week 1</th>
					<th>Week 2</th>
					<th>Week 3</th>
					<th>Week 4</th>
					<th>Week 5</th>
					<th>Week 6</th>
					<th>Week 7</th>
					<th>Week 8</th>
					<th>Week 9</th>
					<th>Week 10</th>
					<th>Week 11</th>
					<th>Week 12</th>
					<th>Week 13</th>
					<th>Week 14</th>
					<th>Week 15</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.name}</td>
							<td>{val.week1}</td>
							<td>{val.week2}</td>
							<td>{val.week3}</td>
							<td>{val.week4}</td>
							<td>{val.week5}</td>
							<td>{val.week6}</td>
							<td>{val.week7}</td>
							<td>{val.week8}</td>
							<td>{val.week9}</td>
							<td>{val.week10}</td>
							<td>{val.week11}</td>
							<td>{val.week12}</td>
							<td>{val.week13}</td>
							<td>{val.week14}</td>
							<td>{val.week15}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}
const data = [
	{ name: "Mirza Redzepovic", week1: "+", week2: "-" }, //Dodajes vrijednosti sve do week15//  { name: "Megha", week1: "+", week2: "+" },
	{ name: "Subham", week1: "-", week2: "+" },
	{ name: "Megha", week1: "-", week2: "-" },
	{ name: "Megha", week1: "+", week2: "+" },
];
export default WeekTable;
