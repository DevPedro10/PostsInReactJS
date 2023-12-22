import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Posts } from '.';
import { PostsMock } from './PostsMock';

describe('<Post /> Test Component', () => {
    test('Checks if the post contains all param checked', () => {
        render(<Posts />)
    })
})

