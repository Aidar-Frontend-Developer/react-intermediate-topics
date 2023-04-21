import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import APIClient from '../services/apiClient';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

interface PostQuery {
	pageSize: number;
}

const appClient = new APIClient<Post>(
	'https://jsonplaceholder.typicode.com/posts',
);

const usePosts = (query: PostQuery) => {
	const fetchPosts = (pageParam: number) =>
		axios
			.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_start: (pageParam - 1) * query.pageSize,
					_limit: query.pageSize,
				},
			})
			.then((res) => res.data);

	return useInfiniteQuery<Post[], Error>({
		queryKey: ['posts', query],
		queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
		staleTime: 1 * 60 * 1000, // 1m
		keepPreviousData: true,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.length > 0 ? allPages.length + 1 : undefined;
		},
	});
};

export default usePosts;
