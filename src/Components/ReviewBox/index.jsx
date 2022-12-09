import React from 'react';
import './style.scss';

export default class ReviewBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { answers } = this.props;
        return (
            <>
                <div className='reviewBox-container'>
                    <div className='headin-container'>
                        <h3 className='heading'>
                            Review your answers
                        </h3>
                    </div>

                    <div className='list-wrapper'>
                            <ol className='list-container'>
                                <li>{answers[0] ? answers[0] : 'Not yet Selected'}</li>
                                <li>{answers[1] ? answers[1] : 'Not yet Selected'}</li>
                                <li>{answers[2] ? answers[2] : 'Not yet Selected'}</li>
                                <li>{answers[3] ? answers[3] : 'Not yet Selected'}</li>
                                <li>{answers[4] ? answers[4] : 'Not yet Selected'}</li>
                                <li>{answers[5] ? answers[5] : 'Not yet Selected'}</li>
                            </ol>
                    </div>
                </div>
            </>
        )
    }
}

