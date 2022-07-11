import { Stack } from "@chakra-ui/react";

import Inicio from "../components/Inicio";

const Layout = () => {
    return (
        <Stack
            alignItems="center"
            bgImage={"url('https://source.unsplash.com/EZrVFJUysLk')"}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            height="inherit"
            justifyContent={"center"}
            p={12}
        >
            <Inicio />
        </Stack>
    );
};

export default Layout;
