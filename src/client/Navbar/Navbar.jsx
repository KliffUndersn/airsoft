import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import { Link } from "react-router-dom";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const styles = {
  appbar: {
    position: "fixed",
  },
};
export default function MenuAppBar() {
  // const [value, setValue] = React.useState("recents");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <div>
        <ul>
          <li>Главная</li>
          <li>Услуги и цены</li>
          <li>Контакты</li>
          <li>Правила</li>
        </ul>
      </div>
    </>
  );
}

// <BottomNavigation sx={{ width: 1 }} value={value} onChange={handleChange}>
//   <BottomNavigationAction
//     label="Home"
//     value="home"
//     component={Link}
//     to="/"
//     icon={<HomeIcon />}
//   />
//   <BottomNavigationAction
//     label="Price"
//     value="price"
//     component={Link}
//     to="/price"
//     icon={<AttachMoneyIcon />}
//   />
//   <BottomNavigationAction
//     label="Contacts"
//     value="contacts"
//     component={Link}
//     to="/contacts"
//     icon={<ContactPhoneIcon />}
//   />
// </BottomNavigation>
