import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';
import { useState } from 'react';

interface TimeLineContent {
    year: string,
    content: string,
    picture: string,
    //redirect: string
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
                if(props.content.indexOf(c) % 2 == 0) {
                    return (
                    <>
                    <TimelineItem>
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
                        <TimelineConnector sx={{ backgroundColor: "primary" }}/>
                        <div 
                            style={{cursor: "pointer"}}
                            onClick={(e) => {
                            if(selected == props.content.indexOf(c)) {
                                setSelected(-1)
                            } else {
                                setSelected(props.content.indexOf(c))
                            }
                        }}>
                        <TimelineDot onMouseOver={(e) => {
                            setMouseOver(props.content.indexOf(c))
                        }} 
                            onMouseOut={() => {
                                setMouseOver(-1)
                            }} 
                            color={mouseOver == props.content.indexOf(c) ? "info" : "primary"}>
                            
                        </TimelineDot>
                        </div>
                        <TimelineConnector sx={{ backgroundColor: "primary" }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {c.year}
                            </Typography>
                            <Typography>{c.content}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    
                    { props.content.indexOf(c) == selected && 
                        <div style={{ backgroundColor: "red", width: "100%", margin: "2em 0"}}>CONTENT</div>
                    }
                    </>
                )} else {
                    return (
                    <TimelineItem>
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