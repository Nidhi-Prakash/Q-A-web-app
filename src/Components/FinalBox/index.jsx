import React from 'react';
import './style.scss';

export default class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.answered = this.answered.bind(this);
    this.correctAnswers = this.correctAnswers.bind(this);
  }

  answered() {
    const { answers } = this.props;
    var answered = 0;
    answers.map((answer) => {
      if (answer !== 'Not yet Selected') {
        answered++;
      }
    })
    console.log('COUNT', answered);
    return answered;
  }


  correctAnswers() {
    const { answers, questions } = this.props;
    var correct = 0;
    for (let i = 0; i < 6; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        correct++;
      }
    }
    return correct;
  }

  score() {
    var score = (this.correctAnswers()/6) * 100 ;
    return Math.round(score);
  }


  render() {
    return (
      <>
        <div className='finalBox-wrapper'>
          <div className='finalBox-container'>

            <div className='container-items'>
              Question asked  : <span style={{ paddingLeft: '10px' }}>6</span>
            </div>

            <div className='container-items'>
              Questions Answered  : <span style={{ paddingLeft: '10px' }}>{this.answered()}</span>
            </div>

            <div className='container-items'>
              Question Correct  : <span style={{ paddingLeft: '10px' }}>{this.correctAnswers()} </span>
            </div>

            <div className='container-items'>
              Your Score  : <span style={{ paddingLeft: '10px' }}>{this.score()}</span>
            </div>

            <div>
              <button className='Start-again-btn' onClick={() => window.location.reload()}>Start Again</button>
            </div>

          </div>
        </div>
      </>
    )
  }

}
