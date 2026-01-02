export default function FilterButton({ children, handleFilterClick }) {
    return (
        <button type='button' onClick={handleFilterClick}>{children}</button>
    )
}