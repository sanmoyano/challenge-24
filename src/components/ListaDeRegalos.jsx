import { Button, FormControl, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

const ListaDeRegalos = () => {
    const [listaDeRegalos, setListaDeRegalos] = useState([]);
    const [inputRegalo, setInputRegalo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setListaDeRegalos([...listaDeRegalos, inputRegalo]);
        setInputRegalo("");
    };

    return (
        <>
            <Stack
                alignItems={"center"}
                backdropFilter={"blur(10px)"}
                bgColor={"gray.900"}
                borderRadius={"lg"}
                borderWidth={"1px"}
                justifyContent={"center"}
                minWidth={"600px"}
                opacity={0.9}
                p={6}
            >
                <Stack alignItems="center" spacing={6}>
                    <Stack alignItems={"center"} direction={"row"} spacing={6}>
                        <FormControl as={"form"} type="submit" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={inputRegalo}
                                onChange={(e) => setInputRegalo(e.target.value)}
                            />
                        </FormControl>
                        <Button onClick={handleSubmit}>Agregar</Button>
                    </Stack>
                </Stack>
            </Stack>

            <Stack bgColor={"gray.900"} p={6}>
                <UnorderedList>
                    <Stack alignItems="center" spacing={6} width="100%">
                        {listaDeRegalos.map((regalo, index) => (
                            <ListItem key={index}>
                                <Stack direction={"row"} justifyContent="space-around">
                                    <Text>{regalo}</Text>
                                    <Button>X</Button>
                                </Stack>
                            </ListItem>
                        ))}
                    </Stack>
                </UnorderedList>
            </Stack>
        </>
    );
};

export default ListaDeRegalos;
