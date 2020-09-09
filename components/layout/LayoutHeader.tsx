import Link from "next/link";
import { Box } from "@chakra-ui/core";

interface Props {

}

const LayoutHeader = (props: Props) => (
    <header>
        <Box color="secondary" fontWeight="bold" width="100%" textAlign="right">
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {' '}/{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </Box>
    </header>
)

export default LayoutHeader;