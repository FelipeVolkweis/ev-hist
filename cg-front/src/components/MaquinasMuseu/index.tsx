import { Typography } from "@mui/material"

export const MaquinasMuseu = () => {
    return (
        <>
        <div>
            <Typography color="primary" fontWeight="bold" variant="subtitle1" align="left" gutterBottom>
            Máquinas do Museu
            </Typography>
            <Typography variant="body1" align="justify">
            Depois que você percorreu todo nosso site, que tal conhecer mais sobre algumas máquinas que fizeram parte da Evolução Gráfica e estão bem pertinho de você, aqui no Museu da Computação, no ICMC da Universidade USP de São Carlos? 
            </Typography>
            <iframe style={{margin: "2em auto 0 auto"}} width="100%" height="480" src="https://www.youtube.com/embed/335Kg-RH-Lw" title="História da Computação Gráfica - Museu ICMC-USP" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </>
    )
}