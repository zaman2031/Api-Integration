import React from 'react';

const Posts = ({ posts }) => {
    return (
        <div>
            <table className='tableStyle'>
                <thead >
                    <tr>
                        <th className='hederStyling'>Id #</th>
                        <th className='hederStyling'>NAME</th>
                        <th className='hederStyling'>TAGLINE</th>
                        <th className='hederStyling'>TARGET_OG</th>
                        <th className='hederStyling'>Image</th>
                    </tr>
                </thead>
                <tbody >
                    {posts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td className='bodyStyling'>{post.id}</td>
                                <td className='bodyStyling'>{post.name}</td>
                                <td className='bodyStyling'>{post.tagline}</td>
                                <td className='bodyStyling'>{post.target_og}</td>
                                <td className='bodyStyling'><img className='main-image' src={post.image_url} alt="Image" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;