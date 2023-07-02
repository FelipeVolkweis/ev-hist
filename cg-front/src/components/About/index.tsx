import { Typography } from "@mui/material"
import { intro, prime, crt } from "../About/infos"

export const About = () => {
    return(
    <>  
    <div>
        <Typography color="primary" fontWeight="bold" variant="subtitle1" align="left" gutterBottom>
        Introdução
        </Typography>
        <Typography variant="body1" align="justify">
            {intro}
        </Typography>
        <div className="sketchfab-embed-wrapper" style={{marginTop: "2em"}}> <iframe title="Old Pc" width="100%" height="480" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f27c8a945f7740f98d11700c552c9852/embed"> </iframe> <p style={{fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A"}}> <a href="https://sketchfab.com/3d-models/old-pc-f27c8a945f7740f98d11700c552c9852?utm_medium=embed&utm_campaign=share-popup&utm_content=f27c8a945f7740f98d11700c552c9852" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}> Old Pc </a> by <a href="https://sketchfab.com/ThibautReimel?utm_medium=embed&utm_campaign=share-popup&utm_content=f27c8a945f7740f98d11700c552c9852" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}> ThibautReimel </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f27c8a945f7740f98d11700c552c9852" target="_blank" rel="nofollow" style={{fontWeight: "bold", color: "#1CAAD9"}}>Sketchfab</a></p></div>
    </div>
    <div style={{marginTop: "2em"}}>
        <Typography color="primary" fontWeight="bold" variant="subtitle1" align="left" gutterBottom>
            Nos primórdios…
        </Typography>
        <Typography variant="body1" align="justify">
            {prime}
        </Typography>
    </div>
    <div style={{margin: "1em 0"}}>
        <Typography color="primary" fontWeight="bold" variant="subtitle1" align="left" gutterBottom>
        Sem eles, não haveria imagem para computador
        </Typography>
        <Typography variant="body1" align="justify">
            {crt}
        </Typography>
        <iframe style={{margin: "2em auto 0 auto"}} width="100%" height="480" src="https://www.youtube.com/embed/ZUkjLEdOIWw" title="Tubo de raios catódicos" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    </>
    ) 
}