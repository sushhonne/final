import { useState } from "react";
import '../styles/apply.css';
import { useNavigate } from "react-router";

const Apply = () => {
 
  let [name, setName] = useState("");
  let [mob_number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setPassword2] = useState("");

  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    let data={name,mob_number,email,password,confirmPassword}
    console.log(data)
    alert('Submitted successfully')
    navigate('/')
  }


  return (
    <div className="apply">
      <div className="signUp_form">
        <form action="" className="signUp" onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              className="fc"
              placeholder="Enter name..."
              name="name"
              onChange={(e)=>{setName(e.target.value)}} value={name}
            />
          </div>
          <div className="name">
            <input
              type="tel"
              maxLength="10"
              minLength="10"
              className="fc"
              placeholder="Enter number.."
              name="mob_number"
              onChange={(e)=>{setNumber(e.target.value)}} value={mob_number}
            />
          </div>
          <div className="name">
            <input
              type="email"
              className="fc"
              placeholder="Enter email.."
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
          </div>
          <div className="name">
            <input
              type="password"
              className="fc"
              placeholder="Enter password.."
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}} value={password}
            />
          </div>
          <div className="name">
            <input
              type="password"
              className="fc"
              placeholder="Confirm password.."
              name="confirmPassword"
              onChange={(e)=>{setPassword2(e.target.value)}} value={confirmPassword}
            />
          </div>
          <div className="btn">
            <button className="button_apply">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
