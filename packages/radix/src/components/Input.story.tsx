import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Input } from './Input';
import { EnvelopeIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';

storiesOf('Components|Input', module).add('default', () => (
  <Box maxWidth="300px">
    <Box mb="4">
      <Input placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input placeholder="e.g. joe@example.com" type="email" paddingRight={5} />

      <Box
        position="absolute"
        height="100%"
        top={0}
        right={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          <MagnifyingGlassIcon size="15" />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input size={1} placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input size={1} placeholder="e.g. joe@example.com" type="email" paddingLeft={6} />

      <Box
        position="absolute"
        height="100%"
        top={0}
        left={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          <EnvelopeIcon size="25" />
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input variant="ghost" placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input variant="ghost" size={1} placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input disabled placeholder="Disabled" />
    </Box>
    <Box mb="4">
      <Input readOnly placeholder="Read only" />
    </Box>
  </Box>
));
