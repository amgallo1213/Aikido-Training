import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Register = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentKyu, setCurrentKyu] = useState("");
    const [trainingFor, setTrainingFor] = useState("");

    return ( 
        <div>
            <form>
                <div>
                    <h2>New Student Registration</h2>
                    <div>  
                        <input type="text" value={firstName} onChange= {(e) =>setFirstName(e.target.value)}>First Name</input>
                        <input type="text" value={lastName} onChange= {(e) =>setLastName(e.target.value)}>First Name</input>
                        <input type="email" value={email} onChange= {(e) =>setEmail(e.target.value)}>First Name</input>
                        <input type="password" value={password} onChange= {(e) =>setPassword(e.target.value)}>First Name</input>
                        <input type="password" value={confirmPassword} onChange= {(e) =>setConfirmPassword(e.target.value)}>First Name</input>
                        <button type="submit">Register</button>
                    </div>
                </div>
                <div>
                <label for="Kyu Ranking">Current Kyu Rank</label>
                    <select id="kyuRank" name="ranking" value={currentKyu}>
                    <option value="Beginner">Beginner</option>
                    <option value="9th">9th</option>
                    <option value="8th">8th</option>
                    <option value="7th">7th</option>
                    <option value="6th">6th</option>
                    <option value="5th">5th</option>
                    <option value="4th">4th</option>
                    <option value="3rd">3rd</option>
                    <option value="2nd">2nd</option>
                    <option value="1st">1st</option>
                    <option value="Black Belt">Black Belt</option>
                    </select>
                <label for="Testing For">Testing For</label>
                    <select id="testingFor" name="testingFor" value={trainingFor}>
                    <option value="Empty">------r</option>
                    <option value="9th">9th</option>
                    <option value="8th">8th</option>
                    <option value="7th">7th</option>
                    <option value="6th">6th</option>
                    <option value="5th">5th</option>
                    <option value="4th">4th</option>
                    <option value="3rd">3rd</option>
                    <option value="2nd">2nd</option>
                    <option value="1st">1st</option>
                    <option value="Black Belt">Black Belt</option>
                    </select>
                </div>
    
            </form>
        </div>
     );
}
 
export default Register;



// const [valueState,setValueState] = useState("")
// // create a function that handle the React-select event and
// // save the value of that event on an state every time the component change
//     const handler = (event) => {
//         const value = event.value
//         setValueState(value)
//     }
{/* <Select options={"your options"} onChange={handler}/> */}