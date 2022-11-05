import './App.css';

import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Checkbox() {
    return (
        <div style={{marginTop: '25px', marginLeft: '55px'}}>
            <div className="headings" style={{marginBottom: '20px'}}>
                Type of Checkers
            </div>
            <div className="dropdownBlock" >
                <Form >
                    {['Duplications', 'Null in Columns', 'Count of rows', 'Actuality Simple', 'Actuality Difficulty'].map((type) => (
                        <div key={`default-checkbox`} className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id={`default-checkbox`}
                                label={`${type}`}
                            />
                        </div>
                    ))}
                </Form>
            </div>
        </div>
    )

}

export default Checkbox;