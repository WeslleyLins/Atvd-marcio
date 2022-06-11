import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Button } from "@mui/material";

import Barcelona from "../../imagens/barcelona.png";
import Sport from "../../imagens/sport.png";
import Juventus from "../../imagens/juventus.jpeg";
import "./meuContato.css";

export default function MeuContato () {
  return (
    <div className="container0">
      <div>
        <h1 className="title">Meus Times Favoritos</h1>
      </div>
      <div className="container1">
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={Sport}
                alt="bandeira do sport"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sport
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  O Sport Club do Recife é um clube brasileiro de desportos,
                  situado no bairro da Ilha do Retiro, cidade do Recife, estado
                  de Pernambuco. Meu time do coração. Também conhecido como "O
                  maior do Nordeste"!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={Barcelona}
                alt="bandeira do barcelona"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barcelona
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Futbol Club Barcelona, popularmente como Barça, é um clube de
                  futebol profissional, com sede em Barcelona, na Catalunha.
                  Para a temporada 2021-2022, a equipe disputa a La Liga, na
                  Espanha.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image={Juventus}
                alt="bandeira do juventus"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Juventus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Juventus Football Club, é um clube de futebol italiano, também
                  conhecida como Juventus de Turim, Juve ou ainda A Velha
                  Senhora. A Juve é a maior detentora de scudettos do futebol
                  Italiano com 36 títulos internos.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <Button href="/home" style={{width: "500px", marginLeft: '450px', fontWeight: 'bold'}}>Quer conhecer meus jogadores favoritos? Clica Aqui!</Button>
    </div>
  );
}