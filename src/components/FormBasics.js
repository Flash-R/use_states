import React,{ useState } from "react";


const FormBasics = ()=>{

    const [user, setUser] = useState({name: "", email:"", password:"", confirmPassword: ""});
    const {name, email, password, confirmPassword} = user;

    function setForm(e){
        console.log(e.target.name, e.target.value);
        let key = e.target.name;
        setUser({...user, [key]: e.target.value})
    }

    return(
        <div className="form-basics">
            <h1>Form Basics</h1>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={setForm} name="name"/><br/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" onChange={setForm} name="email"/><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={setForm} name="password"/> <br/>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" onChange={setForm} name="confirmPassword"/> <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormBasics;