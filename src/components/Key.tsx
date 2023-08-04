import {
    Center,
    Flex,
    Grid,
    GridItem,
    GridItemProps,
    Spacer,
    Square,
    Stack,
    StackDivider,
    Text,
    VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

type KeyData = {
    key: string
    primary: string
    secondary: string
    properties: {
        keyWidth: string
        keyHeight: string
    }
}

type SpacingData = {
    key: string
    rMargin: string
}

type KeyProps = {
    data: Object
    spacing?: Object
} & GridItemProps

const Key = ({ data, spacing, ...gridItemProps }: KeyProps) => {
    const [keyData] = useState<KeyData>(data as KeyData)
    const [spacingData] = useState<SpacingData>(spacing as SpacingData)

    const { rowSpan, colSpan } = { ...gridItemProps }

    const keyCapSize: { [key: string]: string } = {
        '1u': '100px',
        '1.25u': '125px',
        '1.5u': '150px',
        '1.75u': '175px',
        '2u': '200px',
        '2.25u': '225px',
        '2.75u': '275px',
        '6u': '600px',
        '6.25u': '625px',
        '7u': '700px',
    }

    const keyHeightSize: { [key: string]: string } = {
        '1u': '100px',
        '2u': '200px',
    }

    let rMargin
    if (spacingData) {
        rMargin = spacingData.key === keyData.key ? spacingData.rMargin : '0px'
    }

    const [backgroundColor, setBackgroundColor] = useState<string>('black.200')

    const handleKeyPress = (event: KeyboardEvent) => {
        const keyPressed = event.code
        if (keyPressed === keyData.key) setBackgroundColor('gray.400')
        setTimeout(() => setBackgroundColor('black.200'), 100)
        event.preventDefault()
        // event.stopImmediatePropagation()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [])

    return (
        <GridItem
            key={keyData.key}
            rounded="md"
            border="1px"
            borderColor="gray.200"
            background={backgroundColor}
            p="4"
            marginRight={rMargin}
            width={keyCapSize[keyData.properties.keyWidth]}
            height={keyHeightSize[keyData.properties.keyHeight]}
            textAlign="center"
            cursor="pointer"
            rowSpan={rowSpan}
            colSpan={colSpan}
            _hover={{
                bg: 'gray.100',
            }}
        >
            <Text fontSize="xl" fontWeight="bold">
                {keyData.primary}
            </Text>
            <Text fontSize="sm" align={'center'}>
                {keyData.secondary}
            </Text>
        </GridItem>
    )
}

export default Key
