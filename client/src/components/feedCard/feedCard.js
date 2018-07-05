import React, { Component, Fragment } from "react"
import { Col, Card } from "react-materialize"
import "./feedCard.css"

class feedCard extends Component {
    render() {
        return (
            <Fragment>
                <Col m={12} s={12} id="cardCol">
                    <Card className='blue-grey darken-1 card' textClassName='white-text' title='Card title' >
                        I am a very simple card.
                        <div class="input-field">
                            <input id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                        </div>
                    </Card>
                </Col>
            </Fragment>

                )
            }
        }
        
        export default feedCard
