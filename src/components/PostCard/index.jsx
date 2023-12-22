import './index.css';

export const PostCard = ({ title, body, cover }) => (
    <section className='post-card'>
        <img src={cover} alt={title} />
        <div className='texts'>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </section>
);
