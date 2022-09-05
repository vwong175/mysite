import * as Colors from '../colors';

// Default fonts
export const defaultFontFamily = 'DM Sans';

const fontMapping = {
    'Clear Sans Bold': {
        weights: {
            Light: '300',
            Normal: '400',
            LightBold: '500',
            SemiBold: '600',
            Bold: '700',
            ExtraBold: '800',
        },
        styles: {
            Italic: 'italic',
        },
    },
    'DM Sans': {
    weights: {
        Light: '300',
        Normal: '400',
        LightBold: '500',
        SemiBold: '600',
        Bold: '700',
        ExtraBold: '800',
    },
    styles: {
        Italic: 'italic',
    },
  },
};

export const fontDeclaration = (params = {}) => {
  const options = {
    weight: null,
    style: null,
    family: defaultFontFamily,
    ...params,
  };
  let { weight, style } = options;
  const { family } = options;

  const { weights, styles } = fontMapping[family];

  weight = weights[weight] || weights.Normal;
  style = styles[style] || 'normal';

  return {
    fontFamily: family,
    fontWeight: weight,
    fontStyle: style,
  };
};

/* Can be used in conjunction with the named font styles below
 * ex: style={ [Fonts.Heading1, {...fontColor(Colors.red500)}] }
 * */
export const fontColor = color => {
  return { color };
};
export const HeaderDisplay1 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 32.44,
  //lineHeight: 42,
  letterSpacing: -0.005,
};

export const HeaderDisplay2 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 28.83,
  //lineHeight: 37,
  letterSpacing: -0.005,
};

export const HeaderDisplay3 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 25.63,
  //lineHeight: 33,
  letterSpacing: -0.005,
};

export const Header1 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 44,
  //lineHeight: 30,
  letterSpacing: -0.025,
};

export const Header2 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 20.25,
  //lineHeight: 26,
  letterSpacing: -0.025,
};

export const Header2SemiBold = {
  ...Header2,
  ...fontDeclaration({ weight: 'SemiBold' }),
};

export const Header3 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 18,
  //lineHeight: 23,
  letterSpacing: -0.025,
};

export const Header3Normal = {
  ...Header3,
  ...fontDeclaration({ weight: 'Normal' }),
};

export const Header3Bold = {
  ...Header3,
  ...fontDeclaration({ weight: 'Bold' }),
};

export const Header4 = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 12,
  //lineHeight: 18,
  letterSpacing: 0.75,
};

export const Header4SemiBold = {
  ...Header4,
  ...fontDeclaration({ weight: 'SemiBold' }),
};

export const CaptionText = {
  ...Header4,
  textTransform: 'uppercase',
};

export const ButtonLabel = {
  ...fontDeclaration({ weight: 'Normal' }),
  fontSize: 16,
  //lineHeight: 21,
  letterSpacing: -0.025,
};

export const LargeButtonLabel = {
  ...fontDeclaration({ weight: 'Normal' }),
  fontSize: 18,
  //lineHeight: 20,
};

export const BadgeLabel = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 14.22,
  //lineHeight: 18,
  letterSpacing: 0.75,
  textTransform: 'uppercase',
};

export const AvatarXLargeText = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 64,
  fontWeight: '300',
  //lineHeight: 80,
  ...fontDeclaration({ weight: 'Light' }),
};

export const AvatarLargeText = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 40,
  fontWeight: '300',
  //lineHeight: 50,
  ...fontDeclaration({ weight: 'Light' }),
};

export const AvatarMediumText = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 40,
  fontWeight: '300',
  //lineHeight: 52,
};

export const AvatarSmallText = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 28,
  fontWeight: '300',
  //lineHeight: 35,
  ...fontDeclaration({ weight: 'Light' }),
};

export const AvatarXSmallText = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 22,
  fontWeight: '300',
  //lineHeight: 28,
  ...fontDeclaration({ weight: 'Light' }),
};

export const LargeText = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 16,
  //lineHeight: 21,
  //color: Colors.Gray700,
};

export const LargeTextLight = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 16,
  //lineHeight: 21,
  //color: Colors.Gray500,
};

export const LargeTextBlue = {
  ...fontDeclaration({ weight: 'Normal' }),
  fontSize: 16,
  //lineHeight: 21,
  //color: Colors.Blue600,
  fontWeight: '500',
};

export const MediumText = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 14.22,
  //lineHeight: 19,
};

export const SmallText = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 12.64,
  //lineHeight: 16,
};

export const TinyText = {
  ...fontDeclaration({ weight: 'Light' }),
  fontSize: 11.24,
  //lineHeight: 15,
};

export const LargeTextSemiBold = {
  ...LargeText,
  ...fontDeclaration({ weight: 'SemiBold' }),
  //color: Colors.Gray700,
  //lineHeight: 24,
};

export const MediumTextSemiBold = {
  ...MediumText,
  ...fontDeclaration({ weight: 'SemiBold' }),
  //color: Colors.Gray700,
  //lineHeight: 21,
};

export const LargeTextBold = {
  ...LargeText,
  ...fontDeclaration({ weight: 'Normal' }),
};

export const MediumTextBold = {
  ...MediumText,
  ...fontDeclaration({ weight: 'Normal' }),
};

export const SmallTextBold = {
  ...SmallText,
  ...fontDeclaration({ weight: 'Normal' }),
};

export const TinyTextBold = {
  ...TinyText,
  ...fontDeclaration({ weight: 'Normal' }),
};

export default {
  defaultFontFamily,
  fontDeclaration,
  CaptionText,
  fontColor,
};
