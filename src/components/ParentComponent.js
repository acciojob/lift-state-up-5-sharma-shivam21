import React,{useState} from "react";
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const[isLoogedIn, setIsLoogedIn] = useState(false);

    const handleLogin = () => {
        setIsLoogedIn(true);
    };

    return(
        <div>
            <h1>{isLoogedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
            <ChildComponent isLoogedIn={isLoogedIn} onLogin={handleLogin}/>

        </div>
    );
};
export default ParentComponent;