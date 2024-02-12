import { Button } from "./style"

const MiniButton = ({type, icon, label, onClick}) => {
    return(
        <Button type={type?type : 'button'} onClick={onClick}>{icon && icon}{label && label}</Button>
    )
}

export default MiniButton;