import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {Button} from "react-bootstrap";


const itemsDB = ["Databricks"];
const dbSchemas = ["default"]; //here will implement

function Chosers() {
    const [db, setDB] = useState("");
    const [schema, setSchema] = useState("");
    const [checker, setChecker] = useState("");
    const [filtration, setFiltration] = useState("");

    const handleInputChangeChecker = (event) => {
        const { value } = event.target
        setChecker(value);
    }

    const handleInputChangeFiltration = (event) => {
        const { value } = event.target
        setFiltration(value);
    }

    return (
        <>
        <div>
            <div className="dropdownBlock">
            <div className="headings">
                Connection to DataBase
            </div>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" style={{marginBottom: '10px', width:'100%',
                        display:'block'}}>Choose from the list</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {itemsDB.map((itemsDB) => (
                            <Dropdown.Item onClick={() => setDB(itemsDB)}>
                                {itemsDB}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <pre>Defualt selected DB: {db}</pre>
            </div>
            <div className="dropdownBlock">
                <div className="headings">
                    Schema and Table
                </div>

                <Dropdown >
                    <Dropdown.Toggle variant="outline-dark" style={{marginBottom: '10px', width:'100%',
                        display:'block'}}>Choose from the list</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dbSchemas.map((dbSchema) => (
                            <Dropdown.Item onClick={() => setSchema(dbSchema)}>
                                {dbSchema}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <pre>Defualt selected Schema: {schema}</pre>
            </div>
            <div className="dropdownBlock">
                <Form.Label htmlFor="nameChecker">Name of Checker</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter checker name"
                    name="Checker name"
                    value={checker}
                    onChange={handleInputChangeChecker}
                />
            </div>
            <div className="dropdownBlock">
                <Form.Label htmlFor="nameCondition">Filtration condition</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter filtration condition"
                    name="Filtration condition"
                    value={filtration}
                    onChange={handleInputChangeFiltration}
                />
            </div>
            </div>
            </>
    );
}

export default Chosers;
