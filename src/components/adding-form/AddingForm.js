import React, {useState} from 'react';

const AddingForm = () => {
    const [form, setForm] = useState({catName: '', dogName: ''});
    
    const formHandler = (e) => {
        const eventData = {[e.target.name]: e.target.value};
        setForm({...form, ...eventData});
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    
    return (
        <form>
            <label><input placeholder={"cat name"} type={"text"} name={"catName"} value={form.catName} onChange={formHandler}/></label>
            <label><input type="text"/></label>
            <button onClick={onSubmit}>ADD PET</button>
        </form>
    );
}

export {AddingForm};
