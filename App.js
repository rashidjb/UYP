const exercises = ["Squat", "Bench Press", "OH Press", "Deadlift"];
const workout_a = ["Squat", "Bench Press", "Chin-ups"];
const workout_b = ["OH Press", "Deadlift", "Abs"];
const percents = [65.0, 70.0, 75.0, 80.0, 82.5, 85.0, 87.5, 90.0, 92.5, 95.0];
const total_reps = [36, 30, 24, 18, 15, 12, 9, 6, 6, 6];

class Workout extends React.Component{
	render() {
		console.log(total_reps[this.props.week -1]);
		return(
			<table className="table workout_table">
			  <thead>
				<tr>
				  <th scope="col">Exercise</th>
				  <th scope="col">Weight</th>
				  <th scope="col">Reps</th>
				</tr>
			  </thead>
			  <tbody>
				{
					this.props.workout.map((exercise) => {
						return(
							<tr key={exercise}>
							<th scope="row">
								{exercise}
							</th>
							<td>
								
							</td>
							<td>
								{total_reps[this.props.week -1] / 3}
							</td>
						</tr>
						)
					})
				}
			  </tbody>
			</table>
		);
	}
}

class Day extends React.Component{
	
	render() {
		//console.log((this.props.day%2 === 0)?workout_a:workout_b);
		return (
			<div className="card Day">
				<div className="card-body">
					<div className="card-header">
						<h5 className="card-title">Day {this.props.day}</h5>
					</div>
					<Workout workout={(this.props.day%2 === 1)?workout_a:workout_b} day={this.props.day} week={this.props.week}/>
				</div>
			</ div>
		);
    }
}

class ExerciseMax extends React.Component{
	render() {
		return(
			<li className="list-group-item">
				<div className="input-group">
				  <div className="input-group-prepend">
					<span className="input-group-text">{this.props.exercise}:</span>
				  </div>
				  <input type="text" className="form-control" placeholder="100" />
				  <div className="input-group-append">
					<span className="input-group-text">KG/LBS</span>
				  </div>
				</div>
			</li>
		);
	}
}
class Maxes extends React.Component{
	
	render() {
		return (
			<div className="card maxes">
				<div className="card-body">
					<div className="card-header">
						<h5 className="card-title">Card title</h5>
					</div>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<ul className="list-group">
						{exercises.map(function(exercise){
							return <ExerciseMax exercise={exercise} key={exercise} />;
						})}
					</ul>
				</div>
			</ div>
		);
    }
}

class Percentages extends React.Component{
	
	render() {
		return (
			<div className="card percentages">
				<div className="card-body">
					<div className="card-header">
						<h5 className="card-title">Card title</h5>
					</div>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<table className="table">
					  <thead>
						<tr>
						  <th scope="col">Week</th>
						  <th scope="col">Percentage</th>
						  <th scope="col">Reps</th>
						</tr>
					  </thead>
					  <tbody>
						{percents.map((percent, week) => {
							return(
								<tr key={week}>
									<th scope="row">
										Week {week + 1}
									</th>
									<td>
										{percent}
									</td>
									<td>
										{total_reps[week]}
									</td>
								</tr>
							)
						})}
					  </tbody>
					</table>
				</div>
			</ div>
		);
    }
}

class Home extends React.Component{
	
	render(){
		return(
			<div >
				<Maxes />
				<Percentages />
			</div>
		);
	}
}

class Week extends React.Component{
	
	render(){
		return(
			<div >
				{this.props.days.map((day) => {
					return(<Day day={day} week={this.props.week} key={day}/>)
				})}
			</div>
		);
	}
}

let home = function(){
	ReactDOM.render(
        <Home />,
        document.getElementById('content')
      );
}

home();

let week = function(week_number){
	//console.log("week_1")
	ReactDOM.render(
        <Week week={week_number} days={[1, 2, 3]}/>,
        document.getElementById('content')
      );
}

	  
	  