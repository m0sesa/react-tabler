import Navbar from '@components/nav/Navbar';
import Sidebar from '@components/nav/Sidebar';

import { ReactComponent as HomeIcon } from '@node_modules/@tabler/icons/icons/home.svg'
import { ReactComponent as PackageIcon } from '@node_modules/@tabler/icons/icons/package.svg'
import { ReactComponent as CheckBoxIcon } from '@node_modules/@tabler/icons/icons/checkbox.svg'
import { ReactComponent as LifebuoyIcon } from '@node_modules/@tabler/icons/icons/lifebuoy.svg'
import { ReactComponent as HeartIcon } from '@node_modules/@tabler/icons/icons/heart.svg'

export type Notification = {
    title: string;
    message: string;
    isDotAnimated: boolean;
    dotBg: string
  }

// Links with sublinks will only have a title
export type Link = {
    path: string;
    title: string;
    icon?: JSX.Element;
    isActive?: boolean;
    isNew?: boolean;
    subLinks?: Array<Link>
    bg?: string
  }

export default function Nav() {
    const notifications: Array<Notification> = [
        {
          title: "Example 1",
          message: "Change deprecated html tags to text decoration classes (#29604)",
          isDotAnimated: true,
          dotBg: 'red'
        },
        {
          title: "Example 2",
          message: "justify-content:between ⇒ justify-content:space-between (#29734)",
          isDotAnimated: false,
          dotBg: ''
        },
        {
          title: "Example 4",
          message: "Update change-version.js (#29736)",
          isDotAnimated: false,
          dotBg: ''
        },
        {
          title: "Example 4",
          message: "Regenerate package-lock.json (#29730)",
          isDotAnimated: false,
          dotBg: 'success'
        }
      ]
      const hasNewNotification = true
      const user_name = "Paweł Kuna"
      const user_title = "UI Designer"
      const mainActionLinks: Array<Link> = [
        {
          path: '/status',
          title: 'Status'
        },
        {
          path: '/profile',
          title: 'Profile'
        },
        {
          path: '/feedback',
          title: 'Feedback'
        }
      ]
      const secActionLinks: Array<Link> = [
        {
          path: '/settings',
          title: '.Settings'
        },
        {
          path: '/sign-in',
          title: 'Logout'
        }
      ]
      const navigationLinks: Array<Link> = [
        {
          path: '/',
          title: 'Home',
          isActive: true,
          icon: <HomeIcon />
        },
        {
          path: '',
          title: 'Interface',
          isActive: false,
          icon: <PackageIcon />,
          subLinks: [
            {
              path: '/alerts',
              title: 'Alerts',
              isNew: true
            },
            {
              path: '/accordion',
              title: 'Accordion'
            },
            {
              path: '/buttons',
              title: 'Buttons'
            },
            {
              path: '/carousel',
              title: 'Carousel'
            },
            {
              path: '.charts',
              title: 'Charts'
            }
          ]
        },
        {
          path: '/form-elements',
          title: 'Forms',
          isActive: false,
          icon: <CheckBoxIcon />
        },
        {
          path: '',
          title: 'Help',
          isActive: false,
          icon: <LifebuoyIcon />,
          subLinks: [
            {
              path: 'https://tabler.io/docs',
              title: 'Documentations'
            },
            {
              path: '/changelog',
              title: 'Changelog'
            },
            {
              path: '/buttons',
              title: 'SourceCode'
            },
            {
              path: 'https://github.com/sponsors/codecalm',
              title: 'Sponsor project!',
              icon: <HeartIcon />,
              bg: 'red'
            }
          ]
        }
      ]
      return (<>
        <Sidebar
            notifications={notifications}
            hasNewNotification={hasNewNotification}
            user_name={user_name}
            user_title={user_title}
            mainActionLinks={mainActionLinks}
            secActionLinks={secActionLinks}
            navigationLinks={navigationLinks} />
        <Navbar
            notifications={notifications}
            hasNewNotification={hasNewNotification}
            user_name={user_name}
            user_title={user_title}
            mainActionLinks={mainActionLinks}
            secActionLinks={secActionLinks} />
    </>)
}