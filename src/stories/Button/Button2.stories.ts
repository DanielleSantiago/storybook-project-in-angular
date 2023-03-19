import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { Button2Component } from 'src/app/shared/components/button2/button2.component';
import ButtonStories from './Button.stories';


export default {
  title: 'Components/Button2',
  component: Button2Component,
  decorators: [
    moduleMetadata({
      declarations: [ ButtonComponent ],
      imports: [CommonModule]
    })
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.args },
  ],
  orientation: 'horizontal',
};
