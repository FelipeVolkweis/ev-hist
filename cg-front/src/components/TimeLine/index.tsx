import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';

interface TimeLineContent {
    year: string,
    content: string
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
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                        {c.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator sx={{ backgroundColor: "primary" }}>
                        <TimelineConnector sx={{ backgroundColor: "primary" }}/>
                        <TimelineDot color="primary">
                        </TimelineDot>
                        <TimelineConnector sx={{ backgroundColor: "primary" }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {c.year}
                            </Typography>
                            <Typography>{c.content}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )} else {
                    return (
                    <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        {c.year}
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