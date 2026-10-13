import { useState } from 'react'
import './App.css'
function App() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        mark1: "",
        mark2: "",
        mark3: "",
        days_present: "",
        address: ""
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:5000/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    age: Number(form.age),
                    mark1: Number(form.mark1),
                    mark2: Number(form.mark2),
                    mark3: Number(form.mark3),
                    days_present: Number(form.days_present)
                })
            }
        );
        const data = await response.json();
        alert(data.message);
        setForm({
        name: "",
        age: "",
        mark1: "",
        mark2: "",
        mark3: "",
        days_present: "",
        address: ""
    })
    };

    return (
        <div>

            <h1>Student Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={form.age}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="mark1"
                    placeholder="Mark 1"
                    value={form.mark1}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="mark2"
                    placeholder="Mark 2"
                    value={form.mark2}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="mark3"
                    placeholder="Mark 3"
                    value={form.mark3}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="days_present"
                    placeholder="Days Present"
                    value={form.days_present}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}
export default App
