import React from 'react';

interface MistralIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const MistralIcon: React.FC<MistralIconProps> = ({
  className,
  width = '1em',
  height = '1em',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0, lineHeight: 1 }}
    >
      <title>Mistral</title>
      <path
        d="M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z"
        fill="gold"
      />
      <path
        d="M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z"
        fill="#FFAF00"
      />
      <path d="M3.428 10.258h17.144v3.428H3.428v-3.428z" fill="#FF8205" />
      <path
        d="M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z"
        fill="#FA500F"
      />
      <path
        d="M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z"
        fill="#E10500"
      />
    </svg>
  );
};

export default MistralIcon;
