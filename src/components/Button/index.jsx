import './Button.css'

export const Button = ({ onClick, className, title }) => (
            <button onClick={onClick} className={className}>{title}</button>
);