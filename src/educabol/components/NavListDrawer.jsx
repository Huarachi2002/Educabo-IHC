import { OtherHouses } from "@mui/icons-material"
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

export const NavListDrawer = ({navlist}) => {
  return (
    <Box sx={{width:250 , bgcolor:'Background.paper'}}>
        <nav>
            <List>
                {navlist.map(item =>(
                    <ListItem disablePadding key={item.title}>
                        <ListItemButton
                            component="a"
                            href={item.path}
                        >
                                <NavLink color="text.black" to={item.path} key={item.title}>{item.title}</NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </nav>
    </Box>
  )
}
