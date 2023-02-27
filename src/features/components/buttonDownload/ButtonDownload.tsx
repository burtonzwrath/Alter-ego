import React, {useEffect, useRef} from 'react';
import {Box, Button, makeStyles, Slide} from "@mui/material";
import {increment} from "../../../redux/news/newsSlice";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getNews} from "../../../redux/news/selectors";
import useAsyncEffect from "use-async-effect";
import {AppDispatch} from "../../../redux/store";

const  ButtonDownload:React.FC = () => {

    const dispatch = useDispatch();
    const currentPage:number = useSelector(getCurrentPage)
    const lastRef = useRef<HTMLElement | null>(null);

    const showMore = () => {
        dispatch(increment());
    };

    useAsyncEffect( () => {
        let timeOut: null | ReturnType<typeof setTimeout> = null
        if (lastRef.current) {
            timeOut = setTimeout(() => {
                lastRef?.current?.scrollIntoView({ behavior: "smooth" });
            }, 1500);
        }
        return () => timeOut
    },[lastRef])


    return (

        <Slide in={true} timeout={2000} direction="up">
           <Box
            style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                zIndex:"12",
                width:"200px"
            }}
        >
            <Button
                // ref={lastRef}
                sx={{ color: "lightgoldenrodyellow" }}
                onClick={showMore}
            >
                download next news
            </Button>
            </Box>
            </Slide>

    );
}

export default ButtonDownload;