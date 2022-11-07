import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';


export const Navbar = () => {

    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = ( evt ) => {
        setAnchorNav(evt.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    }


    const pages = [
        { label: 'Inicio', route:  '/' },
        { label: 'Sobre mi', route:  '/sobre_mi' },
        { label: 'Certificados', route:  '/certificados' },
        { label: 'Contacto', route:  '/contacto' },
    ];

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                {/* Menu responsive */}

                {/* Texto (Angel Travieso) */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Angel Travieso
                </Typography>

                <Box
                    justifyContent= "flex-end"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="opciones"
                        aria-controls="menu"
                        aria-haspopup="true"
                        onClick={ handleOpenNavMenu }
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={ anchorNav }
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={ Boolean(anchorNav) }
                        onClose={ handleCloseNavMenu }
                        sx={{
                            display: { sx: "block", md: "none" },
                        }}
                    >
                        {
                            pages.map(({ label, route }) => (
                                <MenuItem key={ label } onClick={ handleCloseNavMenu }>
                                    <Link component={ RouterLink } color="inherit" to={ route }>
                                        <Typography textAlign="center">{ label }</Typography>
                                    </Link>
                                </MenuItem>
                            ))
                        }
                    </Menu>
                </Box>

                {/* Menu no responsive */}
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    Angel Travieso
                </Typography>
                <Box
                    justifyContent= "flex-end"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" }
                    }}
                >
                    {
                        pages.map(({ label, route }) => (
                            <Button key={ label }
                                component={ RouterLink }
                                color="inherit"
                                to={ route }
                                onClick={ handleCloseNavMenu }
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                { label }
                            </Button>
                        ))
                    }
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}