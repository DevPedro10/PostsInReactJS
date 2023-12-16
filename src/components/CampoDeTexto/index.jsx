import './CampoDeTexto.css'

export const CampoDeTexto = ({onChange, className, tooltip }) => {
    return (
        <input
            type='search'
            onChange={onChange}
            className={className}
            placeholder={tooltip}
        />
    )
}