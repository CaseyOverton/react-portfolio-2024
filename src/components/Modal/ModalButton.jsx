export default function ModalButton({children, onSelect, isSelected}) {

    return (
        <li>
            <button className={isSelected ? "active" : ''} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}