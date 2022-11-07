import { AppBar, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"

export const Navbar = () => {
  return (
    <AppBar position="static">
        <Container>
            <Toolbar>
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
            </Toolbar>
        </Container>
    </AppBar>
  )
}
