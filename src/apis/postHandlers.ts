import axios from 'axios';
import { Post } from '../types/post.type';

const BASE_URL = 'https://67a32451409de5ed52578cc6.mockapi.io/posts';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(BASE_URL);
  return response.data.map((post) => ({
    ...post,
    status: Boolean(post.status),
  }));
};

export const getPostById = async (postId: number | string): Promise<Post | null> => {
  try {
    const response = await axios.get<Post>(`${BASE_URL}/${postId.toString()}`);
    return response.data;
  } catch (error) {
    console.error(`Post with ID ${postId} not found.`, error);
    return null;
  }
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  try {
    const response = await axios.post<Post>(BASE_URL, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const updatePost = async (post: Post): Promise<Post> => {
  try {
    const response = await axios.put<Post>(`${BASE_URL}/${post.id}`, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating post with ID ${post.id}:`, error);
    throw error;
  }
};

export const deletePost = async (postId: number | string): Promise<void> => {
  try {
    const post = await getPostById(postId);
    if (post) {
      await axios.delete(`${BASE_URL}/${postId.toString()}`);
      console.log(`Post with ID ${postId} deleted.`);
    } else {
      console.warn(`Post with ID ${postId} does not exist.`);
    }
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
    throw error;
  }
};