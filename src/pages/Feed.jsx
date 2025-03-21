import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Post from '../components/feed/Post'
import POSTS from '../data/Posts'

const Feed = () => {
    return (
        <MainLayout>
            {POSTS.map((post, i) => (
                <Post
                    key={i}
                    pinned={post.pinned}
                    date={post.date}
                    tag={post.tag}
                    title={post.title}
                    content={post.content}
                    image={post.image}
                />
            ))}
        </MainLayout>
    )
}

export default Feed