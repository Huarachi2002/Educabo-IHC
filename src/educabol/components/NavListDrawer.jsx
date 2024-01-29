import { Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

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
                                <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </nav>
    </Box>
  )
}
