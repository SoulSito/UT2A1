import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



function Login() {
    return (
        <Container>
            <header>
                <Typography variant="h1" color="primary">
                    Esto esta creado por Anibal
                </Typography>
            </header>

            <main>
                <Typography variant="h2" color="secondary">
                    Esto esta creado por Anibal
                </Typography>
                <Typography variant="h3" color="error">
                    Esto esta creado por Anibal
                </Typography>
                <Typography variant="subtitle1" color="success">
                    Esto esta creado por Anibal
                </Typography>
                <Typography variant="body1" color="warning">
                    Esto esta creado por Anibal
                </Typography>
                <Typography variant="caption" color="primary">
                    Esto esta creado por Anibal
                </Typography>
            </main>
            <body>
                <Button variant="text" color="secondary">Gato 1</Button>
                <Button variant="contained" color="error">Gato 2</Button>
                <Button variant="outlined" color="success">Gato 3</Button>
                
            </body>

            <footer>
                <Typography variant="body2" color="warning">
                    © 2024 Anibal Marquez Guedez
                </Typography>
            </footer>
        </Container>
    );
}

export default Login;