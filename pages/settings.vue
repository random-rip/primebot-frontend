<template>
  <main>
    <n-spin :show="pending" v-if="!error">
      <n-space justify="center">
        <n-image :src="settings?.logo_url" style="border-radius: 99999px"></n-image>
      </n-space>
      <n-space justify="space-between" align="center">
        <n-h1>{{ settings?.team_name }} Einstellungen</n-h1>
        <n-text strong>Läuft ab in:
          <client-only>
            <n-countdown :duration="(new Date(settings?.expiring_at).getTime()- new Date().getTime())"></n-countdown>
          </client-only>
        </n-text>
      </n-space>
      <n-form label-placement="top" label-width="auto">
        <n-form-item label="Wöchentliche Benachrichtigung">
          <n-switch v-model:value="weeklyNotification"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei Lineup Änderungen">
          <n-switch v-model:value="lineupNotification"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei Terminvorschlägen von euch">
          <n-switch v-model:value="teamSchedulingSuggestion"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei Terminvorschlägen vom Gegner">
          <n-switch v-model:value="enemySchedulingSuggestion"></n-switch>
        </n-form-item>
        <n-form-item label="Umfrage in Discord bei Terminvorschlägen vom Gegner">
          <n-switch v-model:value="enemySchedulingSuggestionPoll"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei Terminbestätigungen">
          <n-switch v-model:value="schedulingConfirmation"></n-switch>
        </n-form-item>
        <n-form-item label="Discordevent bei Terminbestätigungen (beta)">
          <n-switch v-model:value="createDiscordEventOnSchedulingConfirmation"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei neuen Matches">
          <n-switch v-model:value="newMatches"></n-switch>
        </n-form-item>
        <n-form-item label="Benachrichtigung bei neuen Kommentaren (außer Teammitgliedern)">
          <n-switch v-model:value="newComments"></n-switch>
        </n-form-item>
        <n-form-item label="Scoutingseite">
          <n-select v-model:value="scouting" :options="scoutingOptions"></n-select>
        </n-form-item>
        <n-form-item label="Sprache">
          <n-select v-model:value="language" :options="languageOptions"></n-select>
        </n-form-item>
        <client-only>
          <n-button @click="submitSettings">Speichern</n-button>
        </client-only>
      </n-form>
    </n-spin>
    <section v-else>
      Link ungültig ({{JSON.stringify(error)}})
    </section>
  </main>
</template>

<script setup>
import {
  NH1,
  NCountdown,
  NSpace,
  NText,
  NImage,
  NForm,
  NFormItem,
  NSwitch,
  NSelect,
  NButton,
  useMessage,
  NSpin
} from 'naive-ui'
import {useRoute} from "#app";
import {computed, ref, useMeta} from "#imports";
import {useFetch} from "#app";

const route = useRoute()

const error = ref()

const {
  pending,
  data: settings,
} = useFetch(() => `/api/v1/settings/?enc=${route.query.enc}&hash=${route.query.hash}&platform=${route.query.platform}`, {
  server: false, onResponseError: ({response}) => {
    error.value = response._data
  }
})

const scouting = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "SCOUTING_WEBSITE"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "SCOUTING_WEBSITE"
    }).value = value
  }
})

const scoutingOptions = [
  {
    label: 'op.gg',
    value: 'op.gg'
  },
  {
    label: 'u.gg',
    value: 'u.gg'
  },
  {
    label: 'xdx.gg',
    value: 'xdx.gg'
  }
]

const language = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "LANGUAGE"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "LANGUAGE"
    }).value = value
  }
})

const languageOptions = [
  {
    label: 'deutsch',
    value: 'de'
  },
  {
    label: 'englisch',
    value: 'en'
  },
]

const message = useMessage()

const submitting = ref(false)

const submitSettings = async () => {
  if (!submitting.value) {
    const {data, pending, error} = await useFetch('/api/v1/settings/', {
      method: 'POST', body: {
        ...settings.value,
        enc: route.query.enc,
        hash: route.query.hash,

      }
    })
    submitting.value = pending
    if (!error.value) {
      message.info('Einstellungen wurden gespeichert')
      settings.value = {...settings.value, ...data}
    }
  }
}

const weeklyNotification = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "WEEKLY_MATCH_DAY"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "WEEKLY_MATCH_DAY"
    }).value = value
  }
})

const lineupNotification = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "LINEUP_NOTIFICATION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "LINEUP_NOTIFICATION"
    }).value = value
  }
})
const enemySchedulingSuggestion = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "ENEMY_SCHEDULING_SUGGESTION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "ENEMY_SCHEDULING_SUGGESTION"
    }).value = value
  }
})
const enemySchedulingSuggestionPoll = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "ENEMY_SCHEDULING_SUGGESTION_POLL"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "ENEMY_SCHEDULING_SUGGESTION_POLL"
    }).value = value
  }
})
const teamSchedulingSuggestion = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "TEAM_SCHEDULING_SUGGESTION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "TEAM_SCHEDULING_SUGGESTION"
    }).value = value
  }
})

const schedulingConfirmation = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "SCHEDULING_CONFIRMATION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "SCHEDULING_CONFIRMATION"
    }).value = value
  }
})

const createDiscordEventOnSchedulingConfirmation = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "CREATE_DISCORD_EVENT_ON_SCHEDULING_CONFIRMATION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "CREATE_DISCORD_EVENT_ON_SCHEDULING_CONFIRMATION"
    }).value = value
  }
})

const newMatches = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "NEW_MATCHES_NOTIFICATION"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "NEW_MATCHES_NOTIFICATION"
    }).value = value
  }
})

const newComments = computed({
  get() {
    return settings.value?.settings.find((s) => {
      return s.key === "NEW_COMMENTS_OF_UNKNOWN_USERS"
    }).value
  },
  set(value) {
    settings.value.settings.find((s) => {
      return s.key === "NEW_COMMENTS_OF_UNKNOWN_USERS"
    }).value = value
  }
})


useMeta({title: 'Einstellungen'})
</script>