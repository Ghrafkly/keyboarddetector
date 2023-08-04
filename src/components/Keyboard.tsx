import { Center, Grid, GridItem } from '@chakra-ui/react'
import Key from './Key'
import data from '../data/default.json'

const FunctionRow = () => {
    const jsonData = data.layout.functionRow
    const spacing = data.layout.spacing

    const keyOrder: string[] = [
        'escape',
        'f1',
        'f2',
        'f3',
        'f4',
        'f5',
        'f6',
        'f7',
        'f8',
        'f9',
        'f10',
        'f11',
        'f12',
    ]

    return (
        <Grid templateColumns={'repeat(13, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} spacing={spacing[key]} />
            })}
        </Grid>
    )
}

const R1 = () => {
    const jsonData = data.layout.r1

    const keyOrder: string[] = [
        'backquote',
        'digit1',
        'digit2',
        'digit3',
        'digit4',
        'digit5',
        'digit6',
        'digit7',
        'digit8',
        'digit9',
        'digit0',
        'minus',
        'equal',
        'backspace',
    ]

    return (
        <Grid templateColumns={'repeat(14, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} />
            })}
        </Grid>
    )
}

const R2 = () => {
    const jsonData = data.layout.r2

    const keyOrder: string[] = [
        'tab',
        'keyQ',
        'keyW',
        'keyE',
        'keyR',
        'keyT',
        'keyY',
        'keyU',
        'keyI',
        'keyO',
        'keyP',
        'bracketLeft',
        'bracketRight',
        'backslash',
    ]

    return (
        <Grid templateColumns={'repeat(14, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} />
            })}
        </Grid>
    )
}

const R3 = () => {
    const jsonData = data.layout.r3

    const keyOrder: string[] = [
        'capsLock',
        'keyA',
        'keyS',
        'keyD',
        'keyF',
        'keyG',
        'keyH',
        'keyJ',
        'keyK',
        'keyL',
        'semicolon',
        'quote',
        'enter',
    ]

    return (
        <Grid templateColumns={'repeat(14, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} />
            })}
        </Grid>
    )
}

const R4 = () => {
    const jsonData = data.layout.r4

    const keyOrder: string[] = [
        'shiftLeft',
        'keyZ',
        'keyX',
        'keyC',
        'keyV',
        'keyB',
        'keyN',
        'keyM',
        'comma',
        'period',
        'slash',
        'shiftRight',
    ]

    return (
        <Grid templateColumns={'repeat(14, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} />
            })}
        </Grid>
    )
}

const R5 = () => {
    const jsonData = data.layout.r5

    const keyOrder: string[] = [
        'controlLeft',
        'metaLeft',
        'altLeft',
        'space',
        'altRight',
        'contextMenu',
        'controlRight',
        'unknown',
    ]

    return (
        <Grid templateColumns={'repeat(8, auto)'}>
            {keyOrder.map((key) => {
                return <Key data={jsonData[key]} />
            })}
        </Grid>
    )
}

const NavigationKeys = () => {
    const jsonData = data.layout.navigationKeys

    return (
        <Grid
            templateColumns={'repeat(1, auto)'}
            templateRows={'repeat(2, auto)'}
            gridRowGap={4}
        >
            <GridItem>
                <Grid templateColumns={'repeat(3, auto)'}>
                    <Key data={jsonData.prtSc} />
                    <Key data={jsonData.scrollLock} />
                    <Key data={jsonData.pause} />
                </Grid>
            </GridItem>
            <GridItem>
                <GridItem>
                    <Grid templateColumns={'repeat(3, auto)'}>
                        <Key data={jsonData.insert} />
                        <Key data={jsonData.home} />
                        <Key data={jsonData.pageUp} />
                        <Key data={jsonData.delete} />
                        <Key data={jsonData.end} />
                        <Key data={jsonData.pageDown} />
                    </Grid>
                </GridItem>
                <GridItem height={'100px'} />
                <GridItem>
                    <Grid
                        templateAreas={`'up up up' 'left down right'`}
                        templateColumns={'repeat(3, auto)'}
                    >
                        <GridItem gridArea={'up'}>
                            <Center>
                                <Key data={jsonData.arrowUp} />
                            </Center>
                        </GridItem>

                        <GridItem gridArea={'left'}>
                            <Key data={jsonData.arrowLeft} />
                        </GridItem>

                        <GridItem gridArea={'down'}>
                            <Key data={jsonData.arrowDown} />
                        </GridItem>

                        <GridItem gridArea={'right'}>
                            <Key data={jsonData.arrowRight} />
                        </GridItem>
                    </Grid>
                </GridItem>
            </GridItem>
        </Grid>
    )
}

const NumPad = () => {
    const jsonData = data.layout.numpad

    const keyOrder: string[] = [
        'numLock',
        'numpadDivide',
        'numpadMultiply',
        'numpadSubtract',
        'numpad7',
        'numpad8',
        'numpad9',
        'numpadAdd',
        'numpad4',
        'numpad5',
        'numpad6',
        'numpad1',
        'numpad2',
        'numpad3',
        'numpadEnter',
        'numpad0',
        'numpadDecimal',
    ]

    return (
        <Grid
            templateColumns={'repeat(4, auto)'}
            templateRows={'repeat(5, auto)'}
        >
            {keyOrder.map((key) => {
                switch (key) {
                    case 'numpadAdd':
                    case 'numpadEnter':
                        return <Key data={jsonData[key]} rowSpan={2} />
                    case 'numpad0':
                        return <Key data={jsonData[key]} colSpan={2} />
                    default:
                        return <Key data={jsonData[key]} />
                }
            })}
        </Grid>
    )
}

const Alphas = () => {
    return (
        <Grid>
            <R1 />
            <R2 />
            <R3 />
            <R4 />
            <R5 />
        </Grid>
    )
}

const Keyboard = () => {
    return (
        <Center>
            <Grid
                templateRows={'repeat(1, auto)'}
                templateColumns={'repeat(3, auto)'}
                width={'2200px'}
                gridColumnGap={4}
            >
                <GridItem>
                    <Grid gridRowGap={4}>
                        <FunctionRow />
                        <Alphas />
                    </Grid>
                </GridItem>
                <GridItem>
                    <NavigationKeys />
                </GridItem>
                <GridItem alignSelf={'end'}>
                    <NumPad />
                </GridItem>
            </Grid>
        </Center>
    )
}

export { Keyboard }
