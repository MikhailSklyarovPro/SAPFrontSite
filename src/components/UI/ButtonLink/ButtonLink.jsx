import './ButtonLink.scss'

export const ButtonLink = ({ text, ...props }) => {
    return (
        <button className='buttonLink'>{text}</button>
    )
}
