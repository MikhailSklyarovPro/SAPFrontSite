import './ButtonClassic.scss';

export const ButtonClassic = ({ onClick, text, ...props }) => {
  return (
    <button className='buttonClassic' onClick={onClick} style={props}>{text}</button>
  )
}
