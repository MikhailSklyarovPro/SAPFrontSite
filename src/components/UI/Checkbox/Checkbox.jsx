import './Checkbox.scss'

export const Checkbox = ({ label, onClick, ...props }) => {
    return (
        <div className='contentRow'>
            <input type="checkbox" className="customCheckbox Yes" id="customCheckboxYes" onClick={onClick} />
            <label htmlFor="customCheckboxYes">{label}</label>
        </div>
    )
}
