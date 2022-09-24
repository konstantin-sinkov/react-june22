import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {services} from "../../services/service";
import {Post} from "../post/Post";

const Posts = () => {
    const {postId} = useParams();
    // console.log(postId);
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        services.getPostById(postId).then(value => setPosts([...value.data]));
    }, [postId]);
    
    console.log(posts);
    
    return (
        <div>
            <h3>Posts by ID</h3>
            {posts.map((post, index) =>
                <Post
                    post={post}
                    key={index}
                />)}
        </div>
    );
}

export {Posts};
