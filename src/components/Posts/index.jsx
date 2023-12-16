import './index.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (
    <div className='posts'>
        {posts.map((post, id) => (
            <PostCard key={id}
                title={post.title}
                body={post.body}
                cover={post.cover}
            />
        ))}
    </div>
);
