import React, { useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
	
	const [email, setEmail]=useState("");
	const [password, setPassword]=useState("");

	const navigate = useNavigate();
	const {store, actions} =  useContext(Context);

	const onSubmit=()=> {
		if(email === ""){
			alert("Please Insert the email");
		} else if (password === ""){
			alert ("Please Insert the password");
		} else {
			fetch(`https://automatic-adventure-qrrj5q9rvgg29vj9-3001.app.github.dev/api/token`, { 
				method: "POST",
				headers: { 
					"Content-Type": 
					"application/json" 
				},
				body: JSON.stringify({ email, password}) 
     		})
			.then((res) => res.json())
			.then((result) => {

				console.log("Token is here!", result);
				localStorage.setItem("jwt-token", result.token);
				actions.storeUserId(result.user_id);
				alert("You are logged in!")
				navigate("/")

			}).catch((err) => {
				console.log(err);
			})
		}
	}

	return (
		<div className="container">
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput" className="form-label">Email ID:</label>
				<input 
					type="text" 
					className="form-control" 
					id="formGroupExampleInput" 
					placeholder="Insert your email!..."
					value={email}
					onChange={(e)=> setEmail(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">Password:</label>
				<input 
					type="password" 
					className="form-control" 
					id="formGroupExampleInput2" 
					placeholder="Insert Password here!"
					value={password}
					onChange={(e)=> setPassword(e.target.value)}
				/>
			</div>
			<div className="col-12">
    			<button type="submit" className="btn btn-primary" onClick={onSubmit}>Sign in</button>
  			</div>
		</div>
	);
};
