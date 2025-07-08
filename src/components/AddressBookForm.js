import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddressBookService from "../services/AddressBookService";

function AddressBookForm() {
    const [entry, setEntry] = useState({
        fullName: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zipCode: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            AddressBookService.getById(id).then(res => setEntry(res.data));
        }
    }, [id]);

    const handleChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            AddressBookService.update(id, entry).then(() => navigate("/"));
        } else {
            AddressBookService.create(entry).then(() => navigate("/"));
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? "Edit" : "Add"} Address Book Entry</h2>
            <form onSubmit={handleSubmit}>
                {["fullName", "phoneNumber", "address", "city", "state", "zipCode"].map(field => (
                    <div className="mb-3" key={field}>
                        <label className="form-label text-capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name={field}
                            value={entry[field]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
}

export default AddressBookForm;
