import React from 'react';
import './style.scss';
import Questions from '../../api';
import ReviewBox from '../ReviewBox/index';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';
import { FaRegHandPointDown } from 'react-icons/fa';
import FinalBox from '../FinalBox/index';


export default class QuestionBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            currentQuestionIndex: 0,
            submit: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, change) {
        let { answers, currentQuestionIndex } = this.state;
        switch (key) {
            case "previous":
                if (currentQuestionIndex > 0) {
                    currentQuestionIndex--;
                }
                break;
            case "next":
                if (currentQuestionIndex < Questions.length - 1) {
                    currentQuestionIndex++;
                }
                break;
            case "answers":
                answers[currentQuestionIndex] = change;
                break;
            default:
                break;
        }
        this.setState({ answers, currentQuestionIndex });
    }


    render() {
        let questions = Questions;
        let num = this.state.currentQuestionIndex;
        let answers = this.state.answers;
        const { submit } = this.state;
        return (
            <>
                {
                    submit === false ?
                        <div>
                            <div className='questionbox-container'>
                                <div className='container-heading'>
                                    Attempt Questions here <FaRegHandPointDown style={{
                                        paddingLeft: '10px',
                                        color: 'black'
                                    }} />
                                </div>

                                <div className='container-buttons'>
                                    <div>
                                        {this.state.currentQuestionIndex > 0 &&
                                            <TiArrowBack style={{
                                                height: '35px',
                                                width: '35px',
                                                cursor: 'pointer'
                                            }}
                                                onClick={() => this.handleChange("previous")}
                                            />
                                        }
                                    </div>
                                    <div>
                                        {this.state.currentQuestionIndex < 5 &&
                                            <TiArrowForward style={{
                                                height: '35px',
                                                width: '35px',
                                                cursor: 'pointer'
                                            }}
                                                onClick={() => this.handleChange("next")}
                                            />
                                        }
                                    </div>
                                </div>

                                <div className='question'>
                                    <div className='current-question-number'>
                                        <div className='current-question-number'>{`${questions[num].key})`}</div>
                                        <div className='current-question'>{questions[num].question}</div>
                                    </div>

                                    <div className='current-options-wrapper'>
                                        <div className='current-options-container'>
                                            {
                                                (questions[num].answers || []).map((a, aIndex) => {
                                                    return <div className='current-option1-container'>
                                                        <input
                                                            type="radio"
                                                            className='radiobtn1'
                                                            name={questions[num].key}
                                                            value={a.option}
                                                            checked={a.option === answers[num]}
                                                            onChange={() => this.handleChange("answers", a.option, aIndex)} />
                                                        <div className='current-options'>{a.option}</div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {this.state.currentQuestionIndex === 5 &&
                                        <button className='submit-btn' onClick={() => this.setState({ submit: true })}>Submit</button>}
                                </div>
                            </div>

                            <div>
                                <ReviewBox answers={answers} />
                            </div>
                        </div>
                        :
                        <div>
                            <FinalBox answers={answers} questions={questions} />
                        </div>
                }
            </>
        )
    }
}