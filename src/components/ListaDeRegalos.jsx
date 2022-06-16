import { Button, FormControl, Input, Stack, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import RegalosList from "./RegalosList";
import Contador from "./Contador";

const ListaDeRegalos = () => {
    //CONFIGURACIONES
    const formStack = {
        alignItems: "center",
        backdropFilter: "blur(10px)",
        bgColor: "gray.900",
        borderRadius: "lg",
        borderWidth: "1px",
        justifyContent: "center",
        minWidth: "600px",
        opacity: 0.9,
        p: 6,
    };
    const toast = useToast();

    //ESTADOS


    //OBJETO


    //FUNCIONES


    //SET LOCALSTORAGE -> hay que borrar/comentar el React.StrictMode del main.jsx para que funcione


    return (
        <>
            <Stack {...formStack}>

            </Stack>
            <RegalosList  />
        </>
    );
};

export default ListaDeRegalos;
