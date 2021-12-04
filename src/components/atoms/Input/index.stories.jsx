import React from 'react';
import { actions } from '@storybook/addon-actions';
import Input from '.';

export default { title: 'atoms/Input' };

const props = {
  placeholder: '入力してください',
  ...actions('onChange'),
};

export const input = () => <Input {...props} />;

export const defaultValue = () => <Input {...props} defaultValue="上条百合奈" />;
defaultValue.story = {
  name: 'デフォルト値',
};

