import React, { useState } from 'react';

function StudentForm({ onSubmit }) { // Accepting an onSubmit prop
    const [formData, setFormData] = useState({ name: '', email: '', contactNumber: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit(formData);  // Pass the form data to the parent component or service
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /> <br></br>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /> <br></br>
            <input type="tel" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
            <br></br><button type="submit">Submit</button>
        </form>
    );
}
export default StudentForm;
