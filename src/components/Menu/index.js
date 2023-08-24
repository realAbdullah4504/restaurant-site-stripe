import Carousal from "./Carousal";
import { useEffect } from "react";
import { anim } from "../../main";
import MenuDetail from "./MenuDetail";
import MenuFilter from "./MenuFilter";

const Menu=({deals})=>{
    useEffect(() => {
        anim(window.$);
      }, [])

    return(
        <>
        <Carousal/>
        <MenuDetail deals={deals}/>
        <MenuFilter/>
        <h1>this is menu</h1>
        </>
    )
}
export default Menu;