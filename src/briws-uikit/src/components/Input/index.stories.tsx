import React from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import {Meta} from '@storybook/react/types-6-0'
import Heading from '../Heading/Heading'
import Input from './Input'
import {scales, Scales } from './types'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {},
} as Meta

export const Default: React.FC = () => {
    // @ts-ignore
    return (
        <div>
            {Object.keys(scales).map((key) => (
                <>
                    <Heading mb="16px">{key}</Heading>
                    <Row>
                        {/*@ts-ignore*/}
                        <Input type="text" scale={scales as any[key]} value="Value"/>
                        {/*@ts-ignore*/}
                        <Input type="text" scale={scales as any[key]} placeholder="Placeholder..."/>
                        {/*@ts-ignore*/}
                        <Input type="text" scale={scales as any[key]} value="Disabled" disabled/>
                        {/*@ts-ignore*/}
                        <Input type="text" scale={scales as any[key]} value="Success" isSuccess/>
                        {/*@ts-ignore*/}
                        <Input type="text" scale={scales as any[key]} value="Warning" isWarning/>
                    </Row>
                </>
            ))}
        </div>
    )
}