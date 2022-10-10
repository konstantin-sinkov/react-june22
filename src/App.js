import {useSelector} from "react-redux";

import './App.css';
import {Header, Posts, Users} from "./components";

function App() {
    const {currentUser} = useSelector(state => state.userReducer);
    
    return (
        <div>
            {currentUser ? <Header/> : ''}
            <div>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
