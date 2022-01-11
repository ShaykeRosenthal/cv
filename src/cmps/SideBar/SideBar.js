import GEAR_BAR from '../../assets/ggbar.png'
import classes from './SideBar.module.css'

function SideBar(props) {
    let arr = new Array(props.numOfElements)
    arr.fill(' ', 0, arr.length - 1)
    return (
        <div className={'turlak'}>
            {arr.map((el, index) => {

                return (
                    <img src={GEAR_BAR} key={index} className={classes['gear-bar']} style={{ width: `${props.elWidth}px`, left: `calc(100vw - ${0.68 * props.elWidth}px)`, top: `calc(${Math.floor(props.elWidth * (index))}px)` }} />
                )
            })}
        </div>
    )
} export default SideBar