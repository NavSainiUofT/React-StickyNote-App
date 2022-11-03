import React from "react";
import { Rnd } from "react-rnd";



export function Sticky(props) {
    const style = {
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#F3E779"
    };
    return (
        <>
            <Rnd
                style={style}
                default={{
                    x: 100,
                    y: 100,
                    z: 1000,
                    width: 320,
                    height: 200,
                    minWidth: 200,
                    minHeight: 200,
                }}>
                {props.props.text}
            </Rnd>
        </>
    )
};