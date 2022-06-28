<template>
  <n-layout class="h-screen">
    <n-layout-header bordered style="height: 64px; padding-left: 24px; padding-right: 24px">
      <div class="flex flex-row justify-between w-full h-full">
        <span class="my-auto">PrimeBot</span>
        <n-menu mode="horizontal" :options="menuOptions" class="my-auto"/>
      </div>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" :native-scrollbar="false">
      <n-layout-content content-style="padding: 24px">
        <NuxtPage/>
      </n-layout-content>
    </n-layout>
    <n-layout-footer
        position="absolute"
        style="height: 64px; padding: 24px"
        bordered
    >
      Footer Footer Footer
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import {NIcon} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

function renderIcon(icon: any) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Get Started',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>