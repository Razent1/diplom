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
    const [typeWeek, setTypeWeek] = useState({
        sun: false,
        mon: false,
        tu: false,
        we: false,
        thu: false,
        fri: false
    });

    return (
        <div style={{marginTop: '25px', marginLeft: '55px'}}>
            <div className="headings" style={{marginBottom: '20px'}}>
                Scheduler
            </div>
            <div className="row"  style={{marginBottom: '30px'}}>
                <div className="col-8">Choose the time of checking</div>
                <TimePicker onChange={onChange} value={value} className="col"/>
            </div>
            <div className="dropdownBlock" style={{borderBottom: "1px solid black"}}>
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
                                        }
                                        else if (type === "Every Day") {
                                            setTypeInfo(`${type}`)
                                        }
                                        else if (type === "Every Week") {
                                            setTypeInfo(`${type}`)
                                        }
                                        else if (type === "Every Month") {
                                            setTypeInfo(`${type}`)
                                        }
                                    }}
                                />
                            </div>
                        ))}
                </Form>
            </div>
            <div className="dropdownBlock">
                <div className="headings" style={{marginBottom: '20px'}}>
                    Repeat every day of week
                </div>
                <Form>
                    {['Sun', 'Mon', 'Tu', 'We', 'Thu', 'Fri']
                        .map((type) => (
                            <div key={`inline-checkbox-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name="group1"
                                    id={`inline-checkbox-1${type}`}
                                    label={`${type}`}
                                    onClick={(e) => {
                                        if (type === "Sun") {
                                            setTypeWeek(typeWeek => ({
                                                ...typeWeek,
                                                sun: e.target.checked
                                            }))
                                        } else if (type === "Mon") {
                                            setTypeWeek(typeInfo => ({
                                                ...typeWeek,
                                                mon: e.target.checked
                                            }))
                                        } else if (type === "Tu") {
                                            setTypeWeek(typeWeek => ({
                                                ...typeWeek,
                                                tu: e.target.checked
                                            }))
                                        } else if (type === "We") {
                                            setTypeWeek(typeWeek => ({
                                                ...typeWeek,
                                                we: e.target.checked
                                            }))
                                        } else if (type === "Thu") {
                                            setTypeWeek(typeWeek => ({
                                                ...typeWeek,
                                                thu: e.target.checked
                                            }))
                                        } else if (type === "Fri") {
                                            setTypeWeek(typeWeek => ({
                                                ...typeWeek,
                                                fri: e.target.checked
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

export default Cron;