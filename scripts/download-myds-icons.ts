import Bun from 'bun'
import prettier from 'prettier'

const SOURCE_URL = 'https://raw.githubusercontent.com/govtechmy/myds/refs/heads/main/apps/docs/icons/'
const TIMEOUT = 1000

const icons = [
  'arrow-back',
  'arrow-forward',
  'arrow-outgoing',
  'bolt',
  'check-circle',
  'checkmark-14-point-star',
  'checkmark-shield',
  'checkmark',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'cross-x',
  'direction',
  'ellipsis',
  'encrypted-lock',
  'envelope',
  'eslint',
  'eye-show',
  'figma',
  'file-document-paper',
  'flag-my',
  'flag',
  'github',
  'globe',
  'gov',
  'govmy',
  'hamburger-menu',
  'ibm-equal-access',
  'icons-hero-desktop-dark',
  'icons-hero-desktop-light',
  'icons-hero-mobile-dark',
  'icons-hero-mobile-light',
  'laravel',
  'lock',
  'mail-white',
  'map',
  'money',
  'new-tab',
  'nextjs',
  'phone',
  'production',
  'search',
  'social-media',
  'solid-lock',
  'star',
  'storybook',
  'trophy',
  'user-group',
  'vite',
]

function extractSvg(rawTsx: string) {
  // Match the SVG element and capture its content
  const [svgString] = rawTsx.match(/<svg[^>]*>([\s\S]*?)<\/svg>/) || []

  if (!svgString)
    return ''

  let cleanSVG = svgString

  // Remove any TSX-specific props {...props}
  cleanSVG = cleanSVG.replace(/\{\.\.\.props\}/g, '')

  // Remove className={clx(...)} to class="..."
  cleanSVG = cleanSVG.replace(/className=\{clx\(([^}]+)\)\}/g, '')

  // Convert JSX style objects to string
  cleanSVG = cleanSVG.replace(/style=\{\{([^}]+)\}\}/g, (match, inner) => {
    // Convert the inner content of the style object to a string
    const styleString = inner
      .split(',')
      .map((styleProp) => {
        // Convert camelCase to kebab-case
        const [prop, value] = styleProp
          .split(':')
          .map(str => str.trim().replace(/^"(.+)"$/, '$1'))

        const formattedProp = prop.trim().replace(/([A-Z])/g, '-$1').toLowerCase()

        return `${formattedProp}:${value.trim()}`
      })
      .join(';')

    return `style="${styleString}"`
  })

  return cleanSVG
}

async function formatSvg(text) {
  return await prettier.format(text, { parser: 'html' })
}

async function fetchIcons() {
  for (const icon of icons) {
    const file = Bun.file(`./src/assets/icons/myds/${icon}.svg`)

    if (await file.exists()) {
      console.info(`${icon}.svg already exists. Skipping.`)

      continue
    }

    try {
      console.info(`Fetching ${SOURCE_URL}${icon}.tsx`)
      const response = await fetch(`${SOURCE_URL}${icon}.tsx`)
      const body = await response.text()

      console.info(`Extracting SVG from ${icon}.tsx`)
      const svgContent = await formatSvg(extractSvg(body))

      console.info(`Writing ${icon}.svg`)
      await Bun.write(`./src/assets/icons/myds/${icon}.svg`, svgContent)
      await new Promise(r => setTimeout(r, TIMEOUT))
    }
    catch (error) {
      console.error(`Failed to fetch ${icon}.tsx: \n\n ${error}`)

      return 1
    }
  }
}

fetchIcons()
