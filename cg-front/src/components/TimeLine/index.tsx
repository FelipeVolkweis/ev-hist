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
                        sx={{ m: 'auto 0' }}
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
                        <a href="sim1.html" target="_blank">
                            <TimelineDot color="primary">
                            </TimelineDot>
                        </a>
                        <TimelineConnector sx={{ backgroundColor: "primary" }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {c.year}
                            </Typography>
                            <Typography>{c.content}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    </>
                )} else {
                    return (
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
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