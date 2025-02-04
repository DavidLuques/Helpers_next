"use client"

import Link from "next/link"

//React Client Component  RCC   el otro es React server Component RSC
function PostCard({ post }) {
    return (
        <div >
            <Link href={`./posts/${post.id}`}>
                <h3>
                    {post.id}. {post.title}
                </h3>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => { alert("Funciono je") }} > CLICKASO </button>
        </div>
    )
}

export default PostCard