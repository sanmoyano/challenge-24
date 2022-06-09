import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorModeName: "dark",
    },

    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
            },
        },
    },
});
