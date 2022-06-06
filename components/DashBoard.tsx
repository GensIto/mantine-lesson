import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { Settings } from 'tabler-icons-react'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/group"
          >
            Groups
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/multi-select"
          >
            Multi Slect
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/fetch-api"
          >
            Fetch loader
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/dialog"
          >
            Dialog
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/modal"
          >
            Moadl
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/avatar"
          >
            Avatar
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/card"
          >
            PostList
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/performance"
          >
            Performance
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/table"
          >
            Table
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/crypto"
          >
            Crypto
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/notification"
          >
            Notification
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/hooks"
          >
            Hooks
          </Menu.Item>
        </Menu>
      </Center>
      <Center>
        <ActionIcon my="mb" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
