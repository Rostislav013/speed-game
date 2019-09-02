import React , {Component} from 'react';
import '../Score.css';


class Score extends Component {
  render() {
    return (
      <div className="score">
        <p className="pScore">Your score is {this.props.score}</p>
      </div>

    );
  }
}
export default Score;
