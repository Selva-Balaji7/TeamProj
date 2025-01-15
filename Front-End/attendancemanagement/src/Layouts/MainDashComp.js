import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

const MainDashBoardComp = () => {
    return (

        <div>

         

            <div className="card border-primary">
                <div className="card-header border-primary">
                    <NavComp />
                </div>
                <div className="card-body border-primary">
                    <Outlet/>
                </div>
                <div className="card-footer border-primary">
                    <FooterComp />
                </div>


            </div>
        </div>
    )
}
export default MainDashBoardComp;