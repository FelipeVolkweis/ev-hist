import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

interface TimeLineContent {
    year: string,
    content: string,
    picture: string,
    redirect: string,
    texto: string
}

interface IProps {
    content: TimeLineContent[]
}

export const TimeLine = (props: IProps) => {
    const [selected, setSelected] = useState(-1);

    const [mouseOver, setMouseOver] = useState(-1); 

    return(
        <>
        <Timeline position="alternate">
        {
            props.content?.map((c: TimeLineContent) => {
                if(c.texto.length > 0) {
                    return (
                    <>
                    <TimelineItem key={c.content}>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0', textAlign: "center" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                        <img 
                            style={{
                                width: "100%",
                                margin: "2em 0"
                            }}
                            src={c.picture}/>
                        </TimelineOppositeContent>
                        <TimelineSeparator sx={{ backgroundColor: "primary" }}>
                        <TimelineConnector sx={{ backgroundColor: "primary", width: "15%" }}/>
                        <div 
                            className={props.content.indexOf(c) == 0 ? "shake" : ""}
                            style={{cursor: "pointer"}}
                            onClick={() => {
                            if(selected == props.content.indexOf(c)) {
                                setSelected(-1)
                            } else {
                                setSelected(props.content.indexOf(c))
                            }
                        }}>
                        <TimelineDot 
                            className={props.content.indexOf(c) == 0 ? "colorChange" : ""}
                            onMouseOver={() => {
                                setMouseOver(props.content.indexOf(c))
                            }} 
                            onMouseOut={() => {
                                setMouseOver(-1)
                            }} 
                            color={mouseOver == props.content.indexOf(c) ? "info" : "primary"}>
                            <KeyboardDoubleArrowDownIcon sx={{ display: { md: 'flex' }, fontSize: "1em" }} />
                        </TimelineDot>
                        </div>
                        <TimelineConnector sx={{ backgroundColor: "primary", width: "15%" }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {c.year}
                            </Typography>
                            <Typography>{c.content}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    
                    { props.content.indexOf(c) == selected && 
                        <div style={{width: "100%", margin: "2em 0"}}>
                            <Typography>{c.texto}</Typography>
                            <br></br>
                            { c.redirect && <iframe width="100%" height="590" src={c.redirect.replace(`/watch?v=`, `/embed/`)} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                        </div>
                    }
                    </>
                )} else {
                    return (
                    <TimelineItem key={c.content}>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0', textAlign: "center" }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <img 
                            style={{
                                width: "100%",
                                margin: "2em 0"
                            }}
                            src={c.picture}/>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot variant="outlined" color="primary">
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {c.year}
                            </Typography>
                            <Typography>{c.content}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )}
            })
        }   
        </Timeline>
        </>
    )
}