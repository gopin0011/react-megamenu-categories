import { useState } from "react";

import '../../assets/css/flaticon.css';
import '../../assets/css/ionicons.min.css';

const CategoriesMenu = (props) => {
    const { navLinksData } = props;
    const [showSubMenu, setShowSubMenu] = useState([]);
    const baseURL = "http://dev-jualankita.localhost/";

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
        //   console.log("hover");
          let arr = [...prev];
          arr[subMenuId] = true;
          return arr;
        });
      };
      const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
        //   console.log("leaving");
          let arr = [...prev];
          arr[subMenuId] = false;
          return arr;
        });
      };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-3">
            <div id="navCatContent" className="nav_cat navbar collapse show">
            <ul> 
            { navLinksData && navLinksData.map((el, i) => {
                return (
                    <li 
                        key={el.id} 
                        className="dropdown dropdown-mega-menu"
                        onMouseEnter={(event) => (el.childs.length > 0) ? subMenuOnMouseEnterHandler(el.id) : null}
                        onMouseLeave={(event) => (el.childs.length > 0) ? subMenuOnMouseLeaveHandler(el.id) : null}
                    >
                        <a className={"dropdown-item nav-link " + (el.childs.length > 0 ? 'dropdown-toggler' : 'nav_item')} href="#"><i className="flaticon-"><img src={baseURL + "storage/uploads/icons/" + el.icon_file} /></i> 
                            <span>{el.name_category}</span>
                        </a>
                        { el.childs.length > 0 && 
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-5">
                                        <ul className="d-lg-flex">
                                            <li className="mega-menu-col col-lg-6">
                                                <ul> 
                                                    <li className="dropdown-header">{el.name_category}</li>
                                                    { showSubMenu[el.id] && el.childs.map((ele) => {
                                                        return (
                                                            <li><a className="dropdown-item nav-link nav_item" href="#"><i className="flaticon-"><img src={baseURL + "storage/uploads/icons/" + ele.icon_file} /></i>{ele.name_category}</a></li>
                                                        )
                                                    }) }
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-7">
                                        <div className="header-banner2">
                                            <a href="#"><img src={require('../../assets/images/menu_banner4.jpg')} alt="menu_banner4" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                )
                
            })}
            </ul>
            </div>
        </div>
    );
}

export default CategoriesMenu;