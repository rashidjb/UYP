const exercises = ["Squat", "Bench Press", "OH Press", "Deadlift"];

class ExerciseMax extends React.Component{
	render() {
		return(
			<li className="list-group-item border-0">
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
class Percentage extends React.Component{
	
	render() {
		
        return (
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<ul className="list-group">
				{exercises.map(function(exercise){
					return <ExerciseMax exercise={exercise} key={exercise} />;
				})}
			</ul>
		  </div>
		);
    }
}



ReactDOM.render(
        <Percentage />,
        document.getElementById('maxes')
      );
	  
	  