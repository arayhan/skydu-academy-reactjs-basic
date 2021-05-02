import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
	state = {
		posts: null,
	};

	componentDidMount() {
		this.fetchPosts();
	}

	fetchPosts = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then((data) => data.json())
			.then((json) => this.setState({ posts: json }));
	};

	render() {
		const { posts } = this.state;
		console.log(posts);

		return (
			<div>
				<h1>Blog</h1>
				{!posts && <div>Loading Posts...</div>}
				{posts && (
					<table border="1">
						<thead>
							<tr>
								<th>No.</th>
								<th>Title</th>
								<th>Body</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post, index) => (
								<tr>
									<td>{index + 1}</td>
									<td>{post.title}</td>
									<td>{post.body}</td>
									<td>
										<Link to={`/blog/${post.id}`}>Detail</Link>
										<button>Edit</button>
										<button>Hapus</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	}
}

export default Blog;
