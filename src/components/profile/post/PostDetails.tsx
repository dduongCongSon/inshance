import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams(); // Extract the ID from the URL

    return (
        <div>
            <h1>Post Details</h1>
            <p>Displaying details for post ID: {id}</p>
        </div>
    );
};

export default PostDetails;