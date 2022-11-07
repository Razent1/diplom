import './App.css';

import Form from 'react-bootstrap/Form';
import {useState} from "react";

function Checkbox() {
    const [typeInfo, setTypeInfo] = useState({
        duplication: false,
        nullCols: false,
        countRows: false,
        actualitySimple: false,
        actualityDifficulty: false
    });


    return (
        <div style={{marginTop: '25px', marginLeft: '55px'}}>
            <div className="headings" style={{marginBottom: '20px'}}>
                Type of Checkers
            </div>
            <div className="dropdownBlock">
                <Form>
                    {['Duplications', 'Null in Columns', 'Count of rows', 'Actuality Simple', 'Actuality Difficulty']
                        .map((type) => (
                            <div key={`${type}default-checkbox`} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id={`default-checkbox`}
                                    label={`${type}`}
                                    onClick={(e) => {
                                        if (type === "Duplications") {
                                            setTypeInfo(typeInfo => ({
                                                ...typeInfo,
                                                duplication: e.target.checked
                                            }))
                                        } else if (type === "Null in Columns") {
                                            setTypeInfo(typeInfo => ({
                                                ...typeInfo,
                                                nullCols: e.target.checked
                                            }))
                                        } else if (type === "Count of rows") {
                                            setTypeInfo(typeInfo => ({
                                                ...typeInfo,
                                                countRows: e.target.checked
                                            }))
                                        } else if (type === "Actuality Simple") {
                                            setTypeInfo(typeInfo => ({
                                                ...typeInfo,
                                                actualitySimple: e.target.checked
                                            }))
                                        } else if (type === "Actuality Difficulty") {
                                            setTypeInfo(typeInfo => ({
                                                ...typeInfo,
                                                actualityDifficulty: e.target.checked
                                            }))
                                        }
                                    }}
                                />
                            </div>
                        ))}
                </Form>
            </div>
        </div>
    )

}

export default Checkbox;