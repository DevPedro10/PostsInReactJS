import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PostCard } from '.';
import { PostCardMock } from './PostCardMock';

const postCardMock = PostCardMock;

describe('<PostCard /> Test Component', () => {
    test('Checks if the component was rendered', () => {
        render(<PostCard {...postCardMock} />)

        expect(screen.getByRole('img', { title: postCardMock.title })).toHaveAttribute('src', postCardMock.cover);
        expect(screen.getByRole('heading', { title: postCardMock.title })).toBeInTheDocument();
        expect(screen.getByText(postCardMock.body)).toBeInTheDocument();
    })
})