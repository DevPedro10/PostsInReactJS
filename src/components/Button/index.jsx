import './Button.css'

export const Button = ({ onClick, className, title, id }) => (
    <button id={id} onClick={onClick} className={className}>{title}</button>
);