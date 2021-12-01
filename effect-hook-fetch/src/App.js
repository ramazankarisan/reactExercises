import React, { useEffect, useState } from "react";

export default function App() {

	const [post, setPost] = useState([]);
	const [id, setId] = useState(1)

	useEffect(() => {
		getRandomPost();
	}, [id])

	function getRandomPost() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(obj => obj.json())
			.then(parsed => {

				setPost(parsed[Math.floor(Math.random() * (parsed.length))])

			})
			.catch(err => console.log(err))
	}

	return <div>
		<button onClick={() => setId(id + 1)}>click for random post</button>
		<h1> {` title : ${post.title}`}</h1>
		<p>{`post body : ${post.body}`}</p>

	</div>;
}
