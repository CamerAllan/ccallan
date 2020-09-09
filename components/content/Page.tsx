import { ReactNode } from "react"
import { Box, Heading, Divider } from "@chakra-ui/core"

interface Props {
    title: string,
    children?: ReactNode
}

const Page = (props: Props) => (
    <Box>
        <Heading fontSize={75}>{props.title}</Heading>
        <Divider />
        {props.children}
    </Box>
)

export default Page