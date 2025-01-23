
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Range } from '@/components/ui/range';
import { Dropdown } from '@/components/ui/dropdown';
import { Text } from '@/components/ui/text';
import { Spacer } from '@/components/ui/spacer';

const fontStyles = [
  { value: 'geometric', label: 'Geometric' },
  { value: 'tech', label: 'Tech' },
  { value: 'modern', label: 'Modern' },
  { value: 'display', label: 'Display' },
];

const App = () => {
  const [topText, setTopText] = useState('Good');
  const [bottomText, setBottomText] = useState('Idea');
  const [fontStyle, setFontStyle] = useState(fontStyles[0]);
  const [sideMargin, setSideMargin] = useState(50);
  const [verticalSpacing, setVerticalSpacing] = useState(50);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Text Poster Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text as="h3" className="mb-2">Top Text</Text>
            <input
              type="text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <Text as="h3" className="mb-2">Bottom Text</Text>
            <input
              type="text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>

        <Spacer size={4} />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text as="h3" className="mb-2">Font Style</Text>
            <Dropdown
              options={fontStyles}
              value={fontStyle}
              onChange={setFontStyle}
              className="w-full"
            />
          </div>
          <div>
            <Text as="h3" className="mb-2">Side Margin</Text>
            <Range
              min={0}
              max={200}
              value={sideMargin}
              onChange={setSideMargin}
              className="w-full"
            />
          </div>
        </div>

        <Spacer size={4} />

        <div>
          <Text as="h3" className="mb-2">Vertical Spacing</Text>
          <Range
            min={0}
            max={200}
            value={verticalSpacing}
            onChange={setVerticalSpacing}
            className="w-full"
          />
        </div>

        <Spacer size={4} />

        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate Poster
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default App;
