import React from "react"
import Header from "./components/Header.js"
import Post from "./components/Post.js"
import data from "./data.js"

export default function App() {
    const posts = data.map(location => 
        <Post 
            key={location.title}
            {...location}
        />
        )
    return (
        <div>
            <Header />
            <main>
                {posts}
            </main>
        </div>
    )
}