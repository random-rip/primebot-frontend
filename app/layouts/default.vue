<script setup lang="ts">
const items = [
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Fully styled and customizable components for Nuxt.',
        icon: 'i-lucide-house'
      },
      {
        label: 'Installation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'i-lucide-cloud-download'
      },
      {
        label: 'Icons',
        icon: 'i-lucide-smile',
        description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      },
      {
        label: 'Colors',
        icon: 'i-lucide-swatch-book',
        description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      },
      {
        label: 'Theme',
        icon: 'i-lucide-cog',
        description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      }
    ]
  },
  {
    label: 'Composables',
    icon: 'i-lucide-database',
    to: '/composables',
    children: [
      {
        label: 'defineShortcuts',
        icon: 'i-lucide-file-text',
        description: 'Define shortcuts for your application.',
        to: '/composables/define-shortcuts'
      },
      {
        label: 'useModal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/composables/use-modal'
      },
      {
        label: 'useSlideover',
        icon: 'i-lucide-file-text',
        description: 'Display a slideover within your application.',
        to: '/composables/use-slideover'
      },
      {
        label: 'useToast',
        icon: 'i-lucide-file-text',
        description: 'Display a toast within your application.',
        to: '/composables/use-toast'
      }
    ]
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/components',
    active: true,
    children: [
      {
        label: 'Link',
        icon: 'i-lucide-file-text',
        description: 'Use NuxtLink with superpowers.',
        to: '/components/link'
      },
      {
        label: 'Modal',
        icon: 'i-lucide-file-text',
        description: 'Display a modal within your application.',
        to: '/components/modal'
      },
      {
        label: 'NavigationMenu',
        icon: 'i-lucide-file-text',
        description: 'Display a list of links.',
        to: '/components/navigation-menu'
      },
      {
        label: 'Pagination',
        icon: 'i-lucide-file-text',
        description: 'Display a list of pages.',
        to: '/components/pagination'
      },
      {
        label: 'Popover',
        icon: 'i-lucide-file-text',
        description: 'Display a non-modal dialog that floats around a trigger element.',
        to: '/components/popover'
      },
      {
        label: 'Progress',
        icon: 'i-lucide-file-text',
        description: 'Show a horizontal bar to indicate task progression.',
        to: '/components/progress'
      }
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
]

const footerItems = [
  {
    label: 'Datenschutz',
    to: 'https://www.figma.com/community/file/1288455405058138934',
  },
  {
    label: 'Impressum',
    to: 'https://stackblitz.com/edit/nuxt-ui',
  },
  {
    label: 'Kontakt',
    to: '/roadmap'
  },
  {
    label: 'Nutzungsbedingungen',
    to: 'https://github.com/nuxt/ui/releases',
  }
]
</script>

<template>
  <div class="h-screen flex flex-col">
    <UHeader title="PrimeBot">
      <div class="flex items-center">
        <UNavigationMenu :items="items" class="w-full justify-center"/>
        <UColorModeSwitch />
      </div>
    </UHeader>
    <slot></slot>
    <UFooter>
      <template #left>
        <p class="text-(--ui-text-muted) text-sm">Copyright © {{ new Date().getFullYear() }}</p>
      </template>

      <UNavigationMenu :items="footerItems" variant="link" />

      <template #right>
        <UButton
            icon="i-simple-icons-discord"
            color="neutral"
            variant="ghost"
            to="https://chat.nuxt.dev"
            target="_blank"
            aria-label="Discord"
        />
        <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            to="https://github.com/random-rip"
            target="_blank"
            aria-label="GitHub"
        />
      </template>
    </UFooter>
  </div>
</template>
