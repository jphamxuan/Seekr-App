import React, { Component, Fragment } from "react"
import { Col, Card, Row } from 'react-materialize'
import "./userStats.css";


class userStats extends Component {
    render() {
        return (
            <Fragment>
                <Card>
                    <Row className=''>
                    <Col s={4} className='center-align '  >
                        <div>7</div>
                        <div>treks</div>
                    </Col>
                    <Col s={4} className='center-align '  >
                        <div>615</div>
                        <div>miles hiked</div>
                    </Col>
                    <Col s={4} className=' center-align ' >
                        <div>3</div>
                        <div>badges</div>
                    </Col>
                </Row>
                </Card>

            </Fragment>

        )
    }
}

export default userStats
