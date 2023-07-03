import { Typography } from "@mui/material"

const dat = [
    'SAGE, o sistema de guerra da IBM, Tecmundo, 2012, Disponível em:: <https://www.tecmundo.com.br/tecnologia-militar/17916-sage-o-sistema-de-guerra-da-ibm.htm>, Acesso em 20 de junho de 2023',
    'c:computacao_grafica [Wiki Computação], Wiki UFPR, Disponível em:: <https://wiki.inf.ufpr.br/computacao/doku.php?id=c:computacao_grafica>, Acesso em 20 de junho de 2023',
    'Semi-Automatic Ground Environment, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/Semi-Automatic_Ground_Environment>, Acesso em 20 de junho de 2023',
    "Jay W. Forrester's Project Whirlwind, HistoryOfInformation.com, Disponível em: <https://www.historyofinformation.com/detail.php?id=633>, Acesso em 20 de junho de 2023",
    'Cathode Ray Tube Explained – Everything You Need To Know, History Computer, 2022, Disponível em: <https://history-computer.com/cathode-ray-tube/>, Acesso em 20 de junho de 2023',
    'O computador IBM 704 de 1954, Museu Capixaba, 2023, Disponível em: <https://museucapixaba.com.br/hoje/computador-ibm-704-de-1954/>, Acesso em 20 de junho de 2023',
    'The evolution of computer displays, ars Technica, 2011, Disponível em: <https://arstechnica.com/gadgets/2011/01/the-evolution-of-computer-displaysthe-evolution-of-computer-displays/>, Acesso em 20 de junho de 2023',
    'Tracking the Man-Made Satellite, RF Cafe, 2014, Disponível em: <https://www.rfcafe.com/references/radio-news/tracking-man-made-satellite-july-1957-radio-tv-news.htm>, Acesso em 20 de junho de 2023',
    'A Brief History of Computer Displays, PCWorld, 2010, Disponível em:  <https://www.pcworld.com/article/504380/historic-monitors-slideshow.html>, Acesso em 20 de junho de 2023',
    'A história dos monitores, do CRT ao OLED [vídeo], Tecmundo, 2018, Disponível em: <https://www.tecmundo.com.br/mercado/135919-historia-monitores-crt-oled-video.htm>, Acesso em 20 de junho de 2023',
    'A Brief History of PC Monitors, Monitor Nerds, 2016, Disponível em: <https://monitornerds.com/history-of-computer-monitors/>, Acesso em 20 de junho de 2023',
    'IBM 740, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/IBM_740>, Acesso em 20 de junho de 2023',
    'William Fetter First Uses a Computer to Create Three-Dimensional Images of the Human Body, HistoryOfInformation.com, Disponível em: <https://www.historyofinformation.com/detail.php?id=818>, Acesso em 20 de junho de 2023',
    'Operator working with early CAD program, Computer History, Disponível em: <https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/216/587>, Acesso em 20 de junho de 2023',
    'William Fetter, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/William_Fetter>, Acesso em 20 de junho de 2023',
    'John Withney e o Grafismo em Movimento, Arte e Multimédia, 2015, Disponível em: <https://digartdigmedia.wordpress.com/2015/04/25/john-withney-e-o-grafismo-em-movimento/>, Acesso em 20 de junho de 2023',
    'Os precursores do motion graphics – parte 1, JOAOVELHO.COM, 2018, Disponível em: <https://joaovelho.com/os-precursores-do-motion-graphics-parte-1/>, Acesso em 20 de junho de 2023',
    'John Whitney (animator), Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/John_Whitney_(animator)>, Acesso em 20 de junho de 2023',
    'Sketchpad, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/Sketchpad>, Acesso em 20 de junho de 2023',
    'Sketchpad Guide, History Computer, 2022, Disponível em: <https://history-computer.com/sketchpad-guide/>, Acesso em 20 de junho de 2023',
    'What is Sketchpad?, technopedia, 2014, Disponível em: <https://www.techopedia.com/definition/22119/sketchpad>, Acesso em 21 de junho de 2023',
    'MORTE DE CHARLES CSURI, O PRECURSOR DA ARTE POR COMPUTADOR, Art News, 2022, Disponível em: <https://www.artmajeur.com/pt/magazine/2-art-news/morte-de-charles-csuri-o-precursor-da-arte-por-computador/331264>, Acesso em 21 de junho de 2023',
    'CHARLES CSURI STATISTICS AS AN INTERACTIVE ART OBJECT, Atari Archives Disponível em: <https://www.atariarchives.org/artist/sec25.php>, Acesso em 21 de junho de 2023',
    'Edgar Horwood, Urisa, Disponível em: <https://www.urisa.org/awards/edgar-horwood/>, Acesso em 21 de junho de 2023',
    'IBM 2250, Wikipedia, 2023, Disponível em:  <https://en.wikipedia.org/wiki/IBM_2250#Overview>, Acesso em 21 de junho de 2023',
    'The IBM 2250 Display Unit, Columbia University, Disponível em:  <http://www.columbia.edu/cu/computinghistory/2250.html>, Acesso em 21 de junho de 2023',
    'Sete curiosidades sobre o Odyssey, videogame famoso nos anos 80, TechTudo, 2021, Disponível em: <https://www.techtudo.com.br/listas/2021/09/sete-curiosidades-sobre-o-odyssey-videogame-famoso-nos-anos-80.ghtml>, Acesso em 21 de junho de 2023',
    'Magnavox Odyssey, Pro Digital POP, 2023, Disponível em: <https://pop.proddigital.com.br/consoles/magnavox-odyssey>, Acesso em 21 de junho de 2023',
    'Conheça Magnavox Odyssey, o primeiro vídeo game do mundo, GAMER_na_real, 2021, Disponível em: <https://gamernareal.com.br/magnavox-odyssey/>, Acesso em 21 de junho de 2023',
    'Tony Pritchett, still from The Flexipede, 1967, first computer-animated British film, Catherine Mason, Disponível em:  <http://www.catherinemason.co.uk/remembering-tony-pritchett/tony-pritchett-still-from-the-flexipede-1967-first-computer-animated-british-film/>, Acesso em 21 de junho de 2023',
    'Flexipede (1968), History of Computer Animation (CGI), Disponível em:  <https://computeranimationhistory-cgi.jimdofree.com/flexipede-1968/>, Acesso em 21 de junho de 2023',
    'Magnavox Odyssey – O primeiro console de videogame do mundo, Viva Tatuapé, Disponível em: <https://vivatatuape.com.br/portal/2022/07/20/magnavox-odyssey-o-primeiro-console-de-videogame-do-mundo/>, Acesso em 21 de junho de 2023',
    'Z-Buffer, Wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Z-buffer>, Acesso em 21 de junho de 2023',
    'Edwin Catmull, Wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Edwin_Catmull>, Acesso em 21 de junho de 2023',
    'Computação Gráfica - Linha do Tempo, Bruno Dorta, Disponível em:  <https://www.brunodorta.com.br/cg/linha-do-tempo.html>, Acesso em 21 de junho de 2023',
    'Mapeamento de Textura, Wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Mapeamento_de_textura>, Acesso em 21 de junho de 2023',
    '"It has become feasible to generate useful movies with the computer", Befores & Afters, 2020, Disponível em: <https://beforesandafters.com/2020/09/07/it-has-become-feasible-to-generate-useful-movies-with-the-computer/>, Acesso em 21 de junho de 2023',
    'Computer Animated Hand (1972), History of Computer Animation (CGI), Disponível em: <https://computeranimationhistory-cgi.jimdofree.com/computer-animated-hand-1972/>, Acesso em 21 de junho de 2023',
    'ED CATMULL: 1972, Revista Trip, 2011, Disponível em:  <https://revistatrip.uol.com.br/trip/ed-catmull-1972>, Acesso em 21 de junho de 2023',
    'Bui Tuong Phong, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/Bui_Tuong_Phong>, Acesso em 21 de junho de 2023',
    'Inbetweening, Knoow.net, 2017, Disponível em: <https://knoow.net/ciencinformtelec/informatica/inbetween/>, Acesso em 21 de junho de 2023',
    'Differences between Displacement, Bump and Normal Maps, Plural Sight, 2022, Disponível em: <https://www.pluralsight.com/blog/film-games/bump-normal-and-displacement-maps>, Acesso em 21 de junho de 2023',
    'Bump Mapping, Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/Bump_mapping>, Acesso em 21 de junho de 2023',
    'Tudo o que você precisa saber sobre Ray Tracing, Nuuvem Blog, 2019, Disponível em: <https://blog.nuuvem.com/tudo-o-que-voce-precisa-saber-sobre-ray-tracing/>, Acesso em 21 de junho de 2023',
    'Ray Tracing: Entenda a tecnologia de iluminação que chegou antes em placas GeForce, Adrenaline, 2022, Disponível em: <https://www.adrenaline.com.br/nvidia/ray-tracing-entenda-a-tecnologia-de-iluminacao-que-chegou-antes-em-placas-geforce/>, Acesso em 21 de junho de 2023',
    'Donkey Kong (game), Mario Wiki, 2023, Disponível em:  <https://www.mariowiki.com/Donkey_Kong_%28game%29#Story>, Acesso em 22 de junho de 2023',
    'Autodesk AutoCAD 1.x (DOS), WinWorld, Disponível em:  <https://winworldpc.com/product/autodesk-autocad/1x-dos>, Acesso em 22 de junho de 2023',
    'CURIOSIDADES DO AUTOCAD, DWG Cursos, 2022, Disponível em:  <https://dwgcursos.com.br/curiosidades-do-autocad/>, Acesso em 22 de junho de 2023',
    'Introdução à informática para Radiologia, tecnologiaradiologica.com, 2007, Disponível em: <https://www.tecnologiaradiologica.com/materia_informaticaTC1.htm>, Acesso em 22 de junho de 2023',
    'Influência do tamanho do voxel na qualidade de imagem tomográfica: revisão de literatura, revodonto.bvsalud.org, 2013, Disponível em: <http://revodonto.bvsalud.org/scielo.php?script=sci_arttext&pid=S1413-40122013000300016>, Acesso em 22 de junho de 2023',
    'Video Graphics Array, wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Video_Graphics_Array>, Acesso em 22 de junho de 2023',
    'SVGA, wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/SVGA>, Acesso em 22 de junho de 2023',
    'Diferença entre SVGA e VGA, differbetween.com, 2021, Disponível em: <https://pt.differbetween.com/article/difference_between_svga_and_vga>, Acesso em 22 de junho de 2023',
    'Qual foi o primeiro site criado?, hardware.com.br, 2022, Disponível em: <https://www.hardware.com.br/artigos/qual-foi-o-primeiro-site-criado/>, Acesso em 22 de junho de 2023',
    'Tim Berners-Lee, wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Tim_Berners-Lee>, Acesso em 22 de junho de 2023',
    'Mosaic, o navegador que revolucionou a web, completa 25 anos, 2018, Disponível em: <https://canaltech.com.br/navegadores/mosaic-o-navegador-que-revolucionou-a-web-completa-25-anos-112428/>, Acesso em 22 de junho de 2023',
    'Netscape, wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Netscape>, Acesso em 22 de junho de 2023',
    'Netscape, infopedia.pt, 2023, Disponível em: <https://www.infopedia.pt/apoio/artigos/$netscape>, Acesso em 22 de junho de 2023',
    'Momento Netscape: o que um IPO dos anos 90 tem a ver com a chegada da Coinbase à Bolsa, warren.com.br, 2021, Disponível em: <https://warren.com.br/magazine/momento-netscape/>, Acesso em 22 de junho de 2023',
    'Internet Explorer 1, wikipedia, 2023, Disponível em: <https://pt.wikipedia.org/wiki/Internet_Explorer_1>, Acesso em 22 de junho de 2023',
    'Internet Explorer faz 15 anos, gizmodo.uol.com.br, 2010, Disponível em: <https://gizmodo.uol.com.br/internet-explorer-faz-15-anos/>, Acesso em 22 de junho de 2023',
    'Internet Explorer 1.0, webdesignmuseum.org, 2020, Disponível em: <https://www.webdesignmuseum.org/old-software/web-browsers/internet-explorer-1-0>, Acesso em 22 de junho de 2023',
    'HISTÓRIA DOS SOFTWARES: SKETCHUP, razor.com.br, 2020, Disponível em: <https://razor.com.br/blog/arquitetura-e-construcao/historia-dos-softwares-sketchup/>, Acesso em 22 de junho de 2023',
    'SketchUp completa 20 anos! Conheça mais essa história., blog.totalcad.com.br, 2020, Disponível em: <https://blog.totalcad.com.br/sketchup-completa-20-anos/>, Acesso em 22 de junho de 2023',
    'SketchUp, downloadsource.com.br, 2021, Disponível em: <https://www.downloadsource.com.br/3307/sketchup/>, Acesso em 20 de junho de 2023',
    'Sims 3 & Sims 4 Comparisons by Mushilda, simsvip.com, 2014, Disponível em: <https://simsvip.com/2014/03/13/thesims3-thesims4-comparisons-by-mushilda/>, Acesso em 22 de junho de 2023',
    'Confira lista de computadores all-in-one de diversos tamanhos e preços, techtudo.com.br, 2013, Disponível em: <https://www.techtudo.com.br/noticias/2013/10/confira-lista-de-computadores-all-one-de-diversos-tamanhos-e-precos.ghtml>, Acesso em 22 de junho de 2023',
    'Apple divulga a lista dos jogos mais vendidos em 2009 para o iPhone, G1, 2009, Disponível em: <https://g1.globo.com/Noticias/Games/0,,MUL1408790-9666,00-APPLE+DIVULGA+A+LISTA+DOS+JOGOS+MAIS+VENDIDOS+EM+PARA+O+IPHONE.html>, Acesso em 22 de junho de 2023',
    'Battlezone (Arcade-Spiel), wikipedia, 2023, Disponível em: <https://de.wikipedia.org/wiki/Battlezone_%28Arcade-Spiel%29>, Acesso em 22 de junho de 2023',
    'Começou Assim: Maze War, o primeiro FPS de todos os tempos, arkade.com.br, 2021, Disponível em: <https://www.arkade.com.br/comecou-assim-maze-war-o-primeiro-fps-de-todos-os-tempos/>, Acesso em 22 de junho de 2023',
    'Maze (1973 video game), Wikipedia, 2023, Disponível em: <https://en.wikipedia.org/wiki/Maze_(1973_video_game)>, Acesso em 22 de junho de 2023',
    'QUAL foi o PRIMEIRO JOGO 3D?, Youtube, 2020, Disponível em: <https://www.youtube.com/watch?v=oXXziwV4nKY&t=416s>, Acesso em 22 de junho de 2023',
  ]

export const Sources = () => {
    console.log(dat)
    return (
        <>
            <Typography color="primary" fontWeight="bold" variant="subtitle1" align="left" gutterBottom>
                Fontes de Pesquisa
            </Typography>
            {dat.map((c) => {
                let regex = /\<(.*?)\>/;
                let strToMatch = c;
                let matched = regex.exec(strToMatch);

                return (
                <>
                    <Typography variant="body1" align="justify">
                        <div dangerouslySetInnerHTML={{__html: matched != null ? c.replace(matched[1], `<a target='_blank' href='${matched[1]}'>${matched[1]}</a>`) : c}} />
                    </Typography>
                    <br/>
                </>

                )
            })}

        </>
    )
}