import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import {useState} from "react";
import TimePicker from 'react-time-picker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Form from "react-bootstrap/Form";

function Cron() {
    const [value, onChange] = useState('10:00');
    const [typeInfo, setTypeInfo] = useState('');

    return (
        <div style={{marginTop: '25px', marginLeft: '55px'}}>
            <div className="headings" style={{marginBottom: '20px'}}>
                Scheduler
            </div>
            <div className="row"  style={{marginBottom: '30px'}}>
                <div className="col-8">Choose the time of checking</div>
                <TimePicker onChange={onChange} value={value} className="col"/>
            </div>
            <div className="dropdownBlock">
                <Form>
                    {['Every Hour', 'Every Day', 'Every Week', 'Every Month']
                        .map((type) => (
                            <div key={`${type}default-radio`} className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id={`default-radio`}
                                    name="group1"
                                    label={`${type}`}
                                    onClick={(e) => {
                                        if (type === "Every Hour") {
                                            setTypeInfo(`${type}`)
                                        } else if (type === "Every Day") {
                                            setTypeInfo(`${type}`)
                                        }
                                        else if (type === "Every Week") {
                                            setTypeInfo(`${type}`)
                                        }
                                        else if (type === "Every Month") {
                                            setTypeInfo(`${type}`)
                                        }
                                        console.log(typeInfo);
                                    }}
                                />
                            </div>
                        ))}
                </Form>
            </div>
        </div>
    )
}

export default Cron;