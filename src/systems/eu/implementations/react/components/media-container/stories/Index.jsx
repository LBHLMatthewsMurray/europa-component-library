import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContentImage from '@ecl/eu-specs-media-container/demo/data--image';
import demoContentVideo from '@ecl/eu-specs-media-container/demo/data--video';

import MediaContainer from '../src/MediaContainer';

storiesOf('Components/MediaContainer', module)
  .addDecorator(withKnobs)
  .add('video', () => (
    <MediaContainer
      description={text('Description', demoContentVideo.description)}
      image={text('Image', demoContentVideo.image)}
      sources={demoContentVideo.sources}
      tracks={demoContentVideo.tracks}
      alt={text('Alt', demoContentVideo.alt)}
    />
  ))
  .add('image', () => (
    <MediaContainer
      description={text('Description', demoContentImage.description)}
      image={text('Image', demoContentImage.image)}
      alt={text('Alt', demoContentImage.alt)}
    />
  ));
