import { ReactNode } from "react";
import { Box, Flex, Heading } from '@chakra-ui/core'
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import Page from "../content/Page";

interface Props {
    title: string,
    children?: ReactNode
}

const SidePanel = () => (
    <Box flex="1 1" />
)

const LayoutContent = (props: Props) => (
    <Box height="100%">
        <Flex flexDirection='row' width="100%" height="100%">
            <SidePanel />
            <Box
                flex="1 0"
                minWidth={["100%", "100%", "75%", "50%"]}
                paddingLeft={5} paddingRight={5} height="100%"
            >
                <Flex flexDirection='column' height="100%">
                    <Box flex={"0 0"} >
                        <LayoutHeader />
                    </Box>
                    <Box flex={"1 0 auto"}>
                        <Page {...props} />
                    </Box>
                    <Box flex={"0 0"} >
                        <LayoutFooter />
                    </Box>
                </Flex>
            </Box>
            <SidePanel />
        </Flex >
    </Box>
)

export default LayoutContent;