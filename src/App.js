import {
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import {Albums, Header, Posts, Todos, Comments} from './components'

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={`:postId`} element={<Posts/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;

// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.
