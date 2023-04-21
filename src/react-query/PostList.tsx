import { Fragment } from 'react';
import usePosts from './hooks/usePosts';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const PostList = () => {
	const pageSize = 10;
	const {
		data: posts,
		error,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
	} = usePosts({ pageSize });

	if (isLoading) return <p>Loading</p>;

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<ul className="list-group">
				{posts.pages.map((page, index) => (
					<Fragment key={index}>
						{page.map((post) => {
							return (
								<li key={post.id} className="list-group-item">
									{post.title}
								</li>
							);
						})}
					</Fragment>
				))}
			</ul>
			<button
				className="btn btn-primary my-3 ms-1"
				disabled={isFetchingNextPage}
				onClick={() => fetchNextPage()}
			>
				{isFetchingNextPage ? 'Loading...' : 'Load More'}
			</button>
		</>
	);
};

export default PostList;
