import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Post from '../components/feed/Post'

const Feed = () => {
    return (
        <MainLayout>
            <Post
                pinned={true}
                date="20 Jan 2023"
                tag="Feelin' fresh"
                title="Hello World!"
                content="This is my site where I try and post about what I'm up to and how to do things with code."
                image="./logo-koalav2.png"
            />
        </MainLayout>
    )
}

export default Feed